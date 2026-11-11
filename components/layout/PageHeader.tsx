import React from "react";

export interface PageHeaderProps {
  slug: string;
  title: string;
  lead?: string;
  lang?: "ta" | "en";
  kicker?: string;
  documentImg?: string;
}

const sectionLabels: Record<string, { ta: string; en: string }> = {
  about: { ta: "அவரைப் பற்றி", en: "About Thani Nayagam" },
  contributions: { ta: "அவரது தமிழ்ப்பணி", en: "His contribution to Tamil" },
  archive: { ta: "நூல்களும் ஆய்வுக் கட்டுரைகளும்", en: "Books, essays & research" },
  sponsors: { ta: "ஒன்றாகக் காப்போம்", en: "Help keep his work alive" },
};

export const PageHeader: React.FC<PageHeaderProps> = ({ slug, title, lead, lang = "ta", kicker, documentImg }) => (
  <section className={`page-header living-page-header page-header-${slug}`} aria-labelledby={`page-heading-${slug}`}>
    <div className="container brush-page-heading">
      <div className="brush-page-heading-copy">
      {slug !== "sponsors" && (kicker || sectionLabels[slug]?.[lang]) && (
        <p className="slug-row">{kicker || sectionLabels[slug]?.[lang]}</p>
      )}
      <h1 className="display-2" id={`page-heading-${slug}`}><span className="brush-heading-mark"><span className="brush-heading-ink">{title}</span></span></h1>
      {lead && <p className="lede">{lead}</p>}
      </div>
      {slug !== "sponsors" && (
        <div className={`brush-page-art brush-page-art-${slug}`} aria-hidden="true">
          <img className={`brush-sun brush-painted-blue ${slug === "archive" || slug === "contributions" ? "" : "brush-sun-round"}`} src={slug === "archive" ? "/images/brush/brush-oval.webp" : slug === "contributions" ? "/images/brush/brush-crescent.webp" : "/images/brush/blue-sun.webp"} width={1254} height={1254} alt="" />
          {slug === "about" ? <img className="brush-page-portrait" src="/tna.webp" width={1024} height={1295} alt="" /> :
            <img className="brush-page-document" src={documentImg || "/images/tamil-culture-1952.jpg"} width={240} height={300} alt="" />}
        </div>
      )}
    </div>
  </section>
);
