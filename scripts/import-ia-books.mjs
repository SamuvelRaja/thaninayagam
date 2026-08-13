#!/usr/bin/env node
/**
 * Copy IA OCR dumps into public/books and patch document frontmatter
 * so every holding with a scan can be read on-site.
 *
 * Prerequisites: OCR files in workbench/research/ia-text/ (see download step).
 * Usage: node scripts/import-ia-books.mjs
 */

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const ROOT = process.cwd();
const SRC = path.join(ROOT, "workbench", "research", "ia-text");
const OUT = path.join(ROOT, "public", "books");
const DOCS = path.join(ROOT, "content", "documents");

/** @type {Record<string, { iaId: string; textFile?: string; startPage?: number; sourceUrl?: string; sourceLabel?: string }>} */
const HOLDINGS = {
  "tamil-culture-vols-1-12": {
    iaId: "tamil-culture-by-xavier-thaninayagam-adigalar-volume-1-12_202008",
    textFile: "tamil-culture_djvu.txt",
    sourceUrl:
      "https://archive.org/details/tamil-culture-by-xavier-thaninayagam-adigalar-volume-1-12_202008",
    sourceLabel: "Internet Archive — Tamil Culture vols. 1–12",
  },
  "ethical-interpretation-nature": {
    iaId: "tamil-culture-by-xavier-thaninayagam-adigalar-volume-1-12_202008",
    textFile: "tamil-culture_djvu.txt",
    startPage: 94,
    sourceUrl:
      "https://archive.org/details/tamil-culture-by-xavier-thaninayagam-adigalar-volume-1-12_202008/page/n94/mode/1up",
    sourceLabel: "Internet Archive — Tamil Culture (Ethical Interpretation)",
  },
  "conference-1966-proceedings": {
    iaId: "dli.jZY9lup2kZl6TuXGlZQdjZM9kuxy.TVA_BOK_0009170",
    textFile: "conference-1966_djvu.txt",
    sourceUrl:
      "https://archive.org/details/dli.jZY9lup2kZl6TuXGlZQdjZM9kuxy.TVA_BOK_0009170",
    sourceLabel: "Internet Archive — 1966 Conference Proceedings",
  },
  "collected-papers": {
    iaId: "tdl.17933-collected-papers-of-thani-nayagam-adigalar",
    textFile: "collected-papers_djvu.txt",
    sourceUrl:
      "https://archive.org/details/tdl.17933-collected-papers-of-thani-nayagam-adigalar",
    sourceLabel: "Internet Archive — Collected Papers",
  },
  tamilttutu: {
    iaId: "tdl.21987-nuul-tmilllt-tuutu-ktttturaik-kottu",
    textFile: "tamilttutu_djvu.txt",
    sourceUrl:
      "https://archive.org/details/tdl.21987-nuul-tmilllt-tuutu-ktttturaik-kottu",
    sourceLabel: "Internet Archive — தமிழ்த் தூது",
  },
  "collected-speeches-1999": {
    iaId: "tdl.18049-nuul-tnnninaaykm-attikllaarinnn-corrpolllivukll",
    textFile: "collected-speeches_djvu.txt",
    sourceUrl:
      "https://archive.org/details/tdl.18049-nuul-tnnninaaykm-attikllaarinnn-corrpolllivukll",
    sourceLabel: "Internet Archive — Collected speeches",
  },
  "nature-ancient-tamil-poetry": {
    iaId: "tdl.27397-nature-in-ancient-tamil-poetry-concept-and-interpretation",
    // OCR language mismatch — scan reader only
    sourceUrl:
      "https://archive.org/details/tdl.27397-nature-in-ancient-tamil-poetry-concept-and-interpretation",
    sourceLabel: "Internet Archive — Nature in Ancient Tamil Poetry",
  },
  "landscape-and-poetry": {
    iaId: "tdl.17918-landscape-and-poetry-a-study-of-nature-in-classical-tamil-poetry",
    sourceUrl:
      "https://archive.org/details/tdl.17918-landscape-and-poetry-a-study-of-nature-in-classical-tamil-poetry",
    sourceLabel: "Internet Archive — Landscape and Poetry",
  },
  tiruvalluvar: {
    iaId: "tdl.25823-nuul-tiruvlllluvr",
    textFile: "tiruvalluvar_djvu.txt",
    sourceUrl: "https://archive.org/details/tdl.25823-nuul-tiruvlllluvr",
    sourceLabel: "Internet Archive — திருவள்ளுவர்",
  },
  "tamil-studies-abroad": {
    iaId: "tamilstudiesabro0000unse",
    sourceUrl: "https://archive.org/details/tamilstudiesabro0000unse",
    sourceLabel: "Internet Archive — Tamil Studies Abroad (controlled lending)",
  },
  "reference-guide-tamil-studies-1966": {
    iaId: "referenceguideto0000xavi",
    sourceUrl: "https://archive.org/details/referenceguideto0000xavi",
    sourceLabel: "Internet Archive — Reference Guide (controlled lending)",
  },
  "carthaginian-clergy": {
    iaId: "bwb_W8-ANY-806",
    sourceUrl: "https://archive.org/details/bwb_W8-ANY-806",
    sourceLabel: "Internet Archive — The Carthaginian Clergy (controlled lending)",
  },
};

