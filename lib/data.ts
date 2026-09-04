import {
  Category,
  Subcategory,
  Work,
  Source,
  BioSection,
  Milestone,
  MilestoneEra,
  ContributionPillar,
  KeyFact,
  JourneyStop,
} from './types';

export const CATS: Category[] = [
  {
    "slug": "tamil-literature",
    "cls": "cat-literature",
    "ta": "தமிழ் இலக்கியக் கட்டுரைகள்",
    "en": "Tamil Literary Essays",
    "hintTa": "சங்க இலக்கியம், இயற்கை, கவிதையியல், திருக்குறள், கல்வியியல் சிந்தனைகள்",
    "hintEn": "Classical poetry, nature, Tirukkural, and educational thought"
  },
  {
    "slug": "tamil-culture",
    "cls": "cat-culture",
    "ta": "தமிழர் பண்பாடும் நாகரிகமும்",
    "en": "Tamil Culture & Civilization",
    "hintTa": "பண்பாட்டு வரலாறு, சமுதாயக் கட்டுரைகள், ஆய்வு இதழியல், உலகப் பயணங்கள்",
    "hintEn": "Tamil civilization, cultural essays, journal writings, and travel reflections"
  },
  {
    "slug": "tamil-studies",
    "cls": "cat-studies",
    "ta": "தமிழாய்வுக் கட்டுரைகளும் நூலியலும்",
    "en": "Tamil Research & Bibliographies",
    "hintTa": "சர்வதேச மாநாடுகள், ஆய்வுக் குறிப்பேடுகள், ஆவண வரலாற்று வழிகாட்டிகள்",
    "hintEn": "International conferences, research guides, and bibliographies"
  },
  {
    "slug": "philosophy-thought",
    "cls": "cat-philosophy",
    "ta": "மெய்யியலும் தமிழ் மானுடவியலும்",
    "en": "Philosophy & Tamil Humanism",
    "hintTa": "செவ்வியல் தமிழ் மானுடவியல், ஒப்பீட்டுத் தத்துவக் கோட்பாடுகள், அறவியல்",
    "hintEn": "Tamil humanism, comparative philosophy, and moral thought"
  },
  {
    "slug": "collected-editions",
    "cls": "cat-collected",
    "ta": "முழுமைத் தொகுப்புகளும் சொற்பொழிவுகளும்",
    "en": "Collected Works & Addresses",
    "hintTa": "முழு ஆய்வுக் கட்டுரைகள், வரலாற்றுப் பேருரைகள், நூற்றாண்டு நினைவுத் தொகுப்புகள்",
    "hintEn": "Complete scholarly papers, public addresses, and tributes"
  }
];

export const SUBS: Subcategory[] = [
  {
    "slug": "nature-poetics",
    "cat": "tamil-literature",
    "ta": "இயற்கையும் கவிதையியலும்",
    "en": "Nature & Poetics"
  },
  {
    "slug": "tirukkural-ethics",
    "cat": "tamil-literature",
    "ta": "திருக்குறளும் அறவியலும்",
    "en": "Tirukkural & Ethics"
  },
  {
    "slug": "education-prose",
    "cat": "tamil-literature",
    "ta": "கல்வியியலும் உரைநடையும்",
    "en": "Education & Prose"
  },
  {
    "slug": "culture-civilization",
    "cat": "tamil-culture",
    "ta": "பண்பாடும் நாகரிகமும்",
    "en": "Culture & Civilization"
  },
  {
    "slug": "journal-essays",
    "cat": "tamil-culture",
    "ta": "இதழியல் ஆய்வுக் கட்டுரைகள்",
    "en": "Journal Essays"
  },
  {
    "slug": "travel-global",
    "cat": "tamil-culture",
    "ta": "உலகப் பயணக் குறிப்புகள்",
    "en": "Travel & Global Reflections"
  },
  {
    "slug": "conferences-iatr",
    "cat": "tamil-studies",
    "ta": "சர்வதேச மாநாடுகளும் IATR அமைப்பும்",
    "en": "Conferences & IATR"
  },
  {
    "slug": "reference-guides",
    "cat": "tamil-studies",
    "ta": "ஆய்வு நூலியல்களும் வழிகாட்டிகளும்",
    "en": "Reference Guides & Bibliographies"
  },
  {
    "slug": "tamil-humanism",
    "cat": "philosophy-thought",
    "ta": "செவ்வியல் தமிழ் மானுடவியல்",
    "en": "Tamil Humanism"
  },
  {
    "slug": "comparative-philosophy",
    "cat": "philosophy-thought",
    "ta": "ஒப்பீட்டுத் தத்துவவியல்",
    "en": "Comparative Philosophy"
  },
  {
    "slug": "collected-papers",
    "cat": "collected-editions",
    "ta": "ஆங்கில ஆய்வுக் கட்டுரைகளின் முழுத்தொகுப்பு",
    "en": "Collected Research Papers"
  },
  {
    "slug": "speeches-memorial",
    "cat": "collected-editions",
    "ta": "வரலாற்றுப் பேருரைகளும் நினைவு மலர்களும்",
    "en": "Speeches & Memorial Volumes"
  }
];

