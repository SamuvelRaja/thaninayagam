# Website fact check against Amudhan Adigal's biography

Reviewed: 8 October 2026.

Implementation note: the subsequent bilingual redesign applies the corrections below, adds runtime biography source S44 / TN1993, and qualifies unresolved edition conflicts. The tables and rendered-page evidence preserve the pre-redesign audit for comparison.

The website captured before the redesign contained several factual claims that conflict with the biography. Its broad account of Thani Nayagam's contribution to Tamil scholarship is supported, but a number of names, dates, appointments, numerical summaries, and conference roles needed revision.

## Source and scope

The requested source is **Arulthiru Dr. Amudhan Adigal, _தவத்திரு தனிநாயகம் அடிகளார்_, International Institute of Tamil Studies, first edition, July 1993, publication no. 173**.

- Working text: [converted Markdown](../../public/books/TVA_BOK_0009080_தனிநாயகம்_அடிகளார்.md).
- Original PDF scan: retained outside the repository to meet file-upload limits. The converted Markdown remains in `public/books/`.
- Main chapters use printed Arabic page numbers. In this PDF, printed page N is physical PDF page N + 35. Some converted foreword page comments describe scan positions rather than the original Roman pagination; the detailed life audit identifies the verified printed pages.

Coverage includes both Tamil and English versions of the five current sections: home, biography, contributions, archive, and support. The shared data contains 6 biography sections, 17 chronology entries, 9 journey stops, 6 contribution pillars, 6 key-fact records, and 25 catalogue entries. Catalogue metadata and document frontmatter are included; the historical assertions inside every reproduced book or article have not been independently fact checked.

All ten main routes were opened through ego-browser against the current local Next.js application. Their text was captured in [rendered-page evidence](BIOGRAPHY-AUDIT-RENDERED-PAGES.json). Design galleries, `app_old`, and retained components are distinguished from current routes; they are not treated as the live website.

The verdicts below are relative to this biography. **Contradicted** means the book gives a materially different account. **Not located** means this source does not establish the claim. **Ambiguous** includes OCR uncertainty, differing editions, or conflicting passages. A bibliographic date or page count for one edition does not automatically disprove a different edition.

## Most consequential findings

| Website claim (retained code noted separately) | Finding in the biography | Evidence | Editorial action |
| --- | --- | --- | --- |
| Birth name Xavier Nicholas Stanislaus; parents Naganathan Stanislaus and Cecilia Bastiampillai | It names him Xavier, then Xavier Stanislaus, and names his parents Henry Stanislaus Ganapathipillai and Cecil Rasamma Vastiampillai. Nicholas is not established. | Printed p. 1; Markdown line 288; PDF page 36 visually checked. | Reconcile both biography paragraphs and the at-a-glance boxes with the source; avoid adding Nicholas without separate evidence. |
| M.Litt. in 1947 under Somasundara Bharati | M.A. in 1947, M.Litt. in 1949; the research supervisor is A. Chidambaranathan. | Printed p. 11; Markdown line 418. | Separate the two qualifications and correct the research dates and supervisor. |
| Tamil Literature Society founded in 1952 | The Society was founded in 1948; the journal began in February 1952. | Printed pp. 11, 40; Markdown lines 422, 742. | Distinguish establishment of the Society from launch of the journal. |
| 200+ lectures across the world; retained earlier home component associates them with 1954–55 | The book places the travels in 1949–50 and the 200-plus lecture count in one year in the United States. These included public venues, not only universities. The count itself is supported; its expanded geographic/venue scope is not. | Printed pp. 12–15; Markdown lines 455, 459, 475; PDF pages 48 and 50 visually checked. | Specify the country and travel period; remove the worldwide/university-only expansion. |
| Mastered 12+ languages | The author avoids a definite total and distinguishes well-learned languages from reading knowledge; nine are explicitly described as well learned. | Printed pp. 182–187; especially Markdown line 2341. | Use “polyglot scholar” or state the supported proficiency categories rather than a single mastery count. |
| Retained earlier home component says he organised or convened the first four world Tamil conferences; current metric lists four conferences | His first-conference leadership is strongly supported. The biography explicitly distinguishes his scholarly participation in Chennai in 1968 from its arrangements, for which it finds no contribution. | Printed pp. 70–75; Markdown lines 1082, 1104, 1124, 1132. | Describe each role separately. The current four-conference count, cities, and years are supported as participation; a shared organiser role is not. |
| General Secretary of the 1966 Kuala Lumpur conference | The conference General Secretary is V. Selvanayagam. Thani Nayagam served as deputy chairman and led its scholarly organisation. | Printed pp. 70–71; Markdown lines 1082, 1104; PDF page 106 visually checked. | Correct the office without diminishing his documented leadership. |
| 25+ countries founded IATR; Emeneau was a founding vice-president | The founding meeting had 26 scholars. The chapter's final elected officer list includes F. B. J. Kuiper and Mu. Varadarajan; a foreword recollection gives a different proposed list including Emeneau. | Printed pp. 66–67; Markdown lines 1029, 1043; foreword recollection at line 138. | Do not turn a scholar count into a country count. Use the explicitly elected list, noting the book's internal conflict rather than treating every other list as disproved. |
| Current metric says 14 publishing years; retained earlier home component says 14 continuous years | The 1952–1966 span is supported, but the book records gaps in 1960, 1962, and 1965, and describes twelve publishing years. | Printed p. 108; Markdown lines 1449, 1453. | Keep the date span and remove “14 continuous years”; prefer the journal's dates to an elapsed-years metric. |
| Visiting professor at the Sorbonne and Naples in 1969 | The biography describes Collège de France, Paris, in 1970 and Naples in 1971. | Printed p. 199; Markdown line 2477; original scan verified in the life audit. | Correct institution and dates in the biography, timeline, and home journey. |
| Posthumous University of Jaffna doctorate in 1981 | The foreword discusses an honorary doctorate from Tamil University at a later convocation, without a precise award year. The Jaffna claim is not established here. | Printed foreword pp. xxvi–xxvii; Markdown lines 202, 208; original scan verified in the life audit. | Retain the supported 1981 Madurai statue event separately; seek an institutional record for the claimed Jaffna award. |
| _A Reference Guide to Tamil Studies_ is 130 pages; catalogue gives 122 | Main text describes 122 numbered pages and 1,355 entries; the bibliography lists vi + 122 pages. The older ledger's separate edition record gives viii + 122, which could explain a total of 130. | Printed pp. 178–179, 211; Markdown lines 2247, 2251, 2675; retained ledger source S20 has a different preliminary-page count. | Clarify whether counts include preliminaries and identify the edition. Treat 130 as an unresolved pagination convention/edition difference, not an intrinsic contradiction with 122. |
| Proença dictionary reprint dated 1964 | The edition was published in 1966. The 1964 items are an introduction and co-translated preface published in _Tamil Culture_. | Printed pp. 132, 210–211; Markdown lines 1721, 2660–2661, 2673. | Distinguish the dictionary edition from the earlier journal articles. |
| _Landscape and Poetry_ dated 1967 | The biography dates the book 1966. A later-edition claim would require its own title-page evidence. | Printed pp. 171, 211; Markdown lines 2147, 2674. | Identify the represented edition before reconciling catalogue and reader dates. |
| St. Patrick's College in 1920–1922; St. Joseph's School at Vadakangulam | The book gives St. Patrick's attendance as 1923–1930 and identifies his later teaching post as St. Theresa's High School. | Printed pp. 2, 7–8; Markdown lines 306, 368–378. | Correct both school history and teaching-post names. |
| Founded Malaya's Indian Studies department | The department had a predecessor, Muthu Rasakkannanar, in 1960–1961. Thani Nayagam headed and developed it from 1961. | Printed p. 46; Markdown line 810. | Correct the Tamil milestone's founding claim to leading/developing the department. |
| _Aspects of Tamil Humanism_ is the 1972 Bunker lectures | The bibliography associates this title with February 1961 Sornammal lectures; the 1972 Bunker material is a different work. | Printed pp. 209, 212; Markdown lines 2642, 2691–2693. | Separate the works and correct the historical lecture attribution in both reader summaries. |

