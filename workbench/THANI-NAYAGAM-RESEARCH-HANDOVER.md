# Thani Nayagam Tamil-contributions archive — research handover

Prepared: 7 August 2026  
Next agent: Grok 4.5 High Fast  
Scope: research, rights triage, bilingual document stubs, and source-ledger updates

This is an internal working document. Do not copy conversion targets, OCR status, phase language, or task planning onto public archive pages.

## 1. Objective and non-negotiable editorial rules

Build a Tamil-contributions-first archive for Rev. Dr. Xavier S. Thani Nayagam Adigal. The public site must foreground his journal editing, IATR and conference work, bibliography, Tamil essays, and Tamil scholarship. Religious early print is secondary catalogue material.

Public document pages must:

- contain only claims supported by the cited records;
- maintain English/Tamil parity;
- use an academic archive tone suitable for older readers;
- never present unreviewed OCR as reliable text;
- use `status: complete` only after human comparison with page images;
- describe rights conservatively; technical download access is not a reuse licence.

Internal conversion instructions belong here or elsewhere under `/workbench/`, never in `content/documents/`.

## 2. Repository state and files already present

The worktree was already dirty before this research pass. Preserve all existing changes and do not reset or overwrite unrelated work.

Relevant implementation:

- `app/lib/data.js` — English runtime source records, currently IDs 1–19.
- `app/lib/data.ta.js` — Tamil runtime source records; keep IDs and URLs in exact parity with `data.js`.
- `app/lib/documents.js` — markdown/frontmatter loader.
- `app/lib/archiveMeta.js` — allowed pillars and status labels.
- `content/documents/en/tamil-culture-1952.md` — existing partial.
- `content/documents/ta/tamil-culture-1952.md` — existing partial.
- `content/documents/en/conference-1966-proceedings.md` — existing partial.
- `content/documents/ta/conference-1966-proceedings.md` — existing partial.
- `RESEARCH-SOURCE-LEDGER.md` — source, claim, and image-rights register.
- `app/workbench/page.jsx` — noindexed internal workbench route.

Important inconsistency to fix before adding new source IDs: runtime `data.js` IDs 15–19 are the IA proceedings record and four Tamil Wiki image records, while the source register in `RESEARCH-SOURCE-LEDGER.md` still labels S15 and S16 as removed university photographs and stops at S16. The ledger must be reconciled to the runtime source array first.

## 3. Verified research findings

### Priority 1 — *Tamil Culture*, volumes 1–12

Record:

- Item page: https://archive.org/details/tamil-culture-by-xavier-thaninayagam-adigalar-volume-1-12_202008
- IA identifier: `tamil-culture-by-xavier-thaninayagam-adigalar-volume-1-12_202008`
- Language: English, with Tamil terms/text where articles require it.
- Page-number derivative: 4,768 scan leaves.
- Item metadata displays `CC0 1.0 Universal`.
- Uploaded 25 August 2020 by the account shown as “Valluvar Vallalar Vattam”; this is uploader-supplied licensing metadata, not proof that the uploader controlled every contributor's underlying article copyright.
- Public derivatives verified:
  - original image PDF, 1,066,406,917 bytes;
  - text PDF, 224,150,888 bytes;
  - processed JP2 ZIP, 1,609,174,527 bytes;
  - ABBYY OCR, DjVu XML, DjVu text, scandata, and page-number JSON.

Text/page evidence actually inspected:

- The beginning of the OCR identifies volume I (1952) and an opening contribution headed “THE EDITOR”.
- The inspected volume-I OCR also contains an article headed “Nature in Ancient Tamil Poetry” under Xavier S. Thani Nayagam's name.
- Do not transcribe or quote these items from the OCR alone. Locate the page images, compare every line, and record printed-page plus scan-leaf references.

Rights decision:

