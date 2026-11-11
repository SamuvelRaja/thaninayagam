import Link from "next/link";

export function PageContents({ lang, page }: { lang: "ta" | "en"; page: "about" | "contributions" }) {
  const ta = lang === "ta";
  const items = page === "about" ? [
    { id: "biography", label: ta ? "வாழ்க்கை வரலாறு" : "Biography" },
    { id: "timeline", label: ta ? "வரலாற்றுக் காலக்கோடு" : "Life timeline" },
  ] : [
    { id: "contributions", label: ta ? "ஆய்வுப் பங்களிப்புகள்" : "Scholarly contributions" },
    { id: "plates", label: ta ? "ஆவணப் படங்கள்" : "Archival plates" },
    { id: "register", label: ta ? "படைப்புப் பட்டியல்" : "Publication register" },
  ];
  return <nav className="page-contents" aria-label={ta ? "இப்பக்கத்தில்" : "On this page"}><div className="container"><span>{ta ? "இப்பக்கத்தில்" : "On this page"}</span>{items.map((item) => <Link key={item.id} href={`#${item.id}`}>{item.label}<span aria-hidden="true">↓</span></Link>)}</div></nav>;
}
