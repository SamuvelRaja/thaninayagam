import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import { WORKS } from "./data";

export interface ReadingAvailability {
  kind: "text" | "related" | "guide";
  language: "Tamil" | "English" | "Bilingual";
  lang: "ta" | "en" | "mul";
}

// The hosted material for these records is an essay dossier, a related edition,
// or a reconstructed collection rather than a scan of the named publication.
const RELATED_READING = new Set([
  "landscape-and-poetry", "nature-poetry-in-tamil", "tamilar-panpatu",
  "tamil-culture-and-civilization", "educational-thoughts-ancient-tamil",
  "research-in-tamil-studies", "antao-de-proenca-dictionary",
  "tamil-humanism", "aspects-tamil-humanism", "collected-papers",
]);

export interface DocHeading {
  href: string;
  label: string;
  level: number;
}

export interface DocumentData {
  slug: string;
  title: string;
  titleTa?: string;
  year: string;
  cat: string;
  sub: string;
  status: string;
  lang: string;
  readingKind: ReadingAvailability["kind"];
  readingLanguage: ReadingAvailability["language"];
  biographyPages?: string;
  summary: string;
  details?: string;
  sourceUrl?: string;
  sourceLabel?: string;
  iaId?: string;
  sources: string[];
  plate?: string | null;
  bodyHtml: string;
  headings: DocHeading[];
  isFullText: boolean;
}

const ROOT_DOCS = path.join(process.cwd(), "content", "documents");
const BOOKS_DIR = path.join(process.cwd(), "content", "books");
const LARGE_BOOK_CHARS = 180_000;

marked.setOptions({
  gfm: true,
  breaks: false,
});