- Existing locally hosted title leaf may remain under the ledger's current limited illustration decision.
- The IA item page supports describing the uploaded item as CC0-labelled.
- Conservative current decision for journal text: **hold full-corpus republication pending confirmation that the CC0 dedication is authoritative for the underlying contributions**. Article authors may retain separate rights. Short, attributed excerpts may be considered only under the project's applicable fair-dealing policy.
- If the project owner explicitly accepts the item-level CC0 statement as sufficient, record that risk decision in the ledger before hosting reviewed text.

Conversion order:

1. Build a volume/issue boundary map for all 4,768 leaves.
2. For each issue capture title leaf, contents, masthead, publication statement, and printed pagination.
3. Within volume I, prioritise the editor's opening text and every contribution signed by Xavier S. Thani Nayagam.
4. Store raw `eng+tam` OCR only in an ignored/noindexed work area.
5. Publish only line-checked markdown, retaining printed page references and scan-leaf references in internal notes.

### Priority 2 — 1966 IATR Conference-Seminar proceedings, volume I

Records:

- TDL: https://tamildigitallibrary.in/Articles/%E0%AE%A8%E0%AF%82%E0%AE%B2%E0%AF%8D-9170-Proceedings%20of%20the%20first%20international%20conference%20seminar%20of%20tamil%20studies-Kuala%20Lumpur%20-%20Malaysia%20April%201966
- IA: https://archive.org/details/dli.jZY9lup2kZl6TuXGlZQdjZM9kuxy.TVA_BOK_0009170
- IA identifier: `dli.jZY9lup2kZl6TuXGlZQdjZM9kuxy.TVA_BOK_0009170`
- Language: predominantly English. IA metadata says `tam`, but this is a source-metadata error.
- Page-number derivative: 805 scan leaves.
- Title/copyright pages inspected through OCR: first published January 1968; `COPYRIGHT RESERVED I.A.T.R.`
- Xavier S. Thani Nayagam is named on the board of editors.
- Public derivatives verified:
  - original image PDF, 765,225,688 bytes;
  - text PDF, 76,615,522 bytes;
  - JP2 ZIP, 585,973,075 bytes;
  - EPUB, ABBYY, DjVu text/XML, hOCR, scandata, and page-number JSON.

His authored material verified from the contents and page text:

- “Chairman's Introductory Remarks”, printed pp. 3–5; scan leaves 43–45.
- “The Identification of Kataaram”, printed pp. 67–71; scan leaves 107–111.

Front matter worth describing before full papers:

- preface and board of editors;
- “A Brief Report”;
- publications and programme;
- IATR office-bearers and organising/functional committees;
- opening ceremony and addresses.

Rights decision:

- The source itself says copyright reserved and the current TDL site says all rights reserved.
- Keep the public archive to bibliographic description, table-of-contents facts, and outbound links unless IATR/rights-holder permission is obtained.
- The already hosted title-page illustration has a narrow prior ledger approval. Do not assume that approval extends to more page images or full text.

Required correction to the existing partials:

- Change `cite: [5, 10, 11]` to `cite: [5, 15]` in both English and Tamil proceedings markdown. Source 15 is the actual IA record; 10 and 11 are Wikipedia pages.
- Revise the rights note so it does not imply that general reading access authorises reuse.
- Add the verified board-of-editors and authored-page facts, without reproducing article prose.

### Priority 3 — *A Reference Guide to Tamil Studies* (1966)

Bibliographic records:

- Preferred Open Library work: https://openlibrary.org/works/OL326639W
- Preferred edition: https://openlibrary.org/books/OL13904M
- Duplicate, less complete work supplied in the brief: https://openlibrary.org/works/OL34688930W
- Restricted IA/OL lending item: https://archive.org/details/referenceguideto0000xavi
- IA identifier: `referenceguideto0000xavi`

Verified edition facts:

- 1966;
- University of Malaya Press; distributor statement names Oxford University Press, London;
- English;
- pagination `viii, 122 p.`;
- the IA item is in `inlibrary` / `printdisabled` collections and is not an unrestricted downloadable scan.

Rights decision: public stub, factual summary, and links only. Do not host full text or extracted page images from the controlled lending copy.

