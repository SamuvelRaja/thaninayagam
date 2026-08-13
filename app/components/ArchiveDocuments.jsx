'use client';

import { useState } from 'react';
import Link from 'next/link';
import { archiveTaxonomy, taxonomyFor, taxonomyLabel } from '@/app/lib/archiveMeta';

export default function ArchiveDocuments({ documents, lang = "en" }) {
  const [filter, setFilter] = useState("all");
  
  const filteredDocs = filter === "all" 
    ? documents 
    : documents.filter(doc => taxonomyFor(doc).categoryId === filter);

  const getDocUrl = (doc) => {
    return lang === "ta" 
      ? `/archive/documents/${doc.slug}`
      : `/en/archive/documents/${doc.slug}`;
  };

  return (
    <div className="anna-table-container">
      {/* Modern Top Visual Grid Navigation as Filters */}
      <nav className="anna-top-nav" aria-label="Main Categories">
        <ul className="anna-top-grid">
          <li>
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`anna-top-card ${filter === "all" ? "is-active" : ""}`}
              style={{ width: "100%", cursor: "pointer", fontFamily: "inherit", fontSize: "1rem" }}
            >
              <span>{lang === "ta" ? "அனைத்தும்" : "All"}</span>
            </button>
          </li>
          {archiveTaxonomy.map((category) => {
            return (
              <li key={category.id}>
                <button
                  type="button"
                  onClick={() => setFilter(category.id)}
                  className={`anna-top-card ${filter === category.id ? "is-active" : ""}`}
                  style={{ width: "100%", cursor: "pointer", fontFamily: "inherit", fontSize: "1rem" }}
                >
                  <span>{category[lang].label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="anna-archive-wrapper">
        {/* Title */}
        <div className="anna-table-header">
          <h1 className="anna-table-title">
            {lang === "ta" ? "ஆவணக் காப்பகம்" : "Digital Archive"}
          </h1>
        </div>

        {/* 4-Column Table */}
        <table className="anna-archive-register">
          <thead>
            <tr>
              <th scope="col" className="col-no">{lang === "ta" ? "எண்" : "No."}</th>
              <th scope="col" className="col-title">{lang === "ta" ? "பொருள்" : "Title"}</th>
              <th scope="col" className="col-year">{lang === "ta" ? "காலம்" : "Year"}</th>
              <th scope="col" className="col-source">{lang === "ta" ? "இதழ்/வகை" : "Category"}</th>
            </tr>
          </thead>
          <tbody>
            {filteredDocs.length > 0 ? (
              filteredDocs.map((doc, index) => (
                <tr key={doc.slug}>
                  <td className="col-no">{index + 1}</td>
                  <td className="col-title">
                    <Link href={getDocUrl(doc)} className="anna-table-link">
                      {doc.title}
                    </Link>
                  </td>
                  <td className="col-year">{doc.year || '—'}</td>
                  <td className="col-source">{taxonomyLabel(doc, lang, { compact: true })}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="anna-empty">
                  {lang === "ta" ? "இப்பக்கத்தில் ஆவணங்கள் இல்லை." : "No documents found for this category."}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
