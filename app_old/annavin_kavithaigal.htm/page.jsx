import Link from 'next/link';
import AnnaArchiveHeader from '@/app/components/AnnaArchiveHeader';
import AnnaArchiveFooter from '@/app/components/AnnaArchiveFooter';
import { annaWritingsSubNav } from '@/app/lib/annaArchiveData';

export const metadata = {
  title: "அண்ணாவின் கவிதைகள் & குறுநாவல்கள் · பேரறிஞர் அண்ணாவின் படைப்புகள்",
  description: "பேரறிஞர் அண்ணாவின் கொள்கைப் பாடல்கள், கவிதைகள் மற்றும் குறுநாவல்களின் ஆவணத் தொகுப்பு.",
};

export default function KavithaigalPage() {
  const poetryHighlights = [
    { title: "கொள்கைப் பிரகடனம்", note: "திராவிட இயக்கத் தொடக்கக் கால உணர்ச்சிப் பாக்கள்" },
    { title: "எழுக திராவிடா!", note: "இளைஞர்களுக்கு விழிப்புணர்வூட்டும் கவிதை" },
    { title: "தமிழ்த்தாய் வாழ்த்துப் பா", note: "தமிழ் மொழியின் தொன்மையும் மாண்பும் போற்றும் வரிகள்" },
    { title: "பொங்கல் புதுப்பொலிவு", note: "உழவர் திருநாள் பண்பாட்டுக் கவிதை" },
    { title: "வீர வரலாறு", note: "தன்னலமற்ற தியாகிகளைப் போற்றும் பாட்டு" },
    { title: "மறுமலர்ச்சிப் பாடல்", note: "சமூக சீர்திருத்தக் கொள்கைப் பாடல்" },
  ];

  return (
    <div className="site-shell anna-theme">
      <AnnaArchiveHeader activePillar="writings" />

      <main id="main" className="anna-main-content">
        <div className="anna-container">
          <nav className="anna-subtabs-nav" aria-label="எழுத்து வடிவங்கள்">
            <ul className="anna-subtabs-list" role="list">
              {annaWritingsSubNav.map((sub) => {
                const isActive = sub.id === 'short_novels';
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
              <span className="section-label">எழுத்துப் பிரிவு · Poetry & Novellas</span>
              <h1 className="anna-register-title">
                பேரறிஞர் அண்ணாவின் கவிதைகள் & குறுநாவல்கள்
              </h1>
              <p className="anna-register-lead">
                கொள்கைப் பிரகடனம் மற்றும் எழுச்சிமிகு கவிதைகள், குறுநாவல்களின் முழுமையான ஆவணப் பதிவேடு.
              </p>
            </div>

            <div className="anna-quick-actions">
              <Link href="/annavin_katturaigal" className="button button-primary">
                📖 கட்டுரைகள் பதிவேடு (1,443)
              </Link>
            </div>
          </header>

          <div className="anna-showcase-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            {poetryHighlights.map((p, i) => (
              <article key={i} className="anna-collection-card">
                <div className="anna-card-header">
                  <div className="anna-card-badge-row">
                    <span className="anna-badge">கவிதை ஆவணம்</span>
                  </div>
                  <h2 className="anna-card-title" style={{ fontSize: '1.25rem' }}>
                    {p.title}
                  </h2>
                  <p className="anna-card-desc">{p.note}</p>
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
