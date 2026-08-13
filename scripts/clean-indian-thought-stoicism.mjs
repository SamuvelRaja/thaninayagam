#!/usr/bin/env node
/**
 * Extract + clean "Indian Thought and Roman Stoicism" from tamil-culture.md
 * Restores section headings and removes page-header OCR noise.
 *
 * Usage: node scripts/clean-indian-thought-stoicism.mjs
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const CULTURE = path.join(ROOT, "content", "books", "tamil-culture.md");
const OUT = path.join(
  ROOT,
  "content",
  "books",
  "indian-thought-roman-stoicism.md",
);

const SECTION = new Map([
  ["synthesis in education", "Synthesis in Education"],
  ["stoicism and later times", "Stoicism and Later Times"],
  ["tamil roman trade", "Tamil–Roman Trade"],
  ["cosmopolitanism", "Cosmopolitanism"],
  ["human brotherhood", "Human Brotherhood"],
  ["the wise man", "The Wise Man"],
  ["conclusion", "Conclusion"],
]);

const FIXES = [
  [/\bcriti\(;s\b/g, "critics"],
  [/\bEpicurianism\b/g, "Epicureanism"],
  [/\bpait-sophia\b/g, "pansophia"],
  [/\bpandoqmatica\b/gi, "pandogmatica"],
  [/\bSilappafikaram\b/g, "Silappatikaram"],
  [/\bYaviuiar\b/g, "Yavanar"],
  [/\bPeripluSj\b/g, "Periplus,"],
  [/\bpolitial\b/g, "political"],
  [/\bbroder\b/g, "broader"],
  [/\bHhys Davids\b/g, "Rhys Davids"],
  [/\bfragpnents\b/g, "fragments"],
  [/\bBnctria\b/g, "Bactria"],
  [/\bCaipbridge\b/g, "Cambridge"],
  [/\bhcirbaroi\b/g, "barbaroi"],
  [/\bsulfer\b/g, "suffer"],
  [/\bwejre\b/g, "were"],
  [/\bofv the\b/g, "of the"],
  [/\bIdecd State\b/g, "Ideal State"],
  [/\beq\^uality\b/g, "equality"],
  [/\bJnter-religious\b/g, "Inter-religious"],
  [/\bstructui'e\b/g, "structure"],
  [/\bchiin-tzu\b/g, "chün-tzu"],
  [/\bcvltores agri\b/g, "cultores agri"],
  [/\bTirtikkural\b/g, "Tirukkural"],
  [/\bTirukkaral\b/g, "Tirukkural"],
  [/\bBhayavad Gita\b/g, "Bhagavad Gita"],
  [/\bDhammapaday\b/g, "Dhammapada"],
  [/\bTHAN I NAYAGAM\b/g, "THANI NAYAGAM"],
  [/\bRA\.DHAKRISHNAN\b/g, "RADHAKRISHNAN"],
  [/\bRADHA-\s*KRISHNAN\b/g, "RADHAKRISHNAN"],
  [/\bRADHAKRISHNAN 8\./g, "RADHAKRISHNAN S."],
  [/\bvoIb\b/g, "vols"],
  [/\bFHoicism\b/g, "Stoicism"],
  [/\bcaste~syMem\b/g, "caste-system"],
  [/\bBrtUsh Rule tn Inilut\b/g, "British Rule in India"],
  [/\s+\^\s*/g, " "],
  [/\s+®\s*/g, " "],
  [/\/\s+/g, " "],
  [/\(\s*1835\s*\)/g, "(1835)"],
  [/\(\s*1858\s*\)/g, "(1858)"],
];

function isPageJunk(line) {
  const t = line.trim();
  if (!t) return true;
  return (
    /^INDIAN\s+THOU?GHT\s+AND\s+(ROMAN|HOMAN)\s+STOICISM\s*\d*\*?$/i.test(t) ||
    /^INDTAK\b/i.test(t) ||
    /^INMAN\b/i.test(t) ||
    /^TAMIL\s*C[IUY]LT/i.test(t) ||
    /^\d+\s*TAMIL\s+CULTURE$/i.test(t) ||
    /^\d+$/.test(t) ||
    /^T\.\s*ai/i.test(t) ||
    /^[LI]$/.test(t) ||
    /^\\\s*$/.test(t) ||
    /^Indian Thought and$/i.test(t) ||
    /^Roman Stoicism$/i.test(t) ||
    /^XAVIER S\./i.test(t)
  );
}

