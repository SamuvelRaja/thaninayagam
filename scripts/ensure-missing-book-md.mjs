#!/usr/bin/env node
/**
 * Ensure every catalogue document has a content/books/*.md file and bookMd wiring.
 * Creates archival / companion markdown where full OCR is unavailable (IA 403 / stubs).
 *
 * Usage: node scripts/ensure-missing-book-md.mjs
 */
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const ROOT = process.cwd();
const BOOKS = path.join(ROOT, "content", "books");
const DOCS_EN = path.join(ROOT, "content", "documents", "en");
const DOCS_TA = path.join(ROOT, "content", "documents", "ta");
const TAMILARAM = path.join(BOOKS, "tamilaram.md");
const COLLECTED = path.join(BOOKS, "collected-papers.md");

function writeBook(name, title, note, body) {
  const md = [
    `# ${title}`,
    "",
    `> ${note}`,
    "",
    "## Article text",
    "",
    body.trim(),
    "",
  ].join("\n");
  fs.writeFileSync(path.join(BOOKS, `${name}.md`), md, "utf8");
  console.log(`wrote content/books/${name}.md (${md.length} chars)`);
}

function setBookMd(filePath, bookMd, status) {
  if (!fs.existsSync(filePath)) {
    console.warn(`skip missing doc ${filePath}`);
    return;
  }
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  data.bookMd = bookMd;
  if (status) data.status = status;
  const next = matter.stringify(content.replace(/^\n+/, ""), data);
  fs.writeFileSync(filePath, next, "utf8");
  console.log(`wired ${path.relative(ROOT, filePath)} → ${bookMd}`);
}

const tamilaram = fs.readFileSync(TAMILARAM, "utf8");
const collected = fs.readFileSync(COLLECTED, "utf8");

const carthStart = tamilaram.indexOf(
  "His doctoral thesis was the “outcome of a",
);
const carthEnd = tamilaram.indexOf(
  "On the academic and somewhat secular side of the American tour",
  carthStart,
);

const refStart = tamilaram.indexOf(
  "Some three decades ago, Father Thani Nayagam began to feel",
);
const refEnd = tamilaram.indexOf(
  "In retrospect it would appear that Father Thani Nayagam was particularly well",
  refStart,
);

const civStart = tamilaram.indexOf(
  "An easier way of entering into the riches of Tamil literature",
);
const civEnd = tamilaram.indexOf(
  "In the context of the machine-oriented industrial culture",
  civStart,
);

const papersQuote = collected.slice(
  collected.indexOf("His main\nContribution to Tamilology"),
  collected.indexOf("In this work we have brought out"),
);

