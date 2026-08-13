#!/usr/bin/env node
/**
 * Build markdown articles for Classical Tamil literature taxonomy titles
 * from Tamil Culture OCR (+ companion notes). Safe to re-run.
 *
 * Usage: node scripts/slice-classical-articles.mjs
 */
import fs from "node:fs";
import { spawnSync } from "node:child_process";
import path from "node:path";

const ROOT = process.cwd();
const BOOKS = path.join(ROOT, "content", "books");
const CULTURE = path.join(BOOKS, "tamil-culture.md");
const TAMILARAM = path.join(BOOKS, "tamilaram.md");
const TIRUV = path.join(BOOKS, "tiruvalluvar.md");

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

const culture = fs.readFileSync(CULTURE, "utf8");
const tamilaram = fs.readFileSync(TAMILARAM, "utf8");
const tiruv = fs.readFileSync(TIRUV, "utf8");

const edu1Start = culture.indexOf(
  "Ancient Tamil Literature\nand the Study of Ancient\nIndian Education\n\nXAVIER S. THANI NAYAGAM",
);
const edu1Rajaji = culture.indexOf("This is a paper read by Rajaji", edu1Start);
const edu1End = culture.lastIndexOf("\n\n", edu1Rajaji);

const edu2Needle = culture.indexOf(
  "Early Tamil Society\n\nXAVIER S. THANI NAYAGAM\n\nThe Sangam literature",
);
const edu2Start = edu2Needle - 40;
const edu2Tbc = culture.indexOf("(To be continued)", edu2Start);
const edu2Foot = culture.indexOf("All India Oriental", edu2Tbc);
const edu2End = edu2Foot > 0 ? edu2Foot : edu2Tbc + 400;

const poetStart = culture.indexOf("Ancient Tamil Poet-Educators");
const poetEnd = culture.indexOf("K. R. RAJAGOPALAN", poetStart) - 40;

if (edu1Start < 0 || edu2Start < 0 || poetStart < 0) {
  throw new Error("Could not locate education essay anchors in tamil-culture.md");
}

writeBook(
  "educational-thoughts-ancient-tamil",
  "Educational Thoughts in Ancient Tamil Literature",
  "Archive article cluster: three related essays by Xavier S. Thani Nayagam from Tamil Culture (also listed in Collected Papers under Educators and Education). Machine OCR errors remain. This page stands in for the Wikipedia-listed title until an independent monograph scan is available.",
  [
    "### I. Ancient Tamil Literature and the Study of Ancient Indian Education",
    "",
    "*(Tamil Culture, Vol. 5 No. 1, pp. 1–15 — Internet Archive OCR)*",
    "",
    culture.slice(edu1Start, edu1End).trim(),
    "",
    "### II. The Educators of Early Tamil Society",
    "",
    "*(Tamil Culture, Vol. 5 No. 2, pp. 105–119 — Internet Archive OCR; marked “to be continued” in the issue)*",
    "",
    culture.slice(edu2Start, edu2End).trim(),
    "",
    "### III. Ancient Tamil Poet-Educators",
    "",
    "*(Tamil Culture, Vol. 6 No. 4, pp. 273–285 — Internet Archive OCR)*",
    "",
    culture.slice(poetStart, poetEnd).trim(),
  ].join("\n"),
);

const loveStart = culture.indexOf(
  "DR. XAVIER S. THANI NAYAGAM\n\nI\n\nA LOVE of Nature cannot but be",
);
const loveEnd = culture.indexOf("\nTAMIL CULTURE\n", loveStart + 500);

writeBook(
  "nature-poetry-in-tamil",
  "Nature Poetry in Tamil",
  "Archive article: edition note plus Thani Nayagam’s related Tamil Culture essay on love of nature in Tamil poetry. Open Library lists Nature Poetry in Tamil (1963) as a revision of the 1953 Nature in Ancient Tamil Poetry monograph; Tamilaram identifies the 1963 Singapore edition Nature Poetry in Tamil—the Classical Period, later revised as Landscape and Poetry (1966). Full 1963 text not yet digitised; companion monographs are linked from the document page.",
  [
    "### Edition lineage",
    "",
    "According to *Tamilāram* (memorial volume), Thani Nayagam’s M.Litt. research on nature in Sangam poetry was published as *Nature in Ancient Tamil Poetry: Concept and Interpretation* (1953), then revised as *Nature Poetry in Tamil—the Classical Period* (Singapore, Dewan Bahasa dan Kebudayaan Kebangsaan, 1963), and again as *Landscape and Poetry: A Study of Nature in Classical Tamil Poetry* (Asia Publishing House, 1966; IITS reprint 1997).",
    "",
    "On this site, read the companion pages for the 1953 and 1966 volumes, and the related *Tamil Culture* ethical-interpretation essay.",
    "",
    "### Related essay: Love of Nature in Tamil poetry (*Tamil Culture*)",
    "",
    culture.slice(loveStart, loveEnd > 0 ? loveEnd : loveStart + 16000).trim(),
  ].join("\n"),
);

