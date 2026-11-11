import Link from "next/link";

const landmarks = [
  { year: "1913", ta: "காரம்பொனில் பிறப்பு", en: "Born in Karampon" },
  { year: "1952", ta: "Tamil Culture இதழ்", en: "Founded Tamil Culture" },
  { year: "1964", ta: "IATR உருவாக்கம்", en: "Co-founded IATR" },
  { year: "1966", ta: "முதல் உலகத் தமிழ் மாநாடு", en: "First world Tamil conference" },
  { year: "1980", ta: "யாழ்ப்பாணத்தில் மறைவு", en: "A life completed in Jaffna" },
];

export function LifeLandmarks({ lang }: { lang: "ta" | "en" }) {
  return <nav className="life-landmarks" aria-label={lang === "ta" ? "வாழ்வின் முக்கிய மைல்கற்கள்" : "Key life landmarks"}><div className="container">{landmarks.map((item) => <Link href={`${lang === "en" ? "/en" : ""}/about/#milestone-${item.year}`} key={item.year} aria-label={`${item.year} · ${item[lang]}`}><span>{item.year}</span><span>{item[lang]}</span></Link>)}</div></nav>;
}