Do not publish the existing ledger claim that the guide contains about 1,335 titles across six languages until that count is verified on pages from an authorised copy or an independent reliable source.

### Priority 4 — Tamil essays and speeches

#### *தமிழ்த் தூது: கட்டுரைக் கொத்து*

Records:

- Current TDL record: https://tamildigitallibrary.in/Articles/%E0%AE%A8%E0%AF%82%E0%AE%B2%E0%AF%8D-21987-%E0%AE%A4%E0%AE%AE%E0%AE%BF%E0%AE%B4%E0%AF%8D%E0%AE%A4%E0%AF%8D%20%E0%AE%A4%E0%AF%82%E0%AE%A4%E0%AF%81-%E0%AE%95%E0%AE%9F%E0%AF%8D%E0%AE%9F%E0%AF%81%E0%AE%B0%E0%AF%88%E0%AE%95%E0%AF%8D%20%E0%AE%95%E0%AF%8A%E0%AE%A4%E0%AF%8D%E0%AE%A4%E0%AF%81
- IA mirror: https://archive.org/details/tdl.21987-nuul-tmilllt-tuutu-ktttturaik-kottu
- IA mirror identifier: `tdl.21987-nuul-tmilllt-tuutu-ktttturaik-kottu`
- Alternate 1998 TDL/IA edition: https://archive.org/details/dli.jZY9lup2kZl6TuXGlZQdjZM8luQy.TVA_BOK_0006100
- Open Library original-edition record: https://openlibrary.org/books/OL5157M
- Open Library 1998-edition record: https://openlibrary.org/books/OL155664M

Verified facts:

- Tamil;
- Open Library records a 1962 edition with `5, 126 p.`;
- Open Library records a 1998 World Institute of Tamil Research edition with `v, 81 p.`;
- TDL/IA item 21987 has 114 scan leaves and a public PDF (45,644,555 bytes), JP2 images, OCR, and page-number JSON;
- the alternate 1998 IA item has 86 scan leaves and a public image PDF (40,338,982 bytes) plus OCR derivatives.

Rights decision: TDL currently says all rights reserved and neither IA mirror carries an affirmative reuse licence. Publish metadata/summary/link only until permission is documented.

Conversion order after permission:

1. Compare the 1962 and 1998 contents and pagination.
2. Capture title/copyright pages, contents, and editorial preface.
3. Transcribe one complete essay at a time with Tamil-aware OCR and line-by-line review.
4. Write an English editorial note; do not translate the primary Tamil text unless separately approved and reviewed.

#### *தனிநாயகம் அடிகளாரின் சொற்பொழிவுகள்* (1999)

Records:

- Existing runtime source 9 is the TDL record.
- TDL: https://tamildigitallibrary.in/Articles/%E0%AE%A8%E0%AF%82%E0%AE%B2%E0%AF%8D-18049-%E0%AE%A4%E0%AE%A9%E0%AE%BF%E0%AE%A8%E0%AE%BE%E0%AE%AF%E0%AE%95%E0%AE%AE%E0%AF%8D%20%E0%AE%85%E0%AE%9F%E0%AE%BF%E0%AE%95%E0%AE%B3%E0%AE%BE%E0%AE%B0%E0%AE%BF%E0%AE%A9%E0%AF%8D%20%E0%AE%9A%E0%AF%8A%E0%AE%B1%E0%AF%8D%E0%AE%AA%E0%AF%8A%E0%AE%B4%E0%AE%BF%E0%AE%B5%E0%AF%81%E0%AE%95%E0%AE%B3%E0%AF%8D
- IA mirror: https://archive.org/details/tdl.18049-nuul-tnnninaaykm-attikllaarinnn-corrpolllivukll
- Open Library edition: https://openlibrary.org/books/OL169610M

Verified TDL details:

- author: தனிநாயகம் அடிகள்;
- publisher: உலகத் தமிழாராய்ச்சி நிறுவனம், சென்னை;
- publication year: 1999;
- subject shown as இலக்கியம்;
- document holding: உலகத் தமிழாராய்ச்சி நிறுவனம்;
- TDL displays “PDF — 2 Files” and exposes a read/download control;
- the site footer states `Copyright © 2026, All rights reserved by Tamil Virtual Academy`.