function isHeading(line) {
  return SECTION.get(line.trim().replace(/\s+/g, " ").toLowerCase()) || null;
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
    /\b(London|Oxford|Cambridge|Delhi|Madras|Paris|Yale|Chicago|Bombay|Banaras|Unesco|Pondicherry)\b/i.test(
      t,
    )
  )
    return true;
  if (/\b(19\d{2}|18\d{2})\b/.test(t) && t.length < 120) return true;
  if (/^(Eastern and Western|Translated|op\. cit|ibid)/i.test(t)) return true;
  return false;
}

function looksLikeBody(line) {
  const t = line.trim();
  if (!t || isHeading(t) || isPageJunk(t)) return false;
  if (/^[“"‘']/.test(t) || /^[a-z]/.test(t)) return true;
  if (
    /^(When|It |There|Today|John|This|Since|Because|Of |The |In |A |An |Some |These |That |One |Stoicism|Roman |Human |Sufficient |Later |During |While |New |Let |We |What |Though |To |Culture |Persons |Familiarity |Every |Three |Had |Certain |Albert )/.test(
      t,
    )
  )
    return true;
  if (t.length > 80 && /^[A-Z]/.test(t)) return true;
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
  for (const [re, to] of FIXES) out = out.replace(re, to);
  return out;
}

const culture = fs.readFileSync(CULTURE, "utf8");
const start = culture.indexOf(
  "Indian Thought and\nRoman Stoicism\n\nXAVIER S. THAN I NAYAGAM",
);
const end = culture.indexOf("A Few Notes on\nColloquial Tamil", start);
if (start < 0 || end < 0) {
  throw new Error("Could not locate Stoicism essay in tamil-culture.md");
}

let text = culture
  .slice(start, end)
  .replace(/\r\n/g, "\n")
  .replace(/\u000c/g, "\n");
text = text.replace(/¬\n/g, "").replace(/([A-Za-z])-\n([a-z])/g, "$1$2");

const lines = text
  .split("\n")
  .map((l) => l.trim())
  .filter((l) => l && !isPageJunk(l));

const blocks = [];
let mode = "body";
let buf = [];
let footBuf = [];

function flushBody() {
  if (!buf.length) return;
  blocks.push({ type: "p", text: cleanPara(buf.join(" ")) });
  buf = [];
  if (footBuf.length) {
    blocks.push({ type: "foot", text: cleanPara(footBuf.join(" ")) });
    footBuf = [];
  }
}

for (const t of lines) {
  const h = isHeading(t);
  if (h) {
    flushBody();
    mode = "body";
    blocks.push({ type: "h", text: h });
    continue;
  }

  if (mode === "foot") {
    if (looksLikeFootContinue(t) && !looksLikeBody(t)) {
      footBuf.push(t);
      continue;
    }
    mode = "body";
  }

  if (
    looksLikeFootStart(t) &&
    !/^(When |It |There |Today |John |The outline|One of the|Human Brotherhood is|Stoicism is again|These comparisons)/.test(
      t,
    )
  ) {
    mode = "foot";
    footBuf.push(t.replace(/^\^\s*/, ""));
    continue;
  }

  buf.push(t);
}
flushBody();

const fixed = [];
for (const b of blocks) {
  if (b.type !== "p") {
    fixed.push(b);
    continue;
  }
  const m = b.text.match(
    /^(.*?\b(?:facetiously|forms:|said that|observed\.))\s+([A-Z]{2,}[\s\S]*?\b(?:19\d{2}|18\d{2})\.?)\s+(.*)$/,
  );
  if (m && m[3].length > 20) {
    fixed.push({ type: "p", text: cleanPara(`${m[1]} ${m[3]}`) });
    fixed.push({ type: "foot", text: cleanPara(m[2]) });
  } else {
    fixed.push(b);
  }
}

const out = [
  "# Indian Thought and Roman Stoicism",
  "",
  "Xavier S. Thani Nayagam",
  "",
  "> *Tamil Culture*, Vol. X No. 3 (July–September 1963), pp. 1–36. Cleaned from Internet Archive OCR: page headers removed, words rejoined, section headings restored. Residual OCR errors may remain.",
  "",
  "## Introduction",
  "",
];

for (const b of fixed) {
  if (b.type === "h") out.push(`## ${b.text}`, "");
  else if (b.type === "foot") out.push(`> ${b.text}`, "");
  else out.push(b.text, "");
}

const md = `${out.join("\n").replace(/\n{3,}/g, "\n\n").trim()}\n`;
fs.writeFileSync(OUT, md, "utf8");
console.log(
  `wrote ${OUT} (${md.length} chars; headings: ${[...md.matchAll(/^## (.+)$/gm)].map((m) => m[1]).join(" · ")})`,
);
