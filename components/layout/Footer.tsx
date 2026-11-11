import React from "react";
import { archiveNavigation, lifeNavigation } from "@/lib/navigation";
import Link from "next/link";
import { STRINGS } from "@/lib/data";

interface FooterProps { lang: "ta" | "en"; }
export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const S = STRINGS[lang];
  const pfx = lang === "en" ? "/en" : "";
  return (
    <footer className="colophon living-footer">
      <div className="container colophon-grid">
        <div className="statement">
          <Link className="brand footer-brand" href={`${pfx}/`}>
            <svg className="seal archive-mark" width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M8 8h24v24H8zM14 12v16M26 12v16M14 20h12" /><circle cx="20" cy="14" r="2" /><circle cx="20" cy="26" r="2" /></svg>
            <span className="brand-text">
              <span className="brand-name">{lang === "ta" ? "தனிநாயகம் அடிகள்" : "Thani Nayagam"}</span>
              <span className="brand-sub">{lang === "ta" ? "ஆவணகம் · 1913–1980" : "Archive · 1913–1980"}</span>
            </span>
          </Link>
          <p>{S.dedication}</p><p className="alt">{S.dedicationAlt}</p>
        </div>
        <nav aria-label={lang === "ta" ? "ஆவணகப் பக்கங்கள்" : "Archive pages"}>
          <h4>{lang === "en" ? "Explore the archive" : "ஆவணகத்தை ஆராய்க"}</h4>
          <ul>
            <li><Link href={`${pfx}/`}>{S.nav[0]}</Link></li>
            <li><Link href={`${pfx}/archive/`}>{lang === "ta" ? "அனைத்து ஆவணங்கள்" : "All documents"}</Link></li>
            {lifeNavigation(lang).links.map((link) => <li key={link.href}><Link href={link.href}>{link.label}</Link></li>)}
          </ul>
        </nav>
        <nav aria-label={lang === "ta" ? "ஆவணப் பிரிவுகள்" : "Archival holdings"}>
          <h4>{lang === "en" ? "Archival Holdings" : "ஆவணப் பிரிவுகள்"}</h4>
          <ul>{archiveNavigation(lang).map((field) => <li key={field.key}><Link href={field.href}>{field.label}</Link></li>)}</ul>
        </nav>
      </div>
      <div className="colophon-bottom"><div className="container"><p>© 2026 {lang === "en" ? "Father Thani Nayagam Memorial Open Archive · CC BY-NC 4.0" : "தனிநாயக அடிகள் நினைவுத் திறந்தவெளி ஆவணகம் · CC BY-NC 4.0"}</p></div></div>
    </footer>
  );
};
