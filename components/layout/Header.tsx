"use client";

import React, { useState, useLayoutEffect } from "react";
import Link from "next/link";
import { STRINGS, ROUTES } from "@/lib/data";

interface HeaderProps {
  lang: "ta" | "en";
  current: string;
  progress?: number;
  customLangToggles?: { ta: string; en: string };
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  current,
  progress,
  customLangToggles,
}) => {
  const S = STRINGS[lang];
  const [menuOpen, setMenuOpen] = useState(false);
  const currentRoute = ROUTES.find((r) => r.key === current) || ROUTES[0];
  const toggles = customLangToggles || { ta: currentRoute.ta, en: currentRoute.en };

  useLayoutEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <>
      <a className="skip-link" href="#main">
        {S.skip}
      </a>
      <header className="site-header" role="banner">
        <div className="container header-inner">
          <Link
            className="brand"
            href={ROUTES[0][lang]}
            aria-label={
              lang === "ta"
                ? "தனிநாயக அடிகள் — முகப்பு"
                : "Father Thani Nayagam — Home"
            }
          >
            <span className="seal" aria-hidden="true">ஃ</span>
            <span className="brand-text">
              <span className="brand-name">
                {lang === "en" ? "Father Thani Nayagam" : "தனிநாயக அடிகள்"}
              </span>
              <span className="brand-sub">{S.brandSub}</span>
            </span>
          </Link>
          <nav
            className="site-nav"
            aria-label={
              lang === "ta" ? "முதன்மை வழிசெலுத்தல்" : "Primary navigation"
            }
          >
            {ROUTES.map((r, i) => {
              const href = r[lang];
              const isCur = r.key === current;
              return (
                <Link
                  key={r.key}
                  href={href}
                  aria-current={isCur ? "page" : undefined}
                >
                  {S.nav[i]}
                </Link>
              );
            })}
          </nav>
          <div className="lang-toggle" role="group" aria-label="Language">
            <Link
              href={toggles.ta}
              aria-current={lang === "ta" ? "true" : undefined}
            >
              த
            </Link>
            <Link
              href={toggles.en}
              aria-current={lang === "en" ? "true" : undefined}
            >
              EN
            </Link>
          </div>
          <button
            className="menu-btn"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="menu-sheet"
            onClick={() => setMenuOpen(true)}
          >
            {S.menu}
          </button>
        </div>
        {typeof progress === "number" && (
          <div
            className="site-header-progress"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(progress)}
            style={{ width: `${progress}%` }}
            title={`${Math.round(progress)}%`}
          />
        )}
      </header>

      <div className={`menu-sheet ${menuOpen ? "open" : ""}`} id="menu-sheet">
        <div className="menu-sheet-top">
          <Link
            className="brand"
            href={ROUTES[0][lang]}
            onClick={() => setMenuOpen(false)}
            aria-label={
              lang === "ta"
                ? "தனிநாயக அடிகள் — முகப்பு"
                : "Father Thani Nayagam — Home"
            }
          >
            <span className="seal" aria-hidden="true">ஃ</span>
            <span className="brand-text">
              <span className="brand-name">
                {lang === "en" ? "Father Thani Nayagam" : "தனிநாயக அடிகள்"}
              </span>
              <span className="brand-sub">{S.brandSub}</span>
            </span>
          </Link>
          <button
            className="menu-close"
            type="button"
            onClick={() => setMenuOpen(false)}
          >
            {S.menuClose} ✕
          </button>
        </div>
        <nav
          className="menu-links"
          aria-label={
            lang === "ta" ? "முதன்மை வழிசெலுத்தல்" : "Primary navigation"
          }
        >
          {ROUTES.map((r, i) => (
            <Link
              key={r.key}
              href={r[lang]}
              aria-current={r.key === current ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {S.nav[i]}
            </Link>
          ))}
        </nav>
        <div className="menu-lang lang-toggle" role="group" aria-label="Language">
          <Link
            href={toggles.ta}
            aria-current={lang === "ta" ? "true" : undefined}
            onClick={() => setMenuOpen(false)}
          >
            த
          </Link>
          <Link
            href={toggles.en}
            aria-current={lang === "en" ? "true" : undefined}
            onClick={() => setMenuOpen(false)}
          >
            EN
          </Link>
        </div>
      </div>
    </>
  );
};
