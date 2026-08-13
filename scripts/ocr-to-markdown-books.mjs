#!/usr/bin/env node
/**
 * Convert IA OCR dumps into markdown books under content/books/,
 * and point archive document pages at those files via bookMd.
 *
 * Usage: node scripts/ocr-to-markdown-books.mjs
 */

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const ROOT = process.cwd();
const SRC = path.join(ROOT, "public", "books");
const OUT = path.join(ROOT, "content", "books");
const DOCS = path.join(ROOT, "content", "documents");

const BOOKS = [
  {
    bookMd: "tamil-culture",
    source: "tamil-culture.txt",
    title: "Tamil Culture, Volumes 1–12",
    docs: ["tamil-culture-vols-1-12", "ethical-interpretation-nature"],
  },
  {
    bookMd: "conference-1966",
    source: "conference-1966.txt",
    title: "Proceedings of the First International Conference-Seminar of Tamil Studies",
    docs: ["conference-1966-proceedings"],
  },
  {
    bookMd: "collected-papers",
    source: "collected-papers.txt",
    title: "Collected Papers of Thani Nayagam Adigalar",
    docs: ["collected-papers"],
  },
  {
    bookMd: "tamilttutu",
    source: "tamilttutu.txt",
    title: "தமிழ்த் தூது",
    docs: ["tamilttutu"],
  },
  {
    bookMd: "collected-speeches",
    source: "collected-speeches.txt",
    title: "தனிநாயகம் அடிகளாரின் சொற்பொழிவுகள்",
    docs: ["collected-speeches-1999"],
  },
  {
    bookMd: "tiruvalluvar",
    source: "tiruvalluvar.txt",
    title: "திருவள்ளுவர்",
    docs: ["tiruvalluvar"],
  },
  {
    bookMd: "nature-ancient-tamil-poetry",
    source: "nature-ancient-tamil-poetry.txt",
    title: "Nature in Ancient Tamil Poetry",
    docs: ["nature-ancient-tamil-poetry"],
  },
  {
    bookMd: "landscape-and-poetry",
    source: "landscape-and-poetry.txt",
    title: "Landscape and Poetry",
    docs: ["landscape-and-poetry"],
  },
];

function ocrToMarkdown(title, text) {
  const cleaned = text
    .replace(/\r\n/g, "\n")
    .replace(/\u000c/g, "\n\n")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{4,}/g, "\n\n\n")
    .trim();

  // Keep OCR line structure readable as markdown paragraphs.
  const blocks = cleaned
    .split(/\n{2,}/)
    .map((block) => block.replace(/[ \t]+/g, " ").trim())
    .filter(Boolean);

  return [
    `# ${title}`,
    "",
    "> Machine OCR from an Internet Archive public derivative. Recognition errors are expected; prefer the scan when they disagree.",
    "",
    "## Book text",
    "",
    ...blocks.flatMap((b, i) => (i === 0 ? [b, ""] : [b, ""])),
  ]
    .join("\n")
    .trim() + "\n";
}

function patchDoc(lang, slug, bookMd) {
  const filePath = path.join(DOCS, lang, `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    console.warn(`missing ${lang}/${slug}.md`);
    return;
  }
  const parsed = matter(fs.readFileSync(filePath, "utf8"));
  parsed.data.bookMd = bookMd;
  parsed.data.status = "readable";
  // Prefer markdown book over external .txt tab
  delete parsed.data.bookText;

  let body = parsed.content.trim();
  body = body.replace(
    /##\s+(Read on this site|வாசிப்பு)[\s\S]*$/m,
    "",
  ).trim();

  const note =
    lang === "ta"
      ? `## நூல் உரை

முழு நூல் உரை markdown ஆக கீழே இணைக்கப்பட்டுள்ளது (\`content/books/${bookMd}.md\`). இது இயந்திர OCR — பிழைகள் இருக்கலாம்.`
      : `## Book text

The full book is included below as markdown (from \`content/books/${bookMd}.md\`). This is machine OCR and may contain recognition errors.`;

  if (!/^##\s+(Book text|நூல் உரை)/m.test(body)) {
    body = `${body}\n\n${note}\n`;
  } else {
    body = body.replace(/##\s+(Book text|நூல் உரை)[\s\S]*$/m, note);
  }

  fs.writeFileSync(filePath, matter.stringify(body.trim() + "\n", parsed.data));
  console.log(`linked ${lang}/${slug}.md → ${bookMd}.md`);
}

fs.mkdirSync(OUT, { recursive: true });

for (const book of BOOKS) {
  const srcPath = path.join(SRC, book.source);
  if (!fs.existsSync(srcPath)) {
    console.warn(`skip missing source ${book.source}`);
    continue;
  }
  const text = fs.readFileSync(srcPath, "utf8");
  const md = ocrToMarkdown(book.title, text);
  const outPath = path.join(OUT, `${book.bookMd}.md`);
  fs.writeFileSync(outPath, md, "utf8");
  console.log(`wrote content/books/${book.bookMd}.md (${md.length} chars)`);

  for (const slug of book.docs) {
    for (const lang of ["en", "ta"]) {
      patchDoc(lang, slug, book.bookMd);
    }
  }
}

console.log("Done.");
