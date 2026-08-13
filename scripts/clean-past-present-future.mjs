#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const rawDir = "workbench/research/ia-text/ocr-pages/past-present-future/raw";
const outPath = "content/books/tamil-culture-past-present-future.md";

const HEADER =
  /^(?:\d{3}\s+)?TAMIL CULTURE(?:\s*\.{2,}.*REFERENCE.*|\s*$|\s+\d{3}\s*$)/i;

function isHeader(line) {
  const s = line.trim();
  if (HEADER.test(s)) return true;
  if (/^\d{3}$/.test(s)) return true;
  return false;
}

function isFootnoteStart(line) {
  const s = line.trim();
  if (/^(\d+|[*•])\s/.test(s)) return true;
  if (/^(See |On place|Quoted in|Consult |I am indebted|Dj\s*=)/.test(s))
    return true;
  if (
    /^[A-Z]\. [A-Z]/.test(s) &&
    /(GEIGER|BUTTERFIELD|QUEYROZ|SCHURHAMMER|SCHWEITZER|COEDES|WHITEHEAD|KANAPATHI|MARIO|GODAKUMBURA|KANTHA|SIEGFRIED|PEI|KROEBER)/.test(
      s,
    )
  )
    return true;
  if (
    s.startsWith('"Tamil place names') ||
    s.startsWith("in literature produced")
  )
    return true;
  if (
    s.startsWith("Page 254") ||
    s.startsWith('"A trace') ||
    s.startsWith('"It has been') ||
    s.startsWith('"Linguistic') ||
    s.startsWith('"In all these')
  )
    return true;
  if (s.includes("See Articles by Swami Gnana Prakasar")) return true;
  return false;
}

const SECTION_EXACT = new Map([
  ["WUAT 1S CULTURE ?", "## What is Culture?"],
  ["WHAT IS CULTURE ?", "## What is Culture?"],
  ["WHAT IS CULTURE?", "## What is Culture?"],
  [
    "THE ANTIQUITY OF TAMIL CULTURE IN CEYLON",
    "## The Antiquity of Tamil Culture in Ceylon",
  ],
  ["TWIN CULTURES", "## Twin Cultures"],
  ["THE TAMIL LANGUAGE", "## The Tamil Language"],
  ["THE. TAMIL LANGUAGE", "## The Tamil Language"],
  ["THE. TAMIT LANGUAGE", "## The Tamil Language"],
  ["TAMIL LITERATURE", "## Tamil Literature"],
  ["IDEALS OF LIFE", "## Ideals of Life"],
  ["PRESENT STATE", "## Present State"],
  ["TAMIL AT THE UNIVERSITY", "## Tamil at the University"],
  ["RESPONSIBILITY OF THE STATE", "## Responsibility of the State"],
  ["SOME WAYS AND MEANS", "## Some Ways and Means"],
  ["UNTO THE LAST", "## Unto the Last"],
]);