const books = [
  {
    slug: "carthaginian-clergy",
    title: "The Carthaginian Clergy",
    status: "lending",
    note: "Archive article for the 1950 Tuticorin / American editions. Full OCR is not yet available locally (Internet Archive controlled lending). Memorial-volume context below.",
    body: [
      "### Publication note",
      "",
      "Open Library records *The Carthaginian clergy during the episcopate of Saint Cyprian* (Tamil Literature Society, Tuticorin, 1950; xviii, 112 p.), growing out of Thani Nayagam’s Roman doctoral research on St Cyprian’s episcopate (248–258 AD). An American souvenir edition appeared around his 1950 lecture tour. Internet Archive holds a controlled-lending scan (`bwb_W8-ANY-806`).",
      "",
      "### Memorial-volume context (*Tamilāram*)",
      "",
      carthStart > 0
        ? tamilaram.slice(carthStart, carthEnd > 0 ? carthEnd : carthStart + 2500).trim()
        : "_Excerpt not located in local Tamilāram OCR._",
    ].join("\n"),
  },
  {
    slug: "reference-guide-tamil-studies-1966",
    title: "A Reference Guide to Tamil Studies (1966)",
    status: "lending",
    note: "Archive article for the University of Malaya Press bibliography. Full OCR is not yet available locally (Internet Archive controlled lending). Memorial and Collected Papers context below.",
    body: [
      "### Publication note",
      "",
      "University of Malaya Press, Kuala Lumpur, 1966 (viii, 122 p.; English). Distributed via Oxford University Press, London. Internet Archive identifier: `referenceguideto0000xavi` (controlled lending).",
      "",
      "### From the Collected Papers preface",
      "",
      papersQuote.trim() || "_Excerpt not located._",
      "",
      "### Memorial-volume mention (*Tamilāram*)",
      "",
      refStart > 0
        ? tamilaram.slice(refStart, refEnd > 0 ? refEnd : refStart + 1800).trim()
        : "_Excerpt not located._",
    ].join("\n"),
  },
  {
    slug: "tamil-studies-abroad",
    title: "Tamil Studies Abroad: A Symposium",
    status: "lending",
    note: "Archive article for the 1968 IATR symposium. Full OCR is not yet available locally (Internet Archive controlled lending). Opening quotation from Collected Papers and memorial context below.",
    body: [
      "### Publication note",
      "",
      "International Association for Tamil Research, Kuala Lumpur, 1968 (*Tamil Studies Abroad: a Symposium*; ~288 p.). Internet Archive identifier: `tamilstudiesabro0000unse` (print-disabled / in-library lending).",
      "",
      "### Quotation preserved in *Collected Papers*",
      "",
      'The Collected Papers preface cites this volume and quotes Thani Nayagam on the state of Tamil studies abroad:',
      "",
      '> “Though Tamil is a Dravidian language with ancient and uninterrupted literary and artistic tradition, it is studied in most foreign Universities mostly either because of its peculiar linguistic characteristics or because it is a tool for field work in Tamil district… Tamil literature, Philosophy and religion are not so widely known as Tamil linguistics and contemporary social and political movements.”',
      "",
      "### Memorial-volume mention (*Tamilāram*)",
      "",
      refStart > 0
        ? tamilaram.slice(refStart, refEnd > 0 ? refEnd : refStart + 1800).trim()
        : "_Excerpt not located._",
    ].join("\n"),
  },
  {
    slug: "ore-ulakam",
    title: "ஒரே உலகம்",
    status: "partial",
    note: "Archive article for the Tamil travel volume. No public unrestricted scan located yet; bibliographic note and related reading paths below.",
    body: [
      "### Publication note",
      "",
      "Open Library records *On̲r̲ē ulakam* (*ஒரே உலகம்*) as a Tamil voyages-and-travels volume (vii, 230 p., dated 1966). Tamil Wikipedia describes it as reflections from his world lecture tours and dates publication to 1963. Both dates are retained until a title leaf is checked.",
      "",
      "### Related reading on this site",
      "",
      "- *Collected Speeches of Thani Nayagam Adigal* (1999) — Tamil speeches from lecture tours",
      "- *Tamilāram* (1983 memorial volume) — biographical essays on the tours and diaspora work",
      "- Conference-seminar proceedings (1966 / 1968) — institutional context of the world Tamil network",
    ].join("\n"),
  },
  {
    slug: "tamil-culture-and-civilization",
    title: "Tamil Culture and Civilization",
    status: "partial",
    note: "Archive article for the Asia Publishing House anthology of classical-period readings. No public unrestricted full text located yet; memorial-volume context below.",
    body: [
      "### Publication note",
      "",
      "Open Library records *Tamil culture and civilization: readings: the classical period*, selected and introduced by X. S. Thani Nayagam (Asia Publishing House, New York, 1971; ix, 233 p.). Memorial essays sometimes date the volume 1970.",
      "",
      "### Memorial-volume context (*Tamilāram*)",
      "",
      civStart > 0
        ? tamilaram.slice(civStart, civEnd > 0 ? civEnd : civStart + 1200).trim()
        : "_Excerpt not located._",
      "",
      "### Related reading on this site",
      "",
      "- *Landscape and Poetry* — nature in classical Tamil poetry",
      "- *Tamil Culture* journal volumes — essays he edited and contributed",
      "- Classical literature articles (education, humanism, Stoicism) excerpted from *Tamil Culture*",
    ].join("\n"),
  },
  {
    slug: "research-in-tamil-studies",
    title: "Research in Tamil Studies",
    status: "partial",
    note: "Archive article for the 1980 Thanthai Chelva Memorial Lecture. No public scan attached yet; bibliographic note and on-site related reading below.",
    body: [
      "### Publication note",
      "",
      "Open Library lists *Research in Tamil Studies* (1980) among his works. This archive’s publications list identifies it as the Thanthai Chelva Memorial Lecture. Pagination and publisher are not yet confirmed against a title leaf.",
      "",
      "### Related reading on this site",
      "",
      "- *A Reference Guide to Tamil Studies* (1966) — bibliographic survey (lending scan)",
      "- *Tamil Studies Abroad* (1968) — symposium on international Tamil research (lending scan)",
      "- *Collected Papers of Thani Nayagam Adigalar* (1995) — posthumous English essays",
      "- First International Conference-Seminar Proceedings (1966 / 1968)",
    ].join("\n"),
  },
  {
    slug: "tamilar-panpatu",
    title: "தமிழர் பண்பாடு நேற்றும் இன்றும் நாளையும்",
    status: "partial",
    note: "Archive article for the Tamil Wikipedia-listed title on Tamil culture yesterday, today, and tomorrow. Independent edition not yet verified; companion paths below.",
    body: [
      "### Publication note",
      "",
      "Tamil Wikipedia lists *தமிழர் பண்பாடு நேற்றும் இன்றும் நாளையும்* among Thani Nayagam’s writings. No Open Library edition or unrestricted digitised copy has been verified for this archive.",
      "",
      "### Related reading on this site",
      "",
      "- *Tamil Culture* journal volumes (1952–1966) — English essays on Tamil civilization",
      "- *Tamilāram* (1983) — memorial essays on culture and diaspora",
      "- Educational and humanism articles excerpted from *Tamil Culture*",
      "- Survival of Tamil Culture / Tamil Culture (1952) essays",
    ].join("\n"),
  },
  {
    slug: "complete-works",
    title: "Complete works of Thani Nayaga Adigalaar",
    status: "partial",
    note: "Archive article for the Open Library 2013 complete-works compilation record. Contents are not leaf-verified; this page maps the compilation idea to holdings already readable on this site.",
    body: [
      "### Publication note",
      "",
      "Open Library work OL23266030W lists *Complete works of Thani Nayaga Adigalaar* (2013). Treat as a posthumous compilation until an authorised contents list is confirmed. No public digitised reading copy of that compilation was found.",
      "",
      "### On-site holdings that already carry full or partial text",
      "",
      "| Area | Document pages |",
      "| --- | --- |",
      "| Nature / landscape | *Nature in Ancient Tamil Poetry*, *Landscape and Poetry*, *Nature Poetry in Tamil*, ethical-interpretation article |",
      "| Classical literature articles | Indian Thought and Roman Stoicism; Educational Thoughts; Humanism companions; Tiruvalluvar |",
      "| Journals / conference | *Tamil Culture* vols; Conference-Seminar 1966 proceedings |",
      "| Collected volumes | *Collected Papers* (1995); *Collected Speeches* (1999); *Tamilāram* (1983 memorial) |",
      "| Reference / IATR | Reference Guide; Tamil Studies Abroad (lending scans — article notes on site) |",
      "",
      "When a verified complete-works edition becomes available, this page can be upgraded to point at that authorised contents list.",
    ].join("\n"),
  },
];

for (const book of books) {
  writeBook(book.slug, book.title, book.note, book.body);
  setBookMd(path.join(DOCS_EN, `${book.slug}.md`), book.slug, book.status);
  setBookMd(path.join(DOCS_TA, `${book.slug}.md`), book.slug, book.status);
}

// Verify every EN doc has resolvable bookMd
let missing = 0;
for (const f of fs.readdirSync(DOCS_EN).filter((x) => x.endsWith(".md"))) {
  const { data } = matter(fs.readFileSync(path.join(DOCS_EN, f), "utf8"));
  if (!data.bookMd) {
    console.error(`MISSING bookMd: ${f}`);
    missing++;
    continue;
  }
  const p = path.join(BOOKS, `${data.bookMd}.md`);
  if (!fs.existsSync(p) || !fs.readFileSync(p, "utf8").trim()) {
    console.error(`EMPTY/MISSING book file: ${data.bookMd} (from ${f})`);
    missing++;
  }
}
if (missing) {
  console.error(`\n${missing} problem(s) remain`);
  process.exit(1);
}
console.log("\nAll EN documents have non-empty bookMd markdown.");
