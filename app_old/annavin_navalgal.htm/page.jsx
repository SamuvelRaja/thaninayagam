import Link from 'next/link';
import AnnaArchiveHeader from '@/app/components/AnnaArchiveHeader';
import AnnaArchiveFooter from '@/app/components/AnnaArchiveFooter';
import { annaWritingsSubNav } from '@/app/lib/annaArchiveData';

export const metadata = {
  title: "அண்ணாவின் நாவல்கள் · பேரறிஞர் அண்ணாவின் படைப்புகள்",
  description: "பேரறிஞர் அண்ணாவின் ரங்கோன் ராதா, பார்வதி பி.ஏ உள்ளிட்ட வரலாற்று நாவல்களின் ஆவணத் தொகுப்பு.",
};

export default function NavalgalPage() {
  const novelsHighlights = [
    { title: "ரங்கோன் ராதா", year: "1940s", note: "பர்மியத் தமிழர் வாழ்வியலும், பெண் விடுதலையும் பேசும் மாபெரும் சமூக நாவல்" },
    { title: "பார்வதி பி.ஏ.", year: "1940s", note: "பெண்கல்வியின் அவசியத்தையும் சமூகப் புரட்சியையும் வலியுறுத்திய நாவல்" },
    { title: "கலிங்கத்து ராணி", year: "1940s", note: "வரலாற்றுப் பின்னணியில் எழுதப்பட்ட புகழ்பெற்ற நெடுங்கதை" },
    { title: "குமரிக் கோட்டம்", year: "1950s", note: "தமிழர் வரலாற்றுப் பெருமைகளை விளக்கும் படைப்பு" },
    { title: "தசாவதாரம்", year: "1940s", note: "சமூக மாற்றங்களை அங்கதச் சுவையோடு வெளிப்படுத்திய நாவல்" },
    { title: "இலட்சிய வரலாறு", year: "1950s", note: "கொள்கை வீரர்களின் தியாகங்களைச் சித்தரிக்கும் நாவல்" },
  ];

  return (
    <div className="site-shell anna-theme">
      <AnnaArchiveHeader activePillar="writings" />

      <main id="main" className="anna-main-content">
        <div className="anna-container">
          <nav className="anna-subtabs-nav" aria-label="எழுத்து வடிவங்கள்">
            <ul className="anna-subtabs-list" role="list">
              {annaWritingsSubNav.map((sub) => {
                const isActive = sub.id === 'novels';
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
              <span className="section-label">எழுத்துப் பிரிவு · Novels & Fiction</span>
              <h1 className="anna-register-title">
                பேரறிஞர் அண்ணாவின் நாவல் களஞ்சியம்
              </h1>
              <p className="anna-register-lead">
                ரங்கோன் ராதா, பார்வதி பி.ஏ உள்ளிட்ட 15-க்கும் மேற்பட்ட சமூக, வரலாற்று நாவல்களின் ஆவணப் பதிவேடு.
              </p>
            </div>

            <div className="anna-quick-actions">
              <Link href="/annavin_katturaigal" className="button button-primary">
                📖 கட்டுரைகள் பதிவேடு (1,443)
              </Link>
            </div>
          </header>

          <div className="anna-showcase-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            {novelsHighlights.map((n, i) => (
              <article key={i} className="anna-collection-card">
                <div className="anna-card-header">
                  <div className="anna-card-badge-row">
                    <span className="anna-badge">நாவல்</span>
                    <span className="anna-card-eng">{n.year}</span>
                  </div>
                  <h2 className="anna-card-title" style={{ fontSize: '1.25rem' }}>
                    {n.title}
                  </h2>
                  <p className="anna-card-desc">{n.note}</p>
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
