"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { BrushText } from "@/components/ui/BrushText";
import type { DocumentData, DocHeading } from "@/lib/documents";
import { CAT_BY, SUB_BY, SRC_BY, STRINGS } from "@/lib/data";

interface SiblingWork {
  slug: string;
  title: string;
  titleTa?: string;
}

interface ReaderApparatusProps {
  work: DocumentData;
  lang: "ta" | "en";
  prevWork?: SiblingWork | null;
  nextWork?: SiblingWork | null;
}

export const ReaderApparatus: React.FC<ReaderApparatusProps> = ({
  work,
  lang,
  prevWork,
  nextWork,
}) => {
  const isTa = lang === "ta";
  const S = STRINGS[lang];
  const pfx = isTa ? "" : "/en";

  // Core reading preferences
  const [scaleIndex, setScaleIndex] = useState(1); // 0: 90%, 1: 100%, 2: 112%, 3: 125%
  const [theme, setTheme] = useState<"sepia" | "light" | "dark">("sepia");
  const [tocOpen, setTocOpen] = useState(false);
  const sidebarRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const [progress, setProgress] = useState(0);
  const [activeHeadingId, setActiveHeadingId] = useState<string>("");

  const scaleSteps = [0.9, 1, 1.12, 1.25];

  const cat = CAT_BY[work.cat] || {};
  const sub = SUB_BY[work.sub] || {};
  const catName = isTa ? cat.ta : cat.en;
  const subName = isTa ? sub.ta : sub.en;
  const title = isTa && work.titleTa ? work.titleTa : work.title;
  const titleLanguage = /[\u0B80-\u0BFF]/.test(title) ? "ta" : "en";
  const kindLabel = isTa
    ? { text: "வாசிப்பு உரை", related: "தொடர்புடைய வாசிப்பு", guide: "நூல் வழிகாட்டி" }[work.readingKind]
    : { text: "Reading text", related: "Related reading", guide: "Catalogue guide" }[work.readingKind];
  const languageLabel = isTa
    ? { Tamil: "தமிழ்", English: "ஆங்கிலம்", Bilingual: "தமிழ் / ஆங்கிலம்" }[work.readingLanguage]
    : { Tamil: "Tamil", English: "English", Bilingual: "Tamil / English" }[work.readingLanguage];
  const sourceLabel = (id: string) => id === "S44"
    ? `${isTa ? "வாழ்க்கை வரலாறு" : "Biography"}${work.biographyPages ? `${isTa ? " · ப. " : " · pp. "}${work.biographyPages}` : ""}`
    : id;
  const sourceTitle = (id: string) => {
    const source = SRC_BY[id];
    return isTa && source?.titleTa ? source.titleTa : source?.title || id;
  };

  // Headings for TOC
  const tocList = useMemo(() => {
    if (work.headings && work.headings.length > 0) {
      return work.headings;
    }
    const defaultList: DocHeading[] = [
      { href: "#doc-top", label: isTa ? "தலைப்பு" : "Top of Work", level: 2 },
    ];
    if (work.summary) {
      defaultList.push({ href: "#summary", label: S.preface, level: 2 });
    }
    if (work.plate) {
      defaultList.push({ href: "#plate", label: S.plate, level: 2 });
    }
    if (work.sources && work.sources.length > 0) {
      defaultList.push({ href: "#sources", label: S.sourcesSec, level: 2 });
    }
    return defaultList;
  }, [work, isTa, S]);

  // Load preferences from localStorage on mount & check viewport
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("tna:theme") as "sepia" | "light" | "dark" | null;
      if (savedTheme) {
        setTheme(savedTheme);
        document.body.setAttribute("data-theme", savedTheme);
      } else {
        setTheme("sepia");
        document.body.setAttribute("data-theme", "sepia");
      }

      const savedZoom = localStorage.getItem("tna:zoom");
      if (savedZoom) {
        const parsed = parseFloat(savedZoom);
        const idx = scaleSteps.indexOf(parsed);
        if (idx >= 0) setScaleIndex(idx);
      }

      // Default sidebar to closed on tablet/mobile screens
      setTocOpen(window.innerWidth >= 1024);
    } catch {
      // Ignore SSR/storage errors
    }
    return () => {
      // Reading preferences belong to the document canvas, not other pages.
      document.body.removeAttribute("data-theme");
    };
  }, []);

  // Escape key handler to close sidebar/drawer
  useEffect(() => {
    if (tocOpen && window.matchMedia("(max-width: 1023px)").matches) {
      sidebarRef.current?.querySelector<HTMLButtonElement>(".rs-close-btn")?.focus({ preventScroll: true });
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && tocOpen) {
        setTocOpen(false);
        requestAnimationFrame(() => toggleRef.current?.focus({ preventScroll: true }));
      }
      if (e.key === "Tab" && tocOpen && window.matchMedia("(max-width: 1023px)").matches) {
        const controls = Array.from(sidebarRef.current?.querySelectorAll<HTMLElement>("a[href], button:not(:disabled)") || []);
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [tocOpen]);

  const closeSidebar = () => {
    setTocOpen(false);
    requestAnimationFrame(() => toggleRef.current?.focus({ preventScroll: true }));
  };

  const handleThemeChange = (newTheme: "sepia" | "light" | "dark") => {
    setTheme(newTheme);
    try {
      localStorage.setItem("tna:theme", newTheme);
      document.body.setAttribute("data-theme", newTheme);
    } catch {
      // ignore
    }
  };

  const handleZoom = (delta: number) => {
    const nextIdx = Math.min(scaleSteps.length - 1, Math.max(0, scaleIndex + delta));
    setScaleIndex(nextIdx);
    try {
      localStorage.setItem("tna:zoom", String(scaleSteps[nextIdx]));
    } catch {
      // ignore
    }
  };

  // Scroll Progress & Heading Spy
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setProgress(Math.min(100, Math.max(0, (scrollY / docHeight) * 100)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const headingElements = Array.from(
      document.querySelectorAll(".reader-article h2, .reader-article h3")
    );
    let observer: IntersectionObserver | null = null;

    if (headingElements.length > 0 && "IntersectionObserver" in window) {
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.target.id) {
              setActiveHeadingId(entry.target.id);
            }
          });
        },
        { rootMargin: "-80px 0px -70% 0px" }
      );
      headingElements.forEach((el) => obs.observe(el));
      observer = obs;
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (observer) observer.disconnect();
    };
  }, [work.bodyHtml]);

  return (
    <div className={`clean-reader brush-page brush-reader theme-${theme}`}>
      {/* 1. Common Site Header with Reading Progress Bar along bottom edge */}
      <Header
        lang={lang}
        current="archive"
        progress={progress}
        customLangToggles={{
          ta: `/archive/documents/${work.slug}/`,
          en: `/en/archive/documents/${work.slug}/`,
        }}
      />

      {/* 2. Floating Sidebar Toggle - Accessible when sidebar is collapsed */}
      <button
        type="button"
        ref={toggleRef}
        className={`reader-floating-toggle ${tocOpen ? "sidebar-is-open" : ""}`}
        onClick={() => setTocOpen(!tocOpen)}
        aria-label={
          tocOpen
            ? isTa
              ? "பொருளடக்கத்தை மறைக்க"
              : "Hide Table of Contents"
            : isTa
            ? "பொருளடக்கத்தைக் காட்டுக"
            : "Show Table of Contents"
        }
        aria-expanded={tocOpen}
        aria-controls="reader-sidebar"
        title={isTa ? "பொருளடக்கம் & வாசிப்பு அமைப்புகள்" : "Contents & Reading Settings"}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {tocOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="17" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          )}
        </svg>
        <span className="rft-label">{S.contents}</span>
      </button>

      {/* 3. Backdrop for Mobile Drawer */}
      {tocOpen && (
        <div
          className="reader-sidebar-backdrop"
          onClick={closeSidebar}
          aria-hidden="true"
        />
      )}

      {/* 4. Reading Layout Workspace */}
      <div className={`reader-workspace ${tocOpen ? "with-sidebar" : "sidebar-collapsed"}`}>
        {/* 5. Unified Curatorial Desk Sidebar */}
        <aside
          id="reader-sidebar"
          ref={sidebarRef}
          className={`reader-sidebar ${tocOpen ? "open" : "collapsed"}`}
          aria-label={S.contents}
          aria-hidden={!tocOpen}
          inert={!tocOpen}
        >
          {/* Fixed Top Section: Navigation & Fixed Reading Controls */}
          <div className="rs-fixed-top">
            <div className="rs-head">
              <div className="rs-nav-group">
                <Link href={`${pfx}/archive/`} className="rs-crumb-link">
                  <span className="rs-back-arrow" aria-hidden="true">←</span>
                  <span>{isTa ? "நூல் ஆவணகம்" : "Archive"}</span>
                </Link>
              </div>
              <button
                type="button"
                className="rs-close-btn"
                onClick={closeSidebar}
                aria-label={isTa ? "பக்கப்பட்டியை மறைக்க" : "Hide sidebar"}
                title={isTa ? "பக்கப்பட்டியை மறைக்க" : "Hide sidebar"}
              >
                ✕
              </button>
            </div>

            {/* Fixed Reading Controls: Text Zoom & Themes */}
            <div className="rs-controls">
              {/* Zoom Controls */}
              <div className="rs-ctrl-row">
                <span className="rs-ctrl-label">{isTa ? "அளவு" : "Text"}</span>
                <div className="rs-zoom-group">
                  <button
                    type="button"
                    className="rs-zoom-btn"
                    onClick={() => handleZoom(-1)}
                    disabled={scaleIndex <= 0}
                    title={S.zoomOut}
                    aria-label={S.zoomOut}
                  >
                    A−
                  </button>
                  <span className="rs-zoom-val">{Math.round(scaleSteps[scaleIndex] * 100)}%</span>
                  <button
                    type="button"
                    className="rs-zoom-btn"
                    onClick={() => handleZoom(1)}
                    disabled={scaleIndex >= scaleSteps.length - 1}
                    title={S.zoomIn}
                    aria-label={S.zoomIn}
                  >
                    A+
                  </button>
                </div>
              </div>

              {/* Theme Selector */}
              <div className="rs-ctrl-row">
                <span className="rs-ctrl-label">{isTa ? "வண்ணம்" : "Theme"}</span>
                <div className="rs-theme-group" role="group" aria-label={S.readerTheme}>
                  <button
                    type="button"
                    className={`rs-theme-btn sepia ${theme === "sepia" ? "active" : ""}`}
                    onClick={() => handleThemeChange("sepia")}
                    title={isTa ? "ஏடு (செபியா)" : "Parchment"}
                    aria-label="Parchment theme"
                  >
                    <span className="rs-swatch sepia-swatch" />
                  </button>
                  <button
                    type="button"
                    className={`rs-theme-btn light ${theme === "light" ? "active" : ""}`}
                    onClick={() => handleThemeChange("light")}
                    title={isTa ? "வெள்ளை" : "White"}
                    aria-label="White theme"
                  >
                    <span className="rs-swatch light-swatch" />
                  </button>
                  <button
                    type="button"
                    className={`rs-theme-btn dark ${theme === "dark" ? "active" : ""}`}
                    onClick={() => handleThemeChange("dark")}
                    title={isTa ? "கருங்கல்" : "Dark"}
                    aria-label="Dark theme"
                  >
                    <span className="rs-swatch dark-swatch" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Scrollable Body: Doc Card, Table of Contents, Sources */}
          <div className="rs-scrollable-body">
            {/* Document Summary & Progress Card */}
            <div className="rs-doc-card">
              <Link
                href={`${pfx}/archive/?cat=${cat.slug}`}
                className="rs-cat-tag"
                title={catName}
              >
                {catName}
              </Link>
              <h2 className="rs-doc-title" title={title}>
                {title}
              </h2>
              <div className="rs-meta-row">
                {work.year && <span className="rs-year">{work.year}</span>}
                {work.year && <span className="rs-meta-sep">·</span>}
                <span className="rs-status">{kindLabel}</span>
              </div>
              <p className="rs-reading-language">{languageLabel}</p>

              {/* Visual reading progress indicator */}
              <div className="rs-progress-box">
                <div className="rs-progress-track">
                  <div className="rs-progress-fill" style={{ width: `${progress}%` }} />
                </div>
                <div className="rs-progress-caption">
                  <span>{isTa ? "படித்த அளவு" : "Progress"}</span>
                  <span className="rs-progress-pct">{Math.round(progress)}%</span>
                </div>
              </div>
            </div>

            {/* Table of Contents Section */}
            {tocList.length > 0 && (
              <div className="rs-toc-wrapper">
                <div className="rs-toc-head">
                  <span className="rs-toc-title">{S.contents}</span>
                  <span className="rs-toc-badge">{tocList.length}</span>
                </div>
                <nav className="rs-toc-nav" aria-label={S.contents}>
                  <ul>
                    {tocList.map((h) => {
                      const id = h.href.replace(/^#/, "");
                      const isActive = activeHeadingId === id;
                      return (
                        <li
                          key={h.href}
                          className={`rs-toc-li ${h.level === 3 ? "is-sub" : "is-main"} ${
                            isActive ? "active" : ""
                          }`}
                        >
                          <a
                            href={h.href}
                            onClick={(e) => {
                              e.preventDefault();
                              setActiveHeadingId(id);
                              const target = document.getElementById(id);
                              if (target) {
                                target.scrollIntoView({ behavior: "smooth", block: "start" });
                              }
                              if (typeof window !== "undefined" && window.innerWidth < 1024) {
                                setTocOpen(false);
                              }
                            }}
                          >
                            <span className="rs-toc-indicator" aria-hidden="true" />
                            <span className="rs-toc-label">{h.label}</span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
            )}

            {/* Archival Provenance Footer */}
            {work.sources && work.sources.length > 0 && (
              <div className="rs-sources-foot">
                <div className="rs-sources-title">{isTa ? "மூல நூலகம்" : "Source Repository"}</div>
                <div className="rs-sources-chips">
                  {work.sources.map((s) => {
                    const src = SRC_BY[s];
                    return src?.url ? <React.Fragment key={s}>
                      <a
                        href={src.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rs-source-chip"
                        title={sourceTitle(s)}
                      >
                        <span>{sourceLabel(s)}</span>
                        <span aria-hidden="true">↗</span>
                      </a>
                    </React.Fragment> : (
                      <span key={s} className="rs-source-chip plain">
                        {sourceLabel(s)}
                      </span>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </aside>

        {/* The Reading Canvas: Maximum Room, Zero Clutter */}
        <main id="main" className="cr-main">
          <article
            className="reader-article"
            id="doc-top"
            role="document"
            lang={work.lang}
            style={{ ["--reader-scale" as string]: scaleSteps[scaleIndex] }}
          >
            {/* Clean, Compact Article Header */}
            <header className="cr-doc-header" lang={lang}>
              <div className="cr-meta-line">
                <span className="cr-cat-name">{catName}</span>
                {subName && (
                  <>
                    <span className="cr-dot-sep">·</span>
                    <span className="cr-sub-name">{subName}</span>
                  </>
                )}
                {work.year && (
                  <>
                    <span className="cr-dot-sep">·</span>
                    <span className="cr-year">{work.year}</span>
                  </>
                )}
                <span className="cr-dot-sep">·</span>
                <span className="cr-status">{kindLabel}</span>
                <span className="cr-dot-sep">·</span>
                <span className="cr-reading-language">{languageLabel}</span>
                {work.sources && work.sources.length > 0 && (
                  <>
                    <span className="cr-dot-sep">·</span>
                    <span className="cr-sources">
                      {work.sources.map((s) => {
                        const src = SRC_BY[s];
                        return src?.url ? <React.Fragment key={s}>
                          <a
                            href={src.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cr-source-link"
                            title={sourceTitle(s)}
                          >
                            {sourceLabel(s)} ↗
                          </a>
                        </React.Fragment> : (
                          <span key={s}>{sourceLabel(s)}</span>
                        );
                      })}
                    </span>
                  </>
                )}
              </div>

              <h1 className="cr-title" lang={titleLanguage}><BrushText>{title}</BrushText></h1>

              <p className="cr-author">
                {work.slug === "tamilaram" ? (isTa ? "தனிநாயக அடிகளார் நினைவுத் தொகுப்பு" : "A memorial volume about Thani Nayagam") : isTa
                  ? "அருள்திரு. முனைவர் சேவியர் தனிநாயகம் அடிகள்"
                  : "Rev. Dr. Xavier S. Thani Nayagam Adigal"}
              </p>
            </header>

            <div className={`cr-reading-info cr-reading-info-${work.readingKind}`} lang={lang}>
              <p>{work.readingKind === "guide"
                ? isTa ? "இந்தப் பதிவு நூல் விவரங்களுக்கும் கிடைக்கக்கூடிய மூலப் படிகளுக்கும் ஒரு வழிகாட்டி." : "A guide to the publication and its available source copies."
                : work.readingKind === "related"
                  ? isTa ? "இங்கு தொடர்புடைய கட்டுரைகளோ தொகுக்கப்பட்ட வாசிப்பு உரையோ உள்ளது. குறிப்பிட்ட பதிப்பின் விவரங்களுக்கு நூல் குறிப்புகளையும் மூலப் படியையும் பார்க்கவும்." : "This view offers related essays or a reconstructed reading collection. See the publication notes and source scan for edition details."
                  : isTa ? `வாசிப்பு உரையின் மொழி: ${languageLabel}.` : `Reading text in ${languageLabel}.`}</p>
            </div>

            {/* Archival Scan / Plate Image if present */}
            {work.plate && (
              <figure className="cr-plate" id="plate">
                <img
                  src={`/images/${work.plate}.jpg`}
                  alt={`${title} · ${work.year}`}
                  loading="lazy"
                />
                <figcaption>
                  {title} ({work.year})
                </figcaption>
              </figure>
            )}

            {/* Document Body */}
            {work.bodyHtml ? (
              <div
                className="document-body prose cr-body"
                dangerouslySetInnerHTML={{ __html: work.bodyHtml }}
              />
            ) : (
              <div className="cr-fallback">
                <p className="cr-lede" id="summary">
                  {work.summary}
                </p>
                <h2 id="record">{S.record}</h2>
                <dl className="cr-fact-list">
                  <dt>{isTa ? "முதன்மைத் துறை" : "Category"}:</dt>
                  <dd>{catName}</dd>
                  <dt>{isTa ? "உட்பிரிவு" : "Subcategory"}:</dt>
                  <dd>{subName || "—"}</dd>
                  <dt>{isTa ? "ஆண்டு" : "Year"}:</dt>
                  <dd>{work.year}</dd>
                  <dt>{isTa ? "நிலை" : "Status"}:</dt>
                  <dd>{kindLabel}</dd>
                  <dt>{isTa ? "வாசிப்பு மொழி" : "Reading language"}:</dt>
                  <dd>{languageLabel}</dd>
                </dl>
              </div>
            )}

            {work.readingKind !== "guide" && (
              <div className="cr-notice" lang={lang}>
                <p>{isTa ? "உரை மாற்றத்தில் பிழைகள் இருக்கலாம். மேற்கோள்களுக்கு மூலப் படியை ஒப்பிடுங்கள்." : "Converted reading text may contain errors. Compare the source scan when quoting."}</p>
              </div>
            )}
          </article>

          {/* Simple, Uncluttered Sibling Pager */}
          <nav className="cr-pager" id="pager" aria-label={`${S.prev} / ${S.next}`}>
            {prevWork ? (
              <Link
                href={`${pfx}/archive/documents/${prevWork.slug}/`}
                className="cr-pager-link prev"
              >
                <span className="cr-pager-hint">← {S.prev}</span>
                <span className="cr-pager-title">
                  {isTa && prevWork.titleTa ? prevWork.titleTa : prevWork.title}
                </span>
              </Link>
            ) : (
              <div />
            )}

            {nextWork && (
              <Link
                href={`${pfx}/archive/documents/${nextWork.slug}/`}
                className="cr-pager-link next"
              >
                <span className="cr-pager-hint">{S.next} →</span>
                <span className="cr-pager-title">
                  {isTa && nextWork.titleTa ? nextWork.titleTa : nextWork.title}
                </span>
              </Link>
            )}
          </nav>
        </main>
      </div>
    </div>
  );
};