const bunkerIdx = tamilaram.indexOf("Bunker Memorial Lectures");
const bunker =
  bunkerIdx > 0
    ? tamilaram.slice(bunkerIdx - 120, bunkerIdx + 520).trim()
    : "In 1972 Thani Nayagam delivered the Bunker Memorial Lectures at Jaffna College on “Aspects of Tamil Humanism”.";

const humanismExcerpt = culture.slice(poetStart, poetEnd).trim();

writeBook(
  "aspects-tamil-humanism",
  "Aspects of Tamil Humanism",
  "Archive article. Tamilaram records that Thani Nayagam’s 1972 Bunker Memorial Lectures at Jaffna College were on “Aspects of Tamil Humanism”. Open Library’s Tamil Humanism, the Classical Period (Jaffna College, 1972) is the verified short monograph from the same period. Full lecture text is not yet publicly digitised; below is his related Tamil Culture essay Ancient Tamil Poet-Educators, which develops the classical Tamil humanism theme.",
  [
    "### Publication note",
    "",
    bunker,
    "",
    "See also the companion archive page *Tamil Humanism, the Classical Period*.",
    "",
    "### Related essay: Ancient Tamil Poet-Educators (*Tamil Culture*)",
    "",
    humanismExcerpt,
  ].join("\n"),
);

writeBook(
  "tamil-humanism",
  "Tamil Humanism, the Classical Period",
  "Archive article for the 1972 Jaffna College monograph (Open Library: 57 p.). Memorial sources identify the same year’s Bunker Memorial Lectures as Aspects of Tamil Humanism. Full monograph text not yet digitised; this page hosts a related Culture essay in which Thani Nayagam discusses Tamil humanism in the classical poetic tradition.",
  [
    "### Bibliographic note",
    "",
    "Open Library records *Tamil humanism, the classical period* by Xavier S. Thani Nayagam, Jaffna College, 1972 (57 numbered pages). Tamil Wikipedia lists the related lecture title “Aspects of Tamil Humanism”.",
    "",
    "See also the companion archive page *Aspects of Tamil Humanism*.",
    "",
    `### From *Tamilāram*`,
    "",
    bunker,
    "",
    "### Related essay: Ancient Tamil Poet-Educators (*Tamil Culture*)",
    "",
    humanismExcerpt,
  ].join("\n"),
);

// Stoicism essay: dedicated cleaner restores headings / strips page junk
spawnSync("node", [path.join(ROOT, "scripts", "clean-indian-thought-stoicism.mjs")], {
  stdio: "inherit",
});

const tiruvBody = tiruv.replace(/^[\s\S]*?## Book text\n*/, "").slice(0, 12000);

writeBook(
  "ulaga-ozhakkaviyalil-tirukkural",
  "உலக ஒழுக்கவியலில் திருக்குறள்",
  "Archive article for the Tamil Wikipedia-listed title on the Tirukkural in world ethics. No independent public scan of a separate edition has been verified yet. Companion reading: the 1967 Annamalai lectures திருவள்ளுவர் (full OCR on its own page). Below: opening of that lecture text for on-site reading context.",
  [
    "### Publication note",
    "",
    "Tamil Wikipedia lists *உலக ஒழுக்கவியலில் திருக்குறள்* among Thani Nayagam’s writings. Edition details (place, year, pagination) are not yet confirmed in Open Library. His verified Tiruvalluvar monograph is *திருவள்ளுவர்* (Annamalai University, 1967).",
    "",
    "Read the full lectures on the *திருவள்ளுவர்* document page.",
    "",
    "### Companion excerpt: opening of *திருவள்ளுவர்* (1967)",
    "",
    tiruvBody,
    "",
    "_…continued on the திருவள்ளுவர் document page._",
  ].join("\n"),
);

console.log("Done.");
