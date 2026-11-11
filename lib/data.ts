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
    "hintEn": "Classical poetry, nature, Tirukkural, and educational thought",
    "image": "/images/tamil-culture-1952.jpg"
  },
  {
    "slug": "tamil-culture",
    "cls": "cat-culture",
    "ta": "தமிழர் பண்பாடும் நாகரிகமும்",
    "en": "Tamil Culture & Civilization",
    "hintTa": "பண்பாட்டு வரலாறு, சமுதாயக் கட்டுரைகள், ஆய்வு இதழியல், உலகப் பயணங்கள்",
    "hintEn": "Tamil civilization, cultural essays, journal writings, and travel reflections",
    "image": "/images/tamil-culture-1952.jpg"
  },
  {
    "slug": "tamil-studies",
    "cls": "cat-studies",
    "ta": "தமிழாய்வுக் கட்டுரைகளும் நூலியலும்",
    "en": "Tamil Research & Bibliographies",
    "hintTa": "சர்வதேச மாநாடுகள், ஆய்வுக் குறிப்பேடுகள், ஆவண வரலாற்று வழிகாட்டிகள்",
    "hintEn": "International conferences, research guides, and bibliographies",
    "image": "/images/conference-1966-proceedings.jpg"
  },
  {
    "slug": "philosophy-thought",
    "cls": "cat-philosophy",
    "ta": "மெய்யியலும் தமிழ் மானுடவியலும்",
    "en": "Philosophy & Tamil Humanism",
    "hintTa": "செவ்வியல் தமிழ் மானுடவியல், ஒப்பீட்டுத் தத்துவக் கோட்பாடுகள், அறவியல்",
    "hintEn": "Tamil humanism, comparative philosophy, and moral thought",
    "image": "/images/thambiran-vanakkam-1578.jpg"
  },
  {
    "slug": "collected-editions",
    "cls": "cat-collected",
    "ta": "முழுமைத் தொகுப்புகளும் சொற்பொழிவுகளும்",
    "en": "Collected Works & Addresses",
    "hintTa": "முழு ஆய்வுக் கட்டுரைகள், வரலாற்றுப் பேருரைகள், நூற்றாண்டு நினைவுத் தொகுப்புகள்",
    "hintEn": "Complete scholarly papers, public addresses, and tributes",
    "image": "/images/amudhan-adigal-book.jpg"
  }
];