## Claims supported by the book

- Birth on 2 August 1913 at Karampon and death on 1 September 1980; the broad 1913–1980 lifespan is supported.
- Catholic priest, scholar, teacher, editor, and international advocate for Tamil studies.
- Founding _Tamil Culture_ in 1952 and the journal's 1952–1966 publication span.
- IATR's establishment in New Delhi on 7 January 1964; Jean Filliozat as first president; Thani Nayagam and Kamil Zvelebil as joint secretaries.
- A central role in the first international Tamil conference in Kuala Lumpur in 1966; the later conferences at Chennai in 1968, Paris in 1970, and Jaffna in 1974, with roles to be specified individually.
- University of Ceylon and University of Malaya appointments, London doctoral research, and scholarly work on Tamil nature poetry, educational thought, humanism, and early printing. The precise chronology is detailed in the life report.
- The 1981 Madurai memorial statue and Amudhan Adigal's authorship of the 1993 biography.

## Findings that need qualification or another source

The detailed reports also examine ordination dates, early schools, the meaning and adoption of “Thani Nayagam,” the rediscovery and location of the _Cartilha_, the dating of _Arte da Lingua Malabar_, and comparative “first printed book” claims. Some site wording gives Thani Nayagam sole discovery credit or a precise discovery date that the biography does not support.

The 1966 conference date is given as 17–23 April in this biography, while the website says 16–23 April. Opening sessions, registration, and the entire conference programme may have different ranges; this should be reconciled with the actual programme rather than silently choosing a date.

Amudhan Adigal's “30 years of research to produce the 1993 biography,” his birth details, his present role, and his guidance or blessing for this website are not all established by the book. Historical affiliations recorded in 1993 must not be assumed to be present-day affiliations. The archive's contemporary dedication, financial details, and organisational promises require owner evidence and cannot be verified by a biography published in 1993.

Works or editions published in 1995, 1999, or 2013 cannot be verified from this 1993 source. Their existing catalogue records should be retained as separate evidence, not relabelled as biography-verified.

## Detailed audit records

1. [Life, education, chronology, journey, and honours](BIOGRAPHY-AUDIT-LIFE.md).
2. [Conferences, journal, discoveries, languages, lectures, and quotations](BIOGRAPHY-AUDIT-ACHIEVEMENTS.md).
3. [All 25 catalogue records, reader metadata, and the supporter biography](BIOGRAPHY-AUDIT-BIBLIOGRAPHY.md).

## Result and next editorial step

The audit originally recorded recommended changes before altering website copy. The subsequent redesign applies the hard corrections in both languages, qualifies numerical summaries and conference roles, preserves unresolved edition/date questions, and adds printed-page citations. The pre-redesign evidence remains available above; implementation and checks are recorded in [BIOGRAPHY-REDESIGN-VALIDATION.md](../BIOGRAPHY-REDESIGN-VALIDATION.md).
