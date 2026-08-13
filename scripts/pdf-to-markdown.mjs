#!/usr/bin/env node
/**
 * Download Internet Archive PDF derivatives (prefer *_text.pdf),
 * extract with pdftotext, write markdown books under content/books/,
 * and link archive document pages via bookMd.
 *
 * Usage:
 *   node scripts/pdf-to-markdown.mjs
 *   node scripts/pdf-to-markdown.mjs --only tamilttutu,conference
 *   node scripts/pdf-to-markdown.mjs --skip-download   # reuse pdfs/ already on disk
 */

import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const ROOT = process.cwd();
const PDF_DIR = path.join(ROOT, "workbench", "research", "ia-text", "pdfs");
const OUT = path.join(ROOT, "content", "books");
const DOCS = path.join(ROOT, "content", "documents");

const HOLDINGS = [
  {
    key: "collected-speeches",
    bookMd: "collected-speeches",
    title: "தனிநாயகம் அடிகளாரின் சொற்பொழிவுகள்",
    iaId: "tdl.18049-nuul-tnnninaaykm-attikllaarinnn-corrpolllivukll",
    docs: ["collected-speeches-1999"],
    maxMb: 40,
  },
  {
    key: "nature",
    bookMd: "nature-ancient-tamil-poetry",
    title: "Nature in Ancient Tamil Poetry",
    iaId: "tdl.27397-nature-in-ancient-tamil-poetry-concept-and-interpretation",
    docs: ["nature-ancient-tamil-poetry"],
    maxMb: 40,
  },
  {
    key: "tamilttutu",
    bookMd: "tamilttutu",
    title: "தமிழ்த் தூது",
    iaId: "tdl.21987-nuul-tmilllt-tuutu-ktttturaik-kottu",
    docs: ["tamilttutu"],
    maxMb: 80,
  },
  {
    key: "conference",
    bookMd: "conference-1966",
    title:
      "Proceedings of the First International Conference-Seminar of Tamil Studies",
    iaId: "dli.jZY9lup2kZl6TuXGlZQdjZM9kuxy.TVA_BOK_0009170",
    docs: ["conference-1966-proceedings"],
    maxMb: 120,
  },
  {
    key: "landscape",
    bookMd: "landscape-and-poetry",
    title: "Landscape and Poetry",
    iaId: "tdl.17918-landscape-and-poetry-a-study-of-nature-in-classical-tamil-poetry",
    docs: ["landscape-and-poetry"],
    maxMb: 120,
  },
  {
    key: "tiruvalluvar",
    bookMd: "tiruvalluvar",
    title: "திருவள்ளுவர்",
    iaId: "tdl.25823-nuul-tiruvlllluvr",
    docs: ["tiruvalluvar"],
    maxMb: 120,
  },
  {
    key: "collected-papers",
    bookMd: "collected-papers",
    title: "Collected Papers of Thani Nayagam Adigalar",
    iaId: "tdl.17933-collected-papers-of-thani-nayagam-adigalar",
    docs: ["collected-papers"],
    maxMb: 450,
  },
  {
    key: "tamil-culture",
    bookMd: "tamil-culture",
    title: "Tamil Culture, Volumes 1–12",
    iaId: "tamil-culture-by-xavier-thaninayagam-adigalar-volume-1-12_202008",
    docs: ["tamil-culture-vols-1-12", "ethical-interpretation-nature"],
    maxMb: 250,
  },
];

const args = process.argv.slice(2);
const skipDownload = args.includes("--skip-download");
const onlyArg = args.find((a) => a.startsWith("--only=")) || "";
const onlyList = onlyArg
  ? onlyArg
      .slice("--only=".length)
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean)
  : args.includes("--only")
    ? (args[args.indexOf("--only") + 1] || "")
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean)
    : null;

function which(cmd) {
  const r = spawnSync("which", [cmd], { encoding: "utf8" });
  return r.status === 0 ? r.stdout.trim() : "";
}

async function pickPdf(iaId, maxMb) {
  const res = await fetch(`https://archive.org/metadata/${iaId}`);
  if (!res.ok) throw new Error(`metadata ${iaId}: ${res.status}`);
  const j = await res.json();
  const files = (j.files || [])
    .filter((f) => /\.pdf$/i.test(f.name))
    .map((f) => ({
      name: f.name,
      size: Number(f.size || 0),
      format: String(f.format || ""),
    }));

  const under = files.filter((f) => f.size <= maxMb * 1e6);
  const preferred =
    under.find((f) => /_text\.pdf$/i.test(f.name)) ||
    under.find((f) => /text pdf/i.test(f.format)) ||
    under.sort((a, b) => a.size - b.size)[0];

  if (!preferred) {
    throw new Error(
      `No PDF under ${maxMb}MB for ${iaId}. Available: ${files
        .map((f) => `${(f.size / 1e6).toFixed(1)}MB ${f.name}`)
        .join("; ")}`,
    );
  }
  return preferred;
}

