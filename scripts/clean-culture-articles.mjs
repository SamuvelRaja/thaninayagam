#!/usr/bin/env node
/**
 * Clean Tamil Culture OCR slices into readable markdown articles
 * with restored top-level headings and less page junk.
 *
 * Usage: node scripts/clean-culture-articles.mjs
 */
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const ROOT = process.cwd();
const CULTURE = path.join(ROOT, "content", "books", "tamil-culture.md");
const BOOKS = path.join(ROOT, "content", "books");
const DOCS = path.join(ROOT, "content", "documents");

const culture = fs.readFileSync(CULTURE, "utf8");

const COMMON_FIXES = [
  [/\bcriti\(;s\b/g, "critics"],
  [/\ballugons\b/g, "allusions"],
  [/\bCangam\b/g, "Sangam"],
  [/\bEterature\b/g, "literature"],
  [/\bTamOs\b/g, "Tamils"],
  [/\bhard-workiiig\b/g, "hard-working"],
  [/\bffie\b/g, "the"],
  [/\bSilappaiikdram\b/g, "Silappatikaram"],
  [/\bHoman Empire\b/g, "Roman Empire"],
  [/\bshama¬\s*/g, "shama"],
  [/\bDE\. XAVIEE S\. THANI NAYAGAM[^\n]*/gi, "Xavier S. Thani Nayagam"],
  [/\.L\^VIER S\. THANI NAYAGAM/g, "Xavier S. Thani Nayagam"],
  [/\bXAVIER S\. THANI NAYAGAM\b/g, "Xavier S. Thani Nayagam"],
  [/\bTHAN I NAYAGAM\b/g, "THANI NAYAGAM"],
  [/\s+\^\s*/g, " "],
  [/\s+®\s*/g, " "],
  [/\/\s+/g, " "],
];

function slice(startNeedle, endNeedle, startOffset = 0, endOffset = 0) {
  const start = culture.indexOf(startNeedle);
  if (start < 0) throw new Error(`start not found: ${startNeedle.slice(0, 60)}`);
  const from = start + startOffset;
  const end =
    typeof endNeedle === "number"
      ? endNeedle
      : culture.indexOf(endNeedle, from);
  if (end < 0) throw new Error(`end not found after ${startNeedle.slice(0, 40)}`);
  return culture.slice(from, end + endOffset);
}

function isPageJunk(line, runningHeader) {
  const t = line.trim();
  if (!t) return true;
  if (/^TAMIL\s*C[IUY]LT/i.test(t)) return true;
  if (/^\d+$/.test(t)) return true;
  if (runningHeader && runningHeader.test(t)) return true;
  if (/^\\\s*$/.test(t)) return true;
  if (/^[,.•·…]{1,4}$/.test(t)) return true;
  if (/^[LI]$/.test(t)) return true;
  return false;
}

function looksLikeFootStart(line) {
  const t = line.trim();
  return (
    /^(\*+|†|‡|\^|®|«|\d+\s+[A-Z*]|[A-Z][A-Z][A-Z][A-Z .,'’\-]{0,40},)/.test(
      t,
    ) || /^(See |Cf\.|Vide )/i.test(t)
  );
}

function looksLikeFootContinue(line) {
  const t = line.trim();
  if (!t) return false;
  if (looksLikeFootStart(t)) return true;
  if (
    /\b(London|Oxford|Cambridge|Delhi|Madras|Paris|Yale|Chicago|Bombay|Banaras|Unesco|Pondicherry|Edinburgh)\b/i.test(
      t,
    )
  )
    return true;
  if (/\b(19\d{2}|18\d{2})\b/.test(t) && t.length < 120) return true;
  return false;
}

function looksLikeBody(line) {
  const t = line.trim();
  if (!t) return false;
  if (/^[“"‘']/.test(t) || /^[a-z]/.test(t)) return true;
  if (t.length > 70 && /^[A-Z]/.test(t)) return true;
  if (
    /^(The |It |There |This |In |A |An |When |Because |Though |Of |What |That |These |Some |One |Further|Whole |Buddhist|European|Tamil |Human |Stoicism|Descriptions|Yet,|Another|Their |Cangam|Sangam)/.test(
      t,
    )
  )
    return true;
  return false;
}

function cleanPara(p) {
  let out = p
    .replace(/[ \t]+/g, " ")
    .trim()
    .replace(/\s+([,.;:!?])/g, "$1")
    .replace(/\(\s+/g, "(")
    .replace(/\s+\)/g, ")")
    .replace(/\s{2,}/g, " ");
  for (const [re, to] of COMMON_FIXES) out = out.replace(re, to);
  return out;
}

function cleanEssay(raw, { runningHeader = null, dropTitleLines = [] } = {}) {
  let text = raw.replace(/\r\n/g, "\n").replace(/\u000c/g, "\n");
  text = text.replace(/¬\n/g, "").replace(/([A-Za-z])-\n([a-z])/g, "$1$2");

  const drop = new Set(dropTitleLines.map((s) => s.toLowerCase()));
  const lines = text
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l && !isPageJunk(l, runningHeader))
    .filter((l) => !drop.has(l.toLowerCase()));

  const blocks = [];
  let mode = "body";
  let buf = [];
  let footBuf = [];

  function flush() {
    if (!buf.length) return;
    blocks.push({ type: "p", text: cleanPara(buf.join(" ")) });
    buf = [];
    if (footBuf.length) {
      blocks.push({ type: "foot", text: cleanPara(footBuf.join(" ")) });
      footBuf = [];
    }
  }

  for (const t of lines) {
    if (mode === "foot") {
      if (looksLikeFootContinue(t) && !looksLikeBody(t)) {
        footBuf.push(t);
        continue;
      }
      mode = "body";
    }
    if (looksLikeFootStart(t) && !looksLikeBody(t)) {
      mode = "foot";
      footBuf.push(t.replace(/^\^\s*/, ""));
      continue;
    }
    buf.push(t);
  }
  flush();
  return blocks;
}

function writeBook(name, title, note, sections) {
  const parts = [`# ${title}`, "", `> ${note}`, ""];
  for (const section of sections) {
    parts.push(`## ${section.heading}`, "");
    if (section.byline) {
      parts.push(section.byline, "");
    }
    for (const b of section.blocks) {
      if (b.type === "foot") parts.push(`> ${b.text}`, "");
      else parts.push(b.text, "");
    }
  }
  const md = `${parts.join("\n").replace(/\n{3,}/g, "\n\n").trim()}\n`;
  fs.writeFileSync(path.join(BOOKS, `${name}.md`), md, "utf8");
  console.log(
    `wrote content/books/${name}.md (${md.length} chars; ${sections.length} sections)`,
  );
  return md;
}

function patchDoc(slug, { status, summaryEn, summaryTa, aboutEn, aboutTa }) {
  for (const lang of ["en", "ta"]) {
    const fp = path.join(DOCS, lang, `${slug}.md`);
    if (!fs.existsSync(fp)) continue;
    const parsed = matter(fs.readFileSync(fp, "utf8"));
    parsed.data.status = status;
    parsed.data.bookMd = slug === "ethical-interpretation-nature"
      ? "ethical-interpretation-nature"
      : slug === "aspects-tamil-humanism" || slug === "tamil-humanism"
        ? slug
        : parsed.data.bookMd || slug;
    if (lang === "en" && summaryEn) parsed.data.summary = summaryEn;
    if (lang === "ta" && summaryTa) parsed.data.summary = summaryTa;

    const how =
      lang === "ta"
        ? `## எப்படி வாசிப்பது\n\nதுப்பரவான கட்டுரை உரையும் பிரிவுத் தலைப்புகளும் கீழே உள்ளன.`
        : `## How to read\n\nCleaned article text follows on this page, with restored section headings for navigation.`;
    const about =
      lang === "ta" ? aboutTa : aboutEn;
    const bib =
      lang === "ta"
        ? (parsed.content.match(/##\s+நூலியல் பதிவு[\s\S]*?(?=\n##\s|$)/) || [
            "",
          ])[0].trim()
        : (parsed.content.match(
            /##\s+Bibliographic record[\s\S]*?(?=\n##\s|$)/,
          ) || [""])[0].trim();

    const body = [bib, about, how].filter(Boolean).join("\n\n") + "\n";
    fs.writeFileSync(fp, matter.stringify(body, parsed.data));
    console.log(`patched ${lang}/${slug}.md → ${status}`);
  }
}

// --- Educational thoughts (3 essays) ---
const edu1Raw = slice(
  "Ancient Tamil Literature\nand the Study of Ancient\nIndian Education\n\nXAVIER S. THANI NAYAGAM",
  "This is a paper read by Rajaji",
);
const edu1End = culture.lastIndexOf(
  "\n\n",
  culture.indexOf("This is a paper read by Rajaji", culture.indexOf(
    "Ancient Tamil Literature\nand the Study of Ancient\nIndian Education\n\nXAVIER S. THANI NAYAGAM",
  )),
);
const edu1 = culture.slice(
  culture.indexOf(
    "Ancient Tamil Literature\nand the Study of Ancient\nIndian Education\n\nXAVIER S. THANI NAYAGAM",
  ),
  edu1End,
);

const edu2Start = culture.indexOf(
  "Early Tamil Society\n\nXAVIER S. THANI NAYAGAM\n\nThe Sangam literature",
) - 40;
const edu2Tbc = culture.indexOf("(To be continued)", edu2Start);
const edu2End = culture.indexOf("All India Oriental", edu2Tbc);
const edu2 = culture.slice(edu2Start, edu2End > 0 ? edu2End : edu2Tbc + 400);

const poetStart = culture.indexOf("Ancient Tamil Poet-Educators");
const poetEnd = culture.indexOf("K. R. RAJAGOPALAN", poetStart) - 40;
const poet = culture.slice(poetStart, poetEnd);

writeBook(
  "educational-thoughts-ancient-tamil",
  "Educational Thoughts in Ancient Tamil Literature",
  "Archive article cluster from *Tamil Culture* (also listed in *Collected Papers* under Educators and Education). Cleaned from Internet Archive OCR: page headers removed, words rejoined, essay headings restored. Residual OCR errors may remain.",
  [
    {
      heading:
        "Ancient Tamil Literature and the Study of Ancient Indian Education",
      byline: "Xavier S. Thani Nayagam · *Tamil Culture*, Vol. 5 No. 1, pp. 1–15",
      blocks: cleanEssay(edu1, {
        runningHeader:
          /ANCIENT TAMIL LITERATI|INDIAN EDUCATION\s*\d*|EDUCATION\s*\d+/i,
        dropTitleLines: [
          "Ancient Tamil Literature",
          "and the Study of Ancient",
          "Indian Education",
          "XAVIER S. THANI NAYAGAM",
          "Xavier S. Thani Nayagam",
        ],
      }),
    },
    {
      heading: "The Educators of Early Tamil Society",
      byline:
        "Xavier S. Thani Nayagam · *Tamil Culture*, Vol. 5 No. 2, pp. 105–119",
      blocks: cleanEssay(edu2, {
        runningHeader:
          /THE EDUCATORS OF EARLY TAMIL SOCIETY\s*\d*|EDUCATORS OF EARLY/i,
        dropTitleLines: [
          "The Educators of Early Tamil Society",
          "Educkors of Early Tamil Society",
          "of Early Tamil Society",
          "Early Tamil Society",
          "XAVIER S. THANI NAYAGAM",
          "Xavier S. Thani Nayagam",
          "(To be continued)",
        ],
      }),
    },
    {
      heading: "Ancient Tamil Poet-Educators",
      byline:
        "Xavier S. Thani Nayagam · *Tamil Culture*, Vol. 6 No. 4, pp. 273–285",
      blocks: cleanEssay(poet, {
        runningHeader: /ANCIENT TAMIL POET-EDUCAT/i,
        dropTitleLines: [
          "Ancient Tamil Poet-Educators",
          ".L^VIER S. THANI NAYAGAM",
          "XAVIER S. THANI NAYAGAM",
          "Xavier S. Thani Nayagam",
        ],
      }),
    },
  ],
);

patchDoc("educational-thoughts-ancient-tamil", {
  status: "readable",
  summaryEn:
    "Three cleaned *Tamil Culture* essays on education in ancient Tamil literature (Collected Papers Educators section).",
  summaryTa:
    "பண்டைத் தமிழ் இலக்கியத்தில் கல்வி பற்றிய மூன்று துப்பரவான *Tamil Culture* கட்டுரைகள்.",
  aboutEn: `## About this article

Wikipedia lists “Educational thoughts in ancient Tamil literature” among his writings. No separate monograph scan was found; this page hosts three related *Tamil Culture* essays.`,
  aboutTa: `## இக்கட்டுரை பற்றி

விக்கிபீடியாப் பட்டியல் தலைப்பு; தனி நூல் படிமம் இல்லை. தொடர்புடைய மூன்று *Tamil Culture* கட்டுரைகள் இங்கு உள்ளன.`,
});

// --- Ethical Interpretation ---
const ethAnchor = culture.indexOf("DE. XAVIEE S. THANI NAYAGAM");
const ethAlt = culture.indexOf("icai interpretation");
const ethStart = ethAnchor > 0 ? ethAnchor - 120 : ethAlt;
const ethPak = culture.indexOf("PAJEOIISANKAB", ethStart);
const eth = culture.slice(ethStart, ethPak > 0 ? ethPak - 40 : ethStart + 18000);

writeBook(
  "ethical-interpretation-nature",
  "The Ethical Interpretation of Nature in Ancient Tamil Poetry",
  "Excerpted and cleaned from the Tamil Culture vols. 1–12 Internet Archive OCR (approx. printed pp. 186–196). Page headers removed; residual OCR errors may remain.",
  [
    {
      heading: "Essay",
      byline:
        "Xavier S. Thani Nayagam · *Tamil Culture*, Vol. I Nos. 3–4 (September 1952)",
      blocks: cleanEssay(eth, {
        runningHeader:
          /ETHICAL|INTERPRETATION OF NATURE|NATURE\s+\d+|E'THJCAL/i,
        dropTitleLines: [
          "icai interpretation",
          "Mature in .>4nctent ^am.li.._Poelru",
          "DE. XAVIEE S. THANI NAYAGAM, m-a^m-litt.",
          "Xavier S. Thani Nayagam",
        ],
      }),
    },
  ],
);

// Rename Essay → better single heading for ethical
{
  const p = path.join(BOOKS, "ethical-interpretation-nature.md");
  let md = fs.readFileSync(p, "utf8");
  md = md.replace("## Essay\n", "## The Ethical Interpretation of Nature\n");
  fs.writeFileSync(p, md);
}

patchDoc("ethical-interpretation-nature", {
  status: "readable",
  summaryEn:
    "Cleaned *Tamil Culture* essay on ethical readings of nature imagery in Sangam poetry (1952).",
  summaryTa:
    "சங்கக் கவிதையில் இயற்கை உருவகங்களின் ஒழுக்க வாசிப்பு — துப்பரவான *Tamil Culture* கட்டுரை (1952).",
  aboutEn: `## About this article

In the September 1952 combined issue (*Tamil Culture*, Vol. I Nos. 3–4). Distinct from the later monograph *Nature in Ancient Tamil Poetry*.`,
  aboutTa: `## இக்கட்டுரை பற்றி

*Tamil Culture*, தொகுதி I எண்கள் 3–4 (செப்டம்பர் 1952). *Nature in Ancient Tamil Poetry* நூலிலிருந்து வேறு.`,
});

// --- Poet-Educators for humanism pages ---
const poetBlocks = cleanEssay(poet, {
  runningHeader: /ANCIENT TAMIL POET-EDUCAT/i,
  dropTitleLines: [
    "Ancient Tamil Poet-Educators",
    ".L^VIER S. THANI NAYAGAM",
    "XAVIER S. THANI NAYAGAM",
    "Xavier S. Thani Nayagam",
  ],
});

const tamilaram = fs.readFileSync(path.join(BOOKS, "tamilaram.md"), "utf8");
const bunkerIdx = tamilaram.indexOf("Bunker Memorial Lectures");
const bunker =
  bunkerIdx > 0
    ? tamilaram.slice(bunkerIdx - 120, bunkerIdx + 520).trim()
    : "In 1972 Thani Nayagam delivered the Bunker Memorial Lectures at Jaffna College on “Aspects of Tamil Humanism”.";

writeBook(
  "aspects-tamil-humanism",
  "Aspects of Tamil Humanism",
  "Archive article. *Tamilāram* records the 1972 Bunker Memorial Lectures as “Aspects of Tamil Humanism”. Full lecture text is not yet digitised; below is the related cleaned *Tamil Culture* essay *Ancient Tamil Poet-Educators*.",
  [
    {
      heading: "Publication note",
      blocks: [{ type: "p", text: cleanPara(bunker.replace(/\n+/g, " ")) }],
    },
    {
      heading: "Related essay: Ancient Tamil Poet-Educators",
      byline:
        "Xavier S. Thani Nayagam · *Tamil Culture*, Vol. 6 No. 4, pp. 273–285",
      blocks: poetBlocks,
    },
  ],
);

writeBook(
  "tamil-humanism",
  "Tamil Humanism, the Classical Period",
  "Archive article for the 1972 Jaffna College monograph (Open Library: 57 p.). Closely tied to the Bunker lectures “Aspects of Tamil Humanism”. Full monograph text not yet digitised; related cleaned Culture essay follows.",
  [
    {
      heading: "Bibliographic note",
      blocks: [
        {
          type: "p",
          text: "Open Library records *Tamil humanism, the classical period* by Xavier S. Thani Nayagam, Jaffna College, 1972 (57 numbered pages). Tamil Wikipedia lists the related lecture title “Aspects of Tamil Humanism”.",
        },
        { type: "p", text: cleanPara(bunker.replace(/\n+/g, " ")) },
      ],
    },
    {
      heading: "Related essay: Ancient Tamil Poet-Educators",
      byline:
        "Xavier S. Thani Nayagam · *Tamil Culture*, Vol. 6 No. 4, pp. 273–285",
      blocks: poetBlocks,
    },
  ],
);

for (const slug of ["aspects-tamil-humanism", "tamil-humanism"]) {
  patchDoc(slug, {
    status: "partial",
    summaryEn:
      slug === "aspects-tamil-humanism"
        ? "1972 Bunker Lectures theme; cleaned related *Tamil Culture* essay on classical Tamil humanism until the lecture text is digitised."
        : "1972 Jaffna College monograph; cleaned related Culture essay hosted until a full scan is available.",
    summaryTa:
      slug === "aspects-tamil-humanism"
        ? "1972 Bunker விரிவுரைத் தலைப்பு; முழு உரை வரும் வரை துப்பரவான தொடர்புடைய Culture கட்டுரை."
        : "1972 யாழ்ப்பாணக் கல்லூரி நூல்; முழுப் படிமம் வரும் வரை துப்பரவான தொடர்புடைய Culture கட்டுரை.",
    aboutEn:
      slug === "aspects-tamil-humanism"
        ? `## About this article\n\n*Tamilāram* identifies the 1972 Bunker Memorial Lectures as “Aspects of Tamil Humanism”. Related cleaned essay follows.`
        : `## About this article\n\nOpen Library: *Tamil humanism, the classical period* (Jaffna College, 1972). Related cleaned Culture essay follows.`,
    aboutTa:
      slug === "aspects-tamil-humanism"
        ? `## இக்கட்டுரை பற்றி\n\n*Tamilāram* 1972 Bunker விரிவுரைகளைக் குறிக்கிறது. தொடர்புடைய துப்பரவான கட்டுரை கீழே.`
        : `## இக்கட்டுரை பற்றி\n\nOpen Library 1972 நூல் பதிவு. தொடர்புடைய துப்பரவான Culture கட்டுரை கீழே.`,
  });
}

console.log("Done.");