const FIXES = [
  [/\bWuat 1s\b/g, "WHAT IS"],
  [/\bTwin CULTURES\b/g, "TWIN CULTURES"],
  [/\bTHe\. Tamit LANGUAGE\b/g, "THE TAMIL LANGUAGE"],
  [/\bpdpularising\b/g, "popularising"],
  [/\blihgt\b/g, "light"],
  [/\bnecessaray\b/g, "necessary"],
  [/\breascn\b/g, "reason"],
  [/\bsuperfiuous\b/g, "superfluous"],
  [/\bmaner\b/g, "manner"],
  [/\binter-nationality\b/g, "international"],
  [/\bBakthi\b/g, "Bhakti"],
  [/\bPerfect Mar\b/g, "Perfect Man"],
  [/\biff\b/g, "in"],
  [/\bMatas\b/g, "Madras"],
  [/\.a new/g, ". a new"],
  [/\bSaivaism\b/g, "Saivism"],
  [/\bSiddantha\b/g, "Siddhanta"],
  [/\bAnghor\b/g, "Angkor"],
  [/\bBaratha Natyam\b/g, "Bharata Natyam"],
  [/\bThiruvalluvar\b/g, "Tiruvalluvar"],
  [/\bCulawamsa\b/g, "Culavamsa"],
  [/\bBhodisattva\b/g, "Bodhisattva"],
  [/\bBhodhidharmar\b/g, "Bodhidharma"],
  [/\bVajirabhodhi\b/g, "Vajrabodhi"],
  [/\bAvaloketiswara\b/g, "Avalokitesvara"],
  [/\bSidatsangarawa\b/g, "Sidatsangarava"],
  [/<A copy/g, "A copy"],
  [/\bThere~is\b/g, "There is"],
  [/\bsuch-that\b/g, "such that"],
  [/\bseen-the\b/g, "seen the"],
  [/\bable'to\b/g, "able to"],
  [/\bChinese, Javanese\b/g, "Chinese, Japanese"],
  [/Asia Asia/g, "Asia"],
  [/\bframe-work\b/g, "framework"],
  [/^_\s+/, ""],
  [/^-Viharas/, "Viharas"],
  [/^-Yavanar/, "Yavanar"],
  [/^-Africa/, "Africa"],
];

const TAMIL_JUNK =
  /urges Qurpani|Qofsra @smgw|Vemrueo_wriits|ys@pr@|Un peutiee|ior ger Carer|Srawer srud|STET CPUS|Yapss Gawd|wr gb aexGy|siéQeer|Cot stor ue/;

const bodyPages = [];
const notes = [];

for (let leaf = 1374; leaf <= 1397; leaf++) {
  const raw = fs.readFileSync(path.join(rawDir, `n${leaf}.txt`), "utf8");
  const lines = raw.split(/\r?\n/).map((ln) => ln.replace(/\s+$/, ""));
  let fnAt = null;
  for (let i = 0; i < lines.length; i++) {
    if (isHeader(lines[i])) continue;
    if (isFootnoteStart(lines[i]) && i >= Math.max(8, (lines.length / 3) | 0)) {
      fnAt = i;
      break;
    }
    if (
      lines[i].includes("See Articles by Swami Gnana Prakasar") &&
      i > 10
    ) {
      fnAt = i;
      break;
    }
  }
  const body = fnAt == null ? lines : lines.slice(0, fnAt);
  if (fnAt != null) {
    notes.push(
      lines
        .slice(fnAt)
        .map((x) => x.trim())
        .filter((x) => x && !isHeader(x))
        .join(" "),
    );
  }

  const cleaned = [];
  for (const ln of body) {
    let s = ln.trim();
    if (!s || isHeader(s)) {
      cleaned.push("");
      continue;
    }
    if (/^\d+\s*\.?$/.test(s) && s.length <= 4) continue;
    s = s.replace(/¬/g, "");
    s = s
      .replace(/[\u2018\u2019]/g, "'")
      .replace(/[\u201c\u201d]/g, '"');
    for (const [a, b] of FIXES) s = s.replace(a, b);
    const key = s.replace(/\s+/g, " ").toUpperCase().replace(/[.?]+$/, "");
    let matched = null;
    for (const [k, v] of SECTION_EXACT) {
      if (key === k.replace(/[.?]+$/, "")) {
        matched = v;
        break;
      }
    }
    if (matched) cleaned.push(matched);
    else if (/^SOME Ways AND Means/i.test(s))
      cleaned.push("## Some Ways and Means");
    else if (/^UNTO THE LAST/i.test(s)) cleaned.push("## Unto the Last");
    else cleaned.push(s);
  }
  bodyPages.push(cleaned);
}

const flat = [];
for (const page of bodyPages) {
  flat.push("");
  flat.push(...page);
}

const paras = [];
let buf = [];

function flush() {
  if (!buf.length) return;
  const joined = [];
  for (const part of buf) {
    if (
      joined.length &&
      joined[joined.length - 1].endsWith("-") &&
      /^[a-z]/.test(part)
    ) {
      joined[joined.length - 1] =
        joined[joined.length - 1].slice(0, -1) + part;
    } else joined.push(part);
  }
  let text = joined.join(" ").replace(/\s+/g, " ").trim();
  buf = [];
  if (!text) return;
  if (text.startsWith("## ")) {
    paras.push(text);
    return;
  }
  if (/^Tamil Culture—Its Past/.test(text)) return;
  if (/^Its Present and Its Future/.test(text)) return;
  if (/^with special reference/i.test(text)) return;
  if (/^,? ?Xavier S\. THANI/i.test(text)) return;
  if (
    text.startsWith("* An address") ||
    text.startsWith("_ Society") ||
    text.startsWith("An address delivered")
  )
    return;
  if (TAMIL_JUNK.test(text)) {
    if (text.includes("Every country is my country")) {
      paras.push(
        "> Every country is my country;\n> Every man is my kinsman.\n\n*(Tamil original — see scan.)*",
      );
    } else {
      paras.push("> *(Tamil verse — see scan.)*");
    }
    return;
  }
  text = text
    .replace(/"Tt /g, '"It ')
    .replace(/"'T have/g, '"I have')
    .replace(/More copious/g, "more copious")
    .replace(/palm,\. the/g, "palm, the")
    .replace(/to the\./g, "to the")
    .replace(/"peoples/g, "peoples")
    .replace(/Islandwide/g, "Island-wide")
    .replace(/allembracing/g, "all-embracing")
    .replace(/of\. a new/g, "of a new")
    .replace(/preservation\. of/g, "preservation of")
    .replace(/by a two thousand years/g, "by two thousand years")
    .replace(/[®™]+/g, "")
    .replace(/\s+([.,;:])/g, "$1")
    .replace(/([.,;:]){2,}/g, "$1")
    .replace(/"\s+/g, '"')
    .replace(/\s+"/g, '"')
    .replace(/Island\.\?/g, "Island.")
    .replace(/Provinces\.\.:/g, "Provinces.")
    .replace(/Provinces\.:/g, "Provinces.")
    .replace(/,\./g, ".");
  text = text.replace(/"([^"]+)"/g, (_, inner) => `"${inner.trim()}"`);
  paras.push(text);
}

for (const ln of flat) {
  const s = typeof ln === "string" ? ln.trim() : "";
  if (!s) {
    flush();
    continue;
  }
  if (s.startsWith("## ")) {
    flush();
    paras.push(s);
    continue;
  }
  buf.push(s);
}
flush();

const out = [];
for (const p of paras) {
  if (p.startsWith("today throbs") && out.length) {
    out[out.length - 1] = out[out.length - 1].replace(/\.$/, "") + ". Asia " + p;
    continue;
  }
  out.push(p);
}

const header = `# Tamil Culture—Its Past, Its Present and Its Future

> Re-OCR’d from Internet Archive page images (*Tamil Culture*, Vol. IV No. 4, 1955, pp. 341–364; IA leaves 1374–1397) and lightly edited for readability. Hyphenation rejoined; page headers and footnote blocks separated; obvious character errors corrected against the scan. Tamil verse that remains unclear is marked — prefer the scan view for citations.

## Contents

1. Opening
2. What is Culture?
3. The Antiquity of Tamil Culture in Ceylon
4. Twin Cultures
5. The Tamil Language
6. Tamil Literature
7. Ideals of Life
8. Present State
9. Tamil at the University
10. Responsibility of the State
11. Some Ways and Means
12. Unto the Last

## Opening

Xavier S. Thani Nayagam · *Tamil Culture*, Vol. IV No. 4 (1955), pp. 341–364

*An address delivered under the auspices of the Tamil Cultural Society, Colombo, 2 August 1955.*

`;

let final =
  header +
  out.join("\n\n") +
  "\n\n### Notes\n\n> Footnotes remain noisy in OCR; prefer the scan for citation. Selected bibliographic anchors:\n\n";

const seen = new Set();
let n = 1;
for (const note of notes) {
  let cleaned = note.replace(/\s+/g, " ").trim();
  cleaned = cleaned.replace(/^[\d*•"“]+\s*/, "");
  if (cleaned.length < 50) continue;
  if (/TAMIL CULTURE \|/.test(cleaned)) continue;
  const key = cleaned.slice(0, 70);
  if (seen.has(key)) continue;
  seen.add(key);
  final += `${n}. ${cleaned.slice(0, 420)}\n\n`;
  n += 1;
  if (n > 12) break;
}

fs.writeFileSync(outPath, final);
console.log(
  "Wrote",
  outPath,
  final.length,
  "Tamil Culture is nothing:",
  final.includes("Tamil Culture is nothing"),
  "immemorial:",
  final.includes("from time immemorial"),
  "bleed:",
  final.split("### Notes")[0].includes("See Articles by Swami"),
);
