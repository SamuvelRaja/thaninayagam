import Link from 'next/link';
import AnnaArchiveHeader from '@/app/components/AnnaArchiveHeader';
import AnnaArchiveFooter from '@/app/components/AnnaArchiveFooter';
import { annaWritingsSubNav } from '@/app/lib/annaArchiveData';

export const metadata = {
  title: "அண்ணாவின் சிறுகதைகள் · பேரறிஞர் அண்ணாவின் படைப்புகள்",
  description: "பேரறிஞர் அண்ணாவின் 80-க்கும் மேற்பட்ட சமூக விழிப்புணர்வூட்டும் சிறுகதைகளின் ஆவணக் காப்பகம்.",
};

export default function SirukathaigalPage() {
  const storiesHighlights = [
    { title: "செவ்வாழை", date: "1940s", note: "ஏழை எளிய விவசாயிகளின் வாழ்வியலை உணர்த்திய உலகப் புகழ்பெற்ற சிறுகதை" },
    { title: "சுமைதாங்கி", date: "1940s", note: "சமூகத்தின் சுமைகளைத் தாங்கும் மனிதர்களைப் பற்றிய உருக்கமான பதிவு" },
    { title: "ராஜாதி ராஜா", date: "1940s", note: "அதிகார மமதை கொண்டோரின் வீழ்ச்சியை விவரிக்கும் கதை" },
    { title: "கபோதிபுரக் காதல்", date: "1950s", note: "மூடநம்பிக்கைகளைச் சாடும் அங்கதச் சிறுகதை" },
    { title: "பிடி அரிசி", date: "1950s", note: "சமூகப் பசி மற்றும் உழைப்பாளிகளின் தியாகம்" },
    { title: "குமஸ்தாவின் பெண்", date: "1940s", note: "மத்தியதரக் குடும்பப் பெண்களின் துயரங்கள்" },
  ];

  return (
    <div className="site-shell anna-theme">
      <AnnaArchiveHeader activePillar="writings" />

      <main id="main" className="anna-main-content">
        <div className="anna-container">
          <nav className="anna-subtabs-nav" aria-label="எழுத்து வடிவங்கள்">
            <ul className="anna-subtabs-list" role="list">
              {annaWritingsSubNav.map((sub) => {
                const isActive = sub.id === 'short_stories';
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
              <span className="section-label">எழுத்துப் பிரிவு · Short Stories</span>
              <h1 className="anna-register-title">
                பேரறிஞர் அண்ணாவின் சிறுகதைக் களஞ்சியம்
              </h1>
              <p className="anna-register-lead">
                சமூக அநீதிகளைச் சாடி, விழிப்புணர்வை ஏற்படுத்திய செவ்வாழை உள்ளிட்ட 80-க்கும் மேற்பட்ட காலத்தால் அழியாத சிறுகதைகளின் பதிவேடு.
              </p>
            </div>

            <div className="anna-quick-actions">
              <Link href="/annavin_katturaigal" className="button button-primary">
                📖 கட்டுரைகள் பதிவேடு (1,443)
              </Link>
            </div>
          </header>

          <div className="anna-showcase-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            {storiesHighlights.map((s, i) => (
              <article key={i} className="anna-collection-card">
                <div className="anna-card-header">
                  <div className="anna-card-badge-row">
                    <span className="anna-badge">சிறுகதை</span>
                    <span className="anna-card-eng">{s.date}</span>
                  </div>
                  <h2 className="anna-card-title" style={{ fontSize: '1.25rem' }}>
                    {s.title}
                  </h2>
                  <p className="anna-card-desc">{s.note}</p>
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