Verified scan details:

- Tamil;
- 190 scan leaves in the IA mirror;
- Open Library printed pagination: 178 pages;
- image PDF 104,178,041 bytes;
- text PDF 9,779,591 bytes;
- JP2 and OCR derivatives are public.

Rights decision: metadata/summary/link only. Downloadability does not authorise republication.

### Priority 5 — other digitised scholarship

| Holding | Record | Language | Extent verified | Access and rights decision |
| --- | --- | --- | --- | --- |
| *Collected Papers of Thani Nayagam Adigalar* | https://archive.org/details/tdl.17933-collected-papers-of-thani-nayagam-adigalar | Predominantly English; IA metadata incorrectly says Tamil | 523 scan leaves; PDF 417,209,941 bytes; JP2/OCR present | TDL/IA mirror, no affirmative licence; summary/link only. Open Library records first publication in 1995. |
| *Nature in Ancient Tamil Poetry: Concept and Interpretation* | https://archive.org/details/tdl.27397-nature-in-ancient-tamil-poetry-concept-and-interpretation | English; IA metadata incorrectly says Tamil | 209 scan leaves; OL has `xxii, 185 p.`; image PDF 47,211,464 bytes and text PDF present | TDL/IA mirror, no affirmative licence; summary/link only. |
| *Landscape and Poetry: A Study of Nature in Classical Tamil Poetry* | https://archive.org/details/tdl.17918-landscape-and-poetry-a-study-of-nature-in-classical-tamil-poetry | English; IA metadata incorrectly says Tamil | 157 scan leaves; OL has 151 printed pages; PDF 99,262,013 bytes | TDL/IA mirror, no affirmative licence; summary/link only. |
| *திருவள்ளுவர்* | https://archive.org/details/tdl.25823-nuul-tiruvlllluvr | Tamil | 66 scan leaves; PDF 90,778,712 bytes | TDL/IA mirror, no affirmative licence; summary/link only. |
| *Tamil Studies Abroad: A Symposium* | https://archive.org/details/tamilstudiesabro0000unse | English | Page extent not yet checked | IA controlled lending / print-disabled item; summary/link only. |

Deprioritised search findings:

- *Tamilāram* (1983 tribute/remembrance volume) has an IA item marked Public Domain Mark, but it is commemorative rather than his core scholarly output.
- Third International Conference-Seminar proceedings (1970) have an uploader-marked CC0 IA copy, but the first-conference record and his own writings remain the current priority.
- Biographies and later studies of him are useful for verification but should not displace primary scholarly holdings.

## 4. Recommended next three public documents

Add these as bilingual **stubs**, not OCR transcriptions.

### 4.1 `content/documents/en/reference-guide-tamil-studies-1966.md`

```md
---
id: reference-guide-tamil-studies-1966
slug: reference-guide-tamil-studies-1966
title: "A Reference Guide to Tamil Studies (1966)"
year: "1966"
pillar: reference
kind: bibliography
status: stub
lang: en
summary: "Thani Nayagam's English-language bibliography for researchers in Tamil studies."
rights: "The identified digital copy is controlled lending; this archive provides a bibliographic note and source links only."
sourceUrl: "https://openlibrary.org/books/OL13904M"
sourceLabel: "Open Library — 1966 University of Malaya Press edition"
images: []
cite: [20, 21]
---

## Bibliographic record

Open Library records this University of Malaya Press edition as an English-language volume published in 1966, with eight preliminary pages and 122 numbered pages.

## Archive note

The available Internet Archive record is a controlled-lending copy. No full text or page image is reproduced here.
```

### 4.2 `content/documents/ta/reference-guide-tamil-studies-1966.md`

