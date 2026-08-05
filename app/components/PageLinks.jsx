import { navItems } from "@/app/lib/data";
import { navItemsTa } from "@/app/lib/data.ta";
import { KolamCorners } from "./Ornaments";

export default function PageLinks({ current, lang = "en" }) {
  const items = lang === "ta" ? navItemsTa : navItems;
  const links = items.filter(
    (item) => item.href !== "/" && item.href !== current,
  );

  return (
    <nav
      className="page-links kolam-frame"
      aria-label={
        lang === "ta"
          ? "இந்த ஆவணகத்தின் தொடர்புடைய பக்கங்கள்"
          : "Related pages in this archive"
      }
    >
      <KolamCorners />
      <span className="card-script" lang="ta" aria-hidden="true">
        தமிழ்
      </span>
      <h2 className="page-links-title">
        {lang === "ta" ? "தொடர்ந்து வாசிக்க" : "Continue reading"}
      </h2>
      <p className="page-links-intro">
        {lang === "ta"
          ? "இந்த ஆவணகத்தின் ஒவ்வொரு பகுதியும் முகப்புப் பக்கத்திலிருந்து இணைக்கப்பட்டுள்ளது. மெனுவைத் தேடாமல் தலைப்புகளுக்கு இடையே செல்ல இந்தப் பாதைகளைப் பயன்படுத்துங்கள்."
          : "Every section of this archive is linked from the home page. Use these paths to move between topics without searching the menu."}
      </p>
      <ul className="page-links-list">
        {links.map((item) => (
          <li key={item.href}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
        <li>
          <a href="/">{lang === "ta" ? "முகப்பு" : "Home"}</a>
        </li>
      </ul>
    </nav>
  );
}
