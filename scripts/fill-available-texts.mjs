#!/usr/bin/env node
/**
 * Fill catalogue pages with the best on-disk reading text we can assemble.
 * Safe to re-run after nature OCR / culture cleans.
 *
 * Usage: node scripts/fill-available-texts.mjs
 */
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { spawnSync } from "node:child_process";

const ROOT = process.cwd();
const BOOKS = path.join(ROOT, "content/books");
const OCR = path.join(ROOT, "workbench/research/ia-text/ocr-fix");
const culture = fs.readFileSync(path.join(BOOKS, "tamil-culture.md"), "utf8");

function writeBook(name, title, note, body) {
  const md = `# ${title}\n\n> ${note}\n\n## Book text\n\n${body.trim()}\n`;
  fs.writeFileSync(path.join(BOOKS, `${name}.md`), md, "utf8");
  console.log(`wrote ${name}.md (${md.length} chars)`);
}

function patch(slug, bookMd, status) {
  for (const lang of ["en", "ta"]) {
    const p = path.join(ROOT, "content/documents", lang, `${slug}.md`);
    if (!fs.existsSync(p)) continue;
    const { data, content } = matter(fs.readFileSync(p, "utf8"));
    data.bookMd = bookMd;
    data.status = status;
    fs.writeFileSync(p, matter.stringify(content.replace(/^\n+/, ""), data));
  }
  console.log(`patch ${slug} → ${bookMd} (${status})`);
}

function leaf(n) {
  const p = path.join(OCR, `cp-leaf${n}.txt`);
  return fs.existsSync(p) ? fs.readFileSync(p, "utf8").trim() : "";
}

function slice(startNeedle, endNeedle, max = 60_000) {
  const start = culture.indexOf(startNeedle);
  if (start < 0) return "";
  let end = culture.indexOf(endNeedle, start + startNeedle.length);
  if (end < 0 || end - start > max) end = start + max;
  return culture.slice(start, end).trim();
}