export const SUBS: Subcategory[] = [
  {
    "slug": "nature-poetics",
    "cat": "tamil-literature",
    "ta": "இயற்கையும் கவிதையியலும்",
    "en": "Nature & Poetics",
    "hintTa": "சங்க இலக்கியத்தில் இயற்கை வனப்பு, முல்லை-குறிஞ்சி-நெய்தல் திணையியல் மற்றும் செவ்வியல் தமிழ்க் கவிதைகளின் அழகியல் கோட்பாடுகள்.",
    "hintEn": "Landscape, environmental aesthetics, and classical poetic conventions in ancient Tamil Sangam poetry.",
    "image": "/images/tamil-culture-1952.jpg"
  },
  {
    "slug": "tirukkural-ethics",
    "cat": "tamil-literature",
    "ta": "திருக்குறள், அறவியல்",
    "en": "Tirukkural & Ethics",
    "hintTa": "திருவள்ளுவர் கண்ட உலகப் பொதுமறை அறக் கோட்பாடுகள், மானுட விழுமியங்கள் மற்றும் சமுதாய நீதி நெறிமுறைகள்.",
    "hintEn": "Universal ethics, moral philosophy, and humanist justice in the Tirukkural.",
    "image": "/images/tamil-culture-1952.jpg"
  },
  {
    "slug": "education-prose",
    "cat": "tamil-literature",
    "ta": "கல்வியியலும் உரைநடையும்",
    "en": "Education & Prose",
    "hintTa": "தனிநாயக அடிகளாரின் கல்வியியல் சிந்தனைகள், தாய்மொழி வழிக் கல்வி வளர்ச்சி மற்றும் தமிழ் உரைநடை வரலாறு.",
    "hintEn": "Educational philosophy, the role of the mother tongue, and the historical development of Tamil prose.",
    "image": "/images/tamil-culture-1952.jpg"
  },
  {
    "slug": "culture-civilization",
    "cat": "tamil-culture",
    "ta": "பண்பாடும் நாகரிகமும்",
    "en": "Culture & Civilization",
    "hintTa": "பழந்தமிழர் நாகரிகச் சிறப்பு, உலகப் பண்பாடுகளுடன் ஒப்பீடு மற்றும் தமிழர் வாழ்வியல் கலை மரபுகள்.",
    "hintEn": "Ancient Tamil civilization, cultural heritage, world comparisons, and living traditions.",
    "image": "/images/tamil-culture-1952.jpg"
  },
  {
    "slug": "journal-essays",
    "cat": "tamil-culture",
    "ta": "இதழியல் ஆய்வுக் கட்டுரைகள்",
    "en": "Journal Essays",
    "hintTa": "அடிகளார் நிறுவி ஆசிரியராக இயக்கிய 'Tamil Culture' சர்வதேசக் காலாண்டிதழில் வெளிவந்த முதன்மை ஆய்வுக் கட்டுரைகள்.",
    "hintEn": "Seminal research papers published in the international quarterly journal 'Tamil Culture' founded by Fr. Thani Nayagam.",
    "image": "/images/tamil-culture-1952.jpg"
  },
  {
    "slug": "travel-global",
    "cat": "tamil-culture",
    "ta": "உலகப் பயணக் குறிப்புகள்",
    "en": "Travel & Global Reflections",
    "hintTa": "அடிகளார் உலகம் சுற்றிய ஆய்வுப் பயணங்களின் பதிவுகள் ('ஒன்றே உலகம்'), கிழக்காசியா, ஐரோப்பா, அமெரிக்க நாடுகளில் தமிழ்ப் பண்பாட்டுப் பரவல்.",
    "hintEn": "Travel reflections from his global journeys ('One World'), tracing Tamil heritage across East Asia, Europe, and the Americas.",
    "image": "/images/tamil-culture-1952.jpg"
  },
  {
    "slug": "conferences-iatr",
    "cat": "tamil-studies",
    "ta": "சர்வதேச மாநாடுகளும் IATR அமைப்பும்",
    "en": "Conferences & IATR",
    "hintTa": "உலகத் தமிழாராய்ச்சி மன்றம் (IATR) நிறுவல் வரலாறு, கோலாலம்பூர், சென்னை, பாரிஸ் உலகத் தமிழ் மாநாடுகளின் ஆய்வு ஆவணங்கள்.",
    "hintEn": "The founding of the International Association of Tamil Research (IATR) and historic proceedings of global Tamil conferences.",
    "image": "/images/conference-1966-proceedings.jpg"
  },
  {
    "slug": "reference-guides",
    "cat": "tamil-studies",
    "ta": "ஆய்வு நூலியல்களும் வழிகாட்டிகளும்",
    "en": "Reference Guides & Bibliographies",
    "hintTa": "உலகளாவிய நூலகங்கள் மற்றும் ஆவணகங்களில் உள்ள தமிழ் நூல்களின் வழிகாட்டிகள், ஆய்வு நூலியல் குறிப்பேடுகள்.",
    "hintEn": "Research bibliographies and archival guides documenting Tamil materials across European and world libraries.",
    "image": "/images/catechism-1554.jpg"
  },
  {
    "slug": "tamil-humanism",
    "cat": "philosophy-thought",
    "ta": "செவ்வியல் தமிழ் மானுடவியல்",
    "en": "Tamil Humanism",
    "hintTa": "'யாதும் ஊரே யாவரும் கேளிர்' எனும் உலகளாவிய தமிழ்ச் செவ்வியல் மானுடநேயக் கோட்பாடுகள் மற்றும் அறவியல் சிந்தனைகள்.",
    "hintEn": "Classical Tamil humanist philosophy ('Every city is home, all are kin'), universal fellowship, and moral thought.",
    "image": "/images/thambiran-vanakkam-1578.jpg"
  },
  {
    "slug": "comparative-philosophy",
    "cat": "philosophy-thought",
    "ta": "ஒப்பீட்டுத் தத்துவவியல்",
    "en": "Comparative Philosophy",
    "hintTa": "கீழைநாட்டு, மேலைநாட்டு தத்துவ மரபுகளுடன் தமிழ் அறவியல் மற்றும் மெய்யியல் கருத்துகளின் ஆழமான ஒப்பாய்வு.",
    "hintEn": "Comparative studies bridging Western, Indian, and classical Tamil philosophical traditions.",
    "image": "/images/thambiran-vanakkam-1578.jpg"
  },
  {
    "slug": "collected-papers",
    "cat": "collected-editions",
    "ta": "ஆங்கில ஆய்வுக் கட்டுரைகளின் முழுத்தொகுப்பு",
    "en": "Collected Research Papers",
    "hintTa": "தனிநாயக அடிகளார் சர்வதேச மாநாடுகளிலும் ஆய்வு இதழ்களிலும் ஆங்கிலத்தில் வெளியிட்ட முதன்மை ஆய்வுக் கட்டுரைகளின் முழுமைத் தொகுப்பு.",
    "hintEn": "Comprehensive collected research papers written in English for international conferences and journals.",
    "image": "/images/amudhan-adigal-book.jpg"
  },
  {
    "slug": "speeches-memorial",
    "cat": "collected-editions",
    "ta": "வரலாற்றுப் பேருரைகளும் நினைவு மலர்களும்",
    "en": "Speeches & Memorial Volumes",
    "hintTa": "அடிகளார் ஆற்றிய வரலாற்றுச் சிறப்புமிக்க சொற்பொழிவுகள், வானொலி உரைகள், நூற்றாண்டு நினைவு மலர்க் கட்டுரைகள்.",
    "hintEn": "Keynote addresses, radio lectures, memorial tributes, and centennial commemorative writings.",
    "image": "/images/amudhan-adigal-book.jpg"
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
    "details": "Nature in classical Tamil poetry · catalogued 1967 edition; 157 scan leaves",
    "status": "readable",
    "sources": [
      "S30",
      "S44"
    ],
    "biographyPages": "171, 211",
    "biographyNoteEn": "Amudhan records a 1966 Asia Publishing House edition. The catalogue retains its 1967 edition date; the digitised scan contains 157 leaves.",
    "biographyNoteTa": "அமுதன் அடிகளார் 1966 ஆசியா பதிப்பகப் பதிப்பைக் குறிப்பிடுகிறார். இப்பட்டியலின் 1967 பதிப்புக் குறிப்பு தனியாகப் பாதுகாக்கப்பட்டுள்ளது; இங்குள்ள பிரதியில் 157 பக்கங்கள் உள்ளன.",
    "detailsTa": "செவ்வியல் தமிழ் இலக்கியத்தில் இயற்கை · 1967 பதிப்பு; 157 பக்கங்கள் கொண்ட நூல்"
  },
  {
    "slug": "nature-ancient-tamil-poetry",
    "cat": "tamil-literature",
    "sub": "nature-poetics",
    "year": "1953",
    "yearStart": 1953,
    "title": "Nature in Ancient Tamil Poetry",
    "details": "1949 M.Litt. research · Tamil Literature Society, xxii + 185 p.",
    "status": "readable",
    "sources": [
      "S29",
      "S40",
      "S44"
    ],
    "biographyPages": "11, 171, 206",
    "biographyNoteEn": "Based on his 1949 M.Litt. thesis. The biography gives 1952 in its narrative and 1953 in its bibliography; this record retains the bibliography-listed edition.",
    "biographyNoteTa": "1949 எம்.லிட். ஆய்வின் நூல் வடிவம். வாழ்க்கை வரலாற்றில் 1952 என்றும் நூற்பட்டியலில் 1953 என்றும் குறிப்பிடப்பட்டுள்ளது; இங்கு நூற்பட்டியலின் பதிப்பாண்டு பாதுகாக்கப்பட்டுள்ளது.",
    "detailsTa": "1949 எம்.லிட். ஆய்வின் நூல் வடிவம் · தமிழ் இலக்கியக் கழகம், xxii + 185 பக்கங்கள்"
  },
  {
    "slug": "nature-poetry-in-tamil",
    "cat": "tamil-literature",
    "sub": "nature-poetics",
    "year": "1963",
    "yearStart": 1963,
    "title": "Nature Poetry in Tamil: The Classical Period",
    "details": "1963 edition of the nature-poetry study · xvii + 153 p.",
    "status": "readable",
    "sources": [
      "S44"
    ],
    "biographyPages": "171, 210",
    "biographyNoteEn": "The 1963 edition in the same research lineage as Nature in Ancient Tamil Poetry and Landscape and Poetry.",
    "biographyNoteTa": "பழந்தமிழ் இலக்கியத்தில் இயற்கை குறித்த ஆய்வின் 1963 பதிப்பு; Nature in Ancient Tamil Poetry, Landscape and Poetry ஆகியவற்றுடன் தொடர்புடையது.",
    "detailsTa": "இயற்கைக் கவிதை ஆய்வின் 1963 பதிப்பு · xvii + 153 பக்கங்கள்"
  },
  {
    "slug": "tiruvalluvar",
    "cat": "tamil-literature",
    "sub": "tirukkural-ethics",
    "year": "1967",
    "yearStart": 1967,
    "title": "Tiruvalluvar",
    "titleTa": "திருவள்ளுவர்",
    "details": "1961 lectures on comparative ethics · published by Annamalai University, 1967",
    "status": "readable",
    "sources": [
      "S31",
      "S39",
      "S44"
    ],
    "biographyPages": "155, 214",
    "biographyNoteEn": "Three Sornammal lectures delivered in February 1961 and published in 1967. Amudhan gives 60 numbered pages; the linked catalogue gives 64.",
    "biographyNoteTa": "1961 பெப்ருவரியில் நிகழ்த்திய மூன்று சொர்ணம்மாள் அறக்கட்டளைச் சொற்பொழிவுகள்; 1967 நூல் பதிப்பு. அமுதன் அடிகளார் 60 பக்கங்களையும் இணைக்கப்பட்ட நூற்பட்டியல் 64 பக்கங்களையும் குறிப்பிடுகின்றன.",
    "detailsTa": "திருக்குறள் ஒப்பியல் அறவியல் குறித்த 1961 உரைகள் · அண்ணாமலைப் பல்கலைக்கழக வெளியீடு, 1967"
  },
  {
    "slug": "ulaga-ozhakkaviyalil-tirukkural",
    "cat": "tamil-literature",
    "sub": "tirukkural-ethics",
    "year": "n.d.",
    "yearStart": 9999,
    "title": "Ulaga Ozhakkaviyalil Tirukkural",
    "details": "Related Tirukkural reading · separate publication details unverified",
    "status": "readable",
    "sources": [
      "S44"
    ],
    "biographyPages": "155, 214",
    "biographyNoteEn": "This topic is discussed in Tiruvalluvar. The biography does not establish a separate publication under this title or its date.",
    "biographyNoteTa": "இப்பொருள் திருவள்ளுவர் நூலில் விவாதிக்கப்படுகிறது. இத்தலைப்பில் தனி நூல் வெளியானதையோ அதன் ஆண்டையோ வாழ்க்கை வரலாறு உறுதிப்படுத்தவில்லை.",
    "detailsTa": "திருக்குறள் குறித்த தொடர்புடைய வாசிப்பு · தனிப் பதிப்பின் விவரங்கள் உறுதிப்படுத்தப்படவில்லை"
  },
  {
    "slug": "educational-thoughts-ancient-tamil",
    "cat": "tamil-literature",
    "sub": "education-prose",
    "year": "1956–57",
    "yearStart": 1956,
    "title": "Education in Ancient Tamil Literature: Essays",
    "details": "Three related Tamil Culture essays · 1956–1957",
    "status": "readable",
    "sources": [
      "S44"
    ],
    "yearEnd": 1957,
    "biographyPages": "174, 207–208",
    "biographyNoteEn": "The reading copy groups related Tamil Culture essays from 1956 and 1957. His separately titled Educational Thought in Ancient Tamil Literature was an unpublished 1957 Ph.D. thesis.",
    "biographyNoteTa": "வாசிப்புப் பிரதியில் 1956, 1957 ஆண்டுகளின் தொடர்புடைய Tamil Culture கட்டுரைகள் தொகுக்கப்பட்டுள்ளன. Educational Thought in Ancient Tamil Literature என்பது தனியான, வெளியிடப்படாத 1957 முனைவர் பட்ட ஆய்வேடு.",
    "detailsTa": "தொடர்புடைய மூன்று Tamil Culture கல்விக் கட்டுரைகள் · 1956–1957"
  },
  {
    "slug": "tamilttutu",
    "cat": "tamil-literature",
    "sub": "education-prose",
    "year": "1952",
    "yearStart": 1952,
    "title": "Tamilttūtu",
    "titleTa": "தமிழ்த் தூது",
    "details": "Tamil essays · first published 1952; later editions separately catalogued",
    "status": "readable",
    "sources": [
      "S22",
      "S23",
      "S24",
      "S44"
    ],
    "biographyPages": "134, 213",
    "biographyNoteEn": "First published in 1952. The biography records 110 pages for that issue and 126 pages for the revised fourth edition of 1962; scan and catalogue counts are edition-specific.",
    "biographyNoteTa": "முதற்பதிப்பு 1952. வாழ்க்கை வரலாறு அப்பதிப்புக்கு 110 பக்கங்களையும், 1962 திருத்திய நான்காம் பதிப்புக்கு 126 பக்கங்களையும் குறிப்பிடுகிறது; பிரதிகளின் பக்கக் கணக்குகள் பதிப்புக்கு ஏற்ப வேறுபடுகின்றன.",
    "detailsTa": "தமிழ்க் கட்டுரைகள் · முதற்பதிப்பு 1952; பிந்தைய பதிப்புகள் தனியாகப் பதிவாகியுள்ளன"
  },
  {
    "slug": "tamilar-panpatu",
    "cat": "tamil-culture",
    "sub": "culture-civilization",
    "year": "1965",
    "yearStart": 1965,
    "title": "Tamilar Panpatu",
    "titleTa": "தமிழர் பண்பாடு",
    "details": "Tamil cultural essays · publication details require corroboration",
    "status": "readable",
    "sources": [
      "S44"
    ],
    "biographyPages": "133, 215",
    "biographyNoteEn": "The biography does not verify this 1965 title. It records the distinct 1980 memorial lecture Tamilar Panpadum Athan Sirappiyalpugalum.",
    "biographyNoteTa": "இந்த 1965 தலைப்பு வாழ்க்கை வரலாற்றில் உறுதிப்படுத்தப்படவில்லை. தமிழர் பண்பாடும் அதன் சிறப்பியல்புகளும் என்னும் தனியான 1980 நினைவுச் சொற்பொழிவு அதில் பதிவாகியுள்ளது.",
    "detailsTa": "தமிழ்ப் பண்பாட்டுக் கட்டுரைகள் · வெளியீட்டு விவரங்களுக்கு மேலும் ஆதாரம் தேவை"
  },
  {
    "slug": "tamil-culture-and-civilization",
    "cat": "tamil-culture",
    "sub": "culture-civilization",
    "year": "1971",
    "yearStart": 1971,
    "title": "Tamil Culture and Civilization",
    "details": "Compiled readings from the classical period · catalogue edition 1971, 233 p.",
    "status": "readable",
    "sources": [
      "S37",
      "S44"
    ],
    "biographyPages": "181, 212",
    "biographyNoteEn": "Amudhan records a 1970 issue, x + 233 pages, compiled from readings used in his teaching. The linked catalogue independently lists 1971.",
    "biographyNoteTa": "அமுதன் அடிகளார் 1970 பதிப்பையும், கற்பித்தலுக்காகத் தொகுக்கப்பட்ட x + 233 பக்க வாசிப்புகளையும் குறிப்பிடுகிறார். இணைக்கப்பட்ட நூற்பட்டியலில் 1971 பதிப்பு பதிவாகியுள்ளது.",
    "detailsTa": "செவ்வியல் கால வாசிப்புகளின் தொகுப்பு · நூற்பட்டியல் பதிப்பு 1971, 233 பக்கங்கள்"
  },
  {
    "slug": "tamil-culture-vols-1-12",
    "cat": "tamil-culture",
    "sub": "journal-essays",
    "year": "1952–66",
    "yearStart": 1952,
    "title": "Tamil Culture (Vols. 1–12)",
    "details": "Quarterly research journal · digitized volumes and reading text",
    "status": "readable",
    "sources": [
      "S4",
      "S6",
      "S44"
    ],
    "image": "/images/tamil-culture-1952.jpg",
    "imageCaption": "Tamil Culture, Vol. 1 title leaf (1952)",
    "biographyPages": "97–108, 190",
    "biographyNoteEn": "The journal began in February 1952 and ended after 1966. The biography records publication gaps in 1960, 1962 and 1965.",
    "biographyNoteTa": "இதழ் 1952 பெப்ருவரியில் தொடங்கி 1966 வரை வெளிவந்தது. 1960, 1962, 1965 ஆண்டுகளில் வெளியீட்டு இடைவெளிகள் இருந்ததாக வாழ்க்கை வரலாறு குறிப்பிடுகிறது.",
    "detailsTa": "காலாண்டு ஆய்விதழ் · முழுத் தொகுதிகளும் வாசிப்புக் கட்டுரைகளும்"
  },
  {
    "slug": "ethical-interpretation-nature",
    "cat": "tamil-culture",
    "sub": "journal-essays",
    "year": "1952",
    "yearStart": 1952,
    "title": "The Ethical Interpretation of Nature in Ancient Tamil Poetry",
    "details": "An essay on nature and ethics in Tamil poetry · Tamil Culture, 1952",
    "status": "readable",
    "sources": [
      "S6",
      "S44"
    ],
    "image": "/images/tamil-culture-1952.jpg",
    "imageCaption": "Tamil Culture, Vol. 1 title leaf (1952)",
    "biographyPages": "207",
    "biographyNoteEn": "Tamil Culture, volume 1, numbers 3–4, September–December 1952, pp. 186–196.",
    "biographyNoteTa": "Tamil Culture, தொகுதி 1, இதழ்கள் 3–4, செப்டம்பர்–டிசம்பர் 1952, பக். 186–196.",
    "detailsTa": "தமிழ்க் கவிதையில் இயற்கையும் அறமும் · Tamil Culture, 1952"
  },
  {
    "slug": "ore-ulakam",
    "cat": "tamil-culture",
    "sub": "travel-global",
    "year": "1966",
    "yearStart": 1966,
    "title": "Ondre Ulagam",
    "titleTa": "ஒன்றே உலகம்",
    "details": "Tamil travel reflections · bibliography-listed 1966 issue, 230 p.",
    "status": "readable",
    "sources": [
      "S36",
      "S44"
    ],
    "biographyPages": "149, 214",
    "biographyNoteEn": "The narrative dates first publication to 1963 and a revised second edition to 1974. Its bibliography also lists the 1966 issue represented here.",
    "biographyNoteTa": "வாழ்க்கை வரலாற்றின் உரை முதற்பதிப்பை 1963 என்றும் திருத்திய இரண்டாம் பதிப்பை 1974 என்றும் குறிப்பிடுகிறது. நூற்பட்டியலில் இங்குள்ள 1966 பதிப்பும் பதிவாகியுள்ளது.",
    "detailsTa": "உலகப் பயண அனுபவங்கள் · நூற்பட்டியலில் பதிவான 1966 பதிப்பு, 230 பக்கங்கள்"
  },
  {
    "slug": "conference-1966-proceedings",
    "cat": "tamil-studies",
    "sub": "conferences-iatr",
    "year": "1966/68",
    "yearStart": 1966,
    "title": "1st International Conference Proceedings",
    "details": "Kuala Lumpur conference, 1966 · proceedings published 1968, two volumes",
    "status": "readable",
    "sources": [
      "S5",
      "S15",
      "S44"
    ],
    "image": "/images/conference-1966-proceedings.jpg",
    "imageCaption": "Proceedings of the 1966 Kuala Lumpur conference, published 1968",
    "biographyPages": "72–75, 211",
    "biographyNoteEn": "The conference was held in 1966; its proceedings appeared in two volumes in 1968, with an editorial committee led by Thani Nayagam.",
    "biographyNoteTa": "மாநாடு 1966 இல் நடைபெற்றது; தனிநாயக அடிகளார் தலைமையிலான பதிப்புக் குழுவின் நடவடிக்கைத் தொகுப்புகள் 1968 இல் இரு தொகுதிகளாக வெளிவந்தன.",
    "detailsTa": "1966 கோலாலம்பூர் மாநாடு · 1968 இல் வெளியான இரு நடவடிக்கைத் தொகுதிகள்"
  },
  {
    "slug": "tamil-studies-abroad",
    "cat": "tamil-studies",
    "sub": "conferences-iatr",
    "year": "1968",
    "yearStart": 1968,
    "title": "Tamil Studies Abroad: A Symposium",
    "details": "Edited symposium volume · IATR, 1968",
    "status": "lending",
    "sources": [
      "S32",
      "S44"
    ],
    "biographyPages": "179, 212",
    "biographyNoteEn": "Amudhan gives 268 pages in the narrative and vii + 269 pages in the bibliography. The existing linked catalogue is a separate edition record.",
    "biographyNoteTa": "அமுதன் அடிகளார் உரையில் 268 பக்கங்கள் என்றும் நூற்பட்டியலில் vii + 269 பக்கங்கள் என்றும் குறிப்பிடுகிறார். இணைக்கப்பட்ட நூற்பட்டியல் தனிப் பதிப்புப் பதிவாகும்.",
    "detailsTa": "தொகுக்கப்பட்ட ஆய்வுக் கட்டுரைகள் · உலகத் தமிழாராய்ச்சி மன்றம், 1968"
  },
  {
    "slug": "research-in-tamil-studies",
    "cat": "tamil-studies",
    "sub": "conferences-iatr",
    "year": "1980",
    "yearStart": 1980,
    "title": "Research in Tamil Studies: Retrospect and Prospect",
    "details": "Thanthai Chelva memorial lecture · Jaffna publication, 1980, 15 p.",
    "status": "readable",
    "sources": [
      "S44"
    ],
    "biographyPages": "201, 213",
    "biographyNoteEn": "The English Thanthai Chelva memorial lecture was delivered on 28 April 1980. The biography gives Jaffna as the publication imprint; it does not establish Colombo as the lecture venue.",
    "biographyNoteTa": "ஆங்கிலத் தந்தை செல்வா நினைவுச் சொற்பொழிவு 1980 ஏப்ரல் 28 அன்று நிகழ்த்தப்பட்டது. வாழ்க்கை வரலாறு வெளியீட்டு இடமாக யாழ்ப்பாணத்தைக் குறிப்பிடுகிறது; உரை நிகழ்ந்த இடம் கொழும்பு என்பதை அது உறுதிப்படுத்தவில்லை.",
    "detailsTa": "தந்தை செல்வா நினைவுச் சொற்பொழிவு · யாழ்ப்பாண வெளியீடு, 1980, 15 பக்கங்கள்"
  },
  {
    "slug": "reference-guide-tamil-studies-1966",
    "cat": "tamil-studies",
    "sub": "reference-guides",
    "year": "1966",
    "yearStart": 1966,
    "title": "A Reference Guide to Tamil Studies",
    "details": "University of Malaya Press bibliography · vi + 122 p.",
    "status": "lending",
    "sources": [
      "S20",
      "S21",
      "S44"
    ],
    "biographyPages": "178–179, 211",
    "biographyNoteEn": "Compiled during 1961–1963 and published in 1966. The biography gives vi + 122 pages and 1,355 book records.",
    "biographyNoteTa": "1961–1963 காலத்தில் தொகுக்கப்பட்டு 1966 இல் வெளியானது. வாழ்க்கை வரலாற்றில் vi + 122 பக்கங்களும் 1,355 நூற்பதிவுகளும் குறிப்பிடப்பட்டுள்ளன.",
    "detailsTa": "மலேயாப் பல்கலைக்கழக நூற்பட்டியல் · vi + 122 பக்கங்கள்"
  },
  {
    "slug": "antao-de-proenca-dictionary",
    "cat": "tamil-studies",
    "sub": "reference-guides",
    "year": "1964",
    "yearStart": 1964,
    "title": "Antão de Proença’s Dictionary: Introduction and Preface",
    "details": "Tamil Culture XI.2, 1964 · introduction and translated preface to the 1679 dictionary",
    "status": "readable",
    "sources": [
      "S44"
    ],
    "biographyPages": "128, 210–211",
    "biographyNoteEn": "This reading dossier contains the 1964 journal introduction and co-translated preface. The photographic edition of the dictionary itself was published in 1966.",
    "biographyNoteTa": "இவ்வாசிப்புத் தொகுப்பில் 1964 இதழின் அறிமுகக் கட்டுரையும் இணைந்து மொழிபெயர்த்த முன்னுரையும் உள்ளன. அகராதியின் ஒளிப்படப் பதிப்பு தனியாக 1966 இல் வெளியானது.",
    "detailsTa": "Tamil Culture XI.2, 1964 · 1679 அகராதியின் அறிமுகமும் முன்னுரை மொழிபெயர்ப்பும்"
  },
  {
    "slug": "carthaginian-clergy",
    "cat": "tamil-studies",
    "sub": "reference-guides",
    "year": "1950",
    "yearStart": 1950,
    "title": "The Carthaginian Clergy",
    "details": "1939 doctoral research · second edition 1950, 112 p.",
    "status": "lending",
    "sources": [
      "S34",
      "S35",
      "S44"
    ],
    "biographyPages": "168–169, 206",
    "biographyNoteEn": "D.D. thesis, Rome, 1939. The biography records first publication in 1947 and identifies the 1950 issue as the second edition.",
    "biographyNoteTa": "ரோம், 1939 இறையியல் முனைவர் பட்ட ஆய்வு. வாழ்க்கை வரலாறு முதற்பதிப்பை 1947 என்றும் இங்குள்ள 1950 பதிப்பை இரண்டாம் பதிப்பு என்றும் குறிப்பிடுகிறது.",
    "detailsTa": "1939 முனைவர் பட்ட ஆய்வு · இரண்டாம் பதிப்பு 1950, 112 பக்கங்கள்"
  },
  {
    "slug": "tamil-humanism",
    "cat": "philosophy-thought",
    "sub": "tamil-humanism",
    "year": "1972",
    "yearStart": 1972,
    "title": "Tamil Humanism, the Classical Period",
    "details": "Bunker memorial lectures · Jaffna, 1972",
    "status": "readable",
    "sources": [
      "S38",
      "S44"
    ],
    "biographyPages": "200, 212",
    "biographyNoteEn": "The 1972 Bunker memorial lectures are distinct from Aspects of Tamil Humanism, a 1961 Sornammal lecture. The catalogue lists 57 pages; the biography’s section references extend to page 60.",
    "biographyNoteTa": "1972 பங்க்கர் நினைவுச் சொற்பொழிவுகள், 1961 சொர்ணம்மாள் உரையான Aspects of Tamil Humanism என்பதிலிருந்து வேறுபட்டவை. நூற்பட்டியலில் 57 பக்கங்கள் உள்ளன; வாழ்க்கை வரலாற்றின் பகுதிக் குறிப்புகள் பக்கம் 60 வரை செல்கின்றன.",
    "detailsTa": "பங்க்கர் நினைவுச் சொற்பொழிவுகள் · யாழ்ப்பாணம், 1972"
  },
  {
    "slug": "aspects-tamil-humanism",
    "cat": "philosophy-thought",
    "sub": "tamil-humanism",
    "year": "1961",
    "yearStart": 1961,
    "title": "Aspects of Tamil Humanism",
    "details": "1961 Sornammal lecture record · related Tamil Culture essay available",
    "status": "readable",
    "sources": [
      "S44"
    ],
    "biographyPages": "209",
    "biographyNoteEn": "The biography identifies this title with a February 1961 Sornammal lecture in Annals of Oriental Research. The on-site reading is a related 1957 Tamil Culture essay, not that lecture text.",
    "biographyNoteTa": "வாழ்க்கை வரலாறு இத்தலைப்பை Annals of Oriental Research இதழில் வெளியான 1961 பெப்ருவரி சொர்ணம்மாள் உரையாகக் குறிப்பிடுகிறது. இங்குள்ள வாசிப்புப் பிரதி தொடர்புடைய 1957 Tamil Culture கட்டுரை; அந்த உரையின் மூலப் பிரதி அன்று.",
    "detailsTa": "1961 சொர்ணம்மாள் உரைப் பதிவு · தொடர்புடைய Tamil Culture கட்டுரை வாசிப்பிற்கு"
  },
  {
    "slug": "indian-thought-roman-stoicism",
    "cat": "philosophy-thought",
    "sub": "comparative-philosophy",
    "year": "1962/63",
    "yearStart": 1962,
    "title": "Indian Thought and Roman Stoicism",
    "details": "1962 inaugural lecture · 1963 publication and journal reprint",
    "status": "readable",
    "sources": [
      "S44"
    ],
    "yearEnd": 1963,
    "biographyPages": "209",
    "biographyNoteEn": "Delivered at the University of Malaya on 14 December 1962; published in 1963 and reprinted in Tamil Culture that year.",
    "biographyNoteTa": "மலேயாப் பல்கலைக்கழகத்தில் 1962 டிசம்பர் 14 அன்று நிகழ்த்தப்பட்டது; 1963 இல் நூலாகவும் அதே ஆண்டு Tamil Culture இதழிலும் வெளிவந்தது.",
    "detailsTa": "1962 தொடக்கப் பேருரை · 1963 நூல் பதிப்பும் இதழ் மறுபதிப்பும்"
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
    ],
    "biographyNoteEn": "This posthumous compilation is later than Amudhan’s 1993 biography and is recorded from separate catalogue evidence.",
    "biographyNoteTa": "இந்த மறைவுக்குப் பிந்தைய தொகுப்பு அமுதன் அடிகளாரின் 1993 வாழ்க்கை வரலாற்றிற்குப் பிந்தியது; தனி நூற்பட்டியல் ஆதாரங்களின் அடிப்படையில் பதிவு செய்யப்பட்டுள்ளது.",
    "detailsTa": "உலகத் தமிழாராய்ச்சி நிறுவனத்தின் மறைவுக்குப் பிந்தைய ஆங்கிலத் தொகுப்பு · 523 பக்கங்கள்"
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
    "sources": [],
    "biographyNoteEn": "This posthumous compilation is later than Amudhan’s 1993 biography and is recorded from separate catalogue evidence.",
    "biographyNoteTa": "இந்த மறைவுக்குப் பிந்தைய தொகுப்பு அமுதன் அடிகளாரின் 1993 வாழ்க்கை வரலாற்றிற்குப் பிந்தியது; தனி நூற்பட்டியல் ஆதாரங்களின் அடிப்படையில் பதிவு செய்யப்பட்டுள்ளது.",
    "detailsTa": "முழுப் படைப்புகளின் தொகுப்புப் பதிவு"
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
    ],
    "biographyNoteEn": "This posthumous compilation is later than Amudhan’s 1993 biography and is recorded from separate catalogue evidence.",
    "biographyNoteTa": "இந்த மறைவுக்குப் பிந்தைய தொகுப்பு அமுதன் அடிகளாரின் 1993 வாழ்க்கை வரலாற்றிற்குப் பிந்தியது; தனி நூற்பட்டியல் ஆதாரங்களின் அடிப்படையில் பதிவு செய்யப்பட்டுள்ளது.",
    "detailsTa": "மறைவுக்குப் பிந்தைய தமிழ்ச் சொற்பொழிவுத் தொகுப்பு · 178 பக்கங்கள்"
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
    "sources": [
      "S44"
    ],
    "biographyPages": "220",
    "biographyNoteEn": "A memorial volume with recollections by his colleagues, rather than an original work authored by Thani Nayagam.",
    "biographyNoteTa": "அவரது நண்பர்களின் நினைவுக் குறிப்புகள் அடங்கிய மலர்; தனிநாயக அடிகளார் எழுதிய மூலப் படைப்பு அன்று.",
    "detailsTa": "நண்பர்களும் அறிஞர்களும் எழுதிய நினைவு மலர்"
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
  },
  {
      "id": "S44",
      "citationKey": "TN1993",
      "title": "Amudhan Adigal, Thani Nayagam Adigalar (1993)",
      "titleTa": "அமுதன் அடிகள், தவத்திரு தனிநாயகம் அடிகளார் (1993)",
      "type": "International Institute of Tamil Studies · first edition, July 1993 · publication no. 173",
      "url": "/books/TVA_BOK_0009080_தனிநாயகம்_அடிகளார்.md",
      "printedPageOffset": 35
  }
];

