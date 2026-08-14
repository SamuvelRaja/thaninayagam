import Link from 'next/link';
import AnnaArchiveHeader from '@/app/components/AnnaArchiveHeader';
import AnnaArchiveFooter from '@/app/components/AnnaArchiveFooter';
import { annaWritingsSubNav } from '@/app/lib/annaArchiveData';

export const metadata = {
  title: "அண்ணாவின் நாடகங்கள் · பேரறிஞர் அண்ணாவின் படைப்புகள்",
  description: "பேரறிஞர் அண்ணாவின் வேலைக்காரி, ஓர் இரவு, நீதிதேவன் மயக்கம் உள்ளிட்ட வரலாற்று நாடகங்களின் ஆவணத் தொகுப்பு.",
};

export default function NadagangalPage() {
  const dramasHighlights = [
    { title: "வேலைக்காரி", year: "1940s", note: "தமிழ்த் திரையுலகிலும் மேடையிலும் பெரும் புரட்சியை ஏற்படுத்திய சமூக நாடகம்" },
    { title: "ஓர் இரவு", year: "1940s", note: "ஒரே இரவில் நடைபெறும் சம்பவங்களை அடிப்படையாகக் கொண்ட உன்னத நாடகப் படைப்பு" },
    { title: "நீதிதேவன் மயக்கம்", year: "1940s", note: "சமூக அநீதிகளை நீதிமன்றப் பின்னணியில் தோலுரித்துக் காட்டிய நாடகம்" },
    { title: "சந்திரோதயம்", year: "1940s", note: "பகுத்தறிவுச் சிந்தனைகளை விதைத்த வரலாற்று நாடகம்" },
    { title: "சிவாஜி கண்ட இந்து ராஜ்யம்", year: "1945", note: "நடிகர் திலகம் சிவாஜி கணேசன் அவர்களுக்குப் புகழீட்டித் தந்த வரலாற்று நாடகம்" },
    { title: "நால்வர்", year: "1950s", note: "சமூக ஒற்றுமையை வலியுறுத்தும் குடும்ப நாடகம்" },
    { title: "சொர்க்கத்தில் நரகம்", year: "1950s", note: "அங்கதச் சுவை ததும்பும் சீர்திருத்த நாடகம்" },
  ];

  return (
    <div className="site-shell anna-theme">
      <AnnaArchiveHeader activePillar="writings" />

      <main id="main" className="anna-main-content">
        <div className="anna-container">
          <nav className="anna-subtabs-nav" aria-label="எழுத்து வடிவங்கள்">
            <ul className="anna-subtabs-list" role="list">
              {annaWritingsSubNav.map((sub) => {
                const isActive = sub.id === 'dramas';
                return (
                  <li key={sub.id}>
                    <Link
                      href={sub.href}
                      className={`anna-subtab-pill ${isActive ? 'is-active' : ''}`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <span className="anna-subtab-label">{sub.label}</span>
                      <span className="anna-subtab-count">{sub.count}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <header className="anna-register-header">
            <div className="anna-register-title-block">
              <span className="section-label">எழுத்துப் பிரிவு · Stage Plays & Dramas</span>
              <h1 className="anna-register-title">
                பேரறிஞர் அண்ணாவின் நாடகக் களஞ்சியம்
              </h1>
              <p className="anna-register-lead">
                வேலைக்காரி, ஓர் இரவு, நீதிதேவன் மயக்கம் உள்ளிட்ட தமிழ் மேடை நாடக வரலாற்றைத் திருத்தி எழுதிய 25-க்கும் மேற்பட்ட நாடகப் படைப்புகளின் ஆவணம்.
              </p>
            </div>

            <div className="anna-quick-actions">
              <Link href="/annavin_katturaigal" className="button button-primary">
                📖 கட்டுரைகள் பதிவேடு (1,443)
              </Link>
            </div>
          </header>

          <div className="anna-showcase-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            {dramasHighlights.map((d, i) => (
              <article key={i} className="anna-collection-card">
                <div className="anna-card-header">
                  <div className="anna-card-badge-row">
                    <span className="anna-badge">நாடகம்</span>
                    <span className="anna-card-eng">{d.year}</span>
                  </div>
                  <h2 className="anna-card-title" style={{ fontSize: '1.25rem' }}>
                    {d.title}
                  </h2>
                  <p className="anna-card-desc">{d.note}</p>
                </div>
                <div className="anna-card-footer">
                  <span className="anna-card-status">ஆவணப் பதிவு செய்யப்பட்டுள்ளது</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <AnnaArchiveFooter />
    </div>
  );
}