function download(iaId, fileName, destPath) {
  const url = `https://archive.org/download/${iaId}/${encodeURIComponent(fileName)}`;
  console.log(`GET ${url}`);
  const tmp = `${destPath}.part`;
  const r = spawnSync(
    "curl",
    [
      "-fL",
      "--retry",
      "3",
      "--retry-delay",
      "2",
      "--connect-timeout",
      "30",
      "--max-time",
      "1800",
      "-A",
      "ThaninayagamArchiveBot/1.0",
      "-o",
      tmp,
      url,
    ],
    { encoding: "utf8" },
  );
  if (r.status !== 0) {
    try {
      fs.unlinkSync(tmp);
    } catch {
      /* ignore */
    }
    throw new Error(`curl failed (${r.status}): ${r.stderr || r.stdout}`);
  }
  fs.renameSync(tmp, destPath);
  const size = fs.statSync(destPath).size;
  console.log(`saved ${destPath} (${(size / 1e6).toFixed(1)}MB)`);
}

function pdfToText(pdfPath, txtPath) {
  const bin = which("pdftotext");
  if (!bin) throw new Error("pdftotext not found (install poppler)");
  const r = spawnSync(
    bin,
    ["-layout", "-enc", "UTF-8", pdfPath, txtPath],
    { encoding: "utf8" },
  );
  if (r.status !== 0) {
    throw new Error(`pdftotext failed: ${r.stderr || r.stdout}`);
  }
}

function textToMarkdown(title, text) {
  const cleaned = text
    .replace(/\r\n/g, "\n")
    .replace(/\u000c/g, "\n\n")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{4,}/g, "\n\n\n")
    .trim();

  const blocks = cleaned
    .split(/\n{2,}/)
    .map((block) => block.replace(/[ \t]+$/gm, "").trimEnd())
    .filter((b) => b.trim());

  return (
    [
      `# ${title}`,
      "",
      "> Converted from an Internet Archive PDF with `pdftotext`. Layout and OCR errors may remain.",
      "",
      "## Book text",
      "",
      ...blocks.flatMap((b) => [b, ""]),
    ]
      .join("\n")
      .trim() + "\n"
  );
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
  delete parsed.data.bookText;

  let body = parsed.content.trim();
  body = body
    .replace(
      /##\s+(Book text|நூல் உரை|How to read|எப்படி வாசிப்பது|Read on this site|வாசிப்பு)[\s\S]*$/m,
      "",
    )
    .trim();

  const note =
    lang === "ta"
      ? `## எப்படி வாசிப்பது

முழு நூல் markdown இந்தப் பக்கத்தில் தொடர்கிறது (\`content/books/${bookMd}.md\`, PDF → உரை மாற்றம்).`
      : `## How to read

The full book markdown follows on this page (from \`content/books/${bookMd}.md\`, converted from PDF).`;

  body = `${body}\n\n${note}\n`;
  fs.writeFileSync(filePath, matter.stringify(body, parsed.data));
  console.log(`linked ${lang}/${slug}.md → ${bookMd}.md`);
}

fs.mkdirSync(PDF_DIR, { recursive: true });
fs.mkdirSync(OUT, { recursive: true });

const selected = HOLDINGS.filter((h) =>
  onlyList ? onlyList.includes(h.key) || onlyList.includes(h.bookMd) : true,
);

for (const holding of selected) {
  console.log(`\n---- ${holding.key} ----`);
  const pdfPath = path.join(PDF_DIR, `${holding.key}.pdf`);
  const txtPath = path.join(PDF_DIR, `${holding.key}.txt`);

  try {
    if (!skipDownload || !fs.existsSync(pdfPath)) {
      const pdf = await pickPdf(holding.iaId, holding.maxMb);
      console.log(
        `using ${(pdf.size / 1e6).toFixed(1)}MB · ${pdf.format || "PDF"} · ${pdf.name}`,
      );
      download(holding.iaId, pdf.name, pdfPath);
    } else {
      console.log(`reuse ${pdfPath}`);
    }

    pdfToText(pdfPath, txtPath);
    const text = fs.readFileSync(txtPath, "utf8");
    if (text.trim().length < 200) {
      console.warn(
        `extracted text too short (${text.length} chars) — keeping previous markdown if any`,
      );
      continue;
    }

    const md = textToMarkdown(holding.title, text);
    const outPath = path.join(OUT, `${holding.bookMd}.md`);
    fs.writeFileSync(outPath, md, "utf8");
    console.log(`wrote content/books/${holding.bookMd}.md (${md.length} chars)`);

    for (const slug of holding.docs) {
      for (const lang of ["en", "ta"]) patchDoc(lang, slug, holding.bookMd);
    }
  } catch (err) {
    console.error(`FAILED ${holding.key}:`, err.message || err);
  }
}

console.log("\nDone.");