export const WORKS: Work[] = [
  {
    "slug": "landscape-and-poetry",
    "cat": "tamil-literature",
    "sub": "nature-poetics",
    "year": "1967",
    "yearStart": 1967,
    "title": "Landscape and Poetry",
    "details": "Classical study of nature in Tamil poetry · 157 leaves",
    "status": "readable",
    "sources": [
      "S30"
    ]
  },
  {
    "slug": "nature-ancient-tamil-poetry",
    "cat": "tamil-literature",
    "sub": "nature-poetics",
    "year": "1953",
    "yearStart": 1953,
    "title": "Nature in Ancient Tamil Poetry",
    "details": "M.Litt. research monograph · Tamil Literature Society, 185 p.",
    "status": "readable",
    "sources": [
      "S29",
      "S40"
    ]
  },
  {
    "slug": "nature-poetry-in-tamil",
    "cat": "tamil-literature",
    "sub": "nature-poetics",
    "year": "1963",
    "yearStart": 1963,
    "title": "Nature Poetry in Tamil",
    "details": "Nature study work",
    "status": "readable",
    "sources": []
  },
  {
    "slug": "tiruvalluvar",
    "cat": "tamil-literature",
    "sub": "tirukkural-ethics",
    "year": "1967",
    "yearStart": 1967,
    "title": "Tiruvalluvar",
    "titleTa": "திருவள்ளுவர்",
    "details": "Annamalai University lectures · 64 p.",
    "status": "readable",
    "sources": [
      "S31",
      "S39"
    ]
  },
  {
    "slug": "ulaga-ozhakkaviyalil-tirukkural",
    "cat": "tamil-literature",
    "sub": "tirukkural-ethics",
    "year": "1967",
    "yearStart": 1967,
    "title": "Ulaga Ozhakkaviyalil Tirukkural",
    "details": "Moral philosophy treatise",
    "status": "readable",
    "sources": []
  },
  {
    "slug": "educational-thoughts-ancient-tamil",
    "cat": "tamil-literature",
    "sub": "education-prose",
    "year": "n.d.",
    "yearStart": 9999,
    "title": "Educational Thoughts in Ancient Tamil",
    "details": "Educational essays",
    "status": "readable",
    "sources": []
  },
  {
    "slug": "tamilttutu",
    "cat": "tamil-literature",
    "sub": "education-prose",
    "year": "1952",
    "yearStart": 1952,
    "title": "Tamilttūtu",
    "titleTa": "தமிழ்த் தூது",
    "details": "Tamil essay collection · Open Library, 114 p.",
    "status": "readable",
    "sources": [
      "S22",
      "S23",
      "S24"
    ]
  },
  {
    "slug": "tamilar-panpatu",
    "cat": "tamil-culture",
    "sub": "culture-civilization",
    "year": "1965",
    "yearStart": 1965,
    "title": "Tamilar Panpatu",
    "titleTa": "தமிழர் பண்பாடு",
    "details": "Tamil cultural essays",
    "status": "readable",
    "sources": []
  },
  {
    "slug": "tamil-culture-and-civilization",
    "cat": "tamil-culture",
    "sub": "culture-civilization",
    "year": "1971",
    "yearStart": 1971,
    "title": "Tamil Culture and Civilization",
    "details": "Asia Publishing House readings · 233 p.",
    "status": "readable",
    "sources": [
      "S37"
    ]
  },
  {
    "slug": "tamil-culture-vols-1-12",
    "cat": "tamil-culture",
    "sub": "journal-essays",
    "year": "1952–66",
    "yearStart": 1952,
    "title": "Tamil Culture (Vols. 1–12)",
    "details": "Quarterly research journal · bound scan & cleaned text",
    "status": "readable",
    "sources": [
      "S4",
      "S6"
    ],
    "image": "/images/tamil-culture-1952.jpg",
    "imageCaption": "Tamil Culture, Vol. 1 title leaf (1952)"
  },
  {
    "slug": "ethical-interpretation-nature",
    "cat": "tamil-culture",
    "sub": "journal-essays",
    "year": "1952",
    "yearStart": 1952,
    "title": "The Ethical Interpretation of Nature",
    "details": "Cleaned 1952 Tamil Culture essay · concise and ready to read",
    "status": "readable",
    "sources": [
      "S6"
    ],
    "image": "/images/tamil-culture-1952.jpg",
    "imageCaption": "Tamil Culture, Vol. 1 title leaf (1952)"
  },
  {
    "slug": "ore-ulakam",
    "cat": "tamil-culture",
    "sub": "travel-global",
    "year": "1966",
    "yearStart": 1966,
    "title": "Ore Ulakam",
    "titleTa": "ஒரே உலகம்",
    "details": "Tamil travel reflections · 230 p.",
    "status": "readable",
    "sources": [
      "S36"
    ]
  },
  {
    "slug": "conference-1966-proceedings",
    "cat": "tamil-studies",
    "sub": "conferences-iatr",
    "year": "1966/68",
    "yearStart": 1966,
    "title": "1st International Conference Proceedings",
    "details": "IATR Kuala Lumpur conference papers · two volumes",
    "status": "readable",
    "sources": [
      "S5",
      "S15"
    ],
    "image": "/images/conference-1966-proceedings.jpg",
    "imageCaption": "Proceedings title page, Kuala Lumpur 1966"
  },
  {
    "slug": "tamil-studies-abroad",
    "cat": "tamil-studies",
    "sub": "conferences-iatr",
    "year": "1968",
    "yearStart": 1968,
    "title": "Tamil Studies Abroad",
    "details": "IATR symposium volume · 288 p.",
    "status": "lending",
    "sources": [
      "S32"
    ]
  },
  {
    "slug": "research-in-tamil-studies",
    "cat": "tamil-studies",
    "sub": "conferences-iatr",
    "year": "1980",
    "yearStart": 1980,
    "title": "Research in Tamil Studies",
    "details": "Thanthai Chelva Memorial Lecture, Colombo",
    "status": "readable",
    "sources": []
  },
  {
    "slug": "reference-guide-tamil-studies-1966",
    "cat": "tamil-studies",
    "sub": "reference-guides",
    "year": "1966",
    "yearStart": 1966,
    "title": "A Reference Guide to Tamil Studies",
    "details": "University of Malaya Press bibliography · 122 p.",
    "status": "lending",
    "sources": [
      "S20",
      "S21"
    ]
  },
  {
    "slug": "antao-de-proenca-dictionary",
    "cat": "tamil-studies",
    "sub": "reference-guides",
    "year": "1964",
    "yearStart": 1964,
    "title": "Antão de Proença's Dictionary (1679)",
    "details": "17th-century Tamil-Portuguese dictionary reprint & commentary",
    "status": "readable",
    "sources": [],
    "image": "/images/thambiran-vanakkam-1578.jpg",
    "imageCaption": "Thambiran Vanakkam, Quilon 1578"
  },
  {
    "slug": "carthaginian-clergy",
    "cat": "tamil-studies",
    "sub": "reference-guides",
    "year": "1950",
    "yearStart": 1950,
    "title": "The Carthaginian Clergy",
    "details": "Roman doctoral research · Tamil Literature Society, 112 p.",
    "status": "lending",
    "sources": [
      "S34",
      "S35"
    ]
  },
  {
    "slug": "tamil-humanism",
    "cat": "philosophy-thought",
    "sub": "tamil-humanism",
    "year": "1972",
    "yearStart": 1972,
    "title": "Tamil Humanism, the Classical Period",
    "details": "Jaffna College lectures · 57 p.",
    "status": "readable",
    "sources": [
      "S38"
    ]
  },
  {
    "slug": "aspects-tamil-humanism",
    "cat": "philosophy-thought",
    "sub": "tamil-humanism",
    "year": "1972",
    "yearStart": 1972,
    "title": "Aspects of Tamil Humanism",
    "details": "Humanism study volume",
    "status": "readable",
    "sources": []
  },
  {
    "slug": "indian-thought-roman-stoicism",
    "cat": "philosophy-thought",
    "sub": "comparative-philosophy",
    "year": "1962",
    "yearStart": 1962,
    "title": "Indian Thought and Roman Stoicism",
    "details": "Comparative philosophy paper",
    "status": "readable",
    "sources": []
  },
  {
    "slug": "collected-papers",
    "cat": "collected-editions",
    "sub": "collected-papers",
    "year": "1995",
    "yearStart": 1995,
    "title": "Collected Papers of Thani Nayagam Adigalar",
    "details": "IITS posthumous English collection · 523 p.",
    "status": "readable",
    "sources": [
      "S28"
    ]
  },
  {
    "slug": "complete-works",
    "cat": "collected-editions",
    "sub": "collected-papers",
    "year": "2013",
    "yearStart": 2013,
    "title": "Complete Works of Thani Nayaga Adigalaar",
    "details": "Compilation record",
    "status": "readable",
    "sources": []
  },
  {
    "slug": "collected-speeches-1999",
    "cat": "collected-editions",
    "sub": "speeches-memorial",
    "year": "1999",
    "yearStart": 1999,
    "title": "Collected Speeches of Thani Nayagam Adigal",
    "details": "IITS posthumous Tamil speeches · 178 p.",
    "status": "readable",
    "sources": [
      "S9",
      "S25",
      "S26"
    ]
  },
  {
    "slug": "tamilaram",
    "cat": "collected-editions",
    "sub": "speeches-memorial",
    "year": "1983",
    "yearStart": 1983,
    "title": "Tamilāram",
    "titleTa": "தமிழாரம்",
    "details": "Memorial tribute volume",
    "status": "readable",
    "sources": []
  }
];

