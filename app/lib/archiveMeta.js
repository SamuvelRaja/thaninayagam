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
 * Assignment is by slug (subject context), not by year.
 */
export const archiveTaxonomy = [
  {
    id: "classical-literature",
    en: {
      label: "Classical Tamil literature",
      hint: "Nature, humanism, ethics, and Tirukkural studies",
    },
    ta: {
      label: "செவ்வியல் தமிழ் இலக்கியம்",
      hint: "இயற்கை, மானுடவியல், ஒழுக்கம், திருக்குறள் ஆய்வுகள்",
    },
    subcategories: [
      {
        id: "nature-poetics",
        en: { label: "Nature & landscape poetics" },
        ta: { label: "இயற்கை மற்றும் நிலவியல் கவிதையியல்" },
        slugs: [
          "landscape-and-poetry",
          "nature-ancient-tamil-poetry",
          "nature-poetry-in-tamil",
        ],
      },
      {
        id: "humanism-ethics",
        en: { label: "Tamil humanism & ethics" },
        ta: { label: "தமிழ் மானுடவியலும் ஒழுக்கமும்" },
        slugs: ["tamil-humanism", "aspects-tamil-humanism"],
      },
      {
        id: "tirukkural",
        en: { label: "Tirukkural & Tiruvalluvar" },
        ta: { label: "திருக்குறளும் திருவள்ளுவரும்" },
        slugs: ["tiruvalluvar", "ulaga-ozhakkaviyalil-tirukkural"],
      },
      {
        id: "education-thought",
        en: { label: "Education in ancient literature" },
        ta: { label: "பண்டை இலக்கியத்தில் கல்விச் சிந்தனை" },
        slugs: ["educational-thoughts-ancient-tamil"],
      },
    ],
  },
  {
    id: "tamil-culture-journal",
    en: {
      label: "Tamil Culture journal",
      hint: "The English quarterly he founded and edited",
    },
    ta: {
      label: "Tamil Culture இதழ்",
      hint: "அவர் தொடங்கி தொகுத்த ஆங்கிலக் காலாண்டிதழ்",
    },
    subcategories: [
      {
        id: "journal-issues",
        en: { label: "Bound volumes" },
        ta: { label: "கட்டுப் பிரதிகள்" },
        slugs: ["tamil-culture-vols-1-12"],
      },
      {
        id: "journal-essays",
        en: { label: "Essays in the journal" },
        ta: { label: "இதழ்க் கட்டுரைகள்" },
        slugs: [
          "ethical-interpretation-nature",
          "indian-thought-roman-stoicism",
          "tamil-culture-and-civilization",
        ],
      },
    ],
  },
  {
    id: "international-studies",
    en: {
      label: "International Tamil studies",
      hint: "Conferences, symposia, and field guides",
    },
    ta: {
      label: "உலகத் தமிழாய்வு",
      hint: "மாநாடுகள், கருத்தரங்குகள், துறை வழிகாட்டிகள்",
    },
    subcategories: [
      {
        id: "conferences",
        en: { label: "Conference proceedings" },
        ta: { label: "மாநாட்டு நடவடிக்கைகள்" },
        slugs: ["conference-1966-proceedings"],
      },
      {
        id: "reference-guides",
        en: { label: "Reference guides" },
        ta: { label: "குறிப்பு வழிகாட்டிகள்" },
        slugs: ["research-in-tamil-studies", "antao-de-proenca-dictionary"],
      },
      {
        id: "external-lending",
        en: { label: "External / lending only" },
        ta: { label: "வெளி / கடன் வாங்கல் மட்டும்" },
        slugs: [
          "carthaginian-clergy",
          "reference-guide-tamil-studies-1966",
          "tamil-studies-abroad",
        ],
      },
    ],
  },
  {
    id: "essays-address",
    en: {
      label: "Essays, travel & public address",
      hint: "Tamil and English essays, travel writing, speeches",
    },
    ta: {
      label: "கட்டுரைகள், பயணம், பொதுவுரை",
      hint: "தமிழ்/ஆங்கிலக் கட்டுரைகள், பயண நூல், உரைகள்",
    },
    subcategories: [
      {
        id: "essay-collections",
        en: { label: "Essay collections" },
        ta: { label: "கட்டுரைத் தொகுப்புகள்" },
        slugs: ["tamilttutu", "tamilar-panpatu"],
      },
      {
        id: "travel-writing",
        en: { label: "Travel writing" },
        ta: { label: "பயண இலக்கியம்" },
        slugs: ["ore-ulakam"],
      },
      {
        id: "speeches-lectures",
        en: { label: "Speeches & lecture volumes" },
        ta: { label: "உரைகளும் விரிவுரைத் தொகுதிகளும்" },
        slugs: ["collected-speeches-1999"],
      },
    ],
  },
  {
    id: "collected-editions",
    en: {
      label: "Collected editions",
      hint: "Posthumous and compiled scholarly volumes",
    },
    ta: {
      label: "தொகுப்புப் பதிப்புகள்",
      hint: "பின்மரபு மற்றும் தொகுக்கப்பட்ட ஆய்வுத் தொகுதிகள்",
    },
    subcategories: [
      {
        id: "collected-papers",
        en: { label: "Collected papers" },
        ta: { label: "தொகுக்கப்பட்ட கட்டுரைகள்" },
        slugs: ["collected-papers", "complete-works"],
      },
      {
        id: "memorial-volumes",
        en: { label: "Memorial & tribute volumes" },
        ta: { label: "நினைவு / அஞ்சலித் தொகுதிகள்" },
        slugs: ["tamilaram"],
      },
    ],
  },
];

/** Kind-based fallback when a slug is not yet mapped. */
const kindFallback = {
  "journal-issue": ["tamil-culture-journal", "journal-issues"],
  "journal-article": ["tamil-culture-journal", "journal-essays"],
  proceedings: ["international-studies", "conferences"],
  symposium: ["international-studies", "conferences"],
  bibliography: ["international-studies", "reference-guides"],
  monograph: ["classical-literature", "nature-poetics"],
  "collected-papers": ["collected-editions", "collected-papers"],
  "travel-writing": ["essays-address", "travel-writing"],
  "speech-collection": ["essays-address", "speeches-lectures"],
  lectures: ["essays-address", "speeches-lectures"],
  anthology: ["essays-address", "speeches-lectures"],
  "essay-collection": ["essays-address", "essay-collections"],
  "title-note": ["essays-address", "essay-collections"],
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
      "essays-address",
      "essay-collections",
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
