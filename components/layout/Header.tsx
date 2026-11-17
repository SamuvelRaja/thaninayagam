"use client";

import React, { Suspense, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { STRINGS, ROUTES, WORKS } from "@/lib/data";
import { archiveNavigation, lifeNavigation } from "@/lib/navigation";

interface HeaderProps {
  lang: "ta" | "en";
  current: string;
  progress?: number;
  customLangToggles?: { ta: string; en: string };
}

const subjectLabels: Record<string, { ta: string; en: string }> = {
  "tamil-literature": { ta: "இலக்கியம்", en: "Literature" },
  "tamil-culture": { ta: "பண்பாடு", en: "Culture" },
  "tamil-studies": { ta: "தமிழாய்வு", en: "Research" },
  "philosophy-thought": { ta: "மெய்யியல்", en: "Philosophy" },
  "collected-editions": { ta: "தொகுப்புகள்", en: "Collections" },
};

function HeaderView({ lang, current, progress, customLangToggles, query = "" }: HeaderProps & { query?: string }) {
  const S = STRINGS[lang];
  const prefix = lang === "en" ? "/en" : "";
  const [hash, setHash] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLButtonElement>(null);
  const hoverCloseTimer = useRef<number | null>(null);
  const groupRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const pathname = usePathname();
  const groups = [...archiveNavigation(lang), lifeNavigation(lang)];
  const params = new URLSearchParams(query);
  const selectedCat = params.get("cat") || WORKS.find((work) => pathname?.includes(`/documents/${work.slug}/`))?.cat;
  const currentRoute = ROUTES.find((route) => route.key === current) || ROUTES[0];
  const baseToggles = customLangToggles || { ta: currentRoute.ta, en: currentRoute.en };
  const cancelHoverClose = () => {
    if (hoverCloseTimer.current !== null) window.clearTimeout(hoverCloseTimer.current);
    hoverCloseTimer.current = null;
  };
  const supportsHover = () => window.matchMedia("(min-width: 1101px) and (hover: hover) and (pointer: fine)").matches;
  const closeNavigation = () => { cancelHoverClose(); setMenuOpen(false); setOpenGroup(null); };

  useEffect(() => () => cancelHoverClose(), []);
  const languageHref = (target: "ta" | "en") => `${baseToggles[target]}${query ? `?${query}` : ""}${hash}`;

  useEffect(() => {
    document.documentElement.lang = lang;
    const syncHash = () => setHash(window.location.hash);
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [lang]);

  useEffect(() => { closeNavigation(); }, [pathname, query]);

  useEffect(() => {
    const dismiss = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) closeNavigation();
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      cancelHoverClose();
      if (openGroup) {
        groupRefs.current[openGroup]?.focus();
        setOpenGroup(null);
      } else if (menuOpen) {
        setMenuOpen(false);
        menuRef.current?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 1101px)");
    const resize = () => closeNavigation();
    document.addEventListener("pointerdown", dismiss);
    document.addEventListener("keydown", escape);
    desktop.addEventListener("change", resize);
    return () => {
      document.removeEventListener("pointerdown", dismiss);
      document.removeEventListener("keydown", escape);
      desktop.removeEventListener("change", resize);
    };
  }, [openGroup, menuOpen]);

  return (
    <>
      <a className="archive-skip-link" href="#main">{S.skip}</a>
      <header className="site-header archive-header living-header" ref={headerRef} onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) closeNavigation();
      }}>
        <div className="container header-inner">
          <Link className="brand" href={`${prefix}/`} aria-label={lang === "ta" ? "தனிநாயக அடிகள் — முகப்பு" : "Father Thani Nayagam — Home"} onClick={closeNavigation}>
            <span className="brand-text">
              <span className="brand-name brush-heading-mark"><span className="brush-heading-ink">{lang === "ta" ? "தனிநாயகம் அடிகள்" : "Thani Nayagam"}</span></span>
              <span className="brand-sub">{lang === "ta" ? "ஆவணகம் · 1913–1980" : "Archive · 1913–1980"}</span>
            </span>
          </Link>
          <nav className="archive-utility" aria-label={lang === "ta" ? "ஆவணக வழிசெலுத்தல்" : "Archive navigation"}>
            <Link href={`${prefix}/about/`} aria-current={current === "about" ? "page" : undefined}>{lang === "ta" ? "வாழ்க்கை" : "Life"}</Link>
            <Link href={`${prefix}/contributions/`} aria-current={current === "contributions" ? "page" : undefined}>{lang === "ta" ? "பங்களிப்புகள்" : "Contributions"}</Link>
            <Link href={`${prefix}/archive/`} aria-current={current === "archive" && !selectedCat ? "page" : undefined}>{lang === "ta" ? "ஆவணங்கள்" : "Documents"}</Link>
            <Link href={`${prefix}/katturaigal/`} aria-current={current === "katturaigal" ? "page" : undefined}>{lang === "ta" ? "கட்டுரைகள்" : "Essays"}</Link>
          </nav>
          <Link
            href={`${prefix}/sponsors/`}
            className="header-donate-btn header-donate-desktop"
            aria-current={current === "sponsors" ? "page" : undefined}
            onClick={closeNavigation}
          >
            <span className="hdb-icon-wrap" aria-hidden="true">
              <svg className="hdb-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </span>
            <span className="hdb-copy">
              <span className="hdb-main">{lang === "ta" ? "உதவி" : "Support"}</span>
              <span className="hdb-sub">{lang === "ta" ? "நன்கொடை / உதவ / ஆதரவளிக்க" : "Donate / Support / Contribute"}</span>
            </span>
          </Link>
          <div className="lang-toggle" role="group" aria-label={lang === "ta" ? "மொழி" : "Language"}>
            <Link href={languageHref("ta")} lang="ta" aria-label="தமிழில் வாசிக்க" aria-current={lang === "ta" ? "true" : undefined} onClick={closeNavigation}>அ</Link>
            <Link href={languageHref("en")} lang="en" aria-label="Read in English" aria-current={lang === "en" ? "true" : undefined} onClick={closeNavigation}>A</Link>
          </div>
          <button ref={menuRef} className="menu-btn" type="button" aria-expanded={menuOpen} aria-controls="archive-navigation" onClick={() => {
            setMenuOpen(!menuOpen); setOpenGroup(null);
          }}><span>{menuOpen ? S.menuClose : S.menu}</span><svg className="menu-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">{menuOpen ? <path d="m6 6 12 12M6 18 18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}</svg></button>
        </div>
        <div className="header-mobile-cta-wrap">
          <div className="container">
            <Link
              href={`${prefix}/sponsors/`}
              className="header-mobile-cta"
              aria-current={current === "sponsors" ? "page" : undefined}
              onClick={closeNavigation}
            >
              <span className="hdb-icon-wrap" aria-hidden="true">
                <svg className="hdb-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </span>
              <span className="hmc-title">{lang === "ta" ? "உதவி" : "Support"}</span>
              <span className="hmc-sep" aria-hidden="true">·</span>
              <span className="hmc-sub">{lang === "ta" ? "நன்கொடை / உதவ / ஆதரவளிக்க" : "Donate / Support / Contribute"}</span>
              <span className="hmc-arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className={`archive-nav-wrap ${menuOpen ? "is-open" : ""}`} id="archive-navigation">
          <nav className="container archive-primary-nav" aria-label={lang === "ta" ? "ஆய்வுத் துறைகளும் வாழ்க்கை வரலாறும்" : "Fields of study and biography"}>
            {groups.map((group) => {
              const open = openGroup === group.key;
              const active = group.key === "life" ? ["about", "contributions", "sponsors"].includes(current) : current === "archive" && selectedCat === group.key;
              return (
                <div className={`archive-nav-group ${active ? "is-current" : ""}`} key={group.key}
                  onPointerEnter={(event) => {
                    if (event.pointerType !== "mouse" || !supportsHover()) return;
                    cancelHoverClose();
                    setOpenGroup(group.key);
                  }}
                  onPointerLeave={(event) => {
                    if (event.pointerType !== "mouse" || !supportsHover()) return;
                    if (event.currentTarget.contains(document.activeElement)) return;
                    cancelHoverClose();
                    hoverCloseTimer.current = window.setTimeout(() => {
                      setOpenGroup((value) => value === group.key ? null : value);
                      hoverCloseTimer.current = null;
                    }, 180);
                  }}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                      cancelHoverClose();
                      setOpenGroup((value) => value === group.key ? null : value);
                    }
                  }}>

                  <button type="button" ref={(node) => { groupRefs.current[group.key] = node; }} aria-expanded={open} aria-controls={`nav-${group.key}`} onClick={(event) => {
                    cancelHoverClose();
                    setOpenGroup(event.detail > 0 && supportsHover() ? group.key : open ? null : group.key);
                  }} onKeyDown={(event) => {
                    if (event.key !== "ArrowDown") return;
                    event.preventDefault();
                    cancelHoverClose();
                    setOpenGroup(group.key);
                    requestAnimationFrame(() => document.getElementById(`nav-${group.key}`)?.querySelector<HTMLAnchorElement>("a")?.focus());
                  }}>
                    {subjectLabels[group.key]?.[lang] || group.label}<svg className="nav-chevron" width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="m4 6 4 4 4-4" /></svg>
                  </button>
                  <div className="archive-dropdown" id={`nav-${group.key}`} hidden={!open}>
                    <span className="nav-panel-label">{lang === "ta" ? "ஆவணகத்தை ஆராய்க" : "Explore the archive"}</span>
                    <Link className="nav-overview" href={group.href} onClick={closeNavigation}>{group.title}<span aria-hidden="true">↗</span></Link>
                    <p className="nav-description">{group.description}</p>
                    <ul>{group.links.map((link) => <li key={link.href}><Link href={link.href} onClick={closeNavigation} aria-current={group.key !== "life" && params.get("sub") && link.href.endsWith(`sub=${params.get("sub")}`) ? "page" : undefined}>{link.label}<span aria-hidden="true">↗</span></Link></li>)}</ul>
                  </div>
                </div>
              );
            })}
            <div className="archive-mobile-utility">
              <Link href={`${prefix}/`} onClick={closeNavigation}>{S.nav[0]}</Link>
              <Link href={`${prefix}/archive/`} onClick={closeNavigation}>{lang === "ta" ? "அனைத்து ஆவணங்கள்" : "All documents"}</Link>
              <Link href={`${prefix}/katturaigal/`} onClick={closeNavigation}>{lang === "ta" ? "கட்டுரைகள்" : "Essays"}</Link>
              <Link href={`${prefix}/sponsors/`} onClick={closeNavigation} className="mobile-utility-donate">
                <span>{lang === "ta" ? "உதவி" : "Support"}</span>
                <small>{lang === "ta" ? "நன்கொடை / உதவ / ஆதரவளிக்க" : "Donate / Support / Contribute"}</small>
              </Link>
            </div>
          </nav>
        </div>
        {typeof progress === "number" && <div className="site-header-progress" role="progressbar" aria-label={lang === "ta" ? "வாசிப்பு முன்னேற்றம்" : "Reading progress"} aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(progress)} style={{ width: `${progress}%` }} />}
      </header>
    </>
  );
}

function HeaderWithQuery(props: HeaderProps) {
  const query = useSearchParams().toString();
  return <HeaderView {...props} query={query} />;
}

export function Header(props: HeaderProps) {
  return <Suspense fallback={<HeaderView {...props} />}><HeaderWithQuery {...props} /></Suspense>;
}