```md
---
id: reference-guide-tamil-studies-1966
slug: reference-guide-tamil-studies-1966
title: "A Reference Guide to Tamil Studies (1966)"
year: "1966"
pillar: reference
kind: bibliography
status: stub
lang: ta
summary: "தமிழாய்வாளர்களுக்காகத் தனிநாயகம் அடிகளார் தொகுத்த ஆங்கில நூலியல் வழிகாட்டி."
rights: "கண்டறியப்பட்ட எண்ணிமப் படி கட்டுப்படுத்தப்பட்ட இரவல் அணுகலில் உள்ளது; இக்காப்பகம் நூலியல் குறிப்பையும் மூல இணைப்புகளையும் மட்டும் வழங்குகிறது."
sourceUrl: "https://openlibrary.org/books/OL13904M"
sourceLabel: "Open Library — மலாயாப் பல்கலைக்கழக அச்சகத்தின் 1966 பதிப்பு"
images: []
cite: [20, 21]
---

## நூலியல் பதிவு

மலாயாப் பல்கலைக்கழக அச்சகம் 1966 இல் வெளியிட்ட ஆங்கில நூலாக Open Library இதைப் பதிவு செய்கிறது. எட்டு முன்னிலைப் பக்கங்களையும் 122 எண்ணிடப்பட்ட பக்கங்களையும் அப்பதிப்பு கொண்டுள்ளது.

## காப்பகக் குறிப்பு

Internet Archive இல் கிடைக்கும் படி கட்டுப்படுத்தப்பட்ட இரவல் அணுகலில் உள்ளது. முழு உரையோ பக்கப் படிமமோ இங்கு மறுவெளியிடப்படவில்லை.
```

### 4.3 `content/documents/en/tamilttutu.md`

```md
---
id: tamilttutu
slug: tamilttutu
title: "Tamilttutu: a collection of Tamil essays"
year: "1962"
pillar: lectures
kind: essay-collection
status: stub
lang: en
summary: "A Tamil essay collection by Thani Nayagam Adigal, represented by records for the 1962 and 1998 editions."
rights: "The TDL and IA records provide reading copies but no affirmative reuse licence; this archive publishes metadata and links only."
sourceUrl: "https://tamildigitallibrary.in/Articles/%E0%AE%A8%E0%AF%82%E0%AE%B2%E0%AF%8D-21987-%E0%AE%A4%E0%AE%AE%E0%AE%BF%E0%AE%B4%E0%AF%8D%E0%AE%A4%E0%AF%8D%20%E0%AE%A4%E0%AF%82%E0%AE%A4%E0%AF%81-%E0%AE%95%E0%AE%9F%E0%AF%8D%E0%AE%9F%E0%AF%81%E0%AE%B0%E0%AF%88%E0%AE%95%E0%AF%8D%20%E0%AE%95%E0%AF%8A%E0%AE%A4%E0%AF%8D%E0%AE%A4%E0%AF%81"
sourceLabel: "Tamil Digital Library — தமிழ்த் தூது"
images: []
cite: [22, 23, 24]
---

## Editions

Open Library records a 1962 Tamil edition of 126 numbered pages and a 1998 edition issued by the World Institute of Tamil Research. Tamil Digital Library provides a digitised reading record.

## Archive note

The source records do not provide an affirmative licence for republication. No essay text or page image is reproduced here.
```

### 4.4 `content/documents/ta/tamilttutu.md`

