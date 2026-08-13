#!/usr/bin/env node
/**
 * Phase 2 stub — PDF / page-image → draft markdown for the archive.
 *
 * Intended workflow (next implementation):
 * 1. Place source PDF or page images under `content/inbox/<slug>/`
 * 2. Run: `node scripts/convert-holding.mjs <slug> --lang en --pillar publishing`
 * 3. OCR (tesseract eng+tam) → `content/documents/<lang>/<slug>.md` draft
 * 4. Human review: fix OCR, set status partial → complete, add cite ids
 *
 * This stub only scaffolds the markdown file so the pipeline shape is fixed
 * before OCR tooling is wired.
 */

import fs from "node:fs";
import path from "node:path";

const [slug, ...rest] = process.argv.slice(2);

function flag(name, fallback = "") {
  const index = rest.indexOf(`--${name}`);
  if (index === -1) return fallback;
  return rest[index + 1] || fallback;
}

if (!slug) {
  console.error(
    "Usage: node scripts/convert-holding.mjs <slug> --lang en|ta --pillar <id> --year YYYY --title \"...\"",
  );
  process.exit(1);
}

const lang = flag("lang", "en");
const pillar = flag("pillar", "publishing");
const year = flag("year", "");
const title = flag("title", slug);

const outDir = path.join(process.cwd(), "content", "documents", lang);
const outPath = path.join(outDir, `${slug}.md`);

if (fs.existsSync(outPath)) {
  console.error(`Refusing to overwrite existing file: ${outPath}`);
  process.exit(1);
}

fs.mkdirSync(outDir, { recursive: true });

const body =
  lang === "ta"
    ? `## ஆவணக் குறிப்பு

இது OCR வரைவு. மனித மதிப்பாய்வுக்குப் பின் \`status: complete\` ஆக்கவும்.

## படிவ உரை

<!-- OCR வெளியீடு இங்கே வரும் -->
`
    : `## Document note

This is an OCR draft. After human review, set \`status: complete\`.

## Transcription

<!-- OCR output will be inserted here -->
`;

const md = `---
id: ${slug}
slug: ${slug}
title: "${title.replace(/"/g, '\\"')}"
year: "${year}"
pillar: ${pillar}
kind: document
status: stub
lang: ${lang}
summary: ""
rights: "Draft conversion — verify rights before publishing full text."
sourceUrl: ""
sourceLabel: ""
images: []
cite: []
---

${body}`;

fs.writeFileSync(outPath, md, "utf8");
console.log(`Created ${outPath}`);
console.log("Next: add page images, run OCR (Phase 2), then review.");
