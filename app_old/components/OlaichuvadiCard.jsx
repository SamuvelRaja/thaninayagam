import { KolamMedallion } from "@/app/components/Ornaments";

export default function OlaichuvadiCard({ lang = "ta" }) {
  const isTa = lang === "ta";
  const docSlug = "landscape-and-poetry";
  const readUrl = isTa
    ? `/archive/documents/${docSlug}/`
    : `/en/archive/documents/${docSlug}/`;

  return (
    <div className="olaichuvadi-showcase">
      <div className="olaichuvadi-card">
        <div className="olaichuvadi-spine" aria-hidden="true">
          <span className="olaichuvadi-hole left" />
          <span className="olaichuvadi-cord" />
          <span className="olaichuvadi-hole right" />
        </div>

        <div className="olaichuvadi-content">
          <div className="olaichuvadi-header">
            <span className="olaichuvadi-tag">
              {isTa ? "தலையாய ஆய்வு நூல் • 1966" : "Seminal Masterpiece • 1966"}
            </span>
            <div className="olaichuvadi-meta-right">
              <span className="olaichuvadi-source">
                {isTa ? "முழு உரை வடிவம்" : "Complete Text"}
              </span>
            </div>
          </div>

          <div className="olaichuvadi-title-block">
            <h3 className="olaichuvadi-title">
              Landscape and Poetry
            </h3>
            <p className="olaichuvadi-subtitle">
              {isTa
                ? "சங்க இலக்கியத்தில் இயற்கைப் பின்னணி — செவ்வியல் கவிதையியல் ஆய்வு"
                : "A Study of Nature in Classical Tamil Poetry"}
            </p>
          </div>

          <div className="olaichuvadi-quote-box">
            <div className="olaichuvadi-divider" aria-hidden="true">
              <span className="olaichuvadi-divider-line" />
              <KolamMedallion className="olaichuvadi-medallion" />
              <span className="olaichuvadi-divider-line" />
            </div>
            <blockquote className="olaichuvadi-quote">
              <p>
                {isTa
                  ? "“பண்டைத் தமிழர்களுக்கு இயற்கை என்பது வெறும் அலங்காரப் பின்னணி அல்ல; அது மனித உள்ளுணர்வுகளையும், அன்பையும், வீரத்தையும், அறத்தையும் பிரதிபலிக்கும் ஓர் உயிர்ப்புள்ள ஒழுக்கம்.”"
                  : "“To the ancient Tamils, nature was no mere decorative backdrop; it was an intimate, living presence that mirrored the deepest chambers of human love, duty, and universal kinship.”"}
              </p>
            </blockquote>
          </div>

          <div className="olaichuvadi-chapters">
            <span className="olaichuvadi-chap-label">
              {isTa ? "முக்கிய அத்தியாயங்கள்:" : "Key Chapters:"}
            </span>
            <ul className="olaichuvadi-chap-list">
              <li>{isTa ? "I. நிலப்பின்னணி (The Landscape)" : "I. The Landscape"}</li>
              <li>{isTa ? "II. பருவங்களும் நேரமும் (Muthal-porul)" : "II. Space & Time"}</li>
              <li>{isTa ? "III. கருப்பொருளும் உயிரினங்களும்" : "III. Flora & Fauna"}</li>
              <li>{isTa ? "IV. உள்ளுணர்வும் இயற்கையும் (Uri-porul)" : "IV. Human Emotion"}</li>
            </ul>
          </div>

          <div className="olaichuvadi-actions">
            <a href={readUrl} className="button button-primary olaichuvadi-btn-primary">
              {isTa ? "நூலை முழுமையாக வாசிக்க" : "Read the Complete Book"}
            </a>
            <a href={`${readUrl}#document-meta`} className="button button-secondary">
              {isTa ? "நூற்பதிவு & மூலங்கள்" : "Source & Bibliographic Record"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
