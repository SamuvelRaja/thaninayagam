import { CATS, SUBS } from "./data";

export type ArchiveLanguage = "ta" | "en";

const fieldLabels: Record<string, { ta: string; en: string }> = {
  "tamil-literature": { ta: "இலக்கிய ஆய்வு", en: "Literary studies" },
  "tamil-culture": { ta: "பண்பாடும் இதழியலும்", en: "Culture & journals" },
  "tamil-studies": { ta: "தமிழாராய்ச்சி", en: "Tamil research" },
  "philosophy-thought": { ta: "மெய்யியல்", en: "Philosophy" },
  "collected-editions": { ta: "தொகுப்புகளும் உரைகளும்", en: "Collected works" },
};

export function archiveNavigation(lang: ArchiveLanguage) {
  const prefix = lang === "en" ? "/en" : "";
  return CATS.map((category) => ({
    key: category.slug,
    label: fieldLabels[category.slug][lang],
    title: category[lang],
    description: lang === "ta" ? category.hintTa : category.hintEn,
    href: `${prefix}/archive/?cat=${category.slug}`,
    links: SUBS.filter((sub) => sub.cat === category.slug).map((sub) => ({
      label: sub[lang],
      href: `${prefix}/archive/?cat=${category.slug}&sub=${sub.slug}`,
    })),
  }));
}

export function lifeNavigation(lang: ArchiveLanguage) {
  const prefix = lang === "en" ? "/en" : "";
  return {
    key: "life",
    label: lang === "ta" ? "வாழ்வும் மரபும்" : "Life & legacy",
    title: lang === "ta" ? "தமிழ்த்தூதுவரின் பெருவாழ்வு" : "The life of a Tamil ambassador",
    description: lang === "ta" ? "வாழ்க்கை வரலாறு, உலகப் பயணங்கள், தமிழியல் பங்களிப்புகள்" : "Biography, global journeys, and his contribution to Tamil scholarship",
    href: `${prefix}/about/`,
    links: [
      { label: lang === "ta" ? "வாழ்க்கை வரலாறு" : "Biography", href: `${prefix}/about/` },
      { label: lang === "ta" ? "வரலாற்றுக் காலக்கோடு" : "Life timeline", href: `${prefix}/about/#timeline` },
      { label: lang === "ta" ? "உலகத் தமிழ்ப்பயணம்" : "Global Tamil journey", href: `${prefix}/#journey` },
      { label: lang === "ta" ? "வரலாற்றுப் பங்களிப்புகள்" : "Historical contributions", href: `${prefix}/contributions/` },
      { label: lang === "ta" ? "ஆவணப் படங்கள்" : "Archival plates", href: `${prefix}/contributions/#plates` },
      { label: lang === "ta" ? "ஆவணகத்திற்கு ஆதரவு" : "Support the archive", href: `${prefix}/sponsors/` },
    ],
  };
}
