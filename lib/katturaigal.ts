import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import type { DocHeading } from "./documents";

export interface Katturai {
  slug: string;
  fileSlug: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  author: string;
  authorEn: string;
  source: string;
  sourceEn: string;
  publishDate: string;
  sourceDate: string;
  coverImage?: string;
  thumbnailImage?: string;
  thumbnailImageEn?: string;
  authorImage?: string;
  aboutAuthor?: string;
  aboutAuthorEn?: string;
  bodyHtml: string;
  headings: DocHeading[];
  readingTime: number;
  wordCount: number;
}

const KATTURAIGAL_DIR = path.join(process.cwd(), "content", "katturaigal");
const MARKDOWN_ENTITIES: Record<string, string> = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'",
};

function cleanHeadingId(text: string): string {
  let id = String(text || "")
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/[^a-z0-9\u0B80-\u0BFF]+/g, "-")
    .replace(/(^-|-$)/g, "");
  if (!id) id = "section";
  if (/^[0-9]/.test(id)) id = `s-${id}`;
  return id;
}

function getCanonicalSlug(fileSlug: string): string {
  if (fileSlug.includes("tamil-valartha-thaninayagam")) {
    return "tamil-valartha-thaninayagam";
  }
  return fileSlug.replace(/^\d+[-_]?/, "") || fileSlug;
}

function renderArticleMarkdown(content: string): { html: string; headings: DocHeading[] } {
  const trimmed = content.trim();
  if (!trimmed) return { html: "", headings: [] };

  marked.setOptions({
    gfm: true,
    breaks: false,
  });

  const parsed = marked.parse(trimmed);
  let html = typeof parsed === "string" ? parsed : "";

  const headings: DocHeading[] = [];
  html = html.replace(/<h([23])(?:\s+id="([^"]*)")?>([^<]+)<\/h\1>/g, (_, levelStr, existingId, text) => {
    const level = parseInt(levelStr, 10);
    const id = existingId || cleanHeadingId(text);
    const safeId = /^[0-9]/.test(id) ? `s-${id}` : id;
    if (!headings.some((h) => h.href === `#${safeId}`)) {
      const label = text.trim().replace(/&(?:amp|lt|gt|quot|#39);/g, (entity: string) => MARKDOWN_ENTITIES[entity]);
      headings.push({ href: `#${safeId}`, label, level });
    }
    return `<h${level} id="${safeId}">${text}</h${level}>`;
  });

  return { html, headings };
}

const ENRICHMENTS: Record<string, Partial<Katturai>> = {
  "tamil-valartha-thaninayagam": {
    titleEn: "Thani Nayagam Who Nurtured Tamil",
    descriptionEn:
      "A research essay chronicling Father Thani Nayagam's worldwide service to Tamil, founding of the International Association for Tamil Research (IATR), launching of 'Tamil Culture', and recovery of early Tamil printed books.",
    authorEn: "Rev. Dr. Amudhan Adigal",
    sourceEn: "Faces of Language (Thamizhuravu Publication) (1993)",
    aboutAuthorEn:
      "Rev. Dr. Amudhan Adigal (1937–2003) was a pioneering research historian who continuously documented Father Thani Nayagam's intellectual life for over 30 years and authored the first comprehensive biography.",
    thumbnailImage: "/images/katturaigal/tamil-valartha-thaninayagam-thumb.webp",
    thumbnailImageEn: "/images/katturaigal/tamil-valartha-thaninayagam-thumb-en.webp",
  },
};

export function getAllKatturaigal(): Katturai[] {
  if (!fs.existsSync(KATTURAIGAL_DIR)) return [];

  const files = fs.readdirSync(KATTURAIGAL_DIR).filter((f) => f.endsWith(".md")).sort();
  const list: Katturai[] = [];

  for (const file of files) {
    const fullPath = path.join(KATTURAIGAL_DIR, file);
    const fileSlug = file.replace(/\.md$/, "");
    const canonicalSlug = getCanonicalSlug(fileSlug);
    const raw = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(raw);

    const enrichment = ENRICHMENTS[canonicalSlug] || ENRICHMENTS[fileSlug] || {};
    const { html, headings } = renderArticleMarkdown(content);

    const words = content.trim().split(/\s+/).length;
    const readingTime = Math.max(1, Math.ceil(words / 180));

    list.push({
      slug: canonicalSlug,
      fileSlug,
      title: data.title || canonicalSlug,
      titleEn: enrichment.titleEn || data.titleEn || data.title || canonicalSlug,
      description: data.description || "",
      descriptionEn: enrichment.descriptionEn || data.descriptionEn || data.description || "",
      author: data.author || "அமுதன் அடிகள்",
      authorEn: enrichment.authorEn || data.authorEn || data.author || "Amudhan Adigal",
      source: data.source || "",
      sourceEn: enrichment.sourceEn || data.sourceEn || data.source || "",
      publishDate: String(data.publishDate || ""),
      sourceDate: String(data.sourceDate || "1993"),
      coverImage: typeof data.image === "string" ? data.image.replace(/^public\//, "/") : undefined,
      thumbnailImage: typeof data.thumbnailImage === "string" ? data.thumbnailImage : enrichment.thumbnailImage,
      thumbnailImageEn: typeof data.thumbnailImageEn === "string" ? data.thumbnailImageEn : enrichment.thumbnailImageEn,
      authorImage: typeof data.authorImage === "string" ? data.authorImage : undefined,
      aboutAuthor: data.about_author || data.aboutAuthor || undefined,
      aboutAuthorEn: enrichment.aboutAuthorEn || data.aboutAuthorEn || undefined,
      bodyHtml: html,
      headings,
      readingTime,
      wordCount: words,
    });
  }

  return list;
}

export function getKatturai(slug: string): Katturai | null {
  const all = getAllKatturaigal();
  const directMatch = all.find((k) => k.slug === slug || k.fileSlug === slug);
  if (directMatch) return directMatch;

  const targetCanonical = getCanonicalSlug(slug);
  return all.find((k) => k.slug === targetCanonical || k.fileSlug === targetCanonical) || null;
}

export function getAllKatturaiSlugs(): string[] {
  const all = getAllKatturaigal();
  const slugs = new Set<string>();
  for (const k of all) {
    slugs.add(k.slug);
    if (k.fileSlug && k.fileSlug !== k.slug) {
      slugs.add(k.fileSlug);
    }
    if (k.fileSlug.includes("tamil-valartha-thaninayagam")) {
      slugs.add("tamil-valartha-thaninayagam");
      slugs.add("tamil-valartha-thaninayagam-amudhan-adigal");
      slugs.add("06-tamil-valartha-thaninayagam-amudhan-adigal");
    }
  }
  return Array.from(slugs);
}
