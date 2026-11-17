"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import type { Katturai } from "@/lib/katturaigal";

const SCALE_STEPS = [0.92, 1, 1.12, 1.25];
const THEMES = [
  { value: "light", ta: "இயல்பு", en: "Light" },
  { value: "sepia", ta: "பழுப்பு", en: "Sepia" },
  { value: "dark", ta: "இருள்", en: "Dark" },
] as const;

type ReaderTheme = (typeof THEMES)[number]["value"];

interface KatturaiReaderProps {
  katturai: Katturai;
  lang: "ta" | "en";
}

export const KatturaiReader: React.FC<KatturaiReaderProps> = ({ katturai, lang }) => {
  const isTa = lang === "ta";
  const prefix = isTa ? "" : "/en";
  const title = isTa ? katturai.title : katturai.titleEn;
  const description = isTa ? katturai.description : katturai.descriptionEn;
  const author = isTa ? katturai.author : katturai.authorEn;
  const source = isTa ? katturai.source : katturai.sourceEn;
  const aboutAuthor = isTa ? katturai.aboutAuthor : katturai.aboutAuthorEn;

  const [scaleIndex, setScaleIndex] = useState(1);
  const [theme, setTheme] = useState<ReaderTheme>("light");
  const [progress, setProgress] = useState(0);
  const [activeHeadingId, setActiveHeadingId] = useState<string>("");

  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("tna:theme");
      if (savedTheme === "sepia" || savedTheme === "light" || savedTheme === "dark") {
        setTheme(savedTheme);
        document.body.setAttribute("data-theme", savedTheme);
      } else {
        setTheme("light");
        document.body.setAttribute("data-theme", "light");
      }

      const savedZoom = localStorage.getItem("tna:zoom");
      if (savedZoom) {
        const parsed = parseFloat(savedZoom);
        const idx = SCALE_STEPS.indexOf(parsed);
        if (idx >= 0) setScaleIndex(idx);
      }
    } catch {
      // ignore
    }
    return () => document.body.removeAttribute("data-theme");
  }, []);

  const handleThemeChange = (newTheme: ReaderTheme) => {
    setTheme(newTheme);
    document.body.setAttribute("data-theme", newTheme);
    try {
      localStorage.setItem("tna:theme", newTheme);
    } catch {
      // ignore
    }
  };

  const handleZoom = (delta: number) => {
    const nextIdx = Math.min(SCALE_STEPS.length - 1, Math.max(0, scaleIndex + delta));
    setScaleIndex(nextIdx);
    try {
      localStorage.setItem("tna:zoom", String(SCALE_STEPS[nextIdx]));
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setProgress(Math.min(100, Math.max(0, (scrollY / docHeight) * 100)));
      }

      const headings = Array.from(
        document.querySelectorAll<HTMLElement>(".km-body h2, .km-body h3")
      );
      if (headings.length > 0) {
        const offset = 140;
        let current = "";
        for (const h of headings) {
          if (h.getBoundingClientRect().top <= offset) {
            current = h.id;
          } else {
            break;
          }
        }
        setActiveHeadingId(current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [katturai.bodyHtml]);

  return (
    <div className={`brush-page katturai-minimal-reader theme-${theme}`}>
      <Header
        lang={lang}
        current="katturaigal"
        progress={progress}
        customLangToggles={{
          ta: `/katturaigal/${katturai.slug}/`,
          en: `/en/katturaigal/${katturai.slug}/`,
        }}
      />

      <div className="km-reader-layout">
        {/* Whisper-light desktop margin TOC (shows on screens >= 1280px) */}
        {katturai.headings && katturai.headings.length > 0 && (
          <aside
            className="km-margin-toc"
            aria-label={isTa ? "பொருளடக்கம்" : "Table of contents"}
          >
            <div className="km-margin-toc-sticky">
              <span className="km-margin-toc-heading">
                {isTa ? "பொருளடக்கம்" : "Contents"}
              </span>
              <nav>
                <ul className="km-margin-toc-list">
                  {katturai.headings.map((h) => {
                    const id = h.href.replace(/^#/, "");
                    const isActive = activeHeadingId === id;
                    return (
                      <li key={h.href} className={isActive ? "is-active" : ""}>
                        <a href={h.href} aria-current={isActive ? "true" : undefined}>
                          {h.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </aside>
        )}

        {/* Main Reading Canvas */}
        <main
          id="main"
          className="km-main-canvas"
          style={{ "--article-scale": `${SCALE_STEPS[scaleIndex]}` } as React.CSSProperties}
        >
          <div className="km-article-container">
            {/* Top Minimal Utility Bar */}
            <div className="km-top-bar">
              <div className="km-top-bar-nav">
                <Link href={`${prefix}/katturaigal/`} className="km-back-link">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                  <span>{isTa ? "அனைத்துக் கட்டுரைகள்" : "All Essays"}</span>
                </Link>

                <span className="km-reading-meta">
                  {isTa
                    ? `${katturai.readingTime} நிமிட வாசிப்பு`
                    : `${katturai.readingTime} min read`}
                </span>
              </div>

              <div className="km-top-tools">
                {/* Theme switcher */}
                <div
                  className="km-theme-swatches"
                  role="group"
                  aria-label={isTa ? "தோற்றம் மாற்றுக" : "Select reading theme"}
                >
                  {THEMES.map(({ value, ta, en }) => (
                    <button
                      key={value}
                      type="button"
                      className={`km-swatch-btn ${theme === value ? "active" : ""}`}
                      onClick={() => handleThemeChange(value)}
                      aria-label={isTa ? ta : en}
                      title={isTa ? ta : en}
                    >
                      <span className={`km-swatch-circle km-swatch-${value}`} />
                    </button>
                  ))}
                </div>

                <span className="km-tool-divider" aria-hidden="true">
                  ·
                </span>

                {/* Text zoom */}
                <div
                  className="km-zoom-controls"
                  role="group"
                  aria-label={isTa ? "எழுத்து அளவு" : "Text size"}
                >
                  <button
                    type="button"
                    className="km-zoom-btn"
                    onClick={() => handleZoom(-1)}
                    disabled={scaleIndex === 0}
                    aria-label={isTa ? "எழுத்து அளவைக் குறைக்க" : "Decrease text size"}
                  >
                    A−
                  </button>
                  <button
                    type="button"
                    className="km-zoom-btn"
                    onClick={() => handleZoom(1)}
                    disabled={scaleIndex === SCALE_STEPS.length - 1}
                    aria-label={isTa ? "எழுத்து அளவை அதிகரிக்க" : "Increase text size"}
                  >
                    A+
                  </button>
                </div>
              </div>
            </div>

            {/* Article */}
            <article className="km-article" id="article-top">
              <header className="km-header">
                <div className="km-category-badge">
                  {isTa ? "ஆய்வுக் கட்டுரை" : "Research Essay"}
                </div>

                <h1 className="km-title" lang={lang}>
                  {title}
                </h1>

                <div className="km-byline">
                  {katturai.authorImage && (
                    <Image
                      src={katturai.authorImage}
                      alt=""
                      width={44}
                      height={44}
                      className="km-author-photo"
                    />
                  )}
                  <div className="km-byline-text">
                    <div className="km-author-name">{author}</div>
                    <div className="km-meta-details">
                      {source && <span>{source}</span>}
                      {katturai.sourceDate && <span> · {katturai.sourceDate}</span>}
                    </div>
                  </div>
                </div>

                {/* Editorial Thumbnail Banner */}
                {(katturai.thumbnailImage || katturai.thumbnailImageEn) && (
                  <div className="km-hero-thumbnail">
                    <Image
                      src={
                        (isTa ? katturai.thumbnailImage : (katturai.thumbnailImageEn || katturai.thumbnailImage)) ||
                        "/images/katturaigal/tamil-valartha-thaninayagam-thumb.webp"
                      }
                      alt={title}
                      width={1376}
                      height={768}
                      priority
                      className="km-hero-thumbnail-img"
                    />
                  </div>
                )}

                {/* Minimalist Lead */}
                {description && (
                  <div className="km-lead">
                    <p>{description}</p>
                  </div>
                )}
              </header>

              {/* In-page Minimalist Table of Contents */}
              {katturai.headings && katturai.headings.length > 0 && (
                <nav
                  className="km-inline-toc"
                  aria-label={isTa ? "கட்டுரைப் பொருளடக்கம்" : "Article contents"}
                >
                  <div className="km-inline-toc-header">
                    <span className="km-inline-toc-title">
                      {isTa ? "பொருளடக்கம்" : "Contents"}
                    </span>
                    <span className="km-inline-toc-count">
                      {katturai.headings.length} {isTa ? "பகுதிகள்" : "sections"}
                    </span>
                  </div>
                  <ol className="km-inline-toc-list">
                    {katturai.headings.map((h, idx) => (
                      <li key={h.href}>
                        <a href={h.href}>
                          <span className="km-toc-num">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          <span className="km-toc-text">{h.label}</span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              )}

              {/* Body */}
              <div
                className="km-body"
                lang="ta"
                dangerouslySetInnerHTML={{ __html: katturai.bodyHtml }}
              />

              {/* End mark */}
              <div className="km-end-mark" aria-hidden="true">
                <span>⁂</span>
              </div>

              {/* Author note */}
              {aboutAuthor && (
                <aside
                  className="km-author-box"
                  aria-label={isTa ? "கட்டுரையாசிரியர் குறிப்பு" : "About the author"}
                >
                  <div className="km-author-box-header">
                    {katturai.authorImage && (
                      <Image
                        src={katturai.authorImage}
                        alt=""
                        width={48}
                        height={48}
                        className="km-author-box-photo"
                      />
                    )}
                    <div>
                      <span className="km-author-box-badge">
                        {isTa ? "கட்டுரையாசிரியர்" : "Author"}
                      </span>
                      <h3 className="km-author-box-name">{author}</h3>
                    </div>
                  </div>
                  <p className="km-author-box-bio">{aboutAuthor}</p>
                </aside>
              )}

              {/* Minimalist Footer Navigation */}
              <nav
                className="km-footer-nav"
                aria-label={isTa ? "பக்க வழிசெலுத்தல்" : "Article navigation"}
              >
                <Link href={`${prefix}/katturaigal/`} className="km-footer-link km-footer-link-back">
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
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                  <div>
                    <span className="km-footer-sub">
                      {isTa ? "கட்டுரைகள் பட்டியல்" : "Index"}
                    </span>
                    <span className="km-footer-title">
                      {isTa ? "அனைத்துக் கட்டுரைகள்" : "All Essays"}
                    </span>
                  </div>
                </Link>
                <Link href={`${prefix}/archive/`} className="km-footer-link km-footer-link-forward">
                  <div>
                    <span className="km-footer-sub">
                      {isTa ? "ஆவணகத் திரட்டு" : "Collections"}
                    </span>
                    <span className="km-footer-title">
                      {isTa ? "ஆவணகம் ஆராய்க" : "Explore Archive"}
                    </span>
                  </div>
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
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </nav>
            </article>
          </div>
        </main>
      </div>
    </div>
  );
};