export const SOURCES: Source[] = [
  {
    "id": "S1",
    "title": "Anna Centenary Library Biography (1913–1980)",
    "type": "Tamil Nadu Govt Library Biography",
    "url": "https://www.annacentenarylibrary.org/pages/view/101"
  },
  {
    "id": "S2",
    "title": "He who convinced the world that Tamil is classical language",
    "type": "The Hindu, 24 November 2013",
    "url": "https://www.thehindu.com/news/cities/Tiruchirapalli/"
  },
  {
    "id": "S3",
    "title": "Thani Nayagam Adigal, by Amudhan Adigal (1993)",
    "type": "Tamil Digital Library Record",
    "url": "https://tamildigitallibrary.in/Articles/நூல்-1582"
  },
  {
    "id": "S4",
    "title": "Tamil Culture, Vol. 1, Nos. 3–4 (Sept 1952)",
    "type": "Tamil Digital Library 1952 issue",
    "url": "https://tamildigitallibrary.in/Articles/இதழ்-25020"
  },
  {
    "id": "S5",
    "title": "Proceedings of 1st International Conference (1966)",
    "type": "Kuala Lumpur, Published 1968",
    "url": "https://tamildigitallibrary.in/Articles/நூல்-9170"
  },
  {
    "id": "S6",
    "title": "Tamil Culture, Volumes 1–12",
    "type": "Internet Archive reading copy (CC0 1.0)",
    "url": "https://archive.org/details/tamil-culture-by-xavier"
  },
  {
    "id": "S7",
    "title": "Xavier S. Thani Nayagam Author Record",
    "type": "Open Library Bibliography",
    "url": "https://openlibrary.org/authors/OL3928A"
  },
  {
    "id": "S8",
    "title": "Luso-Tamil Catechism (Cartilha), Lisbon, 1554",
    "type": "Wikimedia Commons Public Domain",
    "url": "https://commons.wikimedia.org/wiki/File:Luso_Tamil"
  },
  {
    "id": "S9",
    "title": "Collected Speeches of Thani Nayagam Adigal (1999)",
    "type": "Tamil Digital Library Record",
    "url": "https://tamildigitallibrary.in/Articles/நூல்-18049"
  },
  {
    "id": "S10",
    "title": "Xavier Thaninayagam",
    "type": "English Wikipedia Biography",
    "url": "https://en.wikipedia.org/wiki/Xavier_Thaninayagam"
  },
  {
    "id": "S11",
    "title": "சேவியர் தனிநாயகம்",
    "type": "Tamil Wikipedia Biography",
    "url": "https://ta.wikipedia.org/wiki/சேவியர்_தனிநாயகம்"
  },
  {
    "id": "S12",
    "title": "The Roving Ambassador of Tamil, by Amudhan Adigal",
    "type": "The Hindu (2003) via Internet Archive",
    "url": "https://web.archive.org/web/20060614061528/"
  },
  {
    "id": "S13",
    "title": "Making Tamil a Classical Language, by Fr. Thamil Nesan",
    "type": "The Island (Colombo) via Web Archive",
    "url": "https://web.archive.org/web/20121021200534/"
  },
  {
    "id": "S14",
    "title": "Thambiran Vanakkam, Quilon, 1578",
    "type": "Wikimedia Commons Public Domain",
    "url": "https://commons.wikimedia.org/wiki/File:Thambiran"
  },
  {
    "id": "S15",
    "title": "1966 Conference Proceedings, Vol. 1",
    "type": "Internet Archive / TVA Scan",
    "url": "https://archive.org/details/dli.jZY9lup2kZl6TuX"
  },
  {
    "id": "S16",
    "title": "2nd International Conference Photograph",
    "type": "Tamil Wiki Photo (CC BY-SA)",
    "url": "https://tamil.wiki/wiki/File:இரண்டாவது_உலக"
  },
  {
    "id": "S17",
    "title": "Thani Nayagam Adigal with a Colleague",
    "type": "Tamil Wiki Photo (CC BY-SA)",
    "url": "https://tamil.wiki/wiki/File:தனிநாயகம்_அடிகள்4.png"
  },
  {
    "id": "S18",
    "title": "Outdoor Photograph",
    "type": "Tamil Wiki Photo (CC BY-SA)",
    "url": "https://tamil.wiki/wiki/File:சேவியர்_தனிநாயகம்2.png"
  },
  {
    "id": "S19",
    "title": "Archival Portrait",
    "type": "Tamil Wiki Photo (CC BY-SA)",
    "url": "https://tamil.wiki/wiki/File:சேவியர்_தனிநாயகம்.png"
  },
  {
    "id": "S20",
    "title": "A Reference Guide to Tamil Studies (1966)",
    "type": "Open Library OL13904M",
    "url": "https://openlibrary.org/books/OL13904M"
  },
  {
    "id": "S21",
    "title": "A Reference Guide to Tamil Studies IA Scan",
    "type": "Internet Archive Controlled Lending",
    "url": "https://archive.org/details/referenceguideto0000xavi"
  },
  {
    "id": "S22",
    "title": "Tamilttutu (1962 edition)",
    "type": "Open Library OL5157M",
    "url": "https://openlibrary.org/books/OL5157M"
  },
  {
    "id": "S23",
    "title": "தமிழ்த் தூது TDL 21987",
    "type": "Tamil Digital Library Record",
    "url": "https://tamildigitallibrary.in/Articles/நூல்-21987"
  },
  {
    "id": "S24",
    "title": "தமிழ்த் தூது IA Mirror",
    "type": "Internet Archive (114 scan leaves)",
    "url": "https://archive.org/details/tdl.21987-nuul-tmilllt"
  },
  {
    "id": "S25",
    "title": "Collected Speeches (1999)",
    "type": "Open Library OL169610M (178 p.)",
    "url": "https://openlibrary.org/books/OL169610M"
  },
  {
    "id": "S26",
    "title": "Collected Speeches IA Mirror",
    "type": "Internet Archive (190 scan leaves)",
    "url": "https://archive.org/details/tdl.18049-nuul-tnnnina"
  },
  {
    "id": "S27",
    "title": "Tamil Digital Library Rights Disclaimer",
    "type": "Site Rights Statement (TVA)",
    "url": "https://tamildigitallibrary.in/disclaimer"
  },
  {
    "id": "S28",
    "title": "Collected Papers of Thani Nayagam Adigalar (1995)",
    "type": "Internet Archive / IITS Mirror (523 l.)",
    "url": "https://archive.org/details/tdl.17933-collected"
  },
  {
    "id": "S29",
    "title": "Nature in Ancient Tamil Poetry IA Scan",
    "type": "Internet Archive (209 leaves)",
    "url": "https://archive.org/details/tdl.27397-nature"
  },
  {
    "id": "S30",
    "title": "Landscape and Poetry IA Scan",
    "type": "Internet Archive (157 leaves)",
    "url": "https://archive.org/details/tdl.17918-landscape"
  },
  {
    "id": "S31",
    "title": "Tiruvalluvar IA Scan",
    "type": "Internet Archive (66 leaves)",
    "url": "https://archive.org/details/tdl.25823-nuul-tiru"
  },
  {
    "id": "S32",
    "title": "Tamil Studies Abroad (1968)",
    "type": "Internet Archive Controlled Lending",
    "url": "https://archive.org/details/tamilstudiesabro0000unse"
  },
  {
    "id": "S33",
    "title": "IATR Official Contact",
    "type": "International Assoc. for Tamil Research",
    "url": "https://iatrofficial.org/contact/"
  },
  {
    "id": "S34",
    "title": "The Carthaginian Clergy (1950)",
    "type": "Open Library OL16592045M",
    "url": "https://openlibrary.org/books/OL16592045M"
  },
  {
    "id": "S35",
    "title": "The Carthaginian Clergy IA Scan",
    "type": "Internet Archive Controlled Lending",
    "url": "https://archive.org/details/bwb_W8-ANY-806"
  },
  {
    "id": "S36",
    "title": "Ore Ulakam (1966)",
    "type": "Open Library OL26211M (230 p.)",
    "url": "https://openlibrary.org/books/OL26211M"
  },
  {
    "id": "S37",
    "title": "Tamil Culture and Civilization (1971)",
    "type": "Open Library OL4553853M (233 p.)",
    "url": "https://openlibrary.org/books/OL4553853M"
  },
  {
    "id": "S38",
    "title": "Tamil Humanism, the Classical Period (1972)",
    "type": "Open Library OL3010086M (57 p.)",
    "url": "https://openlibrary.org/books/OL3010086M"
  },
  {
    "id": "S39",
    "title": "Tiruvalluvar (1967)",
    "type": "Open Library OL22309M (64 p.)",
    "url": "https://openlibrary.org/books/OL22309M"
  },
  {
    "id": "S40",
    "title": "Nature in Ancient Tamil Poetry Monograph (1953)",
    "type": "Open Library OL5484411M (185 p.)",
    "url": "https://openlibrary.org/books/OL5484411M"
  },
  {
    "id": "S41",
    "title": "Rev. Dr. Amudhan Adigal Profile",
    "type": "Tamil Wiki Article",
    "url": "https://tamil.wiki/wiki/அமுதன்ப_அடிகள்"
  },
  {
    "id": "S42",
    "title": "Amudhan Adigal Portrait",
    "type": "Tamil Wiki Photo (CC BY-SA)",
    "url": "https://tamil.wiki/wiki/File:Amudhan_Adikal"
  },
  {
    "id": "S43",
    "title": "Amudhan Adigal Biography Book Cover",
    "type": "Tamil Wiki Photo (CC BY-SA)",
    "url": "https://tamil.wiki/wiki/File:Amudhan_Adigal_Book"
  }
];