function headingId(text: string): string {
  let id = String(text || "")
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/[^a-z0-9\u0B80-\u0BFF]+/g, "-")
    .replace(/(^-|-$)/g, "");
  if (!id) id = "section";
  if (/^[0-9]/.test(id)) id = `s-${id}`;
  return id;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function ocrMarkdownToHtml(md: string): string {
  const body = md.replace(/^---[\s\S]*?---\s*/, "").trim();
  const parts = body.split(/\n{2,}/);
  return parts
    .map((part) => {
      const trimmed = part.trim();
      if (!trimmed) return "";
      if (/^###\s+/.test(trimmed)) {
        const text = trimmed.replace(/^###\s+/, "");
        if (/^scan (page|leaf)\b/i.test(text) || /^(page|leaf) \d+$/i.test(text)) {
          return `<p class="ocr-page-mark"><em>${escapeHtml(text)}</em></p>`;
        }
        const id = headingId(text);
        return `<h3 id="${id}">${escapeHtml(text)}</h3>`;
      }
      if (/^##\s+/.test(trimmed)) {
        const text = trimmed.replace(/^##\s+/, "");
        const id = headingId(text);
        return `<h2 id="${id}">${escapeHtml(text)}</h2>`;
      }
      if (/^#\s+/.test(trimmed)) {
        const text = trimmed.replace(/^#\s+/, "");
        return `<h1>${escapeHtml(text)}</h1>`;
      }
      if (/^>\s?/.test(trimmed)) {
        const text = trimmed.replace(/^>\s?/gm, "");
        return `<blockquote><p>${escapeHtml(text).replace(/\n/g, "<br>")}</p></blockquote>`;
      }
      return `<p>${escapeHtml(trimmed).replace(/\n/g, "<br>")}</p>`;
    })
    .filter(Boolean)
    .join("\n");
}

function renderMarkdown(content: string): { html: string; headings: DocHeading[] } {
  const trimmed = content.trim();
  if (!trimmed) return { html: "", headings: [] };

  let html: string;
  if (trimmed.length > LARGE_BOOK_CHARS) {
    html = ocrMarkdownToHtml(trimmed);
  } else {
    const parsed = marked.parse(trimmed);
    html = typeof parsed === "string" ? parsed : "";
  }

  const headings: DocHeading[] = [];
  // Ensure every h2 and h3 has an id and is collected
  html = html.replace(/<h([23])(?:\s+id="([^"]*)")?>([^<]+)<\/h\1>/g, (match, levelStr, existingId, text) => {
    const level = parseInt(levelStr, 10);
    const id = existingId || headingId(text);
    const safeId = /^[0-9]/.test(id) ? `s-${id}` : id;
    if (!headings.some((h) => h.href === `#${safeId}`)) {
      headings.push({ href: `#${safeId}`, label: text.trim(), level });
    }
    return `<h${level} id="${safeId}">${text}</h${level}>`;
  });

  return { html, headings };
}

function readBookMarkdown(bookMdName?: string): string {
  if (!bookMdName) return "";
  const cleaned = bookMdName.endsWith(".md") ? bookMdName : `${bookMdName}.md`;
  const filePath = path.join(BOOKS_DIR, cleaned);
  if (!fs.existsSync(filePath)) return "";
  return fs.readFileSync(filePath, "utf8");
}

function readDocumentSource(slug: string, lang: "ta" | "en") {
  let filePath = path.join(ROOT_DOCS, lang, `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    filePath = path.join(ROOT_DOCS, lang === "ta" ? "en" : "ta", `${slug}.md`);
  }
  const document = fs.existsSync(filePath) ? matter(fs.readFileSync(filePath, "utf8")) : null;
  const bookContent = readBookMarkdown(document?.data.bookMd || slug);
  return { document, bookContent };
}

function describeReading(slug: string, text: string): ReadingAvailability {
  const isGuide = !text.trim() || /finding aid|context note only|catalogue entry|reading index|lending-only holding/i.test(text.slice(0, 650));
  const tamilLetters = (text.match(/[\u0B80-\u0BFF]/g) || []).length;
  const latinLetters = (text.match(/[a-z]/gi) || []).length;
  const tamilRatio = tamilLetters / Math.max(tamilLetters + latinLetters, 1);
  const language = tamilRatio > 0.5 ? "Tamil" : isGuide && tamilRatio > 0.1 ? "Bilingual" : "English";
  return {
    kind: isGuide ? "guide" : RELATED_READING.has(slug) ? "related" : "text",
    language,
    lang: language === "Tamil" ? "ta" : language === "English" ? "en" : "mul",
  };
}

// Use the same actual-material description in catalogue and reader. Frontmatter
// lang has historically described the interface, so it cannot identify the text.
export function getReadingAvailability(slug: string, lang: "ta" | "en" = "ta"): ReadingAvailability {
  return describeReading(slug, readDocumentSource(slug, lang).bookContent);
}

export function getDocument(slug: string, lang: "ta" | "en" = "ta"): DocumentData | null {
  const work = WORKS.find((w) => w.slug === slug);
  const { document, bookContent } = readDocumentSource(slug, lang);
  const availability = describeReading(slug, bookContent);

  if (document) {
    const { data, content } = document;

    let combinedMarkdown = content.trim();
    if (bookContent.trim()) {
      combinedMarkdown = combinedMarkdown
        ? `${combinedMarkdown}\n\n${bookContent.trim()}`
        : bookContent.trim();
    }

    const { html, headings } = renderMarkdown(combinedMarkdown);
    const isFullText = availability.kind === "text";

    return {
      slug,
      title: (lang === "ta" && work?.titleTa ? work.titleTa : data.title || work?.title || slug),
      titleTa: work?.titleTa,
      year: String(data.year || work?.year || ""),
      cat: work?.cat || "tamil-literature",
      sub: work?.sub || "",
      status: availability.kind === "text" ? "readable" : availability.kind,
      lang: availability.lang,
      readingKind: availability.kind,
      readingLanguage: availability.language,
      biographyPages: work?.biographyPages,
      summary: data.summary || work?.details || "",
      details: work?.details || "",
      sourceUrl: data.sourceUrl || "",
      sourceLabel: data.sourceLabel || "",
      iaId: data.iaId || "",
      sources: work?.sources || [],
      plate: work?.plate,
      bodyHtml: html,
      headings,
      isFullText,
    };
  }

  // If no markdown file, construct from WORKS registry
  if (work) {
    const isTa = lang === "ta";
    const title = isTa && work.titleTa ? work.titleTa : work.title;

    return {
      slug: work.slug,
      title,
      titleTa: work.titleTa,
      year: String(work.year),
      cat: work.cat,
      sub: work.sub,
      status: "guide",
      lang: availability.lang,
      readingKind: "guide",
      readingLanguage: availability.language,
      biographyPages: work.biographyPages,
      summary: work.details,
      details: work.details,
      sources: work.sources || [],
      plate: work.plate,
      bodyHtml: "",
      headings: [],
      isFullText: false,
    };
  }

  return null;
}

export function getAllDocumentSlugs(): string[] {
  return WORKS.map((w) => w.slug);
}
