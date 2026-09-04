import Link from 'next/link';
import AnnaArchiveHeader from '@/app/components/AnnaArchiveHeader';
import AnnaArchiveFooter from '@/app/components/AnnaArchiveFooter';
import { annaWritingsSubNav } from '@/app/lib/annaArchiveData';

export const metadata = {
  title: "அண்ணாவின் கடிதங்கள் (தம்பிக்கு...) · பேரறிஞர் அண்ணாவின் படைப்புகள்",
  description: "பேரறிஞர் அண்ணா அவர்கள் கழகத் தோழர்களுக்கும் தம்பிகளுக்கும் எழுதிய வரலாற்று மடல்களின் ஆவணத் தொகுப்பு.",
};

export default function KadithangalPage() {
  const lettersHighlights = [
    { title: "தம்பிக்கு எழுதிய முதல் மடல்", date: "1940s", note: "திராவிட நாடு இதழில் வெளிவந்த தொடக்க காலக் கொள்கை மடல்" },
    { title: "பொங்கல் நல்வாழ்த்துக் கடிதம்", date: "1950s", note: "தமிழர் திருநாள் வாழ்த்து மடல் தொகுப்பு" },
    { title: "சிறைச்சாலைக் கடிதங்கள்", date: "1953", note: "கல்லக்குடி மற்றும் இந்தி எதிர்ப்புப் போராட்டச் சிறைக் குறிப்புகள்" },
    { title: "மாநில சுயாட்சி விளக்க மடல்", date: "1960s", note: "மத்திய-மாநில அரசுகளின் அதிகாரப் பகிர்வு குறித்த ஆவண மடல்" },
    { title: "உலகத் தமிழ் மாநாட்டு அழைப்பு மடல்", date: "1967", note: "இரண்டாம் உலகத் தமிழ் மாநாட்டிற்கான வழிகாட்டல்" },
    { title: "முதலமைச்சர் பொறுப்பேற்ற பின் எழுதிய மடல்", date: "1967", note: "ஆட்சிப் பொறுப்பில் மக்கள் நலன் குறித்த மடல்" },
  ];

  return (
    <div className="site-shell anna-theme">
      <AnnaArchiveHeader activePillar="writings" />

      <main id="main" className="anna-main-content">
        <div className="anna-container">
          <nav className="anna-subtabs-nav" aria-label="எழுத்து வடிவங்கள்">
            <ul className="anna-subtabs-list" role="list">
              {annaWritingsSubNav.map((sub) => {
                const isActive = sub.id === 'letters';
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
              <span className="section-label">எழுத்துப் பிரிவு · Epistolary Literature</span>
              <h1 className="anna-register-title">
                பேரறிஞர் அண்ணாவின் &lsquo;தம்பிக்கு&rsquo; கடிதங்கள்
              </h1>
              <p className="anna-register-lead">
                திராவிட நாடு, காஞ்சி மற்றும் இதழ்களில் அண்ணா அவர்கள் &ldquo;தம்பிக்கு...&rdquo; என்ற மகுடமிட்டு எழுதிய வரலாற்றுச் சிறப்புமிக்க 120-க்கும் மேற்பட்ட அரசியல், இலக்கியக் கடிதங்களின் ஆவணம்.
              </p>
            </div>

            <div className="anna-quick-actions">
              <Link href="/annavin_katturaigal" className="button button-primary">
                📖 கட்டுரைகள் பதிவேடு (1,443)
              </Link>
            </div>
          </header>

          <div className="anna-showcase-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            {lettersHighlights.map((letItem, i) => (
              <article key={i} className="anna-collection-card">
                <div className="anna-card-header">
                  <div className="anna-card-badge-row">
                    <span className="anna-badge">கடித ஆவணம்</span>
                    <span className="anna-card-eng">{letItem.date}</span>
                  </div>
                  <h2 className="anna-card-title" style={{ fontSize: '1.25rem' }}>
                    {letItem.title}
                  </h2>
                  <p className="anna-card-desc">{letItem.note}</p>
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
