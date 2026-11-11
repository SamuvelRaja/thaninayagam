"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { WORKS, CATS, SUBS, CAT_BY, SUB_BY, STRINGS } from "@/lib/data";

interface ArchiveExplorerProps {
  lang: "ta" | "en";
  readings: Record<string, ArchiveReading>;
}

export interface ArchiveReading {
  kind: "text" | "related" | "guide";
  language: "Tamil" | "English" | "Bilingual";
}

export const ArchiveExplorer: React.FC<ArchiveExplorerProps> = ({ lang, readings }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isTa = lang === "ta";
  const S = STRINGS[lang];
  const pfx = isTa ? "" : "/en";

  const urlSearch = searchParams.get("q") || "";
  const urlCat = searchParams.get("cat") || "";
  const urlSub = searchParams.get("sub") || "";
  const urlSort = searchParams.get("sort") || "subject";

  const [search, setSearch] = useState(urlSearch);
  const [selectedCat, setSelectedCat] = useState(urlCat);
  const [selectedSub, setSelectedSub] = useState(urlSub);
  const [sortMode, setSortMode] = useState<"subject" | "chrono">(
    urlSort === "chrono" ? "chrono" : "subject"
  );
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Sync state with URL params on mount and when URL or history changes
  useEffect(() => {
    const syncFromUrl = () => {
      if (typeof window === "undefined") return;
      const sp = new URLSearchParams(window.location.search);
      const currentCat = sp.get("cat") || urlCat || "";
      const currentSub = sp.get("sub") || urlSub || "";
      const currentQ = sp.get("q") || urlSearch || "";
      const currentSort = sp.get("sort") || urlSort || "subject";

      setSearch(currentQ);
      setSelectedCat(currentCat);
      setSelectedSub(currentSub);
      setSortMode(currentSort === "chrono" ? "chrono" : "subject");
    };

    syncFromUrl();
    window.addEventListener("popstate", syncFromUrl);
    return () => window.removeEventListener("popstate", syncFromUrl);
  }, [urlCat, urlSub, urlSort, urlSearch]);

  // Update URL search parameters
  const updateUrl = (newCat: string, newSub: string, newSort: string, newSearch = search) => {
    const params = new URLSearchParams();
    if (newSearch.trim()) params.set("q", newSearch.trim());
    if (newCat) params.set("cat", newCat);
    if (newSub) params.set("sub", newSub);
    if (newSort && newSort !== "subject") params.set("sort", newSort);
    const qs = params.toString();
    const newPath = `${pfx}/archive/${qs ? `?${qs}` : ""}`;
    // Filtering is local; synchronise the URL without fetching a static page again.
    window.history.replaceState(null, "", newPath);
  };

  const handleCatChange = (catSlug: string) => {
    const nextCat = catSlug === selectedCat ? "" : catSlug;
    setSelectedCat(nextCat);
    setSelectedSub("");
    updateUrl(nextCat, "", sortMode);
  };

  const handleSubChange = (subSlug: string) => {
    const nextSub = subSlug === selectedSub ? "" : subSlug;
    setSelectedSub(nextSub);
    updateUrl(selectedCat, nextSub, sortMode);
  };

  const handleSortChange = (mode: "subject" | "chrono") => {
    setSortMode(mode);
    updateUrl(selectedCat, selectedSub, mode);
  };

  const handleReset = () => {
    setSearch("");
    setSelectedCat("");
    setSelectedSub("");
    setSortMode("subject");
    setIsSearchFocused(false);
    updateUrl("", "", "subject", "");
  };

  const handleSearchBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (searchContainerRef.current && searchContainerRef.current.contains(e.relatedTarget as Node)) {
      return;
    }
    setIsSearchFocused(false);
    if (search !== urlSearch) {
      updateUrl(selectedCat, selectedSub, sortMode);
    }
  };

  const showTags = isSearchFocused || Boolean(search.trim());

  const activeSubs = useMemo(() => {
    if (!selectedCat) return [];
    return SUBS.filter((s) => s.cat === selectedCat);
  }, [selectedCat]);

  const filteredWorks = useMemo(() => {
    let list = WORKS.filter((w) => {
      if (selectedCat && w.cat !== selectedCat) return false;
      if (selectedSub && w.sub !== selectedSub) return false;
      if (search.trim()) {
        const q = search.toLowerCase().trim();
        const cat = CAT_BY[w.cat];
        const sub = SUB_BY[w.sub];
        const haystack = [
          w.title,
          w.titleTa || "",
          w.details,
          w.detailsTa || "",
          w.year,
          cat ? cat.ta : "",
          cat ? cat.en : "",
          sub ? sub.ta : "",
          sub ? sub.en : "",
        ]
          .join(" ")
          .toLowerCase();
        const haystackNoSpace = haystack.replace(/\s+/g, "");
        const qNoSpace = q.replace(/\s+/g, "");
        if (!haystack.includes(q) && !haystackNoSpace.includes(qNoSpace)) return false;
      }
      return true;
    });

    if (sortMode === "chrono") {
      return [...list].sort((a, b) => {
        const ya = parseInt(String(a.year).split("–")[0], 10) || 9999;
        const yb = parseInt(String(b.year).split("–")[0], 10) || 9999;
        if (ya !== yb) return ya - yb;
        return a.title.localeCompare(b.title);
      });
    }

    return list;
  }, [selectedCat, selectedSub, search, sortMode]);

  const kindLabels = isTa ? { text: "வாசிப்பு உரை", related: "தொடர்புடைய வாசிப்பு", guide: "நூல் வழிகாட்டி" } : { text: "Reading text", related: "Related reading", guide: "Catalogue guide" };
  const languageLabels = isTa ? { Tamil: "தமிழ்", English: "ஆங்கிலம்", Bilingual: "தமிழ் / ஆங்கிலம்" } : { Tamil: "Tamil", English: "English", Bilingual: "Tamil / English" };

  // Keep the selected subject visible without a large hero above the results.
  let dynamicTitle = isTa ? "ஆவணகம்" : "Explore his writings";
  let dynamicLead = isTa
    ? "நூல்கள், கட்டுரைகள், இதழ்கள் — விருப்பமான படைப்பைத் தேர்ந்தெடுத்து வாசியுங்கள். வாசிப்பு உரை, தொடர்புடைய வாசிப்பு, நூல் வழிகாட்டி ஆகியவை தனித்தனியாகக் குறிக்கப்பட்டுள்ளன."
    : "Books, essays, journals, and conference papers. Find a subject you love and start reading. Reading texts, related reading, and catalogue guides are marked separately.";

  if (selectedSub && SUB_BY[selectedSub]) {
    const subObj = SUB_BY[selectedSub];
    const catObj = selectedCat ? CAT_BY[selectedCat] : (subObj.cat ? CAT_BY[subObj.cat] : null);
    dynamicTitle = subObj[lang] || subObj.ta;
    dynamicLead = (isTa ? subObj.hintTa : subObj.hintEn) || (catObj ? (isTa ? catObj.hintTa : catObj.hintEn) : dynamicLead);
  } else if (selectedCat && CAT_BY[selectedCat]) {
    const catObj = CAT_BY[selectedCat];
    dynamicTitle = catObj[lang] || catObj.ta;
    dynamicLead = (isTa ? catObj.hintTa : catObj.hintEn) || dynamicLead;
  } else if (search.trim()) {
    dynamicTitle = isTa ? `“${search.trim()}” — தேடல்` : `Search: “${search.trim()}”`;
    dynamicLead = isTa
      ? `${filteredWorks.length} படைப்புகள் கண்டறியப்பட்டன.`
      : `Found ${filteredWorks.length} matching works.`;
  }

  // Update browser document title dynamically to match the current view
  useEffect(() => {
    if (typeof document !== "undefined") {
      const siteSuffix = isTa ? "தனிநாயக அடிகள் ஆவணகம்" : "Fr. Thani Nayagam Archive";
      document.title = `${dynamicTitle} | ${siteSuffix}`;
    }
  }, [dynamicTitle, isTa]);

  return (
      <section className="section section-archive" id="catalog" aria-labelledby="page-heading-archive">
        <div className="container">
          <nav className="archive-breadcrumb" aria-label={isTa ? "ஆவணகப் பாதை" : "Archive breadcrumb"}>
            <Link href={`${pfx}/`}>{S.nav[0]}</Link>
            <span aria-hidden="true">/</span>
            {selectedCat ? (
              <>
                <Link
                  href={`${pfx}/archive/`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleReset();
                  }}
                >
                  {S.nav[3]}
                </Link>
                <span aria-hidden="true">/</span>
                {selectedSub ? (
                  <Link
                    href={`${pfx}/archive/?cat=${selectedCat}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubChange("");
                    }}
                  >
                    {CAT_BY[selectedCat]?.[lang]}
                  </Link>
                ) : (
                  <span>{CAT_BY[selectedCat]?.[lang]}</span>
                )}
              </>
            ) : (
              <span>{S.nav[3]}</span>
            )}
            {selectedSub && (
              <>
                <span aria-hidden="true">/</span>
                <span>{SUB_BY[selectedSub]?.[lang]}</span>
              </>
            )}
          </nav>
          <header className="archive-heading">
            <h1 id="page-heading-archive">{dynamicTitle}</h1>
            <p>{dynamicLead}</p>
          </header>
        {/* Search, Results Count & Sort Controls */}
        <div className="archive-controls" role="search" ref={searchContainerRef} onBlur={handleSearchBlur}>
          <div className="archive-top-bar">
            <div className="archive-top-left">
              <p className="table-count archive-top-count" id="cat-count" role="status" aria-live="polite">
                <span className="count-value">{filteredWorks.length}</span> {lang === "en" && filteredWorks.length === 1 ? "record" : S.records}
              </p>

              <div className="search-box small-search">
                <label htmlFor="cat-search" className="visually-hidden">
                  {S.searchPlaceholder}
                </label>
                <svg className="small-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <circle cx="10.5" cy="10.5" r="6.5" />
                  <path d="m16 16 5 5" />
                </svg>
                <input
                  type="search"
                  id="cat-search"
                  className="search-input small-search-input"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") updateUrl(selectedCat, selectedSub, sortMode);
                  }}
                  placeholder={isTa ? "தேடுக…" : "Search…"}
                  autoComplete="off"
                  aria-expanded={showTags}
                  aria-controls="cat-pills-container"
                />
                {search && (
                  <button
                    type="button"
                    className="search-clear-btn"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => {
                      setSearch("");
                      updateUrl(selectedCat, selectedSub, sortMode, "");
                    }}
                    aria-label={isTa ? "தேடலை நீக்குக" : "Clear search"}
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            <div className="archive-top-right">
              {/* Sort Switch */}
              <div className="segmented" id="cat-sort" role="group" aria-label={isTa ? "வரிசை முறை" : "Sort order"}>
                <button
                  type="button"
                  className={sortMode === "subject" ? "active" : ""}
                  onClick={() => handleSortChange("subject")}
                >
                  {isTa ? "துறை வரிசை" : "By Subject"}
                </button>
                <button
                  type="button"
                  className={sortMode === "chrono" ? "active" : ""}
                  onClick={() => handleSortChange("chrono")}
                >
                  {isTa ? "ஆண்டு வரிசை" : "Chronological"}
                </button>
              </div>

              {/* Reset Button */}
              {(search || selectedCat || selectedSub || sortMode !== "subject") && (
                <button type="button" className="btn btn-ghost btn-sm" onClick={handleReset}>
                  {S.reset}
                </button>
              )}
            </div>
          </div>

          {/* Reveal filter tags when the reader focuses or types in search. */}
          {showTags && (
            <div className="archive-tags-tray" id="cat-pills-container" role="region" aria-label={isTa ? "வடிகட்டி குறிச்சொற்கள்" : "Filter tags"}>
              <div className="pill-row" id="cat-pills">
                <button
                  type="button"
                  className={`pill ${!selectedCat ? "active" : ""}`}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => handleCatChange("")}
                >
                  {S.all} ({WORKS.length})
                </button>
                {CATS.map((c) => {
                  const count = WORKS.filter((w) => w.cat === c.slug).length;
                  return (
                    <button
                      key={c.slug}
                      type="button"
                      data-cat={c.slug}
                      aria-pressed={selectedCat === c.slug}
                      className={`pill ${selectedCat === c.slug ? "active" : ""}`}
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => handleCatChange(c.slug)}
                    >
                      {isTa ? c.ta : c.en} ({count})
                    </button>
                  );
                })}
              </div>

              {/* Subcategory Filter Rail */}
              {selectedCat && activeSubs.length > 0 && (
                <div className="pill-row" id="cat-subpills" style={{ marginTop: "10px", paddingLeft: "4px" }}>
                  <button
                    type="button"
                    className={`pill pill-sub ${!selectedSub ? "active" : ""}`}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => handleSubChange("")}
                  >
                    {isTa ? "அனைத்து உட்பிரிவுகளும்" : "All subcategories"}
                  </button>
                  {activeSubs.map((s) => (
                    <button
                      key={s.slug}
                      type="button"
                      className={`pill pill-sub ${selectedSub === s.slug ? "active" : ""}`}
                      aria-pressed={selectedSub === s.slug}
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => handleSubChange(s.slug)}
                    >
                      {isTa ? s.ta : s.en}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Desktop Table View */}
        {filteredWorks.length > 0 && (
          <div className="record-wrap" id="cat-table-wrap">
            <table className="record">
              <thead>
                <tr>
                  <th scope="col" style={{ width: "48px" }}>#</th>
                  <th scope="col">{isTa ? "நூல் தலைப்பு & விவரம்" : "Title & Details"}</th>
                  <th scope="col" style={{ width: "100px" }}>{isTa ? "ஆண்டு" : "Year"}</th>
                  <th scope="col" style={{ width: "200px" }}>{isTa ? "துறை" : "Field"}</th>
                  <th scope="col" style={{ width: "120px" }}>{isTa ? "அணுகல்" : "Action"}</th>
                </tr>
              </thead>
              <tbody id="cat-tbody">
                {filteredWorks.map((w, i) => {
                  const c = CAT_BY[w.cat] || {};
                  const title = isTa ? (w.titleTa || w.title) : w.title;
                  const href = `${pfx}/archive/documents/${w.slug}/`;
                  const reading = readings[w.slug] || { kind: "guide", language: "English" } as ArchiveReading;

                  return (
                    <tr
                      key={w.slug}
                      className="row-link"
                      onClick={(e) => {
                        if (!(e.target as HTMLElement).closest("a")) {
                          router.push(href);
                        }
                      }}
                    >
                      <td className="cell-no">{String(i + 1).padStart(2, "0")}</td>
                      <td>
                        <span className="cell-title">
                          <Link href={href}>{title}</Link>
                        </span>
                        {!isTa && w.titleTa && (
                          <span className="ta-title">{w.titleTa}</span>
                        )}
                        <div className="cell-details">{isTa ? w.detailsTa || w.details : w.details}</div>
                        <div className="cell-details">{languageLabels[reading.language]} · {kindLabels[reading.kind]}</div>
                      </td>
                      <td className="cell-year">{w.year}</td>
                      <td>
                        <span className={`cat-chip ${c.cls || ""}`}>
                          {isTa ? c.ta : c.en}
                        </span>
                      </td>
                      <td>
                        <Link href={href} className="text-link-arrow">
                          {reading.kind === "guide" ? (isTa ? "பதிவைப் பார்க்க" : "View record") : (isTa ? "வாசிக்க" : "Read")}
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* Mobile Responsive Cards */}
        {filteredWorks.length > 0 && (
          <div className="record-cards" id="cat-cards">
            {filteredWorks.map((w) => {
              const c = CAT_BY[w.cat] || {};
              const title = isTa ? (w.titleTa || w.title) : w.title;
              const href = `${pfx}/archive/documents/${w.slug}/`;
              const reading = readings[w.slug] || { kind: "guide", language: "English" } as ArchiveReading;

              return (
                <Link key={w.slug} href={href} className="record-card">
                  <div className="rc-meta">
                    <span className="cell-year">{w.year}</span>
                    <span className={`badge ${reading.kind === "text" ? "badge-readable" : "badge-lending"}`}>
                      {kindLabels[reading.kind]}
                    </span>
                  </div>
                  <div className="rc-title">{title}</div>
                  <div className="rc-details">{isTa ? w.detailsTa || w.details : w.details}</div>
                  <div className="rc-details">{languageLabels[reading.language]}</div>
                  <div className="rc-meta">
                    <span className={`cat-chip ${c.cls || ""}`}>
                      {isTa ? c.ta : c.en}
                    </span>
                    <span className="rc-action">{reading.kind === "guide" ? (isTa ? "பதிவைப் பார்க்க" : "View record") : (isTa ? "வாசிக்க" : "Read")} →</span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {/* Empty State */}
        {filteredWorks.length === 0 && (
          <div className="empty-state" id="cat-empty">
            <div className="ornament" aria-hidden="true">❦</div>
            <p>{S.empty}</p>
            <p className="empty-hint">{S.emptyHint}</p>
            <button type="button" className="btn btn-primary" onClick={handleReset}>
              {S.reset}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