export const CAT_BY = Object.fromEntries(CATS.map((c) => [c.slug, c]));
export const SUB_BY = Object.fromEntries(SUBS.map((s) => [s.slug, s]));
export const SRC_BY = Object.fromEntries(SOURCES.map((s) => [s.id, s]));

export const STRINGS = {
  ta: {
    title: "தனிநாயக அடிகள் — எண்மிய ஆவணகமும் ஆய்வுப் பதிப்பும்",
    desc: "அருள்திரு. முனைவர் சேவியர் தனிநாயகம் அடிகளாரின் (1913–1980) வாழ்வு, எழுத்துகள் மற்றும் உலகளாவிய தமிழியல் பணிகளின் திறந்தவெளி எண்மிய ஆவணகம்.",
    nav: ["முகப்பு", "அவரைப் பற்றி", "பங்களிப்புகள்", "ஆவணகம்", "உதவி"],
    brandSub: "எண்மிய நூலகமும் ஆய்வுப் பதிப்பும்",
    menu: "பட்டியல்",
    menuClose: "மூடு",
    skip: "முதன்மை உள்ளடக்கத்திற்குத் தாவுக",
    dedication: "அருள்திரு. முனைவர் சேவியர் தனிநாயகம் அடிகளாரின் (1913–1980) வரலாற்றுப் பெருவாழ்வு, அரிய எழுத்துகள் மற்றும் உலகளாவிய தமிழ்ப் பணிகளைப் பாதுகாத்து, உலகத் தமிழர்களுக்கும் ஆய்வாளர்களுக்கும் கட்டணமின்றி வழங்கும் திறந்தவெளி ஆவண முயற்சி.",
    dedicationAlt: "Dedicated to the preservation, open-access reading, and global dissemination of the life, writings, and intellectual legacy of Rev. Dr. Xavier S. Thani Nayagam Adigal (1913–1980).",
    all: "அனைத்தும்",
    readable: "வாசிக்க",
    lending: "கடன் வழங்கல் / பார்வைக்கு",
    searchPlaceholder: "நூல்கள், கட்டுரைகள், ஆய்விதழ்களைத் தேடுக...",
    records: "படைப்புகள்",
    filterCat: "துறை வாரியாக",
    filterLang: "மொழி",
    reset: "மீட்டமைக்க",
    empty: "தேடலுக்குரிய ஆவணங்கள் எதுவும் இல்லை",
    emptyHint: "வடிகட்டிகளை மாற்றி மீண்டும் முயற்சிக்கவும்.",
    sources: "ஆவண மூலங்கள்",
    keyFacts: "வாழ்வியல் பதிவுக் குறிப்புகள்",
    route: "உலகளாவிய தமிழ்ப்பயணம்: 9 முக்கிய வாழ்வியல் களங்கள்",
    supportTitle: "அடிகளாரின் தமிழ்ப்பணியை உலகறியச் செய்வோம்",
    supportSummary: "அருள்திரு. முனைவர் அமுதன் அடிகள் காட்டிய வழியிலும் வழிகாட்டலிலும் முன்னெடுக்கப்படும் இவ்வெண்மிய ஆவணகத்திற்கு உங்கள் ஆதரவும் பங்களிப்பும் துணைநிற்கட்டும்.",
    readerZoom: "எழுத்தளவு",
    readerMeasure: "அகலம்",
    readerTheme: "தோற்றம்",
    zoomOut: "சிறிதாக்கு",
    zoomIn: "பெரிதாக்கு",
    standard: "வழக்கமான",
    wide: "அகன்ற",
    contents: "பொருளடக்கம்",
    prev: "முந்தையது",
    next: "அடுத்தது",
    preface: "நூல் முன்னுரை",
    record: "ஆவண விவரங்கள்",
    sourcesSec: "மூலங்கள்",
    plate: "ஆவண ஏடு",
    notice: "இப்படைப்பின் முழு ஆவணப் பிரதி ஆய்வாளர்களின் வாசிப்பிற்காக எண்மியப்படுத்தப்பட்டு வருகிறது. தற்போதைக்கு நூல் விவரங்களும் குறிப்புகளும் வழங்கப்பட்டுள்ளன.",
  },
  en: {
    title: "Father Thani Nayagam — Digital Archive & Research Edition",
    desc: "A comprehensive open-access digital archive dedicated to the life, scholarship, and global cultural diplomacy of Rev. Dr. Xavier S. Thani Nayagam (1913–1980).",
    nav: ["Home", "About", "Contributions", "Archive", "Support"],
    brandSub: "Digital Library & Research Edition",
    menu: "Menu",
    menuClose: "Close",
    skip: "Skip to main content",
    dedication: "A dedicated digital preservation initiative presenting the life, scholarship, and global cultural diplomacy of Rev. Dr. Xavier S. Thani Nayagam (1913–1980).",
    dedicationAlt: "தனிநாயக அடிகளாரின் அறிவுச் செல்வத்தை உலகத் தமிழர்களுக்கும் எதிர்கால ஆய்வாளர்களுக்கும் கொண்டு சேர்க்கும் திறந்தவெளி ஆவணக முயற்சி.",
    all: "All",
    readable: "Readable",
    lending: "Archival Reference",
    searchPlaceholder: "Search titles, essays, journals...",
    records: "records",
    filterCat: "By Category",
    filterLang: "Language",
    reset: "Reset filters",
    empty: "No matching documents found",
    emptyHint: "Try adjusting your filters or search terms.",
    sources: "Archival Sources",
    keyFacts: "Key Biographical Records",
    route: "Global Tamil Journey: 9 Key Centres",
    supportTitle: "Showcasing Father Thani Nayagam’s Legacy to the World",
    supportSummary: "Guided by the lifelong archival work of Rev. Dr. Amudhan Adigal, this open-access initiative preserves and shares Father Thani Nayagam’s global scholarship.",
    readerZoom: "Zoom",
    readerMeasure: "Measure",
    readerTheme: "Theme",
    zoomOut: "Zoom out",
    zoomIn: "Zoom in",
    standard: "Standard",
    wide: "Wide",
    contents: "Contents",
    prev: "Previous",
    next: "Next",
    preface: "Preface",
    record: "Record details",
    sourcesSec: "Sources",
    plate: "Plate",
    notice: "The full reading copy is being prepared for open access. This record currently presents the bibliographic details and source links.",
  },
};

