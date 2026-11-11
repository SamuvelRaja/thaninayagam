"use client";

import { BrushText } from "@/components/ui/BrushText";

import { useMemo, useState, useRef } from "react";
import Link from "next/link";
import { CATS, SUBS, WORKS } from "@/lib/data";
import { ArchiveArrow } from "./LivingHero";
import type { ReadingAvailability } from "@/lib/documents";

const featuredTa = ["tamilttutu", "tiruvalluvar", "ore-ulakam", "landscape-and-poetry"];
const featuredEn = ["landscape-and-poetry", "ethical-interpretation-nature", "collected-papers", "conference-1966-proceedings"];
const labels = [
  { ta: "இலக்கியம்", en: "Literature" },
  { ta: "பண்பாடு", en: "Culture" },
  { ta: "தமிழாய்வு", en: "Research" },
  { ta: "மெய்யியல்", en: "Philosophy" },
  { ta: "தொகுப்புகள்", en: "Collections" },
];

export function HomeCatalogue({ lang, readings }: { lang: "ta" | "en"; readings: Record<string, ReadingAvailability> }) {
  const ta = lang === "ta";
  const prefix = ta ? "" : "/en";
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [expanded, setExpanded] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const filtering = Boolean(query.trim() || category);
  const showTags = isFocused || Boolean(query.trim()) || Boolean(category);

  const works = useMemo(() => {
    const activeFeatured = ta ? featuredTa : featuredEn;
    const list = expanded || filtering ? WORKS : activeFeatured.flatMap(slug => WORKS.filter(work => work.slug === slug));
    const search = query.trim().toLocaleLowerCase();
    const searchNoSpace = search.replace(/\s+/g, "");
    return list.filter(work => {
      if (category && work.cat !== category) return false;
      const subject = CATS.find(cat => cat.slug === work.cat);
      const sub = SUBS.find(item => item.slug === work.sub);
      if (!search) return true;
      const haystack = [work.title, work.titleTa, work.details, work.detailsTa, work.year, subject?.ta, subject?.en, sub?.ta, sub?.en].join(" ").toLocaleLowerCase();
      const haystackNoSpace = haystack.replace(/\s+/g, "");
      return haystack.includes(search) || haystackNoSpace.includes(searchNoSpace);
    });
  }, [query, category, expanded, filtering, ta]);
  const reset = () => { setQuery(""); setCategory(""); setExpanded(true); setIsFocused(false); };

  return <section className="living-documents" id="documents" aria-labelledby="home-documents-title">
    <div className="container">
      <div className="living-section-heading">
        <div><p className="living-kicker">{ta ? "படைப்புகளின் வழியே" : "Discover through his work"}</p><h2 id="home-documents-title"><BrushText>{ta ? "வாசிப்பைத் தொடங்குங்கள்." : "Start with a good read."}</BrushText></h2></div>
        <button className="living-text-link" type="button" onClick={reset}>{ta ? `அனைத்து ${WORKS.length} ஆவணங்கள்` : `All ${WORKS.length} documents`}<ArchiveArrow /></button>
      </div>
      <div className="living-catalogue-tools" ref={containerRef}>
        <label className="living-search small-search">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></svg>
          <span className="visually-hidden">{ta ? "ஆவணங்களைத் தேடுக" : "Search documents"}</span>
          <input
            type="search"
            value={query}
            placeholder={ta ? "தேடுக…" : "Search…"}
            onChange={event => { setQuery(event.target.value); setExpanded(true); }}
            onFocus={() => setIsFocused(true)}
            onBlur={(e) => {
              if (containerRef.current && containerRef.current.contains(e.relatedTarget as Node)) {
                return;
              }
              setIsFocused(false);
            }}
          />
        </label>
        <span className="living-result-count" role="status" aria-live="polite">{ta ? `${works.length} ஆவணங்கள்${!expanded && !filtering ? " · தேர்ந்தெடுத்தவை" : ""}` : `${works.length} documents${!expanded && !filtering ? " · selected reading" : ""}`}</span>
      </div>
      {showTags && (
        <div className="living-catalogue-filters" role="group" aria-label={ta ? "துறை வடிகட்டிகள்" : "Subject filters"}>
          <button
            type="button"
            aria-pressed={!category}
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => { setCategory(""); setExpanded(true); }}
          >
            {ta ? "அனைத்தும்" : "All"}
          </button>
          {CATS.map((cat, index) => (
            <button
              key={cat.slug}
              type="button"
              aria-pressed={category === cat.slug}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => { setCategory(cat.slug); setExpanded(true); }}
            >
              {labels[index][lang]}
            </button>
          ))}
        </div>
      )}
      <div className="living-document-grid">{works.map((work, index) => {
        const field = CATS.findIndex(cat => cat.slug === work.cat);
        const title = ta && work.titleTa ? work.titleTa : work.title;
        const reading = readings[work.slug];
        const guide = reading?.kind === "guide";
        return <Link className="living-document-card" href={`${prefix}/archive/documents/${work.slug}/`} key={work.slug}>
          <div className="living-document-meta"><span className="living-document-number">{String(index + 1).padStart(2, "0")}</span><span>{labels[field]?.[lang]}</span><span className="living-document-year">{work.year}</span></div>
          <h3>{title}</h3><p>{ta ? work.detailsTa || work.details : work.details}</p>
          <div className="living-document-bottom"><span>{guide ? (ta ? "நூல் வழிகாட்டி" : "Catalogue guide") : reading?.kind === "related" ? (ta ? "தொடர்புடைய வாசிப்பு" : "Related reading") : (ta ? "வாசிக்கக் கிடைக்கிறது" : "Available to read")}</span><strong>{guide ? (ta ? "விவரங்கள்" : "Details") : (ta ? "வாசிக்க" : "Read")}<ArchiveArrow /></strong></div>
        </Link>;
      })}</div>
      {works.length === 0 && <div className="living-empty-state"><h3>{ta ? "ஆவணங்கள் கிடைக்கவில்லை" : "No documents found"}</h3><p>{ta ? "வேறு தலைப்பு அல்லது ஆண்டைத் தேடிப் பாருங்கள்." : "Try another title or year."}</p><button type="button" className="living-button living-button-primary" onClick={reset}>{ta ? "தேடலை நீக்குக" : "Clear search"}</button></div>}
      <Link className="living-catalogue-all living-text-link" href={`${prefix}/archive/`}>{ta ? "முழு ஆவணகத்தை ஆராய்க" : "Explore the full archive"}<ArchiveArrow /></Link>
    </div>
  </section>;
}
