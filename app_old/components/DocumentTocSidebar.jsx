"use client";

import { useEffect, useMemo, useState } from "react";

const META_HREF = new Set([
  "#how-to-read",
  "#எப்படி-வாசிப்பது",
  "#about-this-article",
  "#இக்கட்டுரை-பற்றி",
  "#bibliographic-record",
  "#நூலியல்-பதிவு",
  "#article-text",
  "#book-text",
  "#contents",
  "#உள்ளடக்கம்",
  "#edition-note",
  "#title-leaf-samples",
  "#original-contents-list",
]);

function isNoiseTocLabel(label) {
  if (!label) return true;
  return (
    /^(article text|book text|contents|உள்ளடக்கம்|edition note|title-leaf samples|original contents list)$/i.test(
      label.trim(),
    ) ||
    /^scan (page|leaf)\b/i.test(label) ||
    /^page \d+$/i.test(label) ||
    /^leaf \d+$/i.test(label)
  );
}

function elementFromHref(href) {
  if (!href || href.charAt(0) !== "#") return null;
  const id = href.slice(1);
  if (!id) return null;
  // getElementById accepts ids that start with digits; querySelector('#1-...') does not.
  return document.getElementById(id);
}

function buildTocItems(items, lang) {
  const titleLabel = lang === "ta" ? "தலைப்பு" : "Title";
  const base = (Array.isArray(items) ? items : [])
    .filter((item) => item?.href && !META_HREF.has(item.href))
    .filter((item) => !isNoiseTocLabel(item.label));
  if (!base.some((item) => item.href === "#document-title")) {
    return [{ href: "#document-title", label: titleLabel, level: 2 }, ...base];
  }
  return base;
}

/** Left sidebar: this document’s headings only (not the full archive list). */
export default function DocumentTocSidebar({
  items = [],
  lang = "en",
  title = "",
}) {
  const archiveHref = lang === "ta" ? "/archive/" : "/en/archive/";
  const copy =
    lang === "ta"
      ? {
          nav: "இந்த ஆவணத்தின் உள்ளடக்க அட்டவணை",
          index: "அனைத்து ஆவணங்கள்",
          heading: "இந்த ஆவணத்தில்",
          menu: "உள்ளடக்க அட்டவணை",
        }
      : {
          nav: "Table of contents for this document",
          index: "All holdings",
          heading: "In this document",
          menu: "Table of contents",
        };

  const tocItems = useMemo(
    () => buildTocItems(items, lang),
    [items, lang],
  );
  const [active, setActive] = useState(tocItems[0]?.href || "");
  const hrefKey = tocItems.map((item) => item.href).join("|");

  useEffect(() => {
    if (!tocItems.length) return undefined;

    const nodes = tocItems
      .map((item) => elementFromHref(item.href))
      .filter(Boolean);
    if (!nodes.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          );
        if (visible[0]?.target?.id) {
          setActive(`#${visible[0].target.id}`);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0, 1],
      },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hrefKey]);

  const tree = (
    <>
      <a className="docs-sidebar-index" href={`${archiveHref}#holdings`}>
        {copy.index}
      </a>
      <p className="docs-sidebar-heading">{copy.heading}</p>
      {title ? <p className="docs-sidebar-doc-title">{title}</p> : null}
      <ol className="docs-sidebar-toc">
        {tocItems.map((item) => (
          <li
            key={item.href}
            className={item.level >= 3 ? "is-nested" : undefined}
          >
            <a
              href={item.href}
              aria-current={active === item.href ? "true" : undefined}
              className={active === item.href ? "is-active" : undefined}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </>
  );

  return (
    <nav className="docs-sidebar docs-doc-toc" aria-label={copy.nav}>
      <details className="docs-sidebar-mobile">
        <summary>{copy.menu}</summary>
        <div className="docs-sidebar-panel">{tree}</div>
      </details>
      <div className="docs-sidebar-desktop">{tree}</div>
    </nav>
  );
}
