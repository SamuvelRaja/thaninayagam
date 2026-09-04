import React from "react";
import Link from "next/link";
import { STRINGS, CATS } from "@/lib/data";

interface FooterProps {
  lang: "ta" | "en";
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const S = STRINGS[lang];
  const pfx = lang === "en" ? "/en" : "";

  return (
    <footer className="colophon">
      <div className="container colophon-grid">
        <div className="statement">
          <span className="seal" aria-hidden="true">ஃ</span>
          <h4>
            {lang === "en"
              ? "Father Thani Nayagam Digital Archive"
              : "தனிநாயக அடிகள் எண்மிய ஆவணகம்"}
          </h4>
          <p>{S.dedication}</p>
          <p className="alt">{S.dedicationAlt}</p>
        </div>
        <div>
          <h4>{lang === "en" ? "Navigation" : "பக்கங்கள்"}</h4>
          <ul>
            <li><Link href={`${pfx}/`}>{S.nav[0]}</Link></li>
            <li><Link href={`${pfx}/about/`}>{S.nav[1]}</Link></li>
            <li><Link href={`${pfx}/contributions/`}>{S.nav[2]}</Link></li>
            <li><Link href={`${pfx}/archive/`}>{S.nav[3]}</Link></li>
            <li><Link href={`${pfx}/sponsors/`}>{S.nav[4]}</Link></li>
          </ul>
        </div>
        <div>
          <h4>{lang === "en" ? "Archival Holdings" : "ஆவணப் பிரிவுகள்"}</h4>
          <ul>
            {CATS.map((c) => (
              <li key={c.slug}>
                <Link href={`${pfx}/archive/?cat=${c.slug}`}>
                  {lang === "en" ? c.en : c.ta}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="colophon-bottom">
        <div className="container">
          <p>
            © 2026{" "}
            {lang === "en"
              ? "Father Thani Nayagam Memorial Open Archive · CC BY-NC 4.0"
              : "தனிநாயக அடிகள் நினைவுத் திறந்தவெளி ஆவணகம் · CC BY-NC 4.0"}
          </p>
        </div>
      </div>
    </footer>
  );
};