function readBook(name) {
  const p = path.join(BOOKS, `${name}.md`);
  if (!fs.existsSync(p)) return "";
  return fs
    .readFileSync(p, "utf8")
    .replace(/^#[^\n]*\n+/, "")
    .replace(/^>[\s\S]*?\n\n/, "")
    .replace(/^## (Book|Article) text\n+/i, "")
    .trim();
}

// --- 1) tamilar-panpatu ← Culture essay Past/Present/Future ---
const past = slice(
  "Tamil Culture—Its Past,\n\nIts Present and Its Future",
  "\nThe Antiquity of Tamil Culture in Ceylon\n",
  5_000,
);
// better: take full essay until next major byline block
const pastFull = (() => {
  const start = culture.indexOf(
    "Tamil Culture—Its Past,\n\nIts Present and Its Future",
  );
  if (start < 0) return "";
  // essay runs ~pp 341-364; stop at next Thani Nayagam title-ish or 45k
  const markers = [
    "\nAncient Tamil Literature and the Study",
    "\nThis Journal of the Academy",
    "\nXAVIER S. THANI NAYAGAM.\n\n",
  ];
  let end = start + 45_000;
  for (const m of markers) {
    const i = culture.indexOf(m, start + 500);
    if (i > start && i < end) end = i;
  }
  // Prefer stop before next article - look for page pattern after ~20k of content
  const window = culture.slice(start, start + 45_000);
  const nextTitle = window.search(
    /\n[A-Z][A-Za-z ,’'\-]{12,70}\n\nXavier S\. THANI NAYAGAM/i,
  );
  if (nextTitle > 2000) return culture.slice(start, start + nextTitle).trim();
  return culture.slice(start, end).trim();
})();

if (pastFull.length > 1000) {
  writeBook(
    "tamilar-panpatu",
    "தமிழர் பண்பாடு நேற்றும் இன்றும் நாளையும்",
    "Archive reading text: Thani Nayagam’s English address “Tamil Culture—Its Past, Its Present and Its Future with special reference to Ceylon” (Tamil Culture Vol. IV No. 4, pp. 341–364; Colombo, 2 Aug 1955). Closest digitised essay matching the Tamil Wikipedia title theme. Machine OCR errors remain.",
    pastFull,
  );
  patch("tamilar-panpatu", "tamilar-panpatu", "readable");
}

// --- 2) nature-poetry ← full 1953 nature OCR (edition lineage) ---
const nature = readBook("nature-ancient-tamil-poetry");
if (nature.length > 50_000) {
  writeBook(
    "nature-poetry-in-tamil",
    "Nature Poetry in Tamil",
    "The 1963 Singapore edition *Nature Poetry in Tamil—the Classical Period* is not separately digitised. On-site text below is the full eng re-OCR of the 1953 *Nature in Ancient Tamil Poetry* monograph (same research line; later revised as Landscape and Poetry, 1966). Prefer the scan when OCR disagrees.",
    [
      "### Edition note",
      "",
      "1953 → 1963 (*Nature Poetry in Tamil*) → 1966 (*Landscape and Poetry*). Full 1953 text follows.",
      "",
      "### Nature in Ancient Tamil Poetry (1953) — full eng OCR",
      "",
      nature,
    ].join("\n"),
  );
  patch("nature-poetry-in-tamil", "nature-poetry-in-tamil", "readable");
}

// --- 3) landscape: keep leaf OCR + append nature as related earlier edition ---
const landscapeLeaves = fs
  .readdirSync(OCR)
  .filter((f) => /^landscape-leaf\d+\.txt$/.test(f))
  .sort((a, b) => Number(a.match(/\d+/)[0]) - Number(b.match(/\d+/)[0]))
  .map((f) => {
    const n = f.match(/\d+/)[0];
    const text = fs.readFileSync(path.join(OCR, f), "utf8").trim();
    return text ? `### Scan leaf ${n}\n\n${text}` : "";
  })
  .filter(Boolean);

if (nature.length > 50_000) {
  writeBook(
    "landscape-and-poetry",
    "Landscape and Poetry",
    "Partial eng OCR of the Landscape and Poetry scan (local PDF derivative is corrupt; IA page download blocked here). Full 1953 *Nature in Ancient Tamil Poetry* eng OCR is appended as the earlier edition in the same monograph line (later revised as this 1966 title).",
    [
      "## Partial scan OCR (Landscape and Poetry)",
      "",
      landscapeLeaves.join("\n\n"),
      "",
      "## Earlier edition (full): Nature in Ancient Tamil Poetry (1953)",
      "",
      nature,
    ].join("\n"),
  );
  patch("landscape-and-poetry", "landscape-and-poetry", "partial");
}

// --- 4) Rebuild collected-papers with tighter slices ---
spawnSync("node", [path.join(ROOT, "scripts/rebuild-collected-papers.mjs")], {
  stdio: "inherit",
});

// Improve collected-papers: replace oversize sections by re-running improved builder inline
const articles = [
  ["Front matter (IITS 1995)", [leaf(1), leaf(2), leaf(3), leaf(4), leaf(5)].join("\n\n")],
  [
    "This Journal of the Academy",
    slice("This Journal of the Academy,", "\nTamil Cultural Influences", 20_000),
  ],
  [
    "The Survival of Tamil Culture",
    slice("IHE EDITOE", "\nNotice to Subscribers", 12_000) ||
      slice(
        "disappearance of dominant\ncultures",
        "\nNotice to Subscribers",
        12_000,
      ),
  ],
  [
    "The Ethical Interpretation of Nature in Ancient Tamil Poetry",
    readBook("ethical-interpretation-nature"),
  ],
  [
    "Tamil Culture—Its Past, Its Present and Its Future",
    readBook("tamilar-panpatu"),
  ],
  [
    "Ancient Tamil Literature and the Study of Ancient Indian Education",
    readBook("educational-thoughts-ancient-tamil"),
  ],
  [
    "Language Rights in Ceylon",
    slice(
      "Language Rights in Ceylon\n\nXAVIER S. THANI NAYAGAM",
      "\nTAMIL CULTURE\n\n",
      25_000,
    ) || slice("Language Rights in Ceylon", "\nA Seminal Period", 25_000),
  ],
  [
    "The First Books Printed in Tamil",
    slice(
      "The First Books Printed in Tamil",
      "\nThe Tamil Development",
      35_000,
    ),
  ],
  [
    "The Philosophic Stage of Development in Sangam Literature",
    slice(
      "The Philosophic Stage of Development in\nSangam Literature",
      "\nThe First Books Printed in Tamil",
      30_000,
    ),
  ],
  [
    "Earliest Jain and Buddhist Teaching in the Tamil Country",
    slice(
      "Earliest Jain and Buddhist Teaching in\nthe Tamil Country",
      "\nDr.",
      25_000,
    ) ||
      slice(
        "Earliest Jain and Buddhist",
        "\nDoctor R. P. Sethu",
        25_000,
      ),
  ],
  [
    "Doctor R. P. Sethu Pillai",
    slice(
      "Doctor R. P. Sethu",
      "\nNature and the Natural",
      20_000,
    ),
  ],
  [
    "Regional Nationalism in Twentieth century Tamil Literatures",
    slice(
      "Regional Nationalism\n\nCentury Tamil Literature",
      "\nDoctor R. P. Sethu",
      30_000,
    ) || slice("Regional Nationalism", "\nCONSTITUTIVE ELEMENTS", 8_000),
  ],
  [
    "Tamil Manuscripts in European Libraries",
    slice(
      "Tamil Manuscripts in European",
      "\nTHE FIRST BOOKS PRINTED IN TAMIL",
      25_000,
    ),
  ],
  [
    "Antao De Proenca’s Tamil-Portuguese Dictionary — 1679",
    slice("Antao De Proenca", "\nVOCABVLARIO", 20_000) ||
      slice("Antao De Proenca", "\nCounting from the title page", 15_000),
  ],
  [
    "Indian Thought and Roman Stoicism",
    readBook("indian-thought-roman-stoicism"),
  ],
  [
    "The Tamil Development and Research Council",
    slice(
      "The Tamil Development and Reeearoh\nCouncil",
      "\nThe Vocabulary and Content",
      12_000,
    ) ||
      slice("Tamil Development and", "\nThe Vocabulary and Content", 12_000),
  ],
];

const parts = [];
for (const [title, body] of articles) {
  if (!body || body.length < 200) {
    console.warn("thin", title, body?.length || 0);
    continue;
  }
  // Cap runaway slices
  const clipped = body.length > 120_000 ? body.slice(0, 120_000) + "\n\n_[truncated]_" : body;
  parts.push(`## ${title}\n\n${clipped.trim()}`);
  console.log(`CP + ${title} (${clipped.length})`);
}

const cp = `# Collected Papers of Thani Nayagam Adigalar

> On-site reconstruction of the 1995 IITS *Collected Papers* volume. Front matter from eng-OCR of the TDL scan; essay bodies from Tamil Culture OCR / cleaned article files matching the volume contents list. Not a page-faithful 1995 reprint. Machine OCR errors remain.

## Book text

${parts.join("\n\n")}
`;
fs.writeFileSync(path.join(BOOKS, "collected-papers.md"), cp, "utf8");
patch("collected-papers", "collected-papers", "readable");
console.log(`collected-papers final ${cp.length} chars`);

// --- 5) ulaga → full tiruvalluvar ---
patch("ulaga-ozhakkaviyalil-tirukkural", "tiruvalluvar", "partial");

// --- 6) tamil-culture-and-civilization: point readers at Culture vols + landscape ---
writeBook(
  "tamil-culture-and-civilization",
  "Tamil Culture and Civilization",
  "Archive article for the 1971 Asia Publishing House anthology (readings, classical period). No public full scan of that anthology was found. On-site reading below collects Thani Nayagam’s closest classical-culture essays already digitised in Tamil Culture.",
  [
    "### Publication note",
    "",
    "Open Library: *Tamil culture and civilization: readings: the classical period* (Asia Publishing House, 1971; ix, 233 p.), selected and introduced by X. S. Thani Nayagam.",
    "",
    "### On-site reading",
    "",
    "Full journal OCR: *Tamil Culture*, volumes 1–12 on this archive.",
    "",
    "#### Ethical Interpretation of Nature in Ancient Tamil Poetry",
    "",
    readBook("ethical-interpretation-nature"),
    "",
    "#### Tamil Culture—Its Past, Its Present and Its Future",
    "",
    readBook("tamilar-panpatu"),
    "",
    "#### Indian Thought and Roman Stoicism",
    "",
    readBook("indian-thought-roman-stoicism").slice(0, 80_000),
  ].join("\n"),
);
patch("tamil-culture-and-civilization", "tamil-culture-and-civilization", "partial");

console.log("Done fill-available-texts.");