```md
---
id: tamilttutu
slug: tamilttutu
title: "தமிழ்த் தூது: கட்டுரைக் கொத்து"
year: "1962"
pillar: lectures
kind: essay-collection
status: stub
lang: ta
summary: "தனிநாயகம் அடிகளாரின் தமிழ்க் கட்டுரைத் தொகுப்பு; 1962 மற்றும் 1998 பதிப்புகளுக்கான பதிவுகள் கிடைக்கின்றன."
rights: "TDL மற்றும் IA பதிவுகள் வாசிப்புப் படிகளை வழங்குகின்றன; மறுபயன்பாட்டுக்கான வெளிப்படையான உரிமம் இல்லை. இக்காப்பகம் தரவுகளையும் இணைப்புகளையும் மட்டும் வெளியிடுகிறது."
sourceUrl: "https://tamildigitallibrary.in/Articles/%E0%AE%A8%E0%AF%82%E0%AE%B2%E0%AF%8D-21987-%E0%AE%A4%E0%AE%AE%E0%AE%BF%E0%AE%B4%E0%AF%8D%E0%AE%A4%E0%AF%8D%20%E0%AE%A4%E0%AF%82%E0%AE%A4%E0%AF%81-%E0%AE%95%E0%AE%9F%E0%AF%8D%E0%AE%9F%E0%AF%81%E0%AE%B0%E0%AF%88%E0%AE%95%E0%AF%8D%20%E0%AE%95%E0%AF%8A%E0%AE%A4%E0%AF%8D%E0%AE%A4%E0%AF%81"
sourceLabel: "தமிழ் எண்ணிம நூலகம் — தமிழ்த் தூது"
images: []
cite: [22, 23, 24]
---

## பதிப்புகள்

126 எண்ணிடப்பட்ட பக்கங்களைக் கொண்ட 1962 தமிழ்ப் பதிப்பையும், உலகத் தமிழாராய்ச்சி நிறுவனம் வெளியிட்ட 1998 பதிப்பையும் Open Library பதிவு செய்கிறது. தமிழ் எண்ணிம நூலகம் எண்ணிம வாசிப்புப் பதிவை வழங்குகிறது.

## காப்பகக் குறிப்பு

மறுவெளியீட்டுக்கான வெளிப்படையான உரிமத்தை மூலப் பதிவுகள் வழங்கவில்லை. கட்டுரை உரையோ பக்கப் படிமமோ இங்கு மறுவெளியிடப்படவில்லை.
```

### 4.5 `content/documents/en/collected-speeches-1999.md`

```md
---
id: collected-speeches-1999
slug: collected-speeches-1999
title: "Collected speeches of Thani Nayagam Adigal (1999)"
year: "1999"
pillar: lectures
kind: speech-collection
status: stub
lang: en
summary: "A posthumous Tamil collection of Thani Nayagam Adigal's speeches."
rights: "Tamil Digital Library states all rights reserved; this archive provides a bibliographic note and links only."
sourceUrl: "https://tamildigitallibrary.in/Articles/%E0%AE%A8%E0%AF%82%E0%AE%B2%E0%AF%8D-18049-%E0%AE%A4%E0%AE%A9%E0%AE%BF%E0%AE%A8%E0%AE%BE%E0%AE%AF%E0%AE%95%E0%AE%AE%E0%AF%8D%20%E0%AE%85%E0%AE%9F%E0%AE%BF%E0%AE%95%E0%AE%B3%E0%AE%BE%E0%AE%B0%E0%AE%BF%E0%AE%A9%E0%AF%8D%20%E0%AE%9A%E0%AF%8A%E0%AE%B1%E0%AF%8D%E0%AE%AA%E0%AF%8A%E0%AE%B4%E0%AE%BF%E0%AE%B5%E0%AF%81%E0%AE%95%E0%AE%B3%E0%AF%8D"
sourceLabel: "Tamil Digital Library — collected speeches, 1999"
images: []
cite: [9, 25, 26]
---

## Bibliographic record

Tamil Digital Library identifies Thani Nayagam Adigal as author and the World Institute of Tamil Research, Chennai, as publisher of this 1999 Tamil collection. Open Library records 178 printed pages; the digitised scan contains 190 leaves.

## Archive note

The source supplies no reuse licence. No speech text or page image is reproduced here.
```

### 4.6 `content/documents/ta/collected-speeches-1999.md`