const RIGHTS =
  "Hosted for on-site reading from Internet Archive public derivatives. Machine OCR may contain errors; the scan view is authoritative. Rights remain with the original publishers / depositors.";

function normalizeOcr(text) {
  return text
    .replace(/\r\n/g, "\n")
    .replace(/\u000c/g, "\n\n")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{4,}/g, "\n\n\n")
    .trim();
}

function patchDoc(lang, slug, holding, bookTextPath) {
  const filePath = path.join(DOCS, lang, `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    console.warn(`skip missing ${lang}/${slug}.md`);
    return;
  }

  const raw = fs.readFileSync(filePath, "utf8");
  const parsed = matter(raw);
  const data = { ...parsed.data };

  data.status = "readable";
  data.iaId = holding.iaId;
  if (holding.startPage != null) data.iaStartPage = holding.startPage;
  else delete data.iaStartPage;
  if (bookTextPath) data.bookText = bookTextPath;
  else delete data.bookText;
  if (holding.sourceUrl) data.sourceUrl = holding.sourceUrl;
  if (holding.sourceLabel) data.sourceLabel = holding.sourceLabel;
  data.rights = RIGHTS;

  const note =
    lang === "ta"
      ? `## வாசிப்பு

இந்நூலை இந்தத் தளத்திலேயே ஸ்கேன் பார்வையிலும்${bookTextPath ? " OCR உரையிலும்" : ""} படிக்கலாம். OCR பிழைகள் இருக்கலாம்; ஸ்கேன் பார்வை முதன்மை.`
      : `## Read on this site

Open the book below in the scan reader${bookTextPath ? " or OCR text view" : ""}. OCR may contain recognition errors; prefer the scan when they disagree.`;

  // Keep a short bibliographic lead if the body already starts with ## Bibliographic
  let body = parsed.content.trim();
  if (!/^##\s+(Read on this site|வாசிப்பு)/m.test(body)) {
    // Replace old "Archive note" blocks that say text is not reproduced
    body = body.replace(
      /##\s+(Archive note|ஆவணக் குறிப்பு)[\s\S]*$/m,
      "",
    );
    body = `${body.trim()}\n\n${note}\n`;
  } else {
    body = body.replace(
      /##\s+(Read on this site|வாசிப்பு)[\s\S]*$/m,
      note,
    );
  }

  const out = matter.stringify(body.trim() + "\n", data);
  fs.writeFileSync(filePath, out, "utf8");
  console.log(`patched ${lang}/${slug}.md`);
}

fs.mkdirSync(OUT, { recursive: true });

/** Shared text files we only copy once */
const copied = new Map();

for (const [slug, holding] of Object.entries(HOLDINGS)) {
  let bookTextPath = null;

  if (holding.textFile) {
    const srcPath = path.join(SRC, holding.textFile);
    if (!fs.existsSync(srcPath)) {
      console.warn(`missing OCR source for ${slug}: ${holding.textFile}`);
    } else {
      const destName =
        holding.textFile === "tamil-culture_djvu.txt"
          ? "tamil-culture.txt"
          : holding.textFile.replace(/_djvu\.txt$/i, ".txt");
      const destPath = path.join(OUT, destName);
      if (!copied.has(destName)) {
        const text = normalizeOcr(fs.readFileSync(srcPath, "utf8"));
        fs.writeFileSync(destPath, text, "utf8");
        copied.set(destName, destPath);
        console.log(`wrote public/books/${destName} (${text.length} chars)`);
      }
      bookTextPath = `/books/${destName}`;
    }
  }

  for (const lang of ["en", "ta"]) {
    patchDoc(lang, slug, holding, bookTextPath);
  }
}

console.log("Done. Holdings without IA scans were left unchanged.");