export const ROUTES = [
  { key: "home", ta: "/", en: "/en/" },
  { key: "about", ta: "/about/", en: "/en/about/" },
  { key: "contributions", ta: "/contributions/", en: "/en/contributions/" },
  { key: "archive", ta: "/archive/", en: "/en/archive/" },
  { key: "sponsors", ta: "/sponsors/", en: "/en/sponsors/" },
];

export const KEY_FACTS: KeyFact[] = [
  { label: "Born / பிறப்பு", num: "01", en: "2 August 1913, Karampon, near Kayts, Jaffna", ta: "1913 ஆகஸ்ட் 2 — காரம்பொன், ஊர்காவற்றுறை, யாழ்ப்பாணம்", icon: "🏛️" },
  { label: "Died / மறைவு", num: "02", en: "1 September 1980, Jaffna (Aged 67)", ta: "1980 செப்டம்பர் 1 — யாழ்ப்பாணம் (அகவை 67)", icon: "🕊️" },
  { label: "Vocation / பணி & ஆளுமை", num: "03", en: "Catholic priest, linguist, editor, and global cultural ambassador", ta: "கத்தோலிக்க குரு, பன்மொழியியலாளர், பேராசிரியர், சர்வதேசத் தமிழ்த் தூதுவர்", icon: "🎓" },
  { label: "Doctorates / முனைவர் பட்டங்கள்", num: "04", en: "D.D. in Rome (1939); Ph.D. in London (1957)", ta: "இறையியல் முனைவர் (D.D., ரோம், 1939); கல்வியியல் முனைவர் (Ph.D., லண்டன், 1957)", icon: "📜" },
  { label: "Founded / நிறுவிய அமைப்புகள்", num: "05", en: "Tamil Culture quarterly (1952) & IATR (1964)", ta: "‘Tamil Culture’ காலாண்டிதழ் (1952) & உலகத் தமிழாராய்ச்சி மன்றம் (IATR, 1964)", icon: "🌐" },
  { label: "Organised / முதன்மை மாநாடு", num: "06", en: "1st World Conference of Tamil Studies, Kuala Lumpur (1966)", ta: "முதல் உலகத் தமிழாராய்ச்சி மாநாடு, கோலாலம்பூர் (1966)", icon: "🌏" },
];

export const JOURNEY_STOPS: JourneyStop[] = [
  { year: "1913", placeEn: "Karampon, Jaffna", noteEn: "Born on Kayts island.", placeTa: "காரம்பொன்", noteTa: "ஊர்காவற்றுறை அருகிலுள்ள தீவுக்கிராமத்தில் பிறப்பு." },
  { year: "1934–39", placeEn: "Rome", noteEn: "Pontifical Urban University, Doctor of Divinity (The Carthaginian Clergy).", placeTa: "ரோம்", noteTa: "அர்பன் பல்கலைக்கழகத்தில் இறையியல் முனைவர் (D.D.) பட்டம்." },
  { year: "1945–47", placeEn: "Annamalai University", noteEn: "Master of Letters research (Nature in Ancient Tamil Poetry).", placeTa: "சிதம்பரம்", noteTa: "அண்ணாமலைப் பல்கலைக்கழகத்தில் சங்க இலக்கிய இயற்கை பற்றிய எம்.லிட். ஆய்வு." },
  { year: "1950", placeEn: "Lisbon", noteEn: "Rediscovered the 1554 Cartilha, the earliest printed work containing an Indian language.", placeTa: "லிஸ்பன்", noteTa: "ஐரோப்பிய நூலகத்தில் 1554 'கார்த்தீலா' முதல் தமிழ் அச்சு நூலைக் கண்டறிதல்." },
  { year: "1952–61", placeEn: "Ceylon & Tuticorin", noteEn: "Lecturer at University of Ceylon; founded Tamil Culture quarterly.", placeTa: "இலங்கை / தூத்துக்குடி", noteTa: "பேராதனைப் பல்கலைக்கழக விரிவுரை; வரலாற்றுச் சிறப்புமிக்க 'Tamil Culture' ஆய்விதழ் தொடக்கம்." },
  { year: "1955–57", placeEn: "London", noteEn: "Ph.D. in Education at the University of London.", placeTa: "லண்டன்", noteTa: "லண்டன் பல்கலைக்கழகத்தில் தமிழ்க் கல்வியியல் குறித்த இரண்டாவது முனைவர் (Ph.D.) பட்டம்." },
  { year: "1961–69", placeEn: "Kuala Lumpur", noteEn: "Head of Indian Studies, University of Malaya; organized 1966 KL Conference.", placeTa: "கோலாலம்பூர்", noteTa: "மலேயாப் பல்கலைக்கழக இந்திய ஆய்வியல் துறைத் தலைவர்; முதல் உலகத் தமிழ் மாநாட்டு ஒருங்கிணைப்பு." },
  { year: "1969", placeEn: "Paris & Naples", noteEn: "Visiting Professor at the Sorbonne and University of Naples.", placeTa: "பாரிஸ் & நேப்பிள்ஸ்", noteTa: "புகழ்பெற்ற சோர்போன் மற்றும் நேப்பிள்ஸ் பல்கலைக்கழகங்களில் வருகைப் பேராசிரியர் பணி." },
  { year: "1980", placeEn: "Jaffna", noteEn: "Returned home; final lectures and passing.", placeTa: "யாழ்ப்பாணம்", noteTa: "தாயகம் திரும்புதல்; இறுதிப் பேருரைகள் மற்றும் நிறைவு." },
];