```md
---
id: collected-speeches-1999
slug: collected-speeches-1999
title: "தனிநாயகம் அடிகளாரின் சொற்பொழிவுகள் (1999)"
year: "1999"
pillar: lectures
kind: speech-collection
status: stub
lang: ta
summary: "தனிநாயகம் அடிகளாரின் உரைகளைத் தொகுத்து அவர் மறைவுக்குப் பின் வெளியிடப்பட்ட தமிழ்நூல்."
rights: "தமிழ் எண்ணிம நூலகம் அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை எனக் குறிப்பிடுகிறது; இக்காப்பகம் நூலியல் குறிப்பையும் இணைப்புகளையும் மட்டும் வழங்குகிறது."
sourceUrl: "https://tamildigitallibrary.in/Articles/%E0%AE%A8%E0%AF%82%E0%AE%B2%E0%AF%8D-18049-%E0%AE%A4%E0%AE%A9%E0%AE%BF%E0%AE%A8%E0%AE%BE%E0%AE%AF%E0%AE%95%E0%AE%AE%E0%AF%8D%20%E0%AE%85%E0%AE%9F%E0%AE%BF%E0%AE%95%E0%AE%B3%E0%AE%BE%E0%AE%B0%E0%AE%BF%E0%AE%A9%E0%AF%8D%20%E0%AE%9A%E0%AF%8A%E0%AE%B1%E0%AF%8D%E0%AE%AA%E0%AF%8A%E0%AE%B4%E0%AE%BF%E0%AE%B5%E0%AF%81%E0%AE%95%E0%AE%B3%E0%AF%8D"
sourceLabel: "தமிழ் எண்ணிம நூலகம் — சொற்பொழிவுகள், 1999"
images: []
cite: [9, 25, 26]
---

## நூலியல் பதிவு

ஆசிரியராகத் தனிநாயகம் அடிகளாரையும், 1999 வெளியீட்டாளராகச் சென்னையின் உலகத் தமிழாராய்ச்சி நிறுவனத்தையும் தமிழ் எண்ணிம நூலகம் பதிவு செய்கிறது. Open Library 178 அச்சுப் பக்கங்களைப் பதிவு செய்கிறது; எண்ணிமப் படியில் 190 படிம இலைகள் உள்ளன.

## காப்பகக் குறிப்பு

மறுபயன்பாட்டுக்கான உரிமத்தை மூலம் வழங்கவில்லை. சொற்பொழிவு உரையோ பக்கப் படிமமோ இங்கு மறுவெளியிடப்படவில்லை.
```

## 5. Runtime source IDs to add

After reconciling ledger S15–S19 to the runtime array, add matching records to both `app/lib/data.js` and `app/lib/data.ta.js`. Suggested IDs:

| ID | Source |
| --- | --- |
| 20 | Open Library edition OL13904M, *A Reference Guide to Tamil Studies* |
| 21 | IA controlled-lending item `referenceguideto0000xavi` |
| 22 | Open Library edition OL5157M, *Tamilttutu* (1962) |
| 23 | TDL record 21987, *தமிழ்த் தூது* |
| 24 | IA mirror `tdl.21987-nuul-tmilllt-tuutu-ktttturaik-kottu` |
| 25 | Open Library edition OL169610M, collected speeches (1999) |
| 26 | IA mirror `tdl.18049-nuul-tnnninaaykm-attikllaarinnn-corrpolllivukll` |
| 27 | TDL disclaimer/footer rights page: https://tamildigitallibrary.in/disclaimer |
| 28 | IA mirror `tdl.17933-collected-papers-of-thani-nayagam-adigalar` |
| 29 | IA mirror `tdl.27397-nature-in-ancient-tamil-poetry-concept-and-interpretation` |
| 30 | IA mirror `tdl.17918-landscape-and-poetry-a-study-of-nature-in-classical-tamil-poetry` |
| 31 | IA mirror `tdl.25823-nuul-tiruvlllluvr` |
| 32 | IA controlled-lending item `tamilstudiesabro0000unse` |

Source object titles/types may be translated in `data.ta.js`, but IDs and URLs must remain identical.

## 6. Ledger changes to make

Update `Last reviewed` to 7 August 2026, then:

1. Reconcile S15–S19 with the current runtime source records.
2. Add S20–S32 from the table above.
3. Add holding/access claims with high confidence for page counts and derivatives because they come from IA metadata/page-number JSON.
4. Add a rights rule: “Download or reader access alone is not permission to republish.”
5. Add a TDL decision: footer states all rights reserved; all TDL page scans and OCR remain summary/link only absent permission.
6. Refine the *Tamil Culture* decision: the IA item is CC0-labelled, but the authority of that dedication over underlying contributed texts is not established. Keep the existing title-leaf approval; full text requires an explicit project risk decision or rights verification.
7. Add proceedings decision: source says copyright reserved IATR; no full text or additional images without permission.
8. Add Open Library controlled-lending decision: bibliographic description/link only; do not extract or host restricted page images.

Do not silently change the existing image-rights decisions. Clearly date each new decision.

## 7. Execution plan for the next agent

### Step A — preserve and inspect

```sh
git status --short
sed -n '1,240p' app/lib/data.js
sed -n '1,240p' app/lib/data.ta.js
sed -n '1,360p' RESEARCH-SOURCE-LEDGER.md
```

Do not use reset/checkout on the dirty worktree.

### Step B — fix current citation error

Patch both conference partials from `cite: [5, 10, 11]` to `cite: [5, 15]`. Add only the verified board/editor and authored-page facts. Keep `status: partial`.

### Step C — add sources and reconcile the ledger

Add IDs 20–32 to both source arrays. Keep ID ordering stable. Then update the ledger before referencing those IDs in markdown.

### Step D — add the six bilingual stub files

Use the templates in section 4. Do not add OCR text. Keep every new file at `status: stub`.

Before patching the Tamil prose, check for terminology consistency with existing site language:

- `தமிழ் எண்ணிம நூலகம்` for TDL;
- `உலகத் தமிழாராய்ச்சி நிறுவனம்` for the World Institute of Tamil Research;
- `மறுவெளியீடு` / `மறுபயன்பாடு` for republication/reuse;
- do not translate publication titles when that would obscure catalog matching.

### Step E — validate data integrity

Run a quick source-ID audit so every markdown `cite` ID exists in both arrays. Then run:

```sh
npm run build
```

If the build fails because of pre-existing unrelated changes, isolate and report that; do not rewrite unrelated components.

### Step F — final deliverable

Return:

- a prioritised holdings table using the verified page/access data above;
- a short rights legend: `host candidate`, `summary/link only`, `controlled lending`;
- the three added bilingual document pairs;
- exact ledger/runtime source changes;
- build result and any remaining rights questions.

## 8. Unresolved research checks

These should be the next research tasks only after the stub/ledger patch is stable:

1. Map all *Tamil Culture* issue boundaries across the 4,768 scan leaves.
2. Locate the exact printed/scan pages for the volume-I editor's opening text and “Nature in Ancient Tamil Poetry”; verify visually before recording page ranges.
3. Verify the legal authority behind the IA item's CC0 dedication.
4. Identify current IATR or successor rights contacts for the 1968 proceedings.
5. Ask the World Institute of Tamil Research/TDL for permission to republish reviewed Tamil text from *தமிழ்த் தூது* and the collected speeches.
6. Verify the claimed 1,335-title/six-language count in *A Reference Guide to Tamil Studies*.
7. Check the page extent and contents of *Tamil Studies Abroad* through permitted catalog/loan access without copying restricted pages.
8. Verify whether the `tdl.17933` *Collected Papers* scan is entirely English and record its edition/publication page.

## 9. Browser/research provenance

Research was conducted on 7 August 2026 through the live IA, Open Library, and Tamil Digital Library pages and their public metadata derivatives. The following were directly observed:

- IA item metadata, licence fields, files, sizes, and page-number JSON;
- Open Library work/edition APIs and pagination records;
- TDL search results and the full 1999 speeches record;
- TDL's current footer and disclaimer page;
- OCR headings/contents for the proceedings and an initial range of *Tamil Culture*.

Treat OCR-derived headings as navigation evidence until confirmed against page images. Do not invent quotations from any uninspected page.
