"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { navItems } from "@/app/lib/data";
import { navItemsTa } from "@/app/lib/data.ta";

function isActive(pathname, href) {
  if (href === "/" || href === "/en" || href === "/en/") {
    return pathname === "/" || pathname === "/en" || pathname === "/en/";
  }
  return pathname === href || pathname.startsWith(href);
}

function getFocusable(root) {
  if (!root) return [];
  return Array.from(
    root.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ),
  ).filter((el) => {
    if (el.hasAttribute("disabled")) return false;
    if (el.getAttribute("aria-hidden") === "true") return false;
    return el.offsetParent !== null || el === document.activeElement;
  });
}

export default function SiteHeader({ lang = "ta" }) {
  const pathname = usePathname() || "/";
  const items = lang === "en" ? navItems : navItemsTa;
  const [menuOpen, setMenuOpen] = useState(false);
  const navId = "site-primary-nav";
  const toggleRef = useRef(null);
  const panelRef = useRef(null);
  const headerRef = useRef(null);
  const scrollYRef = useRef(0);

  const adjustedItems = items.map((item) => ({
    ...item,
    href: lang === "en" ? `/en${item.href}` : item.href,
  }));

  const homeHref = lang === "en" ? "/en" : "/";
  const isEn = pathname.startsWith("/en");
  const pathWithoutEn = isEn ? pathname.replace(/^\/en/, "") || "/" : pathname;
  const enPath = `/en${pathWithoutEn === "/" ? "" : pathWithoutEn}`;

  const copy =
    lang === "ta"
      ? {
          primary: "முதன்மை வழிசெலுத்தல்",
          menu: "பட்டியல்",
          close: "மூடு",
          language: "மொழி",
        }
      : {
          primary: "Primary",
          menu: "Menu",
          close: "Close",
          language: "Language",
        };

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const panel = panelRef.current;
    const focusables = getFocusable(panel);
    focusables[0]?.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    scrollYRef.current = window.scrollY;
    document.body.classList.add("nav-open");
    document.body.style.top = `-${scrollYRef.current}px`;
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("nav-open");
      document.body.style.top = "";
      window.scrollTo(0, scrollYRef.current);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const onPointerDown = (event) => {
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (
        panelRef.current?.contains(target) ||
        toggleRef.current?.contains(target)
      ) {
        return;
      }
      setMenuOpen(false);
    };

    const timer = window.setTimeout(() => {
      document.addEventListener("pointerdown", onPointerDown);
    }, 0);

    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [menuOpen]);

  return (
    <header
      ref={headerRef}
      className={`site-header${menuOpen ? " is-menu-open" : ""}`}
    >
      <div className="header-inner">
        <a
          className="brand"
          href={homeHref}
          aria-label={
            lang === "ta"
              ? "தனிநாயகம் அடிகளார் ஆவணகம் முகப்பு"
              : "Thani Nayagam Digital Archive home"
          }
        >
          <span className="brand-mark" aria-hidden="true">
            {lang === "ta" ? "த" : "TN"}
          </span>
          <span className="brand-text">
            {lang === "ta" ? (
              <>
                <strong lang="ta">தனிநாயகம்</strong>
                <small>ஆவணகம்</small>
              </>
            ) : (
              <>
                <strong>Thani Nayagam</strong>
                <small>Digital Archive</small>
              </>
            )}
          </span>
        </a>

        <div
          ref={panelRef}
          id={navId}
          className={`header-navs${menuOpen ? " is-open" : ""}`}
          role={menuOpen ? "dialog" : undefined}
          aria-modal={menuOpen ? true : undefined}
          aria-label={menuOpen ? copy.primary : undefined}
        >
          <nav aria-label={copy.primary}>
            <ul className="nav-list">
              {adjustedItems.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="header-actions">
          <div
            className="lang-switcher"
            role="group"
            aria-label={copy.language}
          >
            <a
              href={pathWithoutEn}
              className={lang === "ta" ? "active" : undefined}
              aria-current={lang === "ta" ? "true" : undefined}
              lang="ta"
            >
              தமிழ்
            </a>
            <span aria-hidden="true">|</span>
            <a
              href={enPath}
              className={lang === "en" ? "active" : undefined}
              aria-current={lang === "en" ? "true" : undefined}
              lang="en"
            >
              English
            </a>
          </div>

          <button
            ref={toggleRef}
            type="button"
            className="nav-toggle"
            aria-expanded={menuOpen}
            aria-controls={navId}
            aria-haspopup="dialog"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="nav-toggle-bars" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className="nav-toggle-label">
              {menuOpen ? copy.close : copy.menu}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
