#!/usr/bin/env node
/**
 * Repair broken conversion wiring:
 * - Slice Tamil Culture articles into their own markdown books
 * - Replace unreadable Tamil-mis-OCR English books with eng Tesseract front matter
 * - Fix false "readable" status on lending-only / undigitised titles
 *
 * Usage: node scripts/repair-conversion.mjs
 */

import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const ROOT = process.cwd();
const BOOKS = path.join(ROOT, "content", "books");
const DOCS = path.join(ROOT, "content", "documents");
const OCR_DIR = path.join(ROOT, "workbench", "research", "ia-text", "ocr-fix");
const CULTURE = path.join(BOOKS, "tamil-culture.md");

function writeBook(name, title, note, body) {
  const md = [
    `# ${title}`,
    "",
    `> ${note}`,
    "",
    "## Book text",
    "",
    body.trim(),
    "",
  ].join("\n");
  const out = path.join(BOOKS, `${name}.md`);
  fs.writeFileSync(out, md, "utf8");
  console.log(`wrote content/books/${name}.md (${md.length} chars)`);
  return name;
}

function patchDoc(lang, slug, patch) {
  const filePath = path.join(DOCS, lang, `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    console.warn(`missing ${lang}/${slug}.md`);
    return;
  }
  const parsed = matter(fs.readFileSync(filePath, "utf8"));
  Object.assign(parsed.data, patch);
  if (patch.bookMd === null || patch.bookMd === "") {
    delete parsed.data.bookMd;
  }
  let body = parsed.content.trim();
  body = body
    .replace(
      /##\s+(How to read|எப்படி வாசிப்பது|Availability|கிடைக்கும் நிலை|Book text|நூல் உரை)[\s\S]*$/m,
      "",
    )
    .trim();

  if (parsed.data.bookMd) {
    const note =
      lang === "ta"
        ? `## எப்படி வாசிப்பது

முழு/பகுதி நூல் உரை markdown ஆக கீழே இணைக்கப்பட்டுள்ளது (\`content/books/${parsed.data.bookMd}.md\`).`
        : `## How to read

Book text follows on this page from \`content/books/${parsed.data.bookMd}.md\`.`;
    body = `${body}\n\n${note}\n`;
  }

  fs.writeFileSync(filePath, matter.stringify(`${body.trim()}\n`, parsed.data));
  console.log(
    `patched ${lang}/${slug}.md → status=${parsed.data.status} bookMd=${parsed.data.bookMd || "—"}`,
  );
}

function sliceCulture() {
  const raw = fs.readFileSync(CULTURE, "utf8");
  // Strip existing md header for slicing offsets in full file
  const t = raw;

  // Ethical Interpretation article — ends at next essay (Kural / Pakrisankar)
  // (Dedicated short issue pages removed; vols 1–12 is the journal holding.)
  const ethAnchor = t.indexOf("DE. XAVIEE S. THANI NAYAGAM");
  const ethAlt = t.indexOf("icai interpretation");
  const ethStart = ethAnchor > 0 ? ethAnchor - 80 : ethAlt;
  const pak = t.indexOf("PAJEOIISANKAB", ethStart > 0 ? ethStart : 0);
  const ethEnd = pak > 0 ? pak - 40 : ethStart + 18000;
  writeBook(
    "ethical-interpretation-nature",
    "The Ethical Interpretation of Nature in Ancient Tamil Poetry",
    "Excerpted from the Tamil Culture vols. 1–12 Internet Archive OCR (approx. printed pp. 186–196). Machine recognition errors remain.",
    t.slice(Math.max(0, ethStart), ethEnd),
  );

  // Keep full corpus book, but retitle note
  if (fs.existsSync(CULTURE)) {
    const full = fs.readFileSync(CULTURE, "utf8");
    if (!full.includes("Full bound-volume OCR")) {
      const updated = full.replace(
        /> Machine OCR from an Internet Archive public derivative\.[^\n]*/,
        "> Full bound-volume OCR (Tamil Culture vols. 1–12) from an Internet Archive public derivative. Prefer article excerpts on dedicated pages when available.",
      );
      fs.writeFileSync(CULTURE, updated, "utf8");
    }
  }
}

function mergeOcrLeaves(prefix, title, note, bookMd) {
  fs.mkdirSync(OCR_DIR, { recursive: true });
  const parts = [];
  for (let n = 0; n <= 40; n++) {
    const txt = path.join(OCR_DIR, `${prefix}-leaf${n}.txt`);
    if (!fs.existsSync(txt)) continue;
    const body = fs.readFileSync(txt, "utf8").trim();
    const letters = (body.match(/[A-Za-z\u0B80-\u0BFF]/g) || []).length;
    if (letters < 200) continue;
    if (letters / body.length < 0.4) continue;
    parts.push(`### Scan leaf ${n}\n\n${body}`);
  }
  if (!parts.length) {
    console.warn(`no OCR leaves for ${prefix}`);
    return false;
  }
  writeBook(
    bookMd,
    title,
    `${note} Re-OCR’d with Tesseract eng from Internet Archive page images (front matter / sample leaves). Not the complete volume.`,
    parts.join("\n\n"),
  );
  return true;
}

function downloadAndOcr(iaId, prefix, leaves) {
  fs.mkdirSync(OCR_DIR, { recursive: true });
  for (const n of leaves) {
    const jpg = path.join(OCR_DIR, `${prefix}-leaf${n}.jpg`);
    const txt = path.join(OCR_DIR, `${prefix}-leaf${n}.txt`);
    if (!fs.existsSync(jpg) || fs.statSync(jpg).size < 1000) {
      const url = `https://archive.org/download/${iaId}/page/leaf${n}.jpg`;
      console.log(`GET leaf ${n}`);
      const r = spawnSync(
        "curl",
        ["-fL", "--max-time", "90", "-o", jpg, url],
        { encoding: "utf8" },
      );
      if (r.status !== 0) {
        console.warn(`download fail leaf ${n}`);
        continue;
      }
    }
    const o = spawnSync(
      "tesseract",
      [jpg, path.join(OCR_DIR, `${prefix}-leaf${n}`), "-l", "eng", "--psm", "6"],
      { encoding: "utf8" },
    );
    if (o.status !== 0) console.warn(`tesseract fail leaf ${n}: ${o.stderr}`);
    else if (fs.existsSync(txt)) {
      console.log(`OCR leaf ${n}: ${fs.statSync(txt).size} bytes`);
    }
  }
}

// --- run ---
console.log("1) Slice Tamil Culture articles");
sliceCulture();

console.log("\n2) Re-OCR broken English TDL mirrors (front matter)");
downloadAndOcr(
  "tdl.17933-collected-papers-of-thani-nayagam-adigalar",
  "cp",
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
);
downloadAndOcr(
  "tdl.27397-nature-in-ancient-tamil-poetry-concept-and-interpretation",
  "nature",
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
);
downloadAndOcr(
  "tdl.17918-landscape-and-poetry-a-study-of-nature-in-classical-tamil-poetry",
  "landscape",
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
);

mergeOcrLeaves(
  "cp",
  "Collected Papers of Thani Nayagam Adigalar",
  "Previous bulk OCR was unreadable (wrong language layer).",
  "collected-papers",
);
mergeOcrLeaves(
  "nature",
  "Nature in Ancient Tamil Poetry",
  "Previous bulk OCR/PDF text layer was unreadable (wrong language).",
  "nature-ancient-tamil-poetry",
);
mergeOcrLeaves(
  "landscape",
  "Landscape and Poetry",
  "Previous bulk OCR was unreadable (wrong language layer).",
  "landscape-and-poetry",
);

console.log("\n3) Retarget document pages");
const wiring = [
  {
    slug: "ethical-interpretation-nature",
    status: "readable",
    bookMd: "ethical-interpretation-nature",
  },
  {
    slug: "tamil-culture-vols-1-12",
    status: "readable",
    bookMd: "tamil-culture",
  },
  {
    slug: "collected-papers",
    status: "readable",
    bookMd: "collected-papers",
  },
  {
    slug: "nature-ancient-tamil-poetry",
    status: "partial",
    bookMd: "nature-ancient-tamil-poetry",
  },
  {
    slug: "landscape-and-poetry",
    status: "partial",
    bookMd: "landscape-and-poetry",
  },
  // Keep good full conversions
  { slug: "conference-1966-proceedings", status: "readable", bookMd: "conference-1966" },
  { slug: "tamilttutu", status: "readable", bookMd: "tamilttutu" },
  { slug: "collected-speeches-1999", status: "readable", bookMd: "collected-speeches" },
  { slug: "tiruvalluvar", status: "readable", bookMd: "tiruvalluvar" },
  // Lending-only: not readable on-site
  {
    slug: "carthaginian-clergy",
    status: "lending",
    bookMd: "",
    iaId: "bwb_W8-ANY-806",
  },
  {
    slug: "reference-guide-tamil-studies-1966",
    status: "lending",
    bookMd: "",
    iaId: "referenceguideto0000xavi",
  },
  {
    slug: "tamil-studies-abroad",
    status: "lending",
    bookMd: "",
    iaId: "tamilstudiesabro0000unse",
  },
];

for (const row of wiring) {
  for (const lang of ["en", "ta"]) {
    const patch = { status: row.status };
    if (row.bookMd) patch.bookMd = row.bookMd;
    else patch.bookMd = "";
    if (row.iaId) patch.iaId = row.iaId;
    patchDoc(lang, row.slug, patch);
  }
}

console.log("\n4) Classical literature Culture-excerpt articles");
spawnSync("node", [path.join(ROOT, "scripts", "slice-classical-articles.mjs")], {
  stdio: "inherit",
});

console.log("\nDone.");
