"use client";

import { useEffect, useMemo, useState } from "react";

function resolveUrl(item, sources) {
  if (item.url) return item.url;
  if ("urlIndex" in item && sources[item.urlIndex]) {
    return sources[item.urlIndex].url;
  }
  return null;
}

function ArchiveEntry({ item, lang, showCategory = false }) {
  const openLabel = lang === "ta" ? "காண்க" : "Open";
  const title = item.cite ? <cite>{item.title}</cite> : item.title;
  const meta = [showCategory ? item.categoryTitle : null, item.detail]
    .filter(Boolean)
    .join(" · ");

  if (!item.url) {
    return (
      <div className="archive-entry is-unavailable">
        {item.year ? (
          <span className="archive-entry-year">{item.year}</span>
        ) : (
          <span className="archive-entry-year" aria-hidden="true" />
        )}
        <span className="archive-entry-body">
          <strong className="archive-entry-title">{title}</strong>
          {meta ? <span className="archive-entry-detail">{meta}</span> : null}
        </span>
        <span className="archive-entry-action is-muted">
          {lang === "ta" ? "இணைப்பு கிடைக்கவில்லை" : "No link"}
        </span>
      </div>
    );
  }

  return (
    <a
      className="archive-entry"
      href={item.url}
      target="_blank"
      rel="noreferrer"
    >
      {item.year ? (
        <span className="archive-entry-year">{item.year}</span>
      ) : (
        <span className="archive-entry-year" aria-hidden="true" />
      )}
      <span className="archive-entry-body">
        <strong className="archive-entry-title">{title}</strong>
        {meta ? <span className="archive-entry-detail">{meta}</span> : null}
      </span>
      <span className="archive-entry-action">
        {openLabel}
        <span aria-hidden="true"> ↗</span>
        <span className="visually-hidden">
          {lang === "ta" ? " (புதிய தாவலில் திறக்கும்)" : " (opens in a new tab)"}
        </span>
      </span>
    </a>
  );
}

/** External library catalogue only — never mirrors internal holdings. */
export default function ArchiveExplorer({
  indexGroups = [],
  records = [],
  sources = [],
  lang = "ta",
}) {
  const [searchQuery, setSearchQuery] = useState("");

  const sections = useMemo(() => {
    const list = indexGroups.map((group) => ({
      id: group.id,
      title: group.title,
      items: group.items.map((item) => ({
        ...item,
        categoryTitle: group.title,
        url: resolveUrl(item, sources),
      })),
    }));

    list.push({
      id: "reference",
      title: lang === "ta" ? "குறிப்பு மூலங்கள்" : "Reference sources",
      items: records.map((rec) => ({
        ...rec,
        categoryTitle: lang === "ta" ? "குறிப்பு" : "Reference",
        url: resolveUrl(rec, sources),
      })),
    });

    return list;
  }, [indexGroups, records, sources, lang]);

  const allItems = useMemo(
    () =>
      sections.flatMap((section) =>
        section.items.map((item) => ({
          ...item,
          sectionId: section.id,
        })),
      ),
    [sections],
  );

  const filteredItems = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return null;
    return allItems.filter((item) =>
      [item.title, item.detail, item.year, item.categoryTitle].some((field) =>
        field?.toLowerCase().includes(q),
      ),
    );
  }, [allItems, searchQuery]);

  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");
    if (!hash || hash === "holdings") return;
    const el = document.getElementById(hash);
    if (el) {
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [sections]);

  const jumpLabel = lang === "ta" ? "பிரிவுகளுக்குச் செல்ல" : "Jump to section";
  const resultsLabel =
    lang === "ta" ? "தேடல் முடிவுகள்" : "Search results";

  return (
    <div className="archive-explorer" id="external-libraries">
      <div className="explorer-toolbar">
        <label className="explorer-search-box" htmlFor="archive-search-input">
          <span className="visually-hidden">
            {lang === "ta" ? "வெளிப் பதிவுகளில் தேட" : "Search external records"}
          </span>
          <input
            id="archive-search-input"
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder={
              lang === "ta"
                ? "வெளி நூலகப் பதிவுகளைத் தேட…"
                : "Search external library records…"
            }
            className="explorer-search-input"
          />
        </label>
        <p className="explorer-status" aria-live="polite">
          <strong>{filteredItems ? filteredItems.length : allItems.length}</strong>{" "}
          {lang === "ta" ? "வெளிப் பதிவுகள்" : "external records"}
        </p>
      </div>

      {/* Removed Wikipedia-style inline TOC jump links */}

      {filteredItems ? (
        <section className="archive-section" aria-labelledby="search-results-title">
          <header className="archive-section-head">
            <h2 id="search-results-title">{resultsLabel}</h2>
            <p>
              {filteredItems.length === 0
                ? lang === "ta"
                  ? "பொருத்தமான பதிவுகள் இல்லை."
                  : "No matching records."
                : lang === "ta"
                  ? "வெளித் தளத்தில் திறக்க ஒரு பதிவைத் தேர்ந்தெடுக்கவும்."
                  : "Choose a record to open on an external site."}
            </p>
          </header>
          {filteredItems.length === 0 ? (
            <div className="explorer-no-results">
              <button
                type="button"
                className="button button-secondary"
                onClick={() => setSearchQuery("")}
              >
                {lang === "ta" ? "தேடலை நீக்கு" : "Clear search"}
              </button>
            </div>
          ) : (
            <div className="archive-entry-list">
              {filteredItems.map((item, index) => (
                <ArchiveEntry
                  key={`${item.sectionId}-${item.year || index}-${item.title}`}
                  item={item}
                  lang={lang}
                  showCategory
                />
              ))}
            </div>
          )}
        </section>
      ) : (
        sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="archive-section"
            aria-labelledby={`${section.id}-title`}
          >
            <header className="archive-section-head">
              <h2 id={`${section.id}-title`}>{section.title}</h2>
              <p>
                {section.items.length}{" "}
                {lang === "ta" ? "பதிவுகள்" : "records"}
              </p>
            </header>
            <div className="archive-entry-list">
              {section.items.map((item, index) => (
                <ArchiveEntry
                  key={`${section.id}-${item.year || index}-${item.title}`}
                  item={item}
                  lang={lang}
                />
              ))}
            </div>
          </section>
        ))
      )}
    </div>
  );
}