export const BIO_SECTIONS: BioSection[] = [
  {
    en: "Early Life and Family",
    ta: "தொடக்க வாழ்வும் குடும்பப் பின்னணியும்",
    enBody: "Born Xavier Nicholas Stanislaus on 2 August 1913 in Karampon, near Kayts (Ūr kāvaṟtuṟai) in the Jaffna district, he later took the name Xavier S. Thani Nayagam after becoming a Roman Catholic priest. “Thani Nayagam” translates as “lone hero.” His parents were Naganathan Stanislaus and Cecilia Bastiampillai; his paternal grandfather, Thaninayaga Mudali, came from Delft Island (Neduntheevu). He studied at St. Anthony’s College, Kayts, and then at St. Patrick’s College, Jaffna (1920–1922), receiving an English-medium education.",
    taBody: "1913 ஆகஸ்ட் 2 அன்று யாழ்ப்பாணத்தின் ஊர்காவற்றுறை அருகே காரம்பொன் கிராமத்தில் நாகநாதன் ஸ்ரனிஸ்லாஸ் மற்றும் சிசிலியா பாஸ்தியம்பிள்ளை இணையருக்கு மகனாகப் பிறந்தார். இயற்பெயர் சேவியர் நிக்கோலஸ் ஸ்ரனிஸ்லாஸ். பாட்டனார் தனிநாயக முதலி நெடுந்தீவைச் சேர்ந்த பெருமதிப்புமிக்க மரபினர். பின்னர் கத்தோலிக்கத் துறவியானதும் ‘சேவியர் தனிநாயகம்’ என்ற பெயரை ஏற்றுக்கொண்டார். காரம்பொன் புனித அந்தோனியார் கல்லூரி, யாழ்ப்பாணம் புனித பத்தரிசியார் கல்லூரி ஆகியவற்றில் தனது ஆரம்ப ஆங்கில வழிக் கல்வியைப் பயின்றார்.",
    fig: "FrThaninayagam-highres.jpg",
    figCap: "தனிநாயக அடிகள் — வரலாற்று ஆவணப் பதிவு",
    figCapEn: "Rev. Dr. Xavier S. Thani Nayagam — Archival Retrospective Plate",
    src: "S2",
  },
  {
    en: "Priestly Formation and Education in Rome",
    ta: "ரோமில் ஆன்மிகப் பயிற்சியும் இறையியல் முனைவர் பட்டமும்",
    enBody: "From 1934 to 1939, he resided at the Pontifical Urban University in Rome, earning a Doctor of Divinity degree with his dissertation The Carthaginian Clergy. Ordained a priest in Rome on 19 March 1938, he traveled widely across Western Europe, learning Italian, French, German, Spanish, and Portuguese alongside Latin and Greek, establishing the polyglot foundation that underpinned his later scholarly career.",
    taBody: "1934 முதல் 1939 வரை ரோம் நகரின் புகழ்பெற்ற அர்பன் பல்கலைக்கழகத்தில் பயின்று ‘The Carthaginian Clergy’ என்ற தலைப்பில் இறையியல் முனைவர் (D.D.) பட்டம் பெற்றார். 1938 மார்ச் 19 அன்று ரோம் நகரில் கத்தோலிக்க குருவாகத் திருநிலைப்படுத்தப்பட்டார். இத்தாலிய, பிரெஞ்சு, ஜெர்மன், ஸ்பானிஷ், போர்த்துக்கீசிய, லத்தீன் மற்றும் கிரேக்க மொழிகளைக் கற்றுத் தேர்ந்ததன் மூலம் பன்மொழிப் புலமை பெற்றார்.",
    fig: null,
  },
  {
    en: "Southern India and Tamil Awakening",
    ta: "தமிழக வருகையும் செவ்வியல் தமிழ் ஆய்வும்",
    enBody: "Arriving in South India in 1940, he served at St. Joseph’s High School in Vadakangulam (Tirunelveli) and began studying Tamil systematically with local pandits. From 1945 to 1947, he conducted research at Annamalai University under the guidance of S. Somasundara Bharati, earning a Master of Letters (M.Litt.) degree with his thesis Nature in Ancient Tamil Poetry.",
    taBody: "1940-இல் தென்னிந்தியாவிற்கு வருகை தந்து திருநெல்வேலி மாவட்டம் வடக்கன்குளம் புனித வளனார் பள்ளியில் பணியாற்றினார். அங்குத் தமிழ்ப் பண்டிதர்களிடம் சங்க இலக்கியங்களை முறையாகக் கற்றார். 1945 முதல் 1947 வரை சிதம்பரம் அண்ணாமலைப் பல்கலைக்கழகத்தில் நாவலர் ச. சோமசுந்தர பாரதியாரின் வழிகாட்டலில் ஆய்வு மேற்கொண்டு, ‘Nature in Ancient Tamil Poetry’ என்ற தலைப்பில் எம்.லிட். ஆய்வுப் பட்டம் பெற்றார்.",
    fig: null,
  },
  {
    en: "Academic Careers in Ceylon, London, and Malaya",
    ta: "பல்கலைக்கழகப் பேராசிரியப் பணிகளும் உலக விரிவுரைகளும்",
    enBody: "From 1952 to 1961, he served as a Lecturer in Education at the University of Ceylon, Peradeniya. During this time, he pursued a second doctorate at the University of London Institute of Education, awarded a Ph.D. in 1957. In 1961, he was appointed Professor and Head of the Department of Indian Studies at the University of Malaya in Kuala Lumpur. He also taught as a Visiting Professor at the Sorbonne and the University of Naples.",
    taBody: "1952 முதல் 1961 வரை பேராதனை இலங்கைப் பல்கலைக்கழகத்தில் விரிவுரையாளராகப் பணியாற்றினார். அதே காலகட்டத்தில் லண்டன் பல்கலைக்கழகக் கல்வி நிறுவனத்தில் தமிழ்க் கல்வியியல் சிந்தனைகள் குறித்து ஆய்வு மேற்கொண்டு தமது இரண்டாவது முனைவர் பட்டத்தைப் (Ph.D.) பெற்றார். 1961 இல் மலேசியாவின் மலேயாப் பல்கலைக்கழகத்தில் இந்திய ஆய்வியல் துறைத் தலைவராகவும் தமிழ்ப் பேராசிரியராகவும் நியமிக்கப்பட்டார். தொடர்ந்து பாரிஸ் சோர்போன் மற்றும் இத்தாலியின் நேப்பிள்ஸ் பல்கலைக்கழகங்களில் வருகைப் பேராசிரியராகக் கற்பித்தார். ஓராண்டு உலகச் சுற்றுப்பயணத்தில் மட்டும் அமெரிக்கா, ஐரோப்பா, ஆசிய நாடுகள் எங்கும் 200-க்கும் மேற்பட்ட பல்கலைக்கழக விரிவுரைகளை ஆற்றி உலக அரங்கில் தமிழின் பெருமையை நிலைநாட்டினார்.",
    fig: "conference-1966-proceedings.jpg",
    figCap: "முதலாவது உலகத் தமிழாராய்ச்சி மாநாட்டு ஆவணம் (கோலாலம்பூர், 1966)",
    figCapEn: "First International Conference-Seminar Proceedings (Kuala Lumpur, 1966)",
    src: "S5",
  },
  {
    en: "Publishing, Archives, and Institutions",
    ta: "ஆய்விதழியல், உலக மாநாடுகள், அச்சு மீட்டெடுப்பு",
    enBody: "In 1952 in Tuticorin, he founded the Tamil Literature Society and launched Tamil Culture, an English-language quarterly. In Lisbon in 1950, he identified the 1554 Cartilha (Luso-Tamil Catechism) — the first book printed containing an Indian language. On 7 January 1964 in New Delhi, alongside Jean Filliozat, Kamil Zvelebil, and V. I. Subramaniam, he co-founded the International Association for Tamil Research (IATR). In April 1966, he organized the First International Conference-Seminar of Tamil Studies in Kuala Lumpur.",
    taBody: "1952 இல் தூத்துக்குடியில் தமிழ் இலக்கியக் கழகத்தை நிறுவி, உலகத் தரம் வாய்ந்த ‘Tamil Culture’ ஆங்கிலக் காலாண்டு ஆய்விதழைத் தொடங்கினார். 1950 இல் லிஸ்பன் தேசிய நூலகத்தில் 1554-இல் அச்சிடப்பட்ட ‘கார்த்தீலா’ என்ற முதல் தமிழ் அச்சு நூலைக் கண்டறிந்தார். 1964 ஜனவரி 7 அன்று புதுதில்லியில் உலகளாவிய பேராசிரியர்களை ஒன்றிணைத்து சர்வதேசத் தமிழாராய்ச்சி மன்றத்தை (IATR) நிறுவினார். 1966 ஏப்ரலில் மலேசியத் தலைநகர் கோலாலம்பூரில் முதலாவது உலகத் தமிழாராய்ச்சி மாநாட்டைத் திறம்பட ஒருங்கிணைத்துத் தமிழ் ஆய்வை உலகளாவிய இயக்கமாக மாற்றினார்.",
    fig: null,
  },
  {
    en: "Final Years and Honours",
    ta: "நிறைவு வாழ்வும் வரலாற்று நினைவேந்தலும்",
    enBody: "In April 1980, he delivered the Thanthai Chelva Memorial Lecture in Colombo on Research in Tamil Studies. He passed away in Jaffna on the evening of 1 September 1980. At the 5th World Tamil Conference in Madurai (1981), a commemorative statue was unveiled in his honour, and the University of Jaffna conferred a posthumous doctorate.",
    taBody: "1980 ஏப்ரலில் கொழும்பில் தந்தை செல்வா நினைவுப் பேருரையை ஆற்றித் தமிழாய்வு நெறிகளை முன்வைத்தார். 1980 செப்டம்பர் 1 அன்று மாலை யாழ்ப்பாணத்தில் இயற்கை எய்தினார். 1981 இல் மதுரையில் நடைபெற்ற ஐந்தாவது உலகத் தமிழாராய்ச்சி மாநாட்டில் அவரது நினைவாக முழு உருவச் சிலை நிறுவப்பட்டது; யாழ்ப்பாணப் பல்கலைக்கழகம் அவருக்கு மரணத்திற்குப் பின் கௌரவ முனைவர் பட்டம் வழங்கிச் சிறப்பித்தது.",
    fig: null,
  },
];

