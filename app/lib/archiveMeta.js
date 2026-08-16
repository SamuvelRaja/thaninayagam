export const archivePillars = [
  {
    id: "publishing",
    en: {
      label: "Publishing",
      title: "Tamil Culture",
      blurb: "The English quarterly and the publishing base that carried Tamil studies abroad.",
    },
    ta: {
      label: "வெளியீடு",
      title: "Tamil Culture",
      blurb: "தமிழாய்வை உலகெங்கும் எடுத்த ஆங்கிலக் காலாண்டிதழும் வெளியீட்டு அடித்தளமும்.",
    },
  },
  {
    id: "iatr",
    en: {
      label: "Institution",
      title: "IATR",
      blurb: "The International Association for Tamil Research, founded in New Delhi in 1964.",
    },
    ta: {
      label: "நிறுவனம்",
      title: "உலகத் தமிழாராய்ச்சி மன்றம்",
      blurb: "1964 இல் புதுதில்லியில் நிறுவப்பட்ட உலகத் தமிழாராய்ச்சி மன்றம்.",
    },
  },
  {
    id: "conference",
    en: {
      label: "Conference",
      title: "Kuala Lumpur 1966",
      blurb: "The first International Conference-Seminar of Tamil Studies and its proceedings.",
    },
    ta: {
      label: "மாநாடு",
      title: "கோலாலம்பூர் 1966",
      blurb: "முதல் உலகத் தமிழாய்வு மாநாடும் அதன் நடவடிக்கைகளும்.",
    },
  },
  {
    id: "reference",
    en: {
      label: "Reference",
      title: "Guides & stewardship",
      blurb: "Reference Guide to Tamil Studies and related bibliographic work.",
    },
    ta: {
      label: "குறிப்பு",
      title: "வழிகாட்டிகளும் பராமரிப்பும்",
      blurb: "தமிழாய்வுக் குறிப்பு நூலும் தொடர்புடைய நூலியல் பணியும்.",
    },
  },
  {
    id: "lectures",
    en: {
      label: "Teaching",
      title: "Lecture circuit",
      blurb: "Global lectures and visiting teaching that carried Tamil into new rooms.",
    },
    ta: {
      label: "கற்பித்தல்",
      title: "உரைச் சுற்று",
      blurb: "தமிழைப் புதிய அறைகளுக்கு எடுத்த உலக உரைகளும் வருகைப் பேராசிரியர் பணியும்.",
    },
  },
];

/**
 * Context taxonomy for literary & academic holdings.
 * Categories = scholarly domain; subcategories = finer subject/form within that domain.
 * Easy to understand:
 * 1. தமிழ் இலக்கியக் கட்டுரைகள் (Tamil Literary Essays)
 * 2. தமிழ் கலாச்சாரம் & பண்பாடு (Tamil Culture & Heritage)
 * 3. தமிழாய்வுக் கட்டுரைகள் (Tamil Research & Studies)
 * 4. தத்துவம் & மெய்யியல் (Philosophy & Thought)
 * 5. நூல்கள் & ஆய்வுத் தொகுப்புகள் (Collected Works & Speeches)
 */
