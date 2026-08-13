#!/usr/bin/env node
/**
 * Clean markdown books: strip scan-page TOC noise, restore structural headings,
 * prepend a clear Contents index for the sidebar TOC.
 *
 * Usage: node scripts/cleanup-book-toc.mjs
 */
import fs from "node:fs";
import path from "node:path";

const BOOKS = path.join(process.cwd(), "content/books");

function stripFrontTitle(md) {
  return md.replace(/^#[^\n]*\n+/, "").replace(/^>[^\n]*\n+/, "").trim();
}

function splitNote(md) {
  const m = md.match(/^(#[^\n]+)\n+(> [^\n]+)\n+([\s\S]*)$/);
  if (!m) {
    const title = (md.match(/^# (.+)$/m) || [, "Untitled"])[1];
    return { title, note: "", body: stripFrontTitle(md) };
  }
  return { title: m[1].replace(/^#\s*/, ""), note: m[2].replace(/^>\s*/, ""), body: m[3].trim() };
}

function demoteScanHeadings(body) {
  return body
    .replace(/^###\s+Scan page\s+(\d+)\s*$/gim, "*Page $1*")
    .replace(/^###\s+Scan leaf\s+(\d+)\s*$/gim, "*Leaf $1*")
    .replace(/^##\s+Book text\s*$/gim, "")
    .replace(/^##\s+Article text\s*$/gim, "")
    .replace(/\n{3,}/g, "\n\n");
}

function extractH2(body) {
  return [...body.matchAll(/^##\s+(.+)$/gm)]
    .map((m) => m[1].trim())
    .filter(
      (label) =>
        !/^(contents|publication note|edition note|book text|article text)$/i.test(
          label,
        ),
    );
}

function withContents(title, note, body, extraIndex = []) {
  const cleaned = demoteScanHeadings(body).replace(/^##\s+Contents\n[\s\S]*?(?=\n## )/i, "");
  const headings = [...extraIndex, ...extractH2(cleaned)];
  const uniq = [];
  for (const h of headings) {
    if (!uniq.includes(h)) uniq.push(h);
  }
  const contents =
    uniq.length > 0
      ? [
          "## Contents",
          "",
          ...uniq.map((h, i) => `${i + 1}. ${h}`),
          "",
        ].join("\n")
      : "## Contents\n\n1. Reading text\n\n";

  return [`# ${title}`, "", `> ${note}`, "", contents, cleaned.trim(), ""].join(
    "\n",
  );
}

function promoteNatureStructure(body) {
  let t = demoteScanHeadings(body);
  t = t.replace(
    /^###\s+Edition note\s*$/im,
    "## Edition note",
  );
  t = t.replace(
    /^###\s+Nature in Ancient Tamil Poetry \(1953\).*$/im,
    "## Full text (1953 edition)",
  );
  t = t.replace(
    /^###\s+Landscape and Poetry — title-leaf samples.*$/im,
    "## Title-leaf samples",
  );
  t = t.replace(
    /^###\s+Full text \(1953 edition eng OCR\)\s*$/im,
    "## Full text (1953 edition)",
  );

  // Structural promotions (line alone)
  const map = [
    [/^PREFACE\s*$/gm, "## Preface"],
    [/^CONTENTS\s*$/gm, "## Original contents list"],
    [/^CONTENTS—Contd\.\s*$/gm, ""],
    [/^Chapter One\s*\n+THE BACKGROUND\s*$/gm, "## Chapter One — The Background"],
    [/^Chapter Three\s*$/gm, "## Chapter Three"],
    [/^Chapter Four\s*$/gm, "## Chapter Four"],
    [/^Chapter Five\s*$/gm, "## Chapter Five"],
    [/^Chapter Siz\s*$/gm, "## Chapter Six"],
    [/^Chapter Six\s*$/gm, "## Chapter Six"],
    [/^Chapter Eight\s*$/gm, "## Chapter Eight"],
    [/^The Language\s*$/gm, "## The Language"],
    [/^Introduction\s*$/gm, "## Introduction"],
  ];
  for (const [re, rep] of map) t = t.replace(re, rep);

  // Subheads under chapter one
  t = t.replace(/^The Land\s*$/gm, "### The Land");
  return t;
}

function promotePastPresent(body) {
  let t = demoteScanHeadings(body);
  t = t.replace(
    /^Tamil Culture—Its Past,\s*\n\s*Its Present and Its Future\s*\nwith special reference to Ceylon\*\s*$/im,
    "## Tamil Culture — Its Past, Present and Future",
  );
  const sections = [
    "What is Culture ?",
    "What is Culture?",
    "The Antiquity of Tamil Culture in Ceylon",
    "Twin Cultures",
    "The Tamil Language",
    "Tamil Literature",
    "Ideals of Life",
    "Present State",
    "Languages of Administration",
    "Tamil at the University",
    "Responsibility of the State",
    "Some Ways and Means",
    "Unto the Last",
  ];
  for (const s of sections) {
    const re = new RegExp(`^${s.replace(/[?*]/g, "\\$&")}\\s*$`, "gm");
    t = t.replace(re, `## ${s.replace(/\s+\?$/, "?")}`);
  }
  return t;
}

function cleanCollectedPapers(body) {
  let t = demoteScanHeadings(body);
  // Drop duplicated journal section titles if consecutive
  t = t.replace(
    /(## This Journal of the Academy)\n\n[\s\S]*?(?=\n## This Journal of the Academy\n)/,
    "",
  );
  return t;
}

function ensurePublicationSections(body) {
  let t = demoteScanHeadings(body);
  t = t.replace(/^###\s+Publication note\s*$/gim, "## Publication note");
  t = t.replace(/^###\s+Edition note\s*$/gim, "## Edition note");
  t = t.replace(
    /^###\s+Ancient Tamil Poet-Educators.*$/gim,
    "## Ancient Tamil Poet-Educators",
  );
  t = t.replace(
    /^###\s+From \*Tamilāram\*.*$/gim,
    "## From Tamilāram (lecture tours)",
  );
  t = t.replace(
    /^###\s+Companion full text: Collected Speeches.*$/gim,
    "## Collected Speeches (1999)",
  );
  t = t.replace(
    /^###\s+This Journal of the Academy\s*$/gim,
    "## This Journal of the Academy",
  );
  t = t.replace(
    /^###\s+The First Books Printed in Tamil\s*$/gim,
    "## The First Books Printed in Tamil",
  );
  t = t.replace(
    /^###\s+Tamil Manuscripts in European Libraries\s*$/gim,
    "## Tamil Manuscripts in European Libraries",
  );
  t = t.replace(
    /^###\s+Readable holdings on this archive\s*$/gim,
    "## Readable holdings on this archive",
  );
  t = t.replace(
    /^###\s+Opening of Collected Papers.*$/gim,
    "## Opening of Collected Papers",
  );
  t = t.replace(
    /^###\s+Ethical Interpretation.*$/gim,
    "## Ethical Interpretation of Nature",
  );
  t = t.replace(
    /^###\s+Tamil Culture—Its Past.*$/gim,
    "## Tamil Culture — Past, Present and Future",
  );
  t = t.replace(
    /^###\s+Indian Thought and Roman Stoicism\s*$/gim,
    "## Indian Thought and Roman Stoicism",
  );
  t = t.replace(
    /^###\s+Memorial-volume.*$/gim,
    "## Memorial-volume context",
  );
  t = t.replace(
    /^###\s+From the Collected Papers preface\s*$/gim,
    "## From the Collected Papers preface",
  );
  t = t.replace(
    /^###\s+Quotation preserved.*$/gim,
    "## Quotation from Collected Papers",
  );
  // Nested essay h2 inside civilization that duplicate stoicism — leave as is
  return t;
}

function write(name, md) {
  fs.writeFileSync(path.join(BOOKS, name), md, "utf8");
  const h2 = extractH2(md);
  console.log(`${name}: ${h2.length} TOC entries → ${h2.slice(0, 8).join("; ")}${h2.length > 8 ? "…" : ""}`);
}

const handlers = {
  "nature-ancient-tamil-poetry.md"(raw) {
    const { title, note, body } = splitNote(raw);
    write(
      "nature-ancient-tamil-poetry.md",
      withContents(title, note, promoteNatureStructure(body)),
    );
  },
  "nature-poetry-in-tamil.md"(raw) {
    const { title, note, body } = splitNote(raw);
    write(
      "nature-poetry-in-tamil.md",
      withContents(title, note, promoteNatureStructure(body)),
    );
  },
  "landscape-and-poetry.md"(raw) {
    const { title, note, body } = splitNote(raw);
    write(
      "landscape-and-poetry.md",
      withContents(title, note, promoteNatureStructure(body)),
    );
  },
  "tamilar-panpatu.md"(raw) {
    const { title, note, body } = splitNote(raw);
    write(
      "tamilar-panpatu.md",
      withContents(title, note, promotePastPresent(body)),
    );
  },
  "collected-papers.md"(raw) {
    const { title, note, body } = splitNote(raw);
    write(
      "collected-papers.md",
      withContents(title, note, cleanCollectedPapers(body)),
    );
  },
  "indian-thought-roman-stoicism.md"(raw) {
    const { title, note, body } = splitNote(raw);
    write(
      "indian-thought-roman-stoicism.md",
      withContents(title, note, demoteScanHeadings(body)),
    );
  },
  "educational-thoughts-ancient-tamil.md"(raw) {
    const { title, note, body } = splitNote(raw);
    write(
      "educational-thoughts-ancient-tamil.md",
      withContents(title, note, demoteScanHeadings(body)),
    );
  },
  "ethical-interpretation-nature.md"(raw) {
    const { title, note, body } = splitNote(raw);
    write(
      "ethical-interpretation-nature.md",
      withContents(title, note, demoteScanHeadings(body)),
    );
  },
};

// Default handler for remaining article-style books
for (const file of fs.readdirSync(BOOKS).filter((f) => f.endsWith(".md"))) {
  const raw = fs.readFileSync(path.join(BOOKS, file), "utf8");
  if (handlers[file]) {
    handlers[file](raw);
    continue;
  }
  // Skip mega OCR dumps without structure (culture, conference, speeches, tamilttutu, tiruvalluvar, tamilaram)
  // but still demote noise + add a minimal Contents pointing to Reading text / major blocks
  const { title, note, body } = splitNote(raw);
  const size = raw.length;
  if (size > 500_000 && !/^##\s+(?!Book text|Article text)/m.test(body)) {
    // Huge unstructured OCR: single reading section, no scan headings
    const cleaned = demoteScanHeadings(body);
    write(
      file,
      [
        `# ${title}`,
        "",
        `> ${note}`,
        "",
        "## Contents",
        "",
        "1. Reading text",
        "",
        "## Reading text",
        "",
        cleaned.replace(/^##\s+Reading text\s*$/im, "").trim(),
        "",
      ].join("\n"),
    );
    continue;
  }
  write(file, withContents(title, note, ensurePublicationSections(body)));
}

console.log("Done.");