export const MILESTONE_ERAS: MilestoneEra[] = [
  { en: "Formative Era (1913–1939)", ta: "தொடக்கக் காலமும் கல்வியும் (1913–1939)", items: [0, 1, 2, 3] },
  { en: "Indian Research & Literary Foundations (1940–1947)", ta: "இந்திய வருகையும் தமிழாய்வு அடித்தளமும் (1940–1947)", items: [4, 5] },
  { en: "Global Archival Discoveries & Journal Publishing (1950–1961)", ta: "அச்சு மீட்டெடுப்பும் ஆய்விதழியலும் (1950–1961)", items: [6, 7, 8, 9] },
  { en: "International Conferences & Academic Chairs (1961–1969)", ta: "உலக மாநாடுகளும் தமிழாராய்ச்சி மன்றமும் (1961–1969)", items: [10, 11, 12, 13, 14] },
  { en: "Final Lectures & Posthumous Honours (1980–1981)", ta: "நிறைவு வாழ்வும் வரலாற்று நினைவேந்தலும் (1980–1981)", items: [15, 16] },
];

export const MILESTONES: Milestone[] = [
  { year: "1913", enTitle: "Birth in Karampon, Jaffna", enDetail: "Born 2 August to Naganathan Stanislaus and Cecilia Bastiampillai.", taTitle: "காரம்பொன் கிராமத்தில் பிறப்பு", taDetail: "1913 ஆகஸ்ட் 2 அன்று நாகநாதன் ஸ்ரனிஸ்லாஸ் — சிசிலியா இணையருக்கு மகனாகப் பிறந்தார்.", sources: ["S2", "S10", "S11"] },
  { year: "1920–1922", enTitle: "Schooling in Jaffna", enDetail: "Studied at St. Anthony’s College (Kayts) and St. Patrick’s College (Jaffna).", taTitle: "யாழ்ப்பாணத்தில் தொடக்கக் கல்வி", taDetail: "ஊர்காவற்றுறை புனித அந்தோனியார் மற்றும் யாழ்ப்பாணம் புனித பத்தரிசியார் கல்லூரிகளில் ஆங்கில வழிக் கல்வி.", sources: ["S10", "S11"] },
  { year: "1931–1934", enTitle: "Seminary in Colombo", enDetail: "St. Bernard’s Seminary; completed B.A. in Philosophy.", taTitle: "கொழும்பு செமினரியில் தத்துவக் கல்வி", taDetail: "கொழும்பு புனித பேர்னாட் செமினரியில் தத்துவவியலில் இளங்கலைப் பட்டம் பெற்றார்.", sources: ["S10", "S11"] },
  { year: "1934–1938", enTitle: "Doctorate in Rome", enDetail: "Pontifical Urban University, Doctor of Divinity; ordained priest (1938).", taTitle: "ரோமில் இறையியல் முனைவர் பட்டம்", taDetail: "ரோம் அர்பன் பல்கலைக்கழகத்தில் இறையியல் முனைவர் (D.D.) பட்டம்; 1938-இல் குருத்துவ அருட்பொழிவு.", sources: ["S10", "S11"] },
  { year: "1940–1945", enTitle: "Ministry and Tamil Learning in India", enDetail: "Southern India; began systematic study of classical Tamil literature.", taTitle: "தமிழகத்தில் ஆன்மிகப் பணியும் தமிழ்க் கல்வியும்", taDetail: "தென்னிந்தியாவில் அருட்பணி; தமிழ் செவ்வியல் இலக்கியங்களை முறையாகக் கற்றுத் தேர்ச்சி பெற்றார்.", sources: ["S10", "S11"] },
  { year: "1945–1947", enTitle: "M.Litt. at Annamalai University", enDetail: "Completed research on landscape and nature in ancient Tamil poetry under S. S. Bharati.", taTitle: "அண்ணாமலையில் எம்.லிட். ஆய்வுப் பட்டம்", taDetail: "ச. சோமசுந்தர பாரதியாரின் வழிகாட்டலில் சங்க இலக்கிய இயற்கை குறித்த புகழ்பெற்ற எம்.லிட். ஆய்வு.", sources: ["S10", "S11"] },
  { year: "1950", enTitle: "Rediscovery of 1554 Cartilha in Lisbon", enDetail: "Identified the earliest printed work containing an Indian language at the National Library.", taTitle: "லிஸ்பனில் 1554 ‘கார்த்தீலா’ கண்டறிதல்", taDetail: "போர்ச்சுகல் தேசிய நூலகத்தில் முதல் தமிழ் அச்சு நூலான 1554 ‘கார்த்தீலா’வை ஆவணப்படுத்தினார்.", sources: ["S8", "S10", "S11"] },
  { year: "1952", enTitle: "Tamil Culture Quarterly Launched", enDetail: "Founded in Tuticorin; established the Academy of Tamil Culture.", taTitle: "‘Tamil Culture’ ஆய்விதழ் தொடக்கம்", taDetail: "தூத்துக்குடியில் உலகத்தரம் வாய்ந்த ஆங்கிலக் காலாண்டு ஆய்விதழையும் தமிழ் இலக்கியக் கழகத்தையும் நிறுவினார்.", sources: ["S1", "S4", "S10", "S11"] },
  { year: "1952–1961", enTitle: "Teaching at University of Ceylon", enDetail: "Lecturer in Education at Peradeniya; promoted Tamil studies worldwide.", taTitle: "பேராதனைப் பல்கலைக்கழக விரிவுரையாளர்", taDetail: "இலங்கைப் பேராதனைப் பல்கலைக்கழகத்தில் விரிவுரையாளராகப் பணியாற்றி உலகளாவிய தமிழியலை வளர்த்தார்.", sources: ["S10", "S11"] },
  { year: "1955–1957", enTitle: "Ph.D. at University of London", enDetail: "Completed second doctorate on educational theory in Tamil literature.", taTitle: "லண்டன் பல்கலைக்கழகத்தில் 2-வது முனைவர் பட்டம்", taDetail: "லண்டன் பல்கலைக்கழகக் கல்வி நிறுவனத்தில் தமிழ்க் கல்வியியல் சிந்தனைகளில் முனைவர் (Ph.D.) பட்டம்.", sources: ["S10", "S11"] },
  { year: "1961–1969", enTitle: "Professor at University of Malaya", enDetail: "Head of the Department of Indian Studies; built international scholarly network.", taTitle: "மலேயாப் பல்கலைக்கழகத் துறைத் தலைவர்", taDetail: "இந்திய ஆய்வியல் துறையை நிறுவி, தென்கிழக்காசியாவின் முன்னணித் தமிழியல் மையமாக உயர்த்தினார்.", sources: ["S1", "S10", "S11"] },
  { year: "1962", enTitle: "Proposal for World Tamil Conferences", enDetail: "Conceived international academic conferences on Tamil studies at Delhi seminar.", taTitle: "உலகத் தமிழ் மாநாட்டுக்கான வரைவு", taDetail: "தமிழக அரசு மற்றும் உலக அறிஞர்களுக்கு உலகத் தமிழ் மாநாடுகளை நடத்தும் திட்டத்தை முன்வைத்தார்.", sources: ["S11"] },
  { year: "1964", enTitle: "IATR Founded in New Delhi", enDetail: "Co-founded International Association for Tamil Research on 7 January with 26 scholars.", taTitle: "புதுதில்லியில் உலகத் தமிழாராய்ச்சி மன்றம் உருவாக்கம்", taDetail: "25+ நாடுகளின் அறிஞர்களுடன் இணைந்து சர்வதேசத் தமிழாராய்ச்சி மன்றத்தை (IATR) தோற்றுவித்தார்.", sources: ["S1", "S2", "S10", "S11"] },
  { year: "1966", enTitle: "1st International Conference in Kuala Lumpur", enDetail: "General Secretary of conference (16–23 April); released Proença dictionary reprint.", taTitle: "கோலாலம்பூரில் முதலாவது உலகத் தமிழ் மாநாடு", taDetail: "மாநாட்டின் பொதுச் செயலாளராகப் பெருவெற்றி பெறச் செய்து, 1679 புரோவென்சா அகராதியின் மறுபதிப்பை வெளியிட்டார்.", sources: ["S1", "S5", "S10", "S11"] },
  { year: "1969", enTitle: "Teaching in Europe", enDetail: "Visiting Professor at Sorbonne (Paris) and University of Naples.", taTitle: "ஐரோப்பியப் பல்கலைக்கழகங்களில் வருகைப் பேராசிரியர்", taDetail: "பாரிஸ் சோர்போன் மற்றும் நேப்பிள்ஸ் பல்கலைக்கழகங்களில் தமிழ் வருகைப் பேராசிரியராகக் கற்பித்தார்.", sources: ["S1", "S10", "S11"] },
  { year: "1980", enTitle: "Final Lectures and Passing", enDetail: "Delivered Thanthai Chelva Memorial Lecture in Colombo; passed away in Jaffna on 1 September.", taTitle: "இறுதிப் பேருரைகளும் மறைவும்", taDetail: "கொழும்பில் தந்தை செல்வா நினைவுப் பேருரையை நிகழ்த்தினார்; செப்டம்பர் 1 அன்று யாழ்ப்பாணத்தில் இயற்கை எய்தினார்.", sources: ["S1", "S9", "S10", "S11"] },
  { year: "1981", enTitle: "Posthumous Honours", enDetail: "Statue unveiled at 5th World Conference in Madurai; posthumous doctorate conferred by University of Jaffna.", taTitle: "மதுரை மாநாட்டு நினைவேந்தல் & முனைவர் பட்டம்", taDetail: "மதுரை 5-வது உலகத் தமிழ் மாநாட்டில் முழு உருவச் சிலை திறப்பு; யாழ்ப்பாணப் பல்கலைக்கழகத்தின் மரணத்திற்குப் பின் கௌரவ முனைவர் பட்டம்.", sources: ["S1", "S10", "S11", "S13"] },
];

