"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { WORKS, CATS, SUBS, CAT_BY, SUB_BY, STRINGS } from "@/lib/data";

interface ArchiveExplorerProps {
  lang: "ta" | "en";
}

export const ArchiveExplorer: React.FC<ArchiveExplorerProps> = ({ lang }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isTa = lang === "ta";
  const S = STRINGS[lang];
  const pfx = isTa ? "" : "/en";

  const urlCat = searchParams.get("cat") || "";
  const urlSub = searchParams.get("sub") || "";
  const urlSort = searchParams.get("sort") || "subject";

  const [search, setSearch] = useState("");
  const [selectedCat, setSelectedCat] = useState(urlCat);
  const [selectedSub, setSelectedSub] = useState(urlSub);
  const [sortMode, setSortMode] = useState<"subject" | "chrono">(
    urlSort === "chrono" ? "chrono" : "subject"
  );

  // Sync state with URL params if user navigates back/forward
  useEffect(() => {
    if (urlCat !== selectedCat) setSelectedCat(urlCat);
    if (urlSub !== selectedSub) setSelectedSub(urlSub);
    if (urlSort === "chrono" || urlSort === "subject") {
      if (urlSort !== sortMode) setSortMode(urlSort);
    }
  }, [urlCat, urlSub, urlSort]);

  // Update URL search parameters
  const updateUrl = (newCat: string, newSub: string, newSort: string) => {
    const params = new URLSearchParams();
    if (newCat) params.set("cat", newCat);
    if (newSub) params.set("sub", newSub);
    if (newSort && newSort !== "subject") params.set("sort", newSort);
    const qs = params.toString();
    const newPath = `${pfx}/archive/${qs ? `?${qs}` : ""}`;
    router.replace(newPath, { scroll: false });
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
    updateUrl("", "", "subject");
  };

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
          w.year,
          cat ? cat.ta : "",
          cat ? cat.en : "",
          sub ? sub.ta : "",
          sub ? sub.en : "",
        ]
          .join(" ")
          .toLowerCase();
        if (!haystack.includes(q)) return false;
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

  return (
    <section className="section section-archive" id="catalog">
      <div className="container">
        {/* Search & Sort Instrument */}
        <div className="archive-controls" role="search">
          <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap", marginBottom: "16px" }}>
            <div className="search-box" style={{ flex: "1 1 320px", margin: 0 }}>
              <label htmlFor="cat-search" className="visually-hidden">
                {S.searchPlaceholder}
              </label>
              <input
                type="search"
                id="cat-search"
                className="search-input"
                style={{ marginBottom: 0 }}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={S.searchPlaceholder}
                autoComplete="off"
              />
            </div>

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
          </div>

          <div className="filter-group">
            {/* Primary Category Filter Rail */}
            <div className="pill-row" id="cat-pills" style={{ marginBottom: selectedCat && activeSubs.length > 0 ? "10px" : "16px" }}>
              <button
                type="button"
                className={`pill ${!selectedCat ? "active" : ""}`}
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
                    className={`pill ${selectedCat === c.slug ? "active" : ""}`}
                    onClick={() => handleCatChange(c.slug)}
                  >
                    {isTa ? c.ta : c.en} ({count})
                  </button>
                );
              })}
            </div>

            {/* Subcategory Filter Rail */}
            {selectedCat && activeSubs.length > 0 && (
              <div className="pill-row" id="cat-subpills" style={{ marginBottom: "16px", paddingLeft: "4px" }}>
                <button
                  type="button"
                  className={`pill pill-sub ${!selectedSub ? "active" : ""}`}
                  onClick={() => handleSubChange("")}
                >
                  {isTa ? "அனைத்து உட்பிரிவுகளும்" : "All subcategories"}
                </button>
                {activeSubs.map((s) => (
                  <button
                    key={s.slug}
                    type="button"
                    className={`pill pill-sub ${selectedSub === s.slug ? "active" : ""}`}
                    onClick={() => handleSubChange(s.slug)}
                  >
                    {isTa ? s.ta : s.en}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Results Head */}
        <div className="archive-results-head">
          <p className="table-count" id="cat-count">
            {filteredWorks.length} {S.records}
          </p>
          {(search || selectedCat || selectedSub || sortMode !== "subject") && (
            <button type="button" className="btn btn-ghost btn-sm" onClick={handleReset}>
              {S.reset}
            </button>
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
                        <div className="cell-details">{w.details}</div>
                      </td>
                      <td className="cell-year">{w.year}</td>
                      <td>
                        <span className={`cat-chip ${c.cls || ""}`}>
                          {isTa ? c.ta : c.en}
                        </span>
                      </td>
                      <td>
                        <Link href={href} className="text-link-arrow">
                          {isTa ? "வாசிக்க" : "Read"}
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

              return (
                <Link key={w.slug} href={href} className="record-card">
                  <div className="rc-meta">
                    <span className="cell-year">{w.year}</span>
                    <span className={`badge ${w.status === "readable" ? "badge-readable" : "badge-lending"}`}>
                      {w.status === "readable" ? S.readable : S.lending}
                    </span>
                  </div>
                  <div className="rc-title">{title}</div>
                  <div className="rc-details">{w.details}</div>
                  <div className="rc-meta">
                    <span className={`cat-chip ${c.cls || ""}`}>
                      {isTa ? c.ta : c.en}
                    </span>
                    <span className="rc-action">{isTa ? "வாசிக்க" : "Read"} →</span>
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
