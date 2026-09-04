import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import {
  archivePillars,
  archiveTaxonomy,
  sortDocsByTitle,
  statusLabel,
  taxonomyFor,
} from "@/app/lib/archiveMeta";
import { unavailableExternalSlugs } from "@/app/lib/data";

export { archivePillars, statusLabel };

const UNAVAILABLE = new Set(unavailableExternalSlugs);

export function isUnavailableExternal(slug) {
  return UNAVAILABLE.has(slug);
}

const ROOT = path.join(process.cwd(), "content", "documents");
const BOOKS = path.join(process.cwd(), "content", "books");
const LARGE_BOOK_CHARS = 180_000;

marked.setOptions({
  gfm: true,
  breaks: false,
});

function localeDir(lang) {
  return path.join(ROOT, lang === "ta" ? "ta" : "en");
}

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** CSS-safe heading id (must not start with a digit). */
function headingId(text) {
  let id = String(text || "")
    .toLowerCase()
    .replace(/[^a-z0-9\u0B80-\u0BFF]+/g, "-")
    .replace(/(^-|-$)/g, "");
  if (!id) id = "section";
  if (/^[0-9]/.test(id)) id = `s-${id}`;
  return id;
}

/** Lightweight HTML for large OCR books (avoids marked on multi‑MB files). */
function ocrMarkdownToHtml(md) {
  const body = md.replace(/^---[\s\S]*?---\s*/, "").trim();
  const parts = body.split(/\n{2,}/);
  return parts
    .map((part) => {
      const trimmed = part.trim();
      if (!trimmed) return "";
      if (/^###\s+/.test(trimmed)) {
        const text = trimmed.replace(/^###\s+/, "");
        // Keep scan/page markers out of the document TOC.
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

function renderMarkdown(content) {
  const trimmed = content.trim();
  if (!trimmed) return { html: "", headings: [] };

  let html;
  if (trimmed.length > LARGE_BOOK_CHARS) {
    html = ocrMarkdownToHtml(trimmed);
  } else {
    html = marked.parse(trimmed);
    if (typeof html !== "string") html = String(html);
  }

  const headings = [];
  html = html.replace(/<h([23])>([^<]+)<\/h\1>/g, (match, level, text) => {
    const slug = headingId(text);
    headings.push({ href: `#${slug}`, label: text, level: parseInt(level, 10) });
    return `<h${level} id="${slug}">${text}</h${level}>`;
  });
  // Also catch h2 already given ids by ocrMarkdownToHtml
  html = html.replace(
    /<h([23]) id="([^"]+)">([^<]+)<\/h\1>/g,
    (match, level, id, text) => {
      const safeId = /^[0-9]/.test(id) ? `s-${id}` : id;
      const fixed =
        safeId === id
          ? match
          : `<h${level} id="${safeId}">${text}</h${level}>`;
      if (!headings.some((h) => h.href === `#${safeId}`)) {
        headings.push({
          href: `#${safeId}`,
          label: text,
          level: parseInt(level, 10),
        });
      }
      return fixed;
    },
  );

  return { html, headings };
}

function readBookMarkdown(bookMd) {
  if (!bookMd) return "";
  const filePath = path.join(BOOKS, bookMd.endsWith(".md") ? bookMd : `${bookMd}.md`);
  if (!fs.existsSync(filePath)) return "";
  return fs.readFileSync(filePath, "utf8");
}

function metaFromData(data) {
  return {
    id: data.id,
    slug: data.slug || data.id,
    title: data.title,
    year: String(data.year ?? ""),
    pillar: data.pillar,
    kind: data.kind || "document",
    status: data.status || "stub",
    lang: data.lang,
    summary: data.summary || "",
    rights: data.rights || "",
    sourceUrl: data.sourceUrl || "",
    sourceLabel: data.sourceLabel || "",
    iaId: data.iaId || "",
    iaStartPage:
      data.iaStartPage === 0 || data.iaStartPage
        ? Number(data.iaStartPage)
        : null,
    bookMd: data.bookMd || "",
    bookText: data.bookText || "",
    images: Array.isArray(data.images) ? data.images : [],
    cite: Array.isArray(data.cite) ? data.cite : [],
  };
}

function parseMeta(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  const { data } = matter(raw);
  return {
    ...metaFromData(data),
    bodyHtml: "",
    headings: [],
  };
}

function parseFull(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const book = readBookMarkdown(data.bookMd);
  const combined = book
    ? `${content.trim()}\n\n${book.trim()}`
    : content.trim();
  const { html, headings } = renderMarkdown(combined);

  return {
    ...metaFromData(data),
    bodyHtml: html,
    headings,
  };
}

export function getDocuments(lang = "en", { includeUnavailable = false } = {}) {
  const dir = localeDir(lang);
  if (!fs.existsSync(dir)) return [];

  return sortDocsByTitle(
    fs
      .readdirSync(dir)
      .filter((name) => name.endsWith(".md"))
      .map((name) => parseMeta(path.join(dir, name)))
      .filter(
        (doc) => includeUnavailable || !isUnavailableExternal(doc.slug),
      ),
  );
}

export function getDocument(slug, lang = "en") {
  const filePath = path.join(localeDir(lang), `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  return parseFull(filePath);
}

export function getDocumentSlugs(lang = "en", { includeUnavailable = false } = {}) {
  const dir = localeDir(lang);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((name) => name.endsWith(".md"))
    .map((name) => name.replace(/\.md$/, ""))
    .filter((slug) => includeUnavailable || !isUnavailableExternal(slug));
}

export function getDocumentsByPillar(pillarId, lang = "en") {
  return getDocuments(lang).filter((doc) => doc.pillar === pillarId);
}

/** Sidebar / pager order: category → subcategory → title. */
export function getDocumentsInNavOrder(lang = "en") {
  const docs = getDocuments(lang);
  const ordered = [];

  for (const category of archiveTaxonomy) {
    for (const sub of category.subcategories) {
      ordered.push(
        ...sortDocsByTitle(
          docs.filter((doc) => {
            const tax = taxonomyFor(doc);
            return (
              tax.categoryId === category.id &&
              tax.subcategoryId === sub.id
            );
          }),
        ),
      );
    }
  }

  const seen = new Set(ordered.map((doc) => doc.slug));
  for (const doc of docs) {
    if (!seen.has(doc.slug)) ordered.push(doc);
  }

  return ordered;
}

export function getDocumentNeighbors(slug, lang = "en") {
  const docs = getDocumentsInNavOrder(lang);
  const index = docs.findIndex((doc) => doc.slug === slug);
  if (index < 0) return { prev: null, next: null };

  const base = lang === "ta" ? "/archive/documents/" : "/en/archive/documents/";
  const toLink = (doc) =>
    doc
      ? {
          href: `${base}${doc.slug}/`,
          title: doc.title,
        }
      : null;

  return {
    prev: toLink(docs[index - 1]),
    next: toLink(docs[index + 1]),
  };
}

function bookSourceLabel(bookText) {
  if (!bookText) return "missing";
  if (bookText.includes("Re-OCR’d with Tesseract") || bookText.includes("Re-OCR'd with Tesseract"))
    return "eng-OCR partial";
  if (
    bookText.includes("Excerpted from the Tamil Culture") ||
    bookText.includes("Archive article") ||
    bookText.includes("Tamil Culture essay")
  )
    return "Culture excerpt";
  if (bookText.includes("Converted from an Internet Archive PDF")) return "PDF→md";
  if (bookText.includes("Machine OCR") || bookText.includes("Full bound-volume OCR"))
    return "OCR→md";
  return "markdown";
}

function formatChars(n) {
  if (!n) return "—";
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${Math.round(n / 1_000)}K`;
  return String(n);
}

/** Temporary workbench progress snapshot (EN catalogue). */
export function getConversionProgress(lang = "en") {
  const docs = getDocuments(lang, { includeUnavailable: true }).slice().sort((a, b) => {
    const ay = a.year || "9999";
    const by = b.year || "9999";
    if (ay !== by) return ay.localeCompare(by);
    return a.title.localeCompare(b.title);
  });

  const rows = docs.map((doc) => {
    const bookText = readBookMarkdown(doc.bookMd);
    let pipeline = "no digitisation";
    if (doc.status === "lending" && doc.bookMd && bookText)
      pipeline = "lending + article";
    else if (doc.status === "lending") pipeline = "lending only";
    else if (doc.bookMd && bookText) pipeline = bookSourceLabel(bookText);
    else if (doc.bookMd) pipeline = "missing book file";
    else if (doc.iaId) pipeline = "IA link only";

    const hasMarkdownBook = Boolean(doc.bookMd && bookText);
    return {
      slug: doc.slug,
      title: doc.title,
      year: doc.year,
      pillar: doc.pillar,
      status: doc.status,
      bookMd: doc.bookMd,
      pipeline,
      chars: bookText.length,
      charsLabel: formatChars(bookText.length),
      hasMarkdownBook,
      href:
        lang === "ta"
          ? `/archive/documents/${doc.slug}/`
          : `/en/archive/documents/${doc.slug}/`,
    };
  });

  const total = rows.length;
  const withMarkdown = rows.filter((r) => r.hasMarkdownBook).length;
  const pdfConverted = rows.filter((r) => r.pipeline === "PDF→md").length;
  const ocrConverted = rows.filter((r) => r.pipeline === "OCR→md").length;
  const excerpts = rows.filter((r) =>
    ["Culture excerpt", "eng-OCR partial"].includes(r.pipeline),
  ).length;
  const iaLinkOnly = rows.filter((r) =>
    ["IA link only", "lending only", "lending + article"].includes(r.pipeline),
  ).length;
  const noDigitisation = rows.filter(
    (r) => r.pipeline === "no digitisation",
  ).length;
  const uniqueBooks = new Set(
    rows.filter((r) => r.bookMd).map((r) => r.bookMd),
  ).size;

  return {
    generatedAt: new Date().toISOString(),
    total,
    withMarkdown,
    pdfConverted,
    ocrConverted,
    excerpts,
    iaLinkOnly,
    noDigitisation,
    uniqueBooks,
    percent: total ? Math.round((withMarkdown / total) * 100) : 0,
    rows,
  };
}
