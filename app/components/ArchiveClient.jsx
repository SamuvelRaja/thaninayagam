"use client";

import { useMemo, useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  archiveTaxonomy,
  taxonomyFor,
  taxonomyLabel,
} from "@/app/lib/archiveMeta";
import ArchiveExplorer from "@/app/components/ArchiveExplorer";

export default function ArchiveClient({
  documents = [],
  indexGroups = [],
  records = [],
  sources = [],
  lang = "ta",
}) {
  const searchParams = useSearchParams();
  const urlCategory = searchParams.get("category") || "";
  const urlSub = searchParams.get("sub") || "";
  const urlView = searchParams.get("view") || "";

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(urlCategory);
  const [selectedSub, setSelectedSub] = useState(urlSub);
  const [viewMode, setViewMode] = useState(urlView === "chrono" ? "chrono" : "subject");

  useEffect(() => {
    setSelectedCategory(urlCategory);
  }, [urlCategory]);

  useEffect(() => {
    setSelectedSub(urlSub);
  }, [urlSub]);

  useEffect(() => {
    if (urlView === "chrono") setViewMode("chrono");
    else if (urlCategory) setViewMode("subject");
  }, [urlView, urlCategory]);

  const basePath = lang === "ta" ? "/archive" : "/en/archive";
  const docBasePath = lang === "ta" ? "/archive/documents" : "/en/archive/documents";
  const isTa = lang === "ta";

  // Taxonomy category mapping
  const categoryMap = useMemo(() => {
    const map = new Map();
    archiveTaxonomy.forEach((cat) => {
      map.set(cat.id, cat);
    });
    return map;
  }, []);

  const currentCategoryObj = selectedCategory ? categoryMap.get(selectedCategory) : null;

  // Filtered documents
  const filteredDocs = useMemo(() => {
    let list = documents;

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter((doc) => {
        const title = (doc.title || "").toLowerCase();
        const summary = (doc.summary || "").toLowerCase();
        const year = (doc.year || "").toLowerCase();
        const catLabel = (taxonomyLabel(doc, lang) || "").toLowerCase();
        return (
          title.includes(q) ||
          summary.includes(q) ||
          year.includes(q) ||
          catLabel.includes(q)
        );
      });
    } else if (selectedCategory) {
      list = list.filter((doc) => {
        const tax = taxonomyFor(doc);
        if (tax.categoryId !== selectedCategory) return false;
        if (selectedSub && tax.subcategoryId !== selectedSub) return false;
        return true;
      });
    }

    if (viewMode === "chrono") {
      return [...list].sort((a, b) => {
        const ya = parseInt(a.year, 10) || 9999;
        const yb = parseInt(b.year, 10) || 9999;
        return ya - yb;
      });
    }

    return list;
  }, [documents, search, selectedCategory, selectedSub, viewMode, lang]);

  const docCount = filteredDocs.length;

  const handleCategoryClick = (catId) => {
    if (selectedCategory === catId && !selectedSub) {
      // Toggle off if already selected
      setSelectedCategory("");
      setSelectedSub("");
    } else {
      setSelectedCategory(catId);
      setSelectedSub("");
    }
  };

  const handleSubClick = (subId) => {
    if (selectedSub === subId) {
      setSelectedSub("");
    } else {
      setSelectedSub(subId);
    }
  };

  return (
    <div className="content-section page-shell archive-shell">
      <section className="archive-holdings" id="holdings" aria-label={isTa ? "ஆவணப் பதிவேடு" : "Holdings register"}>

        {/* Primary Category Filter Pills */}
        <nav className="archive-subnav" aria-label={isTa ? "தொகுப்பு வகைகள்" : "Collection categories"}>
          <ul>
            <li>
              <button
                type="button"
                className={`archive-filter-pill-btn ${!selectedCategory ? "is-active" : ""}`}
                aria-pressed={!selectedCategory}
                onClick={() => {
                  setSelectedCategory("");
                  setSelectedSub("");
                  setSearch("");
                }}
              >
                <span>{isTa ? "அனைத்து ஆவணங்களும்" : "All holdings"}</span>
                <span className="pill-count">{documents.length}</span>
              </button>
            </li>
            {archiveTaxonomy.map((category) => {
              const count = documents.filter(
                (d) => taxonomyFor(d).categoryId === category.id
              ).length;
              const isActive = selectedCategory === category.id;
              return (
                <li key={category.id}>
                  <button
                    type="button"
                    className={`archive-filter-pill-btn ${isActive ? "is-active" : ""}`}
                    aria-pressed={isActive}
                    onClick={() => handleCategoryClick(category.id)}
                  >
                    <span>{isTa ? category.ta.label : category.en.label}</span>
                    <span className="pill-count">{count}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Subcategory Pills when a category is selected */}
        {selectedCategory && currentCategoryObj && currentCategoryObj.subcategories?.length > 0 && (
          <nav className="archive-subnav archive-subnav-nested" aria-label={isTa ? "துணைவகைகள்" : "Subcategories"}>
            <ul>
              <li>
                <button
                  type="button"
                  className={`archive-filter-pill-btn sub-pill ${!selectedSub ? "is-active" : ""}`}
                  aria-pressed={!selectedSub}
                  onClick={() => setSelectedSub("")}
                >
                  <span>{isTa ? "இத்தொகுப்பில் அனைத்தும்" : "All in this collection"}</span>
                  <span className="pill-count">
                    {documents.filter((d) => taxonomyFor(d).categoryId === selectedCategory).length}
                  </span>
                </button>
              </li>
              {currentCategoryObj.subcategories.map((sub) => {
                const subCount = documents.filter(
                  (d) =>
                    taxonomyFor(d).categoryId === selectedCategory &&
                    taxonomyFor(d).subcategoryId === sub.id
                ).length;
                const isSubActive = selectedSub === sub.id;
                return (
                  <li key={sub.id}>
                    <button
                      type="button"
                      className={`archive-filter-pill-btn sub-pill ${isSubActive ? "is-active" : ""}`}
                      aria-pressed={isSubActive}
                      onClick={() => handleSubClick(sub.id)}
                    >
                      <span>{isTa ? sub.ta.label : sub.en.label}</span>
                      <span className="pill-count">{subCount}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}

        {/* Search, Count & View Mode Toolbar */}
        <div className="holdings-toolbar" style={{ marginTop: "1rem" }}>
          <label className="holdings-search" htmlFor="holdings-search-input">
            <span className="visually-hidden">
              {isTa ? "தலைப்பு, வகை அல்லது ஆண்டால் தேட…" : "Search by title, category, or year…"}
            </span>
            <input
              id="holdings-search-input"
              type="search"
              placeholder={isTa ? "தலைப்பு, வகை அல்லது ஆண்டால் தேட…" : "Search by title, category, or year…"}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>

          <div className="archive-view-toggle" role="group" aria-label={isTa ? "பட்டியல் வரிசை" : "List ordering"}>
            <button
              type="button"
              className={viewMode === "subject" ? "is-active" : ""}
              aria-pressed={viewMode === "subject"}
              onClick={() => setViewMode("subject")}
            >
              {isTa ? "பொருள் வரிசை" : "By subject"}
            </button>
            <button
              type="button"
              className={viewMode === "chrono" ? "is-active" : ""}
              aria-pressed={viewMode === "chrono"}
              onClick={() => setViewMode("chrono")}
            >
              {isTa ? "காலவரிசை" : "Chronological"}
            </button>
          </div>

          <p className="holdings-count" aria-live="polite">
            <strong>{docCount}</strong> {isTa ? "ஆவணங்கள்" : "holdings"}
          </p>
        </div>

        {/* Live Filter / Active State Summary */}
        {(selectedCategory || search.trim()) && (
          <div className="archive-active-filter-bar" style={{ display: "flex", alignItems: "center", gap: "0.75rem", margin: "0.5rem 0 1.25rem" }}>
            <span style={{ fontSize: "0.85rem", color: "var(--muted)" }}>
              {isTa ? "செயலில் உள்ள வடிகட்டல்:" : "Active filter:"}
            </span>
            {selectedCategory && (
              <span className="badge" style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem" }}>
                {isTa ? currentCategoryObj?.ta.label : currentCategoryObj?.en.label}
                {selectedSub && ` → ${currentCategoryObj?.subcategories.find(s => s.id === selectedSub)?.[isTa ? 'ta' : 'en']?.label}`}
              </span>
            )}
            {search.trim() && (
              <span className="badge">
                {isTa ? `தேடல்: "${search}"` : `Search: "${search}"`}
              </span>
            )}
            <button
              type="button"
              className="button button-ghost button-small"
              onClick={() => {
                setSelectedCategory("");
                setSelectedSub("");
                setSearch("");
              }}
              style={{ fontSize: "0.8rem", padding: "0.2rem 0.5rem" }}
            >
              {isTa ? "வடிகட்டலை நீக்குக ✕" : "Clear filters ✕"}
            </button>
          </div>
        )}

        {/* Holdings Register Table — Always Directly Rendered */}
        <section className="holdings-group" aria-labelledby="holdings-register-title">
          <h3 className="visually-hidden" id="holdings-register-title">
            {isTa ? "ஆவணப் பட்டியல்" : "Holdings register"}
          </h3>
          <div className="archive-register-wrap">
            <table className="archive-register">
              <caption className="visually-hidden">
                {isTa
                  ? `${viewMode === "chrono" ? "காலவரிசை" : "ஆவணங்கள்"}: ${docCount} ஆவணங்கள்`
                  : `${viewMode === "chrono" ? "Chronological" : "Holdings"}: ${docCount} works`}
              </caption>
              <thead>
                <tr>
                  <th scope="col">{isTa ? "எண்" : "No."}</th>
                  <th scope="col">{isTa ? "பொருள் / தலைப்பு" : "Item / Title"}</th>
                  <th scope="col">{isTa ? "காலம்" : "Year"}</th>
                  <th scope="col">{isTa ? "வகை" : "Category"}</th>
                  <th scope="col">
                    <span className="visually-hidden">{isTa ? "திற" : "Open"}</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredDocs.length > 0 ? (
                  filteredDocs.map((doc, idx) => (
                    <tr key={doc.slug}>
                      <td className="archive-register-no">{idx + 1}</td>
                      <td>
                        <Link href={`${docBasePath}/${doc.slug}/`}>
                          <strong>{doc.title}</strong>
                          {doc.summary ? (
                            <span className="archive-register-summary">{doc.summary}</span>
                          ) : null}
                        </Link>
                      </td>
                      <td>{doc.year || "—"}</td>
                      <td>
                        <span className="badge" style={{ fontSize: "0.75rem", fontWeight: 600 }}>
                          {taxonomyLabel(doc, lang, { compact: true })}
                        </span>
                      </td>
                      <td className="archive-register-action">
                        <Link className="archive-register-open" href={`${docBasePath}/${doc.slug}/`}>
                          {isTa ? "வாசிக்க →" : "Read →"}
                        </Link>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" style={{ textAlign: "center", padding: "3rem 1rem", color: "var(--muted)" }}>
                      <p style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem" }}>
                        {isTa ? "ஆவணங்கள் எதுவும் கண்டறியப்படவில்லை" : "No holdings found"}
                      </p>
                      <p style={{ fontSize: "0.9rem" }}>
                        {isTa
                          ? "தேடல் சொற்களை மாற்றி முயற்சிக்கவும் அல்லது வடிகட்டலை மீட்டமைக்கவும்."
                          : "Try changing your search terms or reset filters."}
                      </p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

      </section>

      {/* Elsewhere / External Libraries */}
      <details className="archive-elsewhere" style={{ marginTop: "3rem" }}>
        <summary>
          <span className="section-label">{isTa ? "மேலும்" : "Further"}</span>
          <span className="archive-elsewhere-title">
            {isTa ? "பிற நூலக இணைப்புகள்" : "External library catalogue"}
          </span>
          <span className="archive-elsewhere-hint">
            {isTa
              ? "விருப்பத்தேர்வு — பிற தளங்களில் உள்ள தொடர்புடைய எண்ணிமப் பதிவுகள்."
              : "Optional reference — external digitised records and finding aids."}
          </span>
        </summary>
        <div className="archive-elsewhere-body">
          <ArchiveExplorer
            indexGroups={indexGroups}
            records={records}
            sources={sources}
            lang={lang}
          />
        </div>
      </details>
    </div>
  );
}
