import { KolamDivider } from "./Ornaments";
import { navItems } from "@/app/lib/data";
import { navItemsTa } from "@/app/lib/data.ta";

export default function SiteFooter({ lang = "ta" }) {
  const items = lang === "en" ? navItems : navItemsTa;
  const adjustedItems = items.map((item) => ({
    ...item,
    href: lang === "en" ? `/en${item.href === "/" ? "" : item.href}` : item.href,
  }));

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <KolamDivider className="footer-divider" />
        <div>
          <p className="footer-tamil" lang="ta">
            தனிநாயகம் அடிகளார்
          </p>
          <p className="footer-title">
            {lang === "ta"
              ? "தனிநாயகம் அடிகளார் ஆவணகம்"
              : "Thani Nayagam Digital Archive"}
          </p>
          <p>
            {lang === "en"
              ? "A sourced digital introduction to the life and work of Rev. Dr. Xavier S. Thani Nayagam Adigal."
              : "அருள்திரு. முனைவர் சேவியர் தனிநாயகம் அடிகளாரின் வாழ்வு மற்றும் பணிகளுக்கான ஆவண அறிமுகம்."}
          </p>
        </div>

        <nav aria-label={lang === "ta" ? "அடிக்குறிப்பு வழிசெலுத்தல்" : "Footer"}>
          <ul className="footer-nav">
            {adjustedItems
              .filter((i) => i.href !== "/" && i.href !== "/en")
              .map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
          </ul>
        </nav>

        <p className="source-note">
          {lang === "en"
            ? "Historical claims are linked to their sources. Images are public-domain documents or Creative Commons photographs with named creators, and present-day views are captioned as such. No decorative 3D models are used on this site."
            : "வரலாற்றுத் தரவுகள் அவற்றின் மூலங்களோடு இணைக்கப்பட்டுள்ளன. இங்குப் பயன்படுத்தப்பட்டுள்ள படங்கள் பொது உரிமைப் பரப்பில் உள்ளவை அல்லது கிரியேட்டிவ் காமன்ஸ் உரிமத்தின்கீழ் பெறப்பட்டவை."}
        </p>

        <a className="back-to-top" href="#main">
          {lang === "en" ? "Back to main content" : "மேலே செல்க"}
        </a>
      </div>
    </footer>
  );
}