export const archiveTaxonomy = [
  {
    id: "tamil-literature",
    en: {
      label: "Tamil Literary Essays",
      hint: "Classical poetry, nature, Tirukkural, and educational thought",
    },
    ta: {
      label: "தமிழ் இலக்கியக் கட்டுரைகள்",
      hint: "சங்க இலக்கியம், இயற்கை, கவிதையியல், திருக்குறள், கல்வி",
    },
    subcategories: [
      {
        id: "nature-poetics",
        en: { label: "Nature & Sangam poetics" },
        ta: { label: "சங்கக் கவிதையியலும் இயற்கையும்" },
        slugs: [
          "landscape-and-poetry",
          "nature-ancient-tamil-poetry",
          "nature-poetry-in-tamil",
        ],
      },
      {
        id: "tirukkural-ethics",
        en: { label: "Tirukkural & ethics" },
        ta: { label: "திருக்குறளும் நீதி இலக்கியமும்" },
        slugs: [
          "tiruvalluvar",
          "ulaga-ozhakkaviyalil-tirukkural",
        ],
      },
      {
        id: "education-prose",
        en: { label: "Education & literary prose" },
        ta: { label: "கல்வி & உரைநடைச் சிந்தனை" },
        slugs: [
          "educational-thoughts-ancient-tamil",
          "tamilttutu",
        ],
      },
    ],
  },
  {
    id: "tamil-culture",
    en: {
      label: "Tamil Culture & Heritage",
      hint: "Tamil civilization, cultural essays, journal writings, and travel",
    },
    ta: {
      label: "தமிழ் கலாச்சாரம் & பண்பாடு",
      hint: "தமிழர் பண்பாடு, நாகரிகம், இதழியல், பயணக் குறிப்புகள்",
    },
    subcategories: [
      {
        id: "culture-civilization",
        en: { label: "Culture & civilization" },
        ta: { label: "பண்பாடும் நாகரிகமும்" },
        slugs: [
          "tamilar-panpatu",
          "tamil-culture-and-civilization",
        ],
      },
      {
        id: "journal-writings",
        en: { label: "Tamil Culture journal essays" },
        ta: { label: "Tamil Culture இதழ்க் கட்டுரைகள்" },
        slugs: [
          "tamil-culture-vols-1-12",
          "ethical-interpretation-nature",
        ],
      },
      {
        id: "travel-global",
        en: { label: "Travel & global connections" },
        ta: { label: "பயணமும் உலகத் தொடர்பும்" },
        slugs: [
          "ore-ulakam",
        ],
      },
    ],
  },
  {
    id: "tamil-studies",
    en: {
      label: "Tamil Research & Studies",
      hint: "International conferences, research guides, and bibliographies",
    },
    ta: {
      label: "தமிழாய்வுக் கட்டுரைகள்",
      hint: "உலகத் தமிழாய்வு மாநாடுகள், ஆய்வுக் குறிப்பேடுகள், நூலியல்",
    },
    subcategories: [
      {
        id: "conferences-iatr",
        en: { label: "Conferences & IATR proceedings" },
        ta: { label: "மாநாடுகளும் ஆய்வுத் திட்டங்களும்" },
        slugs: [
          "conference-1966-proceedings",
          "tamil-studies-abroad",
        ],
      },
      {
        id: "reference-guides",
        en: { label: "Reference guides & bibliographies" },
        ta: { label: "குறிப்பு வழிகாட்டிகளும் அகராதிகளும்" },
        slugs: [
          "research-in-tamil-studies",
          "reference-guide-tamil-studies-1966",
          "antao-de-proenca-dictionary",
          "carthaginian-clergy",
        ],
      },
    ],
  },
  {
    id: "philosophy-thought",
    en: {
      label: "Philosophy & Thought",
      hint: "Tamil humanism, comparative philosophy, and moral thought",
    },
    ta: {
      label: "தத்துவம் & மெய்யியல்",
      hint: "தமிழ் மானுடவியல், உரோமானிய தத்துவம், அறவியல் கோட்பாடுகள்",
    },
    subcategories: [
      {
        id: "tamil-humanism",
        en: { label: "Tamil humanism" },
        ta: { label: "தமிழ் மானுடவியல்" },
        slugs: [
          "tamil-humanism",
          "aspects-tamil-humanism",
        ],
      },
      {
        id: "comparative-philosophy",
        en: { label: "Comparative philosophy & ethics" },
        ta: { label: "ஒப்பீட்டுத் தத்துவமும் அறவியலும்" },
        slugs: [
          "indian-thought-roman-stoicism",
        ],
      },
    ],
  },
  {
    id: "collected-editions",
    en: {
      label: "Collected Works & Speeches",
      hint: "Complete scholarly papers, public addresses, and tributes",
    },
    ta: {
      label: "நூல்கள் & ஆய்வுத் தொகுப்புகள்",
      hint: "முழுமையான ஆய்வுக் கட்டுரைகள், சொற்பொழிவுகள், நினைவு மலர்கள்",
    },
    subcategories: [
      {
        id: "collected-papers",
        en: { label: "Collected research papers" },
        ta: { label: "ஆய்வுக் கட்டுரைக் கொத்து" },
        slugs: [
          "collected-papers",
          "complete-works",
        ],
      },
      {
        id: "speeches-memorials",
        en: { label: "Speeches & memorial volumes" },
        ta: { label: "சொற்பொழிவுகளும் நினைவுத் தொகுதிகளும்" },
        slugs: [
          "collected-speeches-1999",
          "tamilaram",
        ],
      },
    ],
  },
];

