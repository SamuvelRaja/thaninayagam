export interface Category {
  slug: string;
  cls: string;
  ta: string;
  en: string;
  hintTa: string;
  hintEn: string;
  [key: string]: any;
}

export interface Subcategory {
  slug: string;
  cat: string;
  ta: string;
  en: string;
  [key: string]: any;
}

export interface Work {
  id?: string;
  slug: string;
  cat: string;
  sub: string;
  year: number | string;
  yearStart?: number;
  yearEnd?: number;
  title: string;
  titleTa?: string;
  status?: "readable" | "lending" | string;
  lang?: "Tamil" | "English" | "Bilingual" | string;
  pages?: number;
  details: string;
  sources: string[];
  plate?: string | null;
  image?: string | null;
  imageCaption?: string | null;
  prefaceTa?: string;
  prefaceEn?: string;
  contentFile?: string;
  pdf?: string;
  txt?: string;
  [key: string]: any;
}

export interface Source {
  id: string;
  title: string;
  url?: string;
  type?: string;
  [key: string]: any;
}

export interface BioSection {
  en: string;
  ta: string;
  enBody: string;
  taBody: string;
  fig?: string | null;
  figCap?: string | null;
  figCapEn?: string | null;
  src?: string | null;
}

export interface Milestone {
  year: string;
  enTitle: string;
  enDetail: string;
  taTitle: string;
  taDetail: string;
  sources: string[];
}

export interface MilestoneEra {
  en: string;
  ta: string;
  items: number[];
}

export interface ContributionPillar {
  enTitle: string;
  taTitle: string;
  enDesc: string;
  taDesc: string;
}

export interface KeyFact {
  label: string;
  num: string;
  en: string;
  ta: string;
  icon: string;
}

export interface JourneyStop {
  year: string;
  placeEn: string;
  noteEn: string;
  placeTa: string;
  noteTa: string;
}
