"use client";

import { useEffect, useMemo, useState } from "react";

/** Compact right-rail TOC for non-document pages (e.g. About). */
export default function OnThisPage({ items = [], lang = "en" }) {
  const label = lang === "ta" ? "இந்தப் பக்கத்தில்" : "On this page";

  const tocItems = useMemo(
    () => (Array.isArray(items) ? items.filter((item) => item?.href) : []),
    [items],
  );
  const [active, setActive] = useState(tocItems[0]?.href || "");
  const hrefKey = tocItems.map((item) => item.href).join("|");

  useEffect(() => {
    if (!tocItems.length) return undefined;

    const nodes = tocItems
      .map((item) => {
        if (!item.href || item.href.charAt(0) !== "#") return null;
        return document.getElementById(item.href.slice(1));
      })
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

  if (!tocItems.length) return null;

  return (
    <nav className="docs-toc" aria-label={label}>
      <p className="docs-toc-label">{label}</p>
      <ol>
        {tocItems.map((item) => (
          <li
            key={item.href}
            className={item.level >= 3 ? "is-nested" : undefined}
          >
            <a
              href={item.href}
              aria-current={active === item.href ? "true" : undefined}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