export const CAT_BY = Object.fromEntries(CATS.map((c) => [c.slug, c]));
export const SUB_BY = Object.fromEntries(SUBS.map((s) => [s.slug, s]));
export const SRC_BY = Object.fromEntries(SOURCES.map((s) => [s.id, s]));

export const STRINGS = {
  ta: {
    title: "தனிநாயக அடிகள் — ஆவணகம்",
    desc: "அருள்திரு. முனைவர் சேவியர் தனிநாயகம் அடிகளாரின் (1913–1980) வாழ்வு, எழுத்துகள் மற்றும் உலகளாவிய தமிழியல் பணிகளின் திறந்தவெளி ஆவணகம்.",
    nav: ["முகப்பு", "அவரைப் பற்றி", "பங்களிப்புகள்", "ஆவணகம்", "உதவி"],
    brandSub: "",
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
    route: "அவரது பணிக்கு வடிவம் தந்த இடங்கள்",
    supportTitle: "அடிகளாரின் தமிழ்ப்பணியை உலகறியச் செய்வோம்",
    supportSummary: "அருள்திரு. முனைவர் அமுதன் அடிகள் காட்டிய வழியிலும் வழிகாட்டலிலும் முன்னெடுக்கப்படும் இந்த ஆவணகத்திற்கு உங்கள் ஆதரவும் பங்களிப்பும் துணைநிற்கட்டும்.",
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
    plate: "அசல் ஆவணப் படம்",
    notice: "இப்படைப்பின் முழு நூல் வாசகர்களின் வாசிப்பிற்காகத் தொகுக்கப்பட்டு வருகிறது. தற்போதைக்கு நூல் விவரங்களும் மூல இணைப்புகளும் வழங்கப்பட்டுள்ளன.",
  },
  en: {
    title: "Thani Nayagam Adigal — Open Archive",
    desc: "Explore the life and writings of Rev. Dr. Xavier S. Thani Nayagam Adigal (1913–1980), with books, research essays, journals and conference records.",
    nav: ["Home", "About", "Contributions", "Archive", "Support"],
    brandSub: "",
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
    route: "Places that shaped his work",
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
  {
    "label": "Born / பிறப்பு",
    "num": "01",
    "en": "2 August 1913, Karampon, Jaffna",
    "ta": "1913 ஆகஸ்ட் 2 — காரம்பொன், யாழ்ப்பாணம்",
    "icon": "🏛️"
  },
  {
    "label": "Died / மறைவு",
    "num": "02",
    "en": "1 September 1980, Pandatharippu, Jaffna (aged 67)",
    "ta": "1980 செப்டம்பர் 1 — பண்டத்தரிப்பு, யாழ்ப்பாணம் (அகவை 67)",
    "icon": "🕊️"
  },
  {
    "label": "Vocation / பணி",
    "num": "03",
    "en": "Catholic priest, teacher, scholar and editor",
    "ta": "கத்தோலிக்க குரு, ஆசிரியர், ஆய்வாளர், இதழாசிரியர்",
    "icon": "🎓"
  },
  {
    "label": "Doctorates / முனைவர் பட்டங்கள்",
    "num": "04",
    "en": "D.D., Rome (1939); Ph.D., London (1957)",
    "ta": "இறையியல் முனைவர், ரோம் (1939); கல்வியியல் முனைவர், லண்டன் (1957)",
    "icon": "📜"
  },
  {
    "label": "Publishing / இதழியல்",
    "num": "05",
    "en": "Founded Tamil Culture in February 1952; co-founded IATR in 1964",
    "ta": "Tamil Culture இதழ் தொடக்கம் — 1952 பெப்ருவரி; உலகத் தமிழாராய்ச்சி மன்றம் — 1964",
    "icon": "🌐"
  },
  {
    "label": "Conference / மாநாடு",
    "num": "06",
    "en": "Helped organise the first international Tamil research conference, Kuala Lumpur (1966)",
    "ta": "முதலாவது உலகத் தமிழாராய்ச்சி மாநாட்டின் ஏற்பாட்டில் முன்னின்றார் — கோலாலம்பூர் (1966)",
    "icon": "🌏"
  }
];

export const JOURNEY_STOPS: JourneyStop[] = [
  {
    "year": "1913",
    "placeEn": "Karampon, Jaffna",
    "noteEn": "His birthplace in northern Sri Lanka.",
    "placeTa": "காரம்பொன், யாழ்ப்பாணம்",
    "noteTa": "இலங்கையின் வடபகுதியில் அவரது பிறப்பிடம்."
  },
  {
    "year": "1934–39",
    "placeEn": "Rome",
    "noteEn": "Priestly formation, languages and a theology doctorate in 1939.",
    "placeTa": "ரோம்",
    "noteTa": "குருத்துவப் பயிற்சி, மொழிக் கல்வி, 1939 இறையியல் முனைவர் பட்டம்."
  },
  {
    "year": "1945–49",
    "placeEn": "Annamalai University",
    "noteEn": "M.A. in 1947 and M.Litt. in 1949; research on nature in Tamil poetry.",
    "placeTa": "அண்ணாமலைப் பல்கலைக்கழகம்",
    "noteTa": "1947 எம்.ஏ., 1949 எம்.லிட்.; தமிழ் இலக்கியத்தில் இயற்கை பற்றிய ஆய்வு."
  },
  {
    "year": "1952–61",
    "placeEn": "Ceylon & Tuticorin",
    "noteEn": "Education lecturer at Peradeniya; Tamil Culture connected readers abroad.",
    "placeTa": "இலங்கை / தூத்துக்குடி",
    "noteTa": "பேராதனையில் கல்வித்துறை விரிவுரையாளர்; உலக வாசகர்களை இணைத்த Tamil Culture இதழ்."
  },
  {
    "year": "1954",
    "placeEn": "Lisbon",
    "noteEn": "Found Henriques’s sixteenth-century Tamil grammar manuscript in the National Library.",
    "placeTa": "லிஸ்பன்",
    "noteTa": "தேசிய நூலகத்தில் என்ரீக்கஸ் அடிகளாரின் பதினாறாம் நூற்றாண்டுத் தமிழ் இலக்கணச் சுவடியைக் கண்டறிந்தார்."
  },
  {
    "year": "1955–57",
    "placeEn": "London",
    "noteEn": "Doctoral research on educational thought in ancient Tamil literature.",
    "placeTa": "லண்டன்",
    "noteTa": "பழந்தமிழ் இலக்கியங்களில் கல்விச் சிந்தனைகள் குறித்த முனைவர் பட்ட ஆய்வு."
  },
  {
    "year": "1961–69",
    "placeEn": "Kuala Lumpur",
    "noteEn": "Led Indian Studies at Malaya; helped organise the 1966 Tamil conference.",
    "placeTa": "கோலாலம்பூர்",
    "noteTa": "மலேயாப் பல்கலைக்கழக இந்தியத் துறைத் தலைமை; 1966 தமிழ் மாநாட்டு ஏற்பாடு."
  },
  {
    "year": "1970–71",
    "placeEn": "Paris & Naples",
    "noteEn": "Taught at Collège de France in 1970 and the University of Naples in 1971.",
    "placeTa": "பாரிஸ் / நேப்பிள்ஸ்",
    "noteTa": "1970 பிரான்சுக் கல்லூரியிலும், 1971 நேப்பிள்ஸ் பல்கலைக்கழகத்திலும் கற்பித்தார்."
  },
  {
    "year": "1972–80",
    "placeEn": "Jaffna",
    "noteEn": "Teaching, public lectures and the 1974 conference; his final years.",
    "placeTa": "யாழ்ப்பாணம்",
    "noteTa": "கற்பித்தல், பொது உரைகள், 1974 மாநாடு ஆகிய பணிகளுடன் நிறைவு வாழ்வு."
  }
];

export const BIO_SECTIONS: BioSection[] = [
  {
    "en": "A wider world",
    "ta": "உலகை அறிந்த மாணவர்",
    "enBody": "His early ambition was to write and speak English well. Training in Colombo and Rome introduced him to classical and European languages, and to fellow students from many countries. His interest in Tamil also grew during these years. The outlook he later brought to Tamil scholarship took shape through this experience of a wider world.",
    "taBody": "இளமையில் ஆங்கிலத்தைச் சிறப்பாக எழுதவும் பேசவும் வேண்டும் என்பதே அவரது விருப்பம். கொழும்பிலும் ரோமிலும் பெற்ற கல்வி, பல மொழிகளையும் பல நாடுகளைச் சேர்ந்த மாணவர்களையும் அவருக்கு அறிமுகப்படுத்தியது. இக்காலத்திலேயே தமிழின் மீது அவரது ஆர்வமும் வளர்ந்தது. பின்னாளில் தமிழாய்வுக்குள் அவர் கொண்டு வந்த உலகப் பார்வை இந்த அனுபவங்களின் வழியே உருவானது.",
    "fig": null,
    "src": "S44"
  },
  {
    "en": "Tamil becomes a vocation",
    "ta": "வாழ்வின் பணியாக மாறிய தமிழ்",
    "enBody": "While teaching at St. Theresa’s High School in Vadakangulam, he studied Tamil with Pandit Gurusami Subramania Iyer. Classical poetry drew him towards further study. At Annamalai University he earned an M.A. in 1947 and an M.Litt. in 1949, researching nature in ancient Tamil poetry with A. Chidambaranathan. That research became the basis of books through which readers could encounter the relationship between poetry, landscape and life.",
    "taBody": "வடக்கன்குளம் புனித தெரசாள் உயர்நிலைப் பள்ளியில் ஆசிரியராகப் பணியாற்றியபோது, பண்டிதர் குருசாமி சுப்பிரமணிய ஐயரிடம் தமிழ் பயின்றார். பழந்தமிழ் இலக்கியத்தின் கருத்து வளம் அவரைத் தொடர்ந்து படிக்கத் தூண்டியது. அண்ணாமலைப் பல்கலைக்கழகத்தில் 1947 இல் எம்.ஏ., 1949 இல் எம்.லிட். பட்டங்களைப் பெற்றார். அ. சிதம்பரநாதனாரின் வழிகாட்டலில் மேற்கொண்ட இயற்கை பற்றிய ஆய்வு, கவிதைக்கும் நிலத்துக்கும் வாழ்வுக்கும் உள்ள தொடர்பை வாசகர்களுக்கு அறிமுகப்படுத்தும் நூல்களாக வெளிவந்தது.",
    "fig": null,
    "src": "S44"
  },
  {
    "en": "A shared conversation",
    "ta": "அறிஞர்களை இணைத்த உரையாடல்",
    "enBody": "He wanted Tamil research to reach people who could not read Tamil. The English-language quarterly Tamil Culture, launched in 1952, made room for studies of language, literature, history and society. With fellow scholars he helped form IATR in 1964 and organise the first international Tamil research conference in Kuala Lumpur in 1966. The journal and meetings gave scholars in different countries ways to read, discuss and build on one another’s work.",
    "taBody": "தமிழ் அறியாதவர்களுக்கும் தமிழாய்வு சென்றடைய வேண்டும் என்று அவர் விரும்பினார். 1952 இல் தொடங்கிய Tamil Culture ஆங்கிலக் காலாண்டிதழில் மொழி, இலக்கியம், வரலாறு, சமூகம் பற்றிய ஆய்வுகள் இடம்பெற்றன. பிற அறிஞர்களுடன் இணைந்து 1964 இல் உலகத் தமிழாராய்ச்சி மன்றத்தை உருவாக்கவும், 1966 இல் கோலாலம்பூரில் முதலாவது உலகத் தமிழாராய்ச்சி மாநாட்டை நடத்தவும் முன்னின்றார். பல நாடுகளின் அறிஞர்கள் ஒருவருடைய ஆய்வை மற்றவர் படித்து விவாதிக்க இந்த இதழும் மாநாடுகளும் வாய்ப்பளித்தன.",
    "fig": "conference-1966-proceedings.jpg",
    "figCap": "1966 கோலாலம்பூர் முதல் உலகத் தமிழாராய்ச்சி மாநாட்டு நடவடிக்கைகள்",
    "figCapEn": "1966 Kuala Lumpur First International Conference of Tamil Studies proceedings",
    "src": "S44"
  },
  {
    "en": "The work continues",
    "ta": "தொடர்ந்த தமிழ்ப்பணி",
    "enBody": "After retiring from Malaya in 1969, he continued teaching in Paris and Naples before returning to Sri Lanka. In Jaffna he taught, served on the university council and helped organise the 1974 Tamil conference. His final public appearance was at a Tirukkural conference in Velanai in May 1980. He died on 1 September that year. His later work remained close to students, readers and the public life of his community.",
    "taBody": "1969 இல் மலேயாப் பல்கலைக்கழகத்திலிருந்து ஓய்வு பெற்றபின் பாரிஸ், நேப்பிள்ஸ் நகரங்களில் கற்பித்தார்; பின்னர் இலங்கை திரும்பினார். யாழ்ப்பாணத்தில் கற்பித்தல், பல்கலைக்கழக ஆட்சிக்குழுப் பணி, 1974 தமிழ் மாநாட்டின் ஏற்பாடு ஆகியவற்றில் ஈடுபட்டார். 1980 மே மாதம் வேலணையில் நடைபெற்ற திருக்குறள் மாநாடே அவர் கலந்துகொண்ட இறுதிப் பொது நிகழ்ச்சி. அதே ஆண்டு செப்டம்பர் 1 அன்று இயற்கை எய்தினார். அவரது நிறைவு வாழ்விலும் மாணவர்களும் வாசகர்களும் சமுதாயப் பணியும் இடம் பெற்றிருந்தன.",
    "fig": "amudhan-adigal-book.jpg",
    "figCap": "அமுதன் அடிகள் எழுதிய 'தனிநாயகம் அடிகளார்' வாழ்க்கை வரலாற்று நூல் (1993)",
    "figCapEn": "Biography of Father Thani Nayagam by Amudhan Adigal (1993)",
    "src": "S44"
  }
];

export const MILESTONE_ERAS: MilestoneEra[] = [
  {
    "en": "Formation and education (1913–1939)",
    "ta": "தொடக்க வாழ்வும் கல்வியும் (1913–1939)",
    "items": [
      0,
      1,
      2,
      3
    ]
  },
  {
    "en": "Teaching and Tamil research (1940–1949)",
    "ta": "கற்பித்தலும் தமிழாய்வும் (1940–1949)",
    "items": [
      4,
      5
    ]
  },
  {
    "en": "Publishing and scholarship (1952–1961)",
    "ta": "இதழியலும் ஆய்வும் (1952–1961)",
    "items": [
      6,
      7,
      8,
      9
    ]
  },
  {
    "en": "Connections and conferences (1961–1971)",
    "ta": "அறிஞர் உறவுகளும் மாநாடுகளும் (1961–1971)",
    "items": [
      10,
      11,
      12,
      13,
      14
    ]
  },
  {
    "en": "Final lectures and remembrance (1980–1981)",
    "ta": "இறுதிப் பேருரைகளும் நினைவேந்தலும் (1980–1981)",
    "items": [
      15,
      16
    ]
  }
];

export const MILESTONES: Milestone[] = [
  {
    "year": "1913",
    "enTitle": "Born in Karampon",
    "enDetail": "Born on 2 August to Henry Stanislaus Ganapathipillai and Cecil Rasamma Vastiampillai.",
    "taTitle": "காரம்பொனில் பிறப்பு",
    "taDetail": "ஆகஸ்ட் 2 அன்று ஹென்ரி ஸ்தனிஸ்லாஸ் கணபதிப்பிள்ளை — செசில் இராசம்மா வஸ்தியாம்பிள்ளை இணையருக்குப் பிறந்தார்.",
    "sources": [
      "S44"
    ]
  },
  {
    "year": "1923–1930",
    "enTitle": "Schooling in Jaffna",
    "enDetail": "Studied at St. Patrick’s College and developed his English writing through the college magazine.",
    "taTitle": "யாழ்ப்பாணத்தில் பள்ளிக் கல்வி",
    "taDetail": "புனித பத்திரிசியார் கல்லூரியில் பயின்றார்; கல்லூரி மலர் வழியாக ஆங்கில எழுத்தாற்றலை வளர்த்தார்.",
    "sources": [
      "S44"
    ]
  },
  {
    "year": "1931–1934",
    "enTitle": "Philosophy in Colombo",
    "enDetail": "Studied philosophy at St. Bernard’s Seminary.",
    "taTitle": "கொழும்பில் மெய்யியல் கல்வி",
    "taDetail": "புனித பெர்நார்து குருத்துவக் கல்லூரியில் மெய்யியல் பயின்றார்.",
    "sources": [
      "S44"
    ]
  },
  {
    "year": "1934–1939",
    "enTitle": "Formation in Rome",
    "enDetail": "Studied at Pontifical Urban University; ordained on 19 March 1938 and completed his D.D. in 1939.",
    "taTitle": "ரோமில் கல்வியும் குருத்துவப் பயிற்சியும்",
    "taDetail": "உர்பன் பல்கலைக்கழகத்தில் பயின்றார்; 1938 மார்ச் 19 குருத்துவ அருட்பொழிவு, 1939 இறையியல் முனைவர் பட்டம்.",
    "sources": [
      "S44"
    ]
  },
  {
    "year": "1940–1945",
    "enTitle": "Teaching and sustained Tamil study",
    "enDetail": "Deputy headmaster at St. Theresa’s High School, Vadakangulam; studied Tamil with Gurusami Subramania Iyer.",
    "taTitle": "ஆசிரியப் பணியும் ஆழ்ந்த தமிழ்க் கல்வியும்",
    "taDetail": "வடக்கன்குளம் புனித தெரசாள் பள்ளியில் துணைத் தலைமையாசிரியர்; குருசாமி சுப்பிரமணிய ஐயரிடம் தமிழ் பயின்றார்.",
    "sources": [
      "S44"
    ]
  },
  {
    "year": "1945–1949",
    "enTitle": "Research at Annamalai",
    "enDetail": "M.A. in 1947 and M.Litt. in 1949; studied nature in Tamil poetry with A. Chidambaranathan.",
    "taTitle": "அண்ணாமலையில் தமிழாய்வு",
    "taDetail": "1947 எம்.ஏ., 1949 எம்.லிட்.; அ. சிதம்பரநாதனாரின் வழிகாட்டலில் தமிழ் இலக்கியத்தில் இயற்கை பற்றிய ஆய்வு.",
    "sources": [
      "S44"
    ]
  },
  {
    "year": "1952",
    "enTitle": "Tamil Culture begins",
    "enDetail": "Launched the English-language research quarterly in February, following the Tamil Literature Society founded in 1948.",
    "taTitle": "Tamil Culture இதழ் தொடக்கம்",
    "taDetail": "1948 இல் நிறுவிய தமிழ் இலக்கியக் கழகத்தின் பணியைத் தொடர்ந்து, பெப்ருவரியில் ஆங்கிலக் காலாண்டு ஆய்விதழைத் தொடங்கினார்.",
    "sources": [
      "S44"
    ]
  },
  {
    "year": "1954",
    "enTitle": "A grammar manuscript in Lisbon",
    "enDetail": "Found Henriques’s sixteenth-century Tamil grammar manuscript in the National Library.",
    "taTitle": "லிஸ்பனில் இலக்கணச் சுவடி",
    "taDetail": "தேசிய நூலகத்தில் என்ரீக்கஸ் அடிகளாரின் பதினாறாம் நூற்றாண்டுத் தமிழ் இலக்கணச் சுவடியைக் கண்டறிந்தார்.",
    "sources": [
      "S44"
    ]
  },
  {
    "year": "1952–1961",
    "enTitle": "Teaching at Peradeniya",
    "enDetail": "Lecturer in Education at the University of Ceylon, with an interval for doctoral study in London.",
    "taTitle": "பேராதனையில் கற்பித்தல்",
    "taDetail": "இலங்கைப் பல்கலைக்கழகத்தில் கல்வித்துறை விரிவுரையாளர்; இடையில் லண்டனில் முனைவர் பட்ட ஆய்வு மேற்கொண்டார்.",
    "sources": [
      "S44"
    ]
  },
  {
    "year": "1955–1957",
    "enTitle": "Doctoral research in London",
    "enDetail": "Earned a Ph.D. in 1957 on educational thought in ancient Tamil literature.",
    "taTitle": "லண்டனில் முனைவர் பட்ட ஆய்வு",
    "taDetail": "பழந்தமிழ் இலக்கியங்களில் கல்விச் சிந்தனைகள் குறித்த ஆய்வுக்காக 1957 இல் முனைவர் பட்டம் பெற்றார்.",
    "sources": [
      "S44"
    ]
  },
  {
    "year": "1961–1969",
    "enTitle": "Leading Indian Studies in Malaya",
    "enDetail": "Headed the existing department and developed its teaching, library and research publications.",
    "taTitle": "மலேயாவில் இந்தியத் துறைத் தலைமை",
    "taDetail": "ஏற்கெனவே இயங்கிய துறையின் தலைவராகக் கற்பித்தல், நூலகம், ஆய்வு வெளியீடுகளை வளர்த்தார்.",
    "sources": [
      "S44"
    ]
  },
  {
    "year": "1961",
    "enTitle": "Proposal for international meetings",
    "enDetail": "With T. P. Meenakshisundaram, sent a joint letter on 27 October proposing international Tamil research meetings.",
    "taTitle": "உலகத் தமிழாய்வுக் கூட்டங்களுக்கான திட்டம்",
    "taDetail": "தெ. பொ. மீனாட்சிசுந்தரனாருடன் இணைந்து அக்டோபர் 27 அன்று உலகத் தமிழாய்வுக் கூட்டங்களுக்கான மடலை அனுப்பினார்.",
    "sources": [
      "S44"
    ]
  },
  {
    "year": "1964",
    "enTitle": "IATR formed in New Delhi",
    "enDetail": "On 7 January, 26 scholars and enthusiasts met to establish the association; Thani Nayagam and Zvelebil became joint secretaries.",
    "taTitle": "புதுதில்லியில் உலகத் தமிழாராய்ச்சி மன்றம்",
    "taDetail": "ஜனவரி 7 அன்று 26 தமிழறிஞர்களும் ஆர்வலர்களும் கூடி மன்றத்தை உருவாக்கினர்; தனிநாயக அடிகளாரும் சுவலபிலும் இணைச் செயலாளர்களாகினர்.",
    "sources": [
      "S44"
    ]
  },
  {
    "year": "1966",
    "enTitle": "The first international Tamil conference",
    "enDetail": "Helped organise the April Kuala Lumpur conference as deputy chairman; released the Proença dictionary facsimile.",
    "taTitle": "முதலாவது உலகத் தமிழாராய்ச்சி மாநாடு",
    "taDetail": "ஏப்ரல் கோலாலம்பூர் மாநாட்டின் அமைப்புக் குழுத் துணைத் தலைவராக முன்னின்றார்; புரோயென்சா அகராதியின் ஒளிப்படப் பதிப்பை வெளியிட்டார்.",
    "sources": [
      "S44"
    ]
  },
  {
    "year": "1970–1971",
    "enTitle": "Teaching in Paris and Naples",
    "enDetail": "Taught at Collège de France in 1970 and as visiting professor at the University of Naples in 1971.",
    "taTitle": "பாரிஸ், நேப்பிள்ஸில் கற்பித்தல்",
    "taDetail": "1970 இல் பிரான்சுக் கல்லூரியிலும், 1971 இல் நேப்பிள்ஸ் பல்கலைக்கழகத்தில் வருகைப் பேராசிரியராகவும் கற்பித்தார்.",
    "sources": [
      "S44"
    ]
  },
  {
    "year": "1980",
    "enTitle": "Final lectures and death",
    "enDetail": "Delivered the Thanthai Chelva memorial lectures in April; died in Pandatharippu, Jaffna, on 1 September.",
    "taTitle": "இறுதிப் பேருரைகளும் மறைவும்",
    "taDetail": "ஏப்ரலில் தந்தை செல்வா நினைவுச் சொற்பொழிவுகளை நிகழ்த்தினார்; செப்டம்பர் 1 அன்று யாழ்ப்பாணம் பண்டத்தரிப்பில் இயற்கை எய்தினார்.",
    "sources": [
      "S44"
    ]
  },
  {
    "year": "1981",
    "enTitle": "Remembered at Madurai",
    "enDetail": "A memorial statue was unveiled during the fifth World Tamil Conference in Madurai.",
    "taTitle": "மதுரையில் நினைவேந்தல்",
    "taDetail": "ஐந்தாவது உலகத் தமிழ் மாநாட்டின்போது மதுரையில் நினைவுச் சிலை திறக்கப்பட்டது.",
    "sources": [
      "S44"
    ]
  }
];

export const CONTRIBUTORS_PILLARS: ContributionPillar[] = [
  {
    "enTitle": "Publishing: Tamil Culture",
    "taTitle": "இதழியல்: Tamil Culture",
    "enDesc": "Founded the English-language quarterly in 1952 to connect research on Tamil language, literature, history, art and society with readers abroad. It appeared through 1966, with publication gaps. Contributors included Kamil Zvelebil, Jean Filliozat and Mikhail Andronov.",
    "taDesc": "1952 இல் தொடங்கிய ஆங்கிலக் காலாண்டிதழ், தமிழ் மொழி, இலக்கியம், வரலாறு, கலை, சமூகம் பற்றிய ஆய்வுகளை உலக வாசகர்களிடம் கொண்டு சென்றது. வெளியீட்டு இடைவெளிகளுடன் 1966 வரை வெளிவந்தது."
  },
  {
    "enTitle": "Connecting scholars: IATR",
    "taTitle": "அறிஞர்களை இணைத்த மன்றம்: IATR",
    "enDesc": "Helped establish IATR in New Delhi on 7 January 1964. Jean Filliozat became president; Thomas Burrow, F. B. J. Kuiper, T. P. Meenakshisundaram and Mu. Varadarajan became vice-presidents. Thani Nayagam and Kamil Zvelebil served as joint secretaries.",
    "taDesc": "1964 ஜனவரி 7 அன்று புதுதில்லியில் பிற அறிஞர்களுடன் இணைந்து உலகத் தமிழாராய்ச்சி மன்றத்தை உருவாக்கினார். ழான் ஃபீலியோசா தலைவராகவும், தனிநாயக அடிகளாரும் கமில் சுவலபிலும் இணைச் செயலாளர்களாகவும் தேர்ந்தெடுக்கப்பட்டனர்."
  },
  {
    "enTitle": "Conference leadership: Kuala Lumpur, 1966",
    "taTitle": "மாநாட்டுப் பணி: கோலாலம்பூர், 1966",
    "enDesc": "As organising-committee deputy chairman, helped bring the first international Tamil research conference together in April 1966. Prime Minister Tunku Abdul Rahman opened it. He led the editorial committee for the proceedings, published in two volumes in 1968.",
    "taDesc": "1966 ஏப்ரல் முதலாவது உலகத் தமிழாராய்ச்சி மாநாட்டின் அமைப்புக் குழுத் துணைத் தலைவராக முன்னின்றார். பிரதமர் துங்கு அப்துல் ரகுமான் மாநாட்டைத் திறந்து வைத்தார். அடிகளார் தலைமையிலான பதிப்புக் குழுவின் நடவடிக்கைகள் 1968 இல் இரு தொகுதிகளாக வெளிவந்தன."
  },
  {
    "enTitle": "Studying early Tamil print",
    "taTitle": "தொடக்க காலத் தமிழ் அச்சு ஆய்வு",
    "enDesc": "Located and studied early Tamil books and manuscripts in European and American libraries. Found Henriques’s grammar manuscript in Lisbon in 1954, studied the Harvard copy of Thambiran Vanakkam, and published a facsimile of Proença’s 1679 dictionary in 1966.",
    "taDesc": "ஐரோப்பிய, அமெரிக்க நூலகங்களில் தொடக்க காலத் தமிழ் நூல்களையும் சுவடிகளையும் தேடி ஆராய்ந்தார். 1954 லிஸ்பன் இலக்கணச் சுவடி, ஹார்வர்டின் தம்பிரான் வணக்கம் பிரதி, 1966 இல் வெளியிட்ட புரோயென்சா அகராதியின் ஒளிப்படப் பதிப்பு ஆகியவை இப்பணியின் பகுதிகள்."
  },
  {
    "enTitle": "Research guides and bibliographies",
    "taTitle": "ஆய்வு வழிகாட்டிகளும் நூற்பட்டியல்களும்",
    "enDesc": "Compiled A Reference Guide to Tamil Studies, published in 1966 with vi + 122 pages and 1,355 book records. He also arranged an expanded edition of Simon Casie Chetty’s Tamil Plutarch.",
    "taDesc": "1966 இல் வெளியான A Reference Guide to Tamil Studies நூலில் vi + 122 பக்கங்களில் 1,355 நூற்பதிவுகளைத் தொகுத்தார். சைமன் காசிச் செட்டியின் தமிழ் புளூட்டாக் நூலின் விரிவாக்கப் பதிப்புக்கும் ஏற்பாடு செய்தார்."
  },
  {
    "enTitle": "Teaching and public lectures",
    "taTitle": "கற்பித்தலும் பொது உரைகளும்",
    "enDesc": "His 1949–1950 international travels took Tamil studies to varied audiences. In the United States alone he delivered more than 200 talks in one year, in universities, colleges, schools and public meetings.",
    "taDesc": "1949–1950 உலகப் பயணத்தில் பலவகை அவையினரிடம் தமிழைப் பற்றிப் பேசினார். அமெரிக்க ஐக்கிய நாட்டில் மட்டும் ஓராண்டில் 200-க்கும் மேற்பட்ட உரைகளைப் பல்கலைக்கழகங்கள், கல்லூரிகள், பள்ளிகள், பொதுக்கூட்டங்களில் நிகழ்த்தினார்."
  }
];
