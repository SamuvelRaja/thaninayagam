#!/usr/bin/env node
/**
 * Finish remaining partial holdings: strengthen on-site reading text and
 * mark EN/TA document pages readable.
 *
 * Usage: node scripts/complete-partials.mjs
 */
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const ROOT = process.cwd();
const BOOKS = path.join(ROOT, "content/books");
const OCR = path.join(ROOT, "workbench/research/ia-text/ocr-fix");

function writeBook(name, title, note, body) {
  const md = `# ${title}\n\n> ${note}\n\n## Book text\n\n${body.trim()}\n`;
  fs.writeFileSync(path.join(BOOKS, `${name}.md`), md, "utf8");
  console.log(`book ${name} (${md.length} chars)`);
}

function readBook(name) {
  const p = path.join(BOOKS, `${name}.md`);
  if (!fs.existsSync(p)) return "";
  return fs
    .readFileSync(p, "utf8")
    .replace(/^#[^\n]*\n+/, "")
    .replace(/^>[\s\S]*?\n\n/, "")
    .replace(/^## (Book|Article) text\n+/i, "")
    .trim();
}

function patchDoc(slug, { bookMd, status, summary, rights, body }) {
  for (const lang of ["en", "ta"]) {
    const p = path.join(ROOT, "content/documents", lang, `${slug}.md`);
    if (!fs.existsSync(p)) continue;
    const raw = fs.readFileSync(p, "utf8");
    const { data, content } = matter(raw);
    if (bookMd) data.bookMd = bookMd;
    if (status) data.status = status;
    if (summary) data.summary = summary;
    if (rights) data.rights = rights;
    const nextBody = body?.[lang] ?? body?.en ?? content;
    fs.writeFileSync(
      p,
      matter.stringify(String(nextBody).replace(/^\n+/, ""), data),
    );
  }
  console.log(`doc ${slug} → ${status || "unchanged"}`);
}

const nature = readBook("nature-ancient-tamil-poetry");
const edu = readBook("educational-thoughts-ancient-tamil");
const poetStart = edu.indexOf("## Ancient Tamil Poet-Educators");
const poetEducators =
  poetStart >= 0
    ? edu.slice(poetStart).trim()
    : readBook("aspects-tamil-humanism");

const landscapeLeaves = fs
  .readdirSync(OCR)
  .filter((f) => /^landscape-leaf\d+\.txt$/.test(f))
  .sort((a, b) => Number(a.match(/\d+/)[0]) - Number(b.match(/\d+/)[0]))
  .map((f) => {
    const n = f.match(/\d+/)[0];
    const text = fs.readFileSync(path.join(OCR, f), "utf8").trim();
    return text ? `### Scan leaf ${n}\n\n${text}` : "";
  })
  .filter(Boolean);

// --- Landscape: full nature OCR as readable body of the monograph line ---
writeBook(
  "landscape-and-poetry",
  "Landscape and Poetry",
  "Readable on-site text for the Landscape and Poetry monograph line (Asia Publishing House 1966 / IITS 1997). The local Landscape PDF derivative is corrupt; IA page download is blocked here. Full eng re-OCR of the 1953 *Nature in Ancient Tamil Poetry* (same research line; later revised as Landscape and Poetry) follows, with Landscape title-leaf OCR samples first.",
  [
    "### Edition note",
    "",
    "1953 *Nature in Ancient Tamil Poetry* → 1963 *Nature Poetry in Tamil* → 1966/1967 *Landscape and Poetry*. Full 1953 eng OCR is the complete on-site reading text for this line until a clean Landscape PDF is available.",
    "",
    "### Landscape and Poetry — title-leaf samples (eng OCR)",
    "",
    landscapeLeaves.join("\n\n") || "_No local leaf OCR._",
    "",
    "### Full text (1953 edition eng OCR)",
    "",
    nature,
  ].join("\n"),
);

// --- Humanism pair: cleaned Poet-Educators ---
const humanismNote =
  "Bunker Memorial Lectures / Jaffna College humanism theme (1972). Independent monograph scan not found; on-site reading is the cleaned *Tamil Culture* essay *Ancient Tamil Poet-Educators*, which develops classical Tamil humanism.";

writeBook(
  "aspects-tamil-humanism",
  "Aspects of Tamil Humanism",
  humanismNote,
  [
    "### Publication note",
    "",
    "*Tamilāram* records that Thani Nayagam’s 1972 Bunker Memorial Lectures at Jaffna College were on “Aspects of Tamil Humanism”. Open Library lists the related short monograph *Tamil Humanism, the Classical Period* (Jaffna College, 1972).",
    "",
    "### Ancient Tamil Poet-Educators (*Tamil Culture*, cleaned)",
    "",
    poetEducators,
  ].join("\n"),
);

writeBook(
  "tamil-humanism",
  "Tamil Humanism, the Classical Period",
  humanismNote,
  [
    "### Publication note",
    "",
    "Open Library: *Tamil humanism, the classical period* by Xavier S. Thani Nayagam, Jaffna College, 1972 (57 p.). Companion lecture title: “Aspects of Tamil Humanism”.",
    "",
    "### Ancient Tamil Poet-Educators (*Tamil Culture*, cleaned)",
    "",
    poetEducators,
  ].join("\n"),
);

// --- Complete works: living index of readable holdings ---
const holdings = fs
  .readdirSync(path.join(ROOT, "content/documents/en"))
  .filter((f) => f.endsWith(".md"))
  .map((f) => {
    const { data } = matter(
      fs.readFileSync(path.join(ROOT, "content/documents/en", f), "utf8"),
    );
    return data;
  })
  .filter(
    (d) =>
      d.status === "readable" ||
      [
        "landscape-and-poetry",
        "ore-ulakam",
        "research-in-tamil-studies",
        "tamil-culture-and-civilization",
        "aspects-tamil-humanism",
        "tamil-humanism",
        "ulaga-ozhakkaviyalil-tirukkural",
      ].includes(d.slug),
  )
  .sort((a, b) => String(a.year).localeCompare(String(b.year)) || a.title.localeCompare(b.title));

writeBook(
  "complete-works",
  "Complete works of Thani Nayaga Adigalaar",
  "Open Library lists a 2013 complete-works compilation (contents not leaf-verified). This page is the on-site reading index into digitised holdings already hosted here.",
  [
    "### Publication note",
    "",
    "Treat OL work OL23266030W as a compilation claim until an authorised contents list is confirmed. Below is the readable corpus available on this archive.",
    "",
    "### Readable holdings on this archive",
    "",
    ...holdings.map(
      (d) =>
        `- **${d.title}**${d.year ? ` (${d.year})` : ""} — [/en/archive/documents/${d.slug}/](/en/archive/documents/${d.slug}/)`,
    ),
    "",
    "### Opening of Collected Papers (posthumous English selection)",
    "",
    readBook("collected-papers").slice(0, 25_000),
  ].join("\n"),
);

const rightsReadable =
  "Hosted for on-site reading from Internet Archive public derivatives and cleaned OCR where noted. Machine OCR may contain errors. Rights remain with the original publishers / depositors.";
const rightsCompanion =
  "On-site reading text assembled from public Internet Archive OCR of related works (companion / edition-line reading). Machine OCR may contain errors. Rights remain with the original publishers / depositors.";

const patches = [
  {
    slug: "landscape-and-poetry",
    bookMd: "landscape-and-poetry",
    status: "readable",
    summary:
      "Study of nature and landscape in classical Tamil poetry (monograph line with Nature in Ancient Tamil Poetry).",
    rights: rightsReadable,
    body: {
      en: `## Bibliographic record

Internet Archive holds a digitised reading copy (about 157 scan leaves). Open Library records about 151 printed pages. Item metadata incorrectly labels the language as Tamil; the work is English.

## How to read

Full on-site reading text follows: Landscape title-leaf samples plus the complete eng OCR of the 1953 *Nature in Ancient Tamil Poetry* edition in the same monograph line (later revised as this title). Prefer the scan when OCR disagrees.
`,
      ta: `## நூலியல் பதிவு

Internet Archive டிஜிட்டல் பிரதி உள்ளது (~157 ஸ்கேன் இலைகள்). Open Library ~151 அச்சுப் பக்கங்கள். மொழி மெட்டாடேட்டா தவறாகத் தமிழ் எனக் கூறலாம்; நூல் ஆங்கிலம்.

## வாசிப்பு

இத்தள வாசிப்பு உரை கீழே: Landscape முகப்பு மாதிரிகளும், அதே ஆய்வு வரிசையின் 1953 *Nature in Ancient Tamil Poetry* முழு eng OCR-ம் (பின்னர் இந்நூலாகத் திருத்தப்பட்டது). OCR வேறுபட்டால் ஸ்கேன் முதன்மை.
`,
    },
  },
  {
    slug: "nature-poetry-in-tamil",
    status: "readable",
    rights: rightsReadable,
  },
  {
    slug: "aspects-tamil-humanism",
    bookMd: "aspects-tamil-humanism",
    status: "readable",
    rights: rightsCompanion,
    body: {
      en: `## Bibliographic record

Memorial sources identify the 1972 Bunker Memorial Lectures at Jaffna College as “Aspects of Tamil Humanism”. Related Open Library monograph: *Tamil Humanism, the Classical Period* (1972).

## How to read

Cleaned *Tamil Culture* essay *Ancient Tamil Poet-Educators* follows as the on-site humanism reading text until the lecture volume is digitised.
`,
      ta: `## நூலியல் பதிவு

1972 யாழ்ப்பாணக் கல்லூரி Bunker நினைவு உரைகள் “Aspects of Tamil Humanism” என நினைவுத் தொகுதிகளில் குறிக்கப்படுகின்றன. தொடர்புடைய நூல்: *Tamil Humanism, the Classical Period* (1972).

## வாசிப்பு

சுத்தப்படுத்தப்பட்ட *Tamil Culture* கட்டுரை *Ancient Tamil Poet-Educators* கீழே உள்ளது — உரைத் தொகுதி டிஜிட்டல் ஆகும் வரை இத்தள வாசிப்பு உரை.
`,
    },
  },
  {
    slug: "tamil-humanism",
    bookMd: "tamil-humanism",
    status: "readable",
    rights: rightsCompanion,
    body: {
      en: `## Bibliographic record

Open Library records *Tamil humanism, the classical period* (Jaffna College, 1972; 57 p.).

## How to read

Cleaned *Tamil Culture* essay *Ancient Tamil Poet-Educators* follows as the on-site classical-humanism reading text until the 1972 monograph scan is available.
`,
      ta: `## நூலியல் பதிவு

Open Library *Tamil humanism, the classical period* (யாழ்ப்பாணக் கல்லூரி, 1972; 57 பக்.) எனப் பதிவு செய்கிறது.

## வாசிப்பு

சுத்தப்படுத்தப்பட்ட *Tamil Culture* கட்டுரை *Ancient Tamil Poet-Educators* கீழே உள்ளது — 1972 நூல் ஸ்கேன் கிடைக்கும் வரை இத்தள வாசிப்பு உரை.
`,
    },
  },
  {
    slug: "ulaga-ozhakkaviyalil-tirukkural",
    bookMd: "tiruvalluvar",
    status: "readable",
    rights: rightsCompanion,
    body: {
      en: `## Bibliographic record

Tamil Wikipedia lists *உலக ஒழுக்கவியலில் திருக்குறள்* among his writings. Independent edition details are not yet Open Library–verified. The verified Tiruvalluvar monograph is *திருவள்ளுவர்* (Annamalai University, 1967).

## How to read

Full OCR of the 1967 *திருவள்ளுவர்* lectures follows on this page (companion reading for the Wikipedia-listed ethics title).
`,
      ta: `## நூலியல் பதிவு

தமிழ் விக்கிப்பீடியா *உலக ஒழுக்கவியலில் திருக்குறள்* எனப் பட்டியலிடுகிறது. தனியான பதிப்பு Open Library-ல் உறுதிப்படுத்தப்படவில்லை. உறுதியான நூல்: *திருவள்ளுவர்* (அண்ணாமலைப் பல்கலைக்கழகம், 1967).

## வாசிப்பு

1967 *திருவள்ளுவர்* விரிவுரைகளின் முழு OCR இப்பக்கத்தில் தொடர்கிறது (விக்கிப்பீடியாப் பட்டியல் தலைப்புக்கான துணை வாசிப்பு).
`,
    },
  },
  {
    slug: "ore-ulakam",
    bookMd: "ore-ulakam",
    status: "readable",
    rights: rightsCompanion,
    summary:
      "Tamil travel / lecture-tour reflections; on-site reading via memorial context and Collected Speeches.",
    body: {
      en: `## Bibliographic record

Open Library records *ஒரே உலகம்* (vii, 230 p.; voyages and travels; dated 1966). Tamil Wikipedia describes world lecture-tour reflections and dates publication to 1963.

## How to read

No separate public scan of *ஒரே உலகம்* was found. On-site reading below: memorial-volume tour context plus the full 1999 *Collected Speeches* volume (Tamil lecture corpus from the same world-tour activity).
`,
      ta: `## நூலியல் பதிவு

Open Library *ஒரே உலகம்* (vii, 230 பக்.; பயணம்; 1966) எனப் பதிவு செய்கிறது. தமிழ் விக்கிப்பீடியா உலக உரைச் சுற்று நினைவுகள் என 1963 எனக் கூறுகிறது.

## வாசிப்பு

*ஒரே உலகம்* தனியான பொது ஸ்கேன் கிடைக்கவில்லை. கீழே: நினைவுத் தொகுதிச் சுற்றுச் சூழலும் 1999 சொற்பொழிவுத் தொகுதியின் முழு உரையும் (அதே உலக உரைச் செயல்பாட்டின் தமிழ் உரைக் கருவூலம்).
`,
    },
  },
  {
    slug: "research-in-tamil-studies",
    bookMd: "research-in-tamil-studies",
    status: "readable",
    rights: rightsCompanion,
    body: {
      en: `## Bibliographic record

Open Library lists *Research in Tamil Studies* (1980), identified here as the Thanthai Chelva Memorial Lecture.

## How to read

No public scan of the 1980 lecture was found. On-site reading below is a dossier of his Tamil Culture essays on the institutional and bibliographic side of Tamil research.
`,
      ta: `## நூலியல் பதிவு

Open Library *Research in Tamil Studies* (1980) எனப் பட்டியலிடுகிறது; இத்தளத்தில் தந்தை செல்வா நினைவு உரையாக அடையாளங்காணப்படுகிறது.

## வாசிப்பு

1980 உரையின் பொது ஸ்கேன் கிடைக்கவில்லை. கீழே தமிழாய்வு நிறுவன / நூலியல் தளத்தில் அவர் எழுதிய *Tamil Culture* கட்டுரைகளின் தொகுப்பு உள்ளது.
`,
    },
  },
  {
    slug: "tamil-culture-and-civilization",
    bookMd: "tamil-culture-and-civilization",
    status: "readable",
    rights: rightsCompanion,
    body: {
      en: `## Bibliographic record

Open Library records *Tamil culture and civilization: readings: the classical period* (Asia Publishing House, 1971; ix, 233 p.), selected and introduced by X. S. Thani Nayagam.

## How to read

No public scan of the 1971 anthology was found. On-site reading below collects his closest classical-culture essays already digitised (also available inside *Tamil Culture* vols 1–12).
`,
      ta: `## நூலியல் பதிவு

Open Library *Tamil culture and civilization: readings: the classical period* (Asia Publishing House, 1971; ix, 233 பக்.) எனப் பதிவு செய்கிறது.

## வாசிப்பு

1971 தொகுப்பின் பொது ஸ்கேன் கிடைக்கவில்லை. கீழே ஏற்கனவே டிஜிட்டல் ஆகிய செவ்வியல் பண்பாட்டுக் கட்டுரைகள் (மேலும் *Tamil Culture* தொகுதிகள் 1–12 இல்).
`,
    },
  },
  {
    slug: "complete-works",
    bookMd: "complete-works",
    status: "readable",
    rights: rightsCompanion,
    summary:
      "Reading index for the Open Library 2013 complete-works record — maps to digitised holdings on this archive.",
    body: {
      en: `## Bibliographic record

Open Library work OL23266030W lists *Complete works of Thani Nayaga Adigalaar* (2013). Contents are not leaf-verified against an authorised edition.

## How to read

Use the on-site index below to open every readable holding already hosted in this archive. When a verified complete-works edition appears, this page can point to that authorised contents list.
`,
      ta: `## நூலியல் பதிவு

Open Library OL23266030W *Complete works of Thani Nayaga Adigalaar* (2013) எனப் பட்டியலிடுகிறது. உள்ளடக்கப் பட்டியல் இன்னும் உறுதிப்படுத்தப்படவில்லை.

## வாசிப்பு

கீழே உள்ள அட்டவணை இத்தளத்தில் ஏற்கனவே வாசிக்கக் கிடைக்கும் அனைத்து ஆவணங்களையும் காட்டுகிறது. அதிகாரப்பூர்வ முழுநூல் பதிப்பு கிடைத்தால் அதைச் சுட்டிக்காட்டலாம்.
`,
    },
  },
];

for (const p of patches) patchDoc(p.slug, p);

// Final check
const left = [];
for (const f of fs.readdirSync(path.join(ROOT, "content/documents/en"))) {
  if (!f.endsWith(".md")) continue;
  const { data } = matter(
    fs.readFileSync(path.join(ROOT, "content/documents/en", f), "utf8"),
  );
  if (data.status === "partial") left.push(data.slug);
}
console.log(left.length ? `Still partial: ${left.join(", ")}` : "No partials left in EN catalogue.");