export const CONTRIBUTORS_PILLARS: ContributionPillar[] = [
  {
    enTitle: "Publishing (‘Tamil Culture’ Quarterly)",
    taTitle: "ஆய்விதழியல் (‘Tamil Culture’ காலாண்டிதழ்)",
    enDesc: "Founded Tamil Culture (1952–1966), an English-language quarterly dedicated to Tamil literature, history, art, and society. Reached universities globally and carried work by scholars including Kamil Zvelebil, Jean Filliozat, Mikhail Andronov, Murray Emeneau, F. B. J. Kuiper, J. R. Marr, C. R. Boxer, and Thomas Burrow.",
    taDesc: "1952 முதல் 1966 வரை வெளிவந்த ‘Tamil Culture’ ஆங்கிலக் காலாண்டிதழ் வழியாக, உலகெங்கிலுமுள்ள தலைசிறந்த மொழியியல் அறிஞர்களின் தமிழாய்வுகளைப் பதிப்பித்துச் சர்வதேசத் தரத்திற்கு உயர்த்தினார்.",
  },
  {
    enTitle: "Institution Building (IATR)",
    taTitle: "நிறுவன உருவாக்கம் (உலகத் தமிழாராய்ச்சி மன்றம் - IATR)",
    enDesc: "Convened scholars in New Delhi on 7 January 1964 to found the International Association for Tamil Research. Jean Filliozat was first president; Thomas Burrow, Murray Emeneau, T. P. Meenakshisundaram, Mu. Varadarajan served as vice-presidents; Thani Nayagam and Zvelebil served as joint secretaries.",
    taDesc: "1964 ஜனவரி 7 அன்று புதுதில்லியில் உலகளாவிய மொழியியல் பேராசிரியர்களை ஒன்றிணைத்து சர்வதேசத் தமிழாராய்ச்சி மன்றத்தை (IATR) நிறுவினார்.",
  },
  {
    enTitle: "Conference Leadership (1966 KL Conference)",
    taTitle: "மாநாட்டுத் தலைமை (கோலாலம்பூர் உலக மாநாடு, 1966)",
    enDesc: "General Secretary of the 1st International Conference-Seminar of Tamil Studies (16–23 April 1966). Opened by Malaysian Prime Minister Tunku Abdul Rahman; attended by Tamil Nadu Chief Minister M. Bhaktavatsalam. Published two-volume proceedings.",
    taDesc: "மலேசியப் பிரதமர் துங்கு அப்துல் ரகுமான் தலைமையில் நடைபெற்ற முதலாவது உலகத் தமிழாராய்ச்சி மாநாட்டின் பொதுச் செயலாளராகப் பொறுப்பேற்று இரு தொகுதி நடவடிக்கைகளை வெளியிட்டார்.",
  },
  {
    enTitle: "Archival Research (16th-Century Print Recovery)",
    taTitle: "ஆவண ஆய்வு (16-ஆம் நூற்றாண்டுத் தமிழ் அச்சு மீட்பு)",
    enDesc: "Rediscovered and documented the 1554 Cartilha (Lisbon), 1578 Thambiran Vanakkam (Quilon), 1579 Kiristiani Vanakkam, 1679 Antão de Proença Tamil-Portuguese Dictionary (Vatican), and 1549 Arte da Lingua Malabar grammar manuscript.",
    taDesc: "லிஸ்பனில் 1554 ‘கார்த்தீலா’, கொல்லத்தில் 1578 ‘தம்பிரான் வணக்கம்’, 1679 அந்தோனியோ த புரோவென்சா அகராதி உள்ளிட்ட இந்திய மொழிகளின் முதல் அச்சு நூல்களை ஐரோப்பிய ஆவணகங்களிலிருந்து மீட்டெடுத்தார்.",
  },
  {
    enTitle: "Reference Works & Bibliographies",
    taTitle: "அடிப்படை ஆய்வு நூலியல்கள் & வழிகாட்டிகள்",
    enDesc: "Published A Reference Guide to Tamil Studies (1966, University of Malaya Press), a 130-page research bibliography. Arranged republication and expansion of Simon Casie Chetty’s Tamil Plutarch.",
    taDesc: "‘A Reference Guide to Tamil Studies’ (1966) முதலான சர்வதேச ஆய்வு நூலியல்களையும், சைமன் காசிச் செட்டியின் ‘தமிழ் புளூட்டாக்’ வரலாற்று நூலின் மறுபதிப்பையும் வெளியிட்டார்.",
  },
  {
    enTitle: "International Teaching & Lectures",
    taTitle: "உலகப் பல்கலைக்கழக விரிவுரைகள் & கல்விப் பணி",
    enDesc: "Lectured across Japan, Chile, Brazil, Peru, Mexico, Ecuador, USA, and Europe. Delivered over 200 lectures in a single year of travel.",
    taDesc: "ஜப்பான், சிலி, பிரேசில், பெரு, மெக்சிகோ, அமெரிக்கா, ஐரோப்பிய நாடுகள் எங்கும் ஓராண்டில் 200-க்கும் மேற்பட்ட சர்வதேசப் பல்கலைக்கழக விரிவுரைகளை நிகழ்த்தினார்.",
  },
];
