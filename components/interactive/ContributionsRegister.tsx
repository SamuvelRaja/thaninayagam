"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { WORKS, CATS, CAT_BY, STRINGS } from "@/lib/data";

interface ContributionsRegisterProps {
  lang: "ta" | "en";
}

export const ContributionsRegister: React.FC<ContributionsRegisterProps> = ({ lang }) => {
  const isTa = lang === "ta";
  const S = STRINGS[lang];
  const pfx = isTa ? "" : "/en";
  const [selectedCat, setSelectedCat] = useState("all");

  const filteredWorks = useMemo(() => {
    if (selectedCat === "all") return WORKS;
    return WORKS.filter((w) => w.cat === selectedCat);
  }, [selectedCat]);

  return (
    <section className="section section-register" id="register">
      <div className="container">
        <div className="section-head">
          <span className="section-index">03</span>
          <h2>
            {isTa
              ? "அடிகளாரின் முதன்மை வெளியீடுகளின் பதிவேடு"
              : "Selected publications register"}
          </h2>
          <span className="section-scope">
            {isTa ? "முழுப் பதிவேடு" : "Chronological Register"}
          </span>
        </div>

        <h2 className="display-2" style={{ textAlign: "center", marginBottom: "48px" }}>
          {isTa ? "தேர்ந்தெடுத்த வெளியீடுகள்" : "Selected Publications"}
        </h2>

        <div className="toolbar">
          <div className="pill-row" id="reg-pills">
            <button
              type="button"
              className={`pill ${selectedCat === "all" ? "active" : ""}`}
              onClick={() => setSelectedCat("all")}
            >
              {S.all}
            </button>
            {CATS.map((c) => (
              <button
                key={c.slug}
                type="button"
                className={`pill ${selectedCat === c.slug ? "active" : ""}`}
                onClick={() => setSelectedCat(c.slug)}
              >
                {isTa ? c.ta : c.en}
              </button>
            ))}
          </div>
        </div>

        <p className="table-count" id="reg-count">
          {filteredWorks.length} {isTa ? "படைப்புகள்" : "records"}
        </p>

        {/* Desktop Table */}
        <div className="record-wrap" id="reg-table-wrap">
          <table className="record">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">{isTa ? "ஆண்டு" : "Year"}</th>
                <th scope="col">{isTa ? "நூல் தலைப்பு & விவரம்" : "Title & Details"}</th>
                <th scope="col">{isTa ? "துறை" : "Field"}</th>
                <th scope="col">{isTa ? "மொழி" : "Language"}</th>
                <th scope="col">{isTa ? "அணுகல்" : "Access"}</th>
              </tr>
            </thead>
            <tbody id="reg-tbody">
              {filteredWorks.map((w, i) => {
                const cat = CAT_BY[w.cat] || {};
                const title = isTa ? w.titleTa || w.title : w.title;
                const catName = isTa ? cat.ta : cat.en;
                const href = `${pfx}/archive/documents/${w.slug}/`;

                return (
                  <tr key={w.slug}>
                    <td>{String(i + 1).padStart(2, "0")}</td>
                    <td><span className="rec-year">{w.year}</span></td>
                    <td>
                      <Link href={href} className="rec-title-link">
                        <strong>{title}</strong>
                      </Link>
                      <div className="rec-details">{w.details}</div>
                    </td>
                    <td><span className="rec-field">{catName}</span></td>
                    <td>{w.lang}</td>
                    <td>
                      <Link href={href} className="btn btn-ghost btn-sm">
                        {w.status === "readable" ? S.readable : S.lending}
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="record-cards" id="reg-cards-wrap">
          {filteredWorks.map((w, i) => {
            const cat = CAT_BY[w.cat] || {};
            const title = isTa ? w.titleTa || w.title : w.title;
            const catName = isTa ? cat.ta : cat.en;
            const href = `${pfx}/archive/documents/${w.slug}/`;

            return (
              <Link href={href} className="record-card" key={w.slug}>
                <div className="rc-meta">
                  <span className="rc-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="rc-year">{w.year}</span>
                  <span className="rc-cat">{catName}</span>
                </div>
                <div className="rc-title">{title}</div>
                <div className="rc-details">{w.details}</div>
                <div className="rc-action">
                  {w.status === "readable" ? S.readable : S.lending} →
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
