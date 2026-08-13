#!/usr/bin/env node
/**
 * Rebuild Collected Papers on-site reading text from:
 * - eng OCR front matter / contents leaves
 * - cleaned / sliced Tamil Culture essays already on disk
 *
 * Usage: node scripts/rebuild-collected-papers.mjs
 */
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const ROOT = process.cwd();
const OCR = path.join(ROOT, "workbench/research/ia-text/ocr-fix");
const BOOKS = path.join(ROOT, "content/books");

function readBookBody(name) {
  const p = path.join(BOOKS, `${name}.md`);
  if (!fs.existsSync(p)) return "";
  return fs
    .readFileSync(p, "utf8")
    .replace(/^#[^\n]*\n+/, "")
    .replace(/^>[\s\S]*?\n\n/, "")
    .replace(/^## (Book|Article) text\n+/i, "")
    .trim();
}

function leaf(n) {
  const p = path.join(OCR, `cp-leaf${n}.txt`);
  return fs.existsSync(p) ? fs.readFileSync(p, "utf8").trim() : "";
}

const culture = fs.readFileSync(path.join(BOOKS, "tamil-culture.md"), "utf8");

function sliceBetween(startNeedle, endNeedle, maxLen = 80_000) {
  const start = culture.indexOf(startNeedle);
  if (start < 0) return null;
  let end = endNeedle ? culture.indexOf(endNeedle, start + startNeedle.length) : -1;
  if (end < 0) end = Math.min(culture.length, start + maxLen);
  return culture.slice(start, end).trim();
}

const sections = [
  {
    title: "Front matter (IITS 1995)",
    body: [leaf(1), leaf(2), leaf(3), leaf(4), leaf(5)].filter(Boolean).join("\n\n"),
  },
  {
    title: "This Journal of the Academy",
    body: sliceBetween(
      "This Journal of the Academy,",
      "\nThis quarterly",
      25_000,
    ),
  },
  {
    title: "The Survival of Tamil Culture",
    body:
      sliceBetween("IHE EDITOE", "\nNotice to Subscribers", 12_000) ||
      sliceBetween(
        "disappearance of dominant\ncultures",
        "\nNotice to Subscribers",
        12_000,
      ),
  },
  {
    title: "The Ethical Interpretation of Nature in Ancient Tamil Poetry",
    body: readBookBody("ethical-interpretation-nature"),
  },
  {
    title: "Ancient Tamil Literature and the Study of Ancient Indian Education",
    body: readBookBody("educational-thoughts-ancient-tamil").split(
      "### II.",
    )[0],
  },
  {
    title: "Educators of Early Tamil Society / Ancient Tamil Poet-Educators",
    body: readBookBody("educational-thoughts-ancient-tamil").includes("### II.")
      ? "### II." +
        readBookBody("educational-thoughts-ancient-tamil").split("### II.")[1]
      : "",
  },
  {
    title: "Earliest Jain and Buddhist Teaching in the Tamil country",
    body: sliceBetween(
      "Earliest Jain and Buddhist",
      "\nXAVIER S. THANI NAYAGAM\n",
      40_000,
    ),
  },
  {
    title: "Doctor R. P. Sethu Pillai",
    body: sliceBetween("Doctor R. P. Sethu", "\nNature and the Natural", 40_000),
  },
  {
    title: "Nature and the Natural in Kalyanasundaranar",
    body: sliceBetween(
      "Kalyanasundaranar",
      "\nThe Novelist",
      40_000,
    ),
  },
  {
    title: "Regional Nationalism in Twentieth century Tamil Literatures",
    body: sliceBetween(
      "Regional Nationalism",
      "\nDoctor R. P. Sethu",
      40_000,
    ),
  },
  {
    title: "Language Rights in Ceylon",
    body: sliceBetween(
      "Language Rights in Ceylon",
      "\nTamil Emigration",
      40_000,
    ),
  },
  {
    title: "Tamil Manuscripts in European Libraries",
    body: sliceBetween(
      "Tamil Manuscripts in European",
      "\nTamil Studies Elsewhere",
      40_000,
    ),
  },
  {
    title: "Antao De Proenca’s Tamil-Portuguese Dictionary — 1679",
    body: sliceBetween("Antao De Proenca", "\nXAVIER S. THANI NAYAGAM\n", 50_000),
  },
  {
    title: "Indian Thought and Roman Stoicism",
    body: readBookBody("indian-thought-roman-stoicism"),
  },
  {
    title: "The Tamil Development and Research Council",
    body: sliceBetween(
      "Tamil Development and",
      "\nThe First book",
      25_000,
    ),
  },
];

const parts = [];
for (const s of sections) {
  if (!s.body || s.body.length < 80) {
    console.warn(`skip/thin: ${s.title}`);
    continue;
  }
  parts.push(`## ${s.title}\n\n${s.body.trim()}`);
  console.log(`+ ${s.title} (${s.body.length} chars)`);
}

const md = [
  "# Collected Papers of Thani Nayagam Adigalar",
  "",
  "> On-site reconstruction of the 1995 IITS *Collected Papers* volume. Front matter is eng-OCR from the TDL/IA scan; essay bodies are taken from the Tamil Culture bound-volume OCR (and cleaned article files) corresponding to the volume’s contents list. Not a page-faithful reprint of the 1995 typesetting. Machine OCR errors remain.",
  "",
  "## Book text",
  "",
  parts.join("\n\n"),
  "",
].join("\n");

fs.writeFileSync(path.join(BOOKS, "collected-papers.md"), md, "utf8");
console.log(`wrote collected-papers.md (${md.length} chars, ${parts.length} sections)`);

for (const lang of ["en", "ta"]) {
  const p = path.join(ROOT, "content/documents", lang, "collected-papers.md");
  const { data, content } = matter(fs.readFileSync(p, "utf8"));
  data.bookMd = "collected-papers";
  data.status = "readable";
  fs.writeFileSync(p, matter.stringify(content.replace(/^\n+/, ""), data));
}
console.log("status → readable");
