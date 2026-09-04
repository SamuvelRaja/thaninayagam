import { navItems } from "@/app/lib/data";
import { navItemsTa } from "@/app/lib/data.ta";

export default function SiteFooter({ lang = "ta" }) {
  const pages = lang === "en" ? navItems : navItemsTa;
  const homeHref = lang === "en" ? "/en" : "/";
  const homeLabel = lang === "ta" ? "முகப்பு" : "Home";

  const copy =
    lang === "ta"
      ? {
          title: "தனிநாயகம் அடிகளார் ஆவணகம்",
          blurb:
            "அருள்திரு. முனைவர் சேவியர் தனிநாயகம் அடிகளாரின் வாழ்வு மற்றும் பணிகளுக்கான ஆவண அறிமுகம்.",
          nav: "அடிக்குறிப்பு வழிசெலுத்தல்",
          note: "வரலாற்றுத் தரவுகள் அவற்றின் மூலங்களோடு இணைக்கப்பட்டுள்ளன. இங்குப் பயன்படுத்தப்பட்டுள்ள படங்கள் பொது உரிமைப் பரப்பில் உள்ளவை அல்லது கிரியேட்டிவ் காமன்ஸ் உரிமத்தின்கீழ் பெறப்பட்டவை.",
          top: "மேலே செல்க",
          explore: "தளப் பகுதிகள்",
        }
      : {
          title: "Thani Nayagam Digital Archive",
          blurb:
            "A sourced digital introduction to the life and work of Rev. Dr. Xavier S. Thani Nayagam Adigal.",
          nav: "Footer",
          note: "Historical claims are linked to their sources. Images are public-domain documents or Creative Commons photographs with named creators.",
          top: "Back to main content",
          explore: "Site sections",
        };

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <p className="footer-tamil" lang="ta">
            தனிநாயகம் அடிகளார்
          </p>
          <p className="footer-title">{copy.title}</p>
          <p className="footer-blurb">{copy.blurb}</p>
        </div>

        <nav className="footer-sitemap" aria-label={copy.nav}>
          <p className="footer-sitemap-label">{copy.explore}</p>
          <ul className="footer-nav">
            <li>
              <a href={homeHref}>{homeLabel}</a>
            </li>
            {pages.map((item) => (
              <li key={item.href}>
                <a
                  href={
                    lang === "en" ? `/en${item.href}` : item.href
                  }
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-meta">
          <p className="source-note">{copy.note}</p>
          <a className="back-to-top" href="#main">
            {copy.top}
          </a>
        </div>
      </div>
    </footer>
  );
}
