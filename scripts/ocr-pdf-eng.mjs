#!/usr/bin/env node
/**
 * Render a local PDF and OCR with Tesseract eng → content/books/<bookMd>.md
 *
 * Usage:
 *   node scripts/ocr-pdf-eng.mjs --pdf workbench/research/ia-text/pdfs/nature.pdf \
 *     --book nature-ancient-tamil-poetry --title "Nature in Ancient Tamil Poetry" \
 *     [--from 1] [--to 209] [--dpi 200] [--slug nature-ancient-tamil-poetry]
 */
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import matter from "gray-matter";

const ROOT = process.cwd();
const args = process.argv.slice(2);
function arg(name, fallback) {
  const i = args.indexOf(`--${name}`);
  if (i < 0) return fallback;
  return args[i + 1] ?? fallback;
}

const pdfRel = arg("pdf");
const bookMd = arg("book");
const title = arg("title", bookMd);
const dpi = Number(arg("dpi", "180"));
const from = Number(arg("from", "1"));
const toArg = arg("to", "");
const slug = arg("slug", bookMd);
const status = arg("status", "readable");

if (!pdfRel || !bookMd) {
  console.error("Need --pdf and --book");
  process.exit(1);
}

const pdfPath = path.resolve(ROOT, pdfRel);
const outDir = path.join(
  ROOT,
  "workbench/research/ia-text/ocr-fix",
  `${bookMd}-full`,
);
const booksDir = path.join(ROOT, "content/books");
const docsEn = path.join(ROOT, "content/documents/en", `${slug}.md`);
const docsTa = path.join(ROOT, "content/documents/ta", `${slug}.md`);

fs.mkdirSync(outDir, { recursive: true });

function pageCount() {
  const r = spawnSync("pdfinfo", [pdfPath], { encoding: "utf8" });
  const m = /Pages:\s+(\d+)/.exec(r.stdout || "");
  if (!m) throw new Error(`Could not read page count for ${pdfPath}\n${r.stderr}`);
  return Number(m[1]);
}

const last = toArg ? Number(toArg) : pageCount();
console.log(`OCR ${pdfPath} pages ${from}-${last} @ ${dpi}dpi → ${bookMd}`);

const prefix = path.join(outDir, "p");
for (let page = from; page <= last; page++) {
  const png = `${prefix}-${String(page).padStart(4, "0")}.png`;
  const stem = `${prefix}-${String(page).padStart(4, "0")}`;
  const txt = `${stem}.txt`;

  if (!fs.existsSync(png) || fs.statSync(png).size < 1000) {
    const r = spawnSync(
      "pdftoppm",
      ["-f", String(page), "-l", String(page), "-r", String(dpi), "-png", pdfPath, prefix],
      { encoding: "utf8" },
    );
    if (r.status !== 0) {
      console.warn(`pdftoppm fail p${page}: ${r.stderr}`);
      continue;
    }
  }

  // pdftoppm names files p-1.png or p-0001.png depending on version/range
  const candidates = [
    png,
    `${prefix}-${page}.png`,
    `${prefix}-${String(page).padStart(3, "0")}.png`,
    `${prefix}-${String(page).padStart(2, "0")}.png`,
    `${prefix}-${String(page).padStart(4, "0")}.png`,
  ];
  const img = candidates.find((c) => fs.existsSync(c));
  if (!img) {
    console.warn(`no image for page ${page}`);
    continue;
  }

  const outTxt = img.replace(/\.png$/, "");
  if (!fs.existsSync(`${outTxt}.txt`) || fs.statSync(`${outTxt}.txt`).size < 20) {
    const o = spawnSync(
      "tesseract",
      [img, outTxt, "-l", "eng", "--psm", "6"],
      { encoding: "utf8" },
    );
    if (o.status !== 0) console.warn(`tesseract fail p${page}: ${o.stderr}`);
  }

  if (page % 10 === 0 || page === last) {
    process.stdout.write(`  … ${page}/${last}\n`);
  }
}

// Collect page texts in order
const files = fs
  .readdirSync(outDir)
  .filter((f) => f.endsWith(".txt"))
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

const parts = [];
for (const f of files) {
  const text = fs.readFileSync(path.join(outDir, f), "utf8").trim();
  if (!text) continue;
  const num = f.match(/(\d+)\.txt$/)?.[1] || f;
  parts.push(`### Scan page ${Number(num)}\n\n${text}`);
}

const md = [
  `# ${title}`,
  "",
  "> Re-OCR’d with Tesseract eng from the local Internet Archive PDF derivative. Machine OCR may contain errors; prefer the scan when they disagree.",
  "",
  "## Book text",
  "",
  parts.join("\n\n"),
  "",
].join("\n");

fs.writeFileSync(path.join(booksDir, `${bookMd}.md`), md, "utf8");
console.log(`wrote content/books/${bookMd}.md (${md.length} chars, ${parts.length} pages)`);

function patchDoc(filePath) {
  if (!fs.existsSync(filePath)) return;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  data.bookMd = bookMd;
  data.status = status;
  fs.writeFileSync(filePath, matter.stringify(content.replace(/^\n+/, ""), data));
  console.log(`patched ${path.relative(ROOT, filePath)} → ${status}`);
}

patchDoc(docsEn);
patchDoc(docsTa);