/** Kind-based fallback when a slug is not yet mapped. */
const kindFallback = {
  "journal-issue": ["tamil-culture", "journal-writings"],
  "journal-article": ["tamil-culture", "journal-writings"],
  proceedings: ["tamil-studies", "conferences-iatr"],
  symposium: ["tamil-studies", "conferences-iatr"],
  bibliography: ["tamil-studies", "reference-guides"],
  monograph: ["tamil-literature", "nature-poetics"],
  "collected-papers": ["collected-editions", "collected-papers"],
  "travel-writing": ["tamil-culture", "travel-global"],
  "speech-collection": ["collected-editions", "speeches-memorials"],
  lectures: ["collected-editions", "speeches-memorials"],
  anthology: ["collected-editions", "speeches-memorials"],
  "essay-collection": ["tamil-culture", "culture-civilization"],
  "title-note": ["tamil-culture", "culture-civilization"],
};

const slugIndex = (() => {
  const map = new Map();
  for (const category of archiveTaxonomy) {
    for (const sub of category.subcategories) {
      for (const slug of sub.slugs) {
        map.set(slug, { categoryId: category.id, subcategoryId: sub.id });
      }
    }
  }
  return map;
})();

export function taxonomyFor(doc) {
  const bySlug = doc?.slug ? slugIndex.get(doc.slug) : null;
  let categoryId = bySlug?.categoryId;
  let subcategoryId = bySlug?.subcategoryId;

  if (!categoryId) {
    const fallback = kindFallback[doc?.kind] || [
      "tamil-literature",
      "nature-poetics",
    ];
    categoryId = fallback[0];
    subcategoryId = fallback[1];
  }

  const category = archiveTaxonomy.find((item) => item.id === categoryId);
  const subcategory = category?.subcategories.find(
    (item) => item.id === subcategoryId,
  );

  return { categoryId, subcategoryId, category, subcategory };
}

export function sortDocsByTitle(docs) {
  return [...docs].sort((a, b) => a.title.localeCompare(b.title));
}

export function taxonomyLabel(doc, lang = "en", { compact = false } = {}) {
  const { category, subcategory } = taxonomyFor(doc);
  const cat = lang === "ta" ? category?.ta.label : category?.en.label;
  const sub = lang === "ta" ? subcategory?.ta.label : subcategory?.en.label;
  if (compact) return sub || cat || (lang === "ta" ? "ஆவணம்" : "Document");
  if (cat && sub) return `${cat} · ${sub}`;
  return cat || sub || (lang === "ta" ? "ஆவணம்" : "Document");
}

/** @deprecated Use archiveTaxonomy / taxonomyFor. Kept for gradual migration. */
export const holdingGroups = archiveTaxonomy.map((category) => ({
  id: category.id,
  kinds: [],
  en: category.en,
  ta: category.ta,
}));

export function holdingGroupFor(doc) {
  return taxonomyFor(doc).categoryId;
}

export function holdingGroupLabel(doc, lang = "en") {
  return taxonomyLabel(doc, lang, { compact: true });
}

export function statusLabel(status, lang = "en") {
  const map =
    lang === "ta"
      ? {
          stub: "வரைவு",
          partial: "பகுதி",
          readable: "வாசிக்கலாம்",
          lending: "கடன் வாங்கல் மட்டும்",
          complete: "முழுமை",
        }
      : {
          stub: "Stub",
          partial: "Partial",
          readable: "Readable",
          lending: "Lending only",
          complete: "Complete",
        };
  return map[status] || status;
}
