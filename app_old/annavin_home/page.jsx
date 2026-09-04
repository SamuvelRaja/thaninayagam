import Link from 'next/link';
import AnnaArchiveHeader from '@/app/components/AnnaArchiveHeader';
import AnnaArchiveFooter from '@/app/components/AnnaArchiveFooter';
import { annaCollectionsShowcase, annaTribute, allEssaysData } from '@/app/lib/annaArchiveData';

export const metadata = {
  title: "முகப்பு · பேரறிஞர் அண்ணாவின் படைப்புகள் (Digital Archive)",
  description: "பேரறிஞர் அண்ணாவின் எழுத்துகள், கட்டுரைகள், கடிதங்கள், உரைகள், வரலாற்றுப் புகைப்படங்கள் மற்றும் ஓவிய ஆவணங்களின் முழுமையான எண்ணிம ஆவணகம்.",
};

export default function AnnaHomePage() {
  // 15 Parts overview for the register launcher
  const partsSummary = Array.from({ length: 15 }, (_, i) => {
    const partNum = i + 1;
    const partEssays = allEssaysData.filter(e => e.part === partNum);
    return {
      part: partNum,
      count: partEssays.length,
      startNo: (partNum - 1) * 100 + 1,
      endNo: Math.min(partNum * 100, allEssaysData.length),
    };
  });

  return (
    <div className="site-shell anna-theme">
      <AnnaArchiveHeader activePillar="home" />

      <main id="main" className="anna-main-content">
        <div className="anna-container">

          {/* Hero Section */}
          <section className="anna-hero" aria-labelledby="hero-title">
            <div className="anna-hero-layout">
              <div className="anna-hero-text">
                <div className="anna-hero-badge-row">
                  <span className="anna-badge">பேரறிஞர் சி. என். அண்ணாதுரை (1909–1969)</span>
                </div>
                <h1 id="hero-title" className="anna-hero-title">
                  பேரறிஞர் அண்ணாவின் படைப்புக் களஞ்சியம்
                </h1>
                <p className="anna-hero-lead">
                  தமிழ் உரைநடையின் சிற்பியும் முன்னாள் முதலமைச்சருமான பேரறிஞர் அண்ணாவின் 1,440-க்கும் மேற்பட்ட ஆய்வுக் கட்டுரைகள், கடிதங்கள், உரைகள் மற்றும் காட்சி ஆவணங்களின் முழுமையான எண்ணிம ஆவணகம்.
                </p>
                <div className="anna-hero-actions">
                  <Link href="/annavin_katturaigal" className="button button-primary button-large">
                    📖 கட்டுரைகள் பதிவேடு (1,443)
                  </Link>
                  <a href="#showcase" className="button button-secondary button-large">
                    🏛️ 4 முதன்மைக் களஞ்சியங்கள்
                  </a>
                </div>
              </div>

              {/* Tribute Card */}
              <aside className="anna-tribute-card" aria-label="Archive Dedication">
                <div className="anna-tribute-header">
                  <div className="anna-tribute-avatar-box">
                    <span className="anna-tribute-icon" aria-hidden="true">🏛️</span>
                  </div>
                  <div>
                    <h2 className="anna-tribute-name">{annaTribute.name}</h2>
                    <p className="anna-tribute-title">{annaTribute.title}</p>
                  </div>
                </div>
                <blockquote className="anna-tribute-body">
                  <p>{annaTribute.summary}</p>
                </blockquote>
                <div className="anna-tribute-footer">
                  <Link href="/nandrigal.htm" className="anna-tribute-readmore">
                    நன்றிகள் & அர்ப்பணிப்பு பக்கத்தைக் காண்க →
                  </Link>
                </div>
              </aside>
            </div>
          </section>

          {/* 4 Main Collection Showcase Panels (Original 4 Columns Recreated) */}
          <section id="showcase" className="anna-showcase-section" aria-labelledby="showcase-title">
            <header className="anna-section-header">
              <p className="section-label">ஆவணகத் தொகுப்புகள்</p>
              <h2 id="showcase-title" className="anna-section-title">
                4 முதன்மைக் களஞ்சியப் பிரிவுகள்
              </h2>
              <p className="anna-section-subtitle">
                அசல் ஆவணகத்தின் நான்கு தூண்களான எழுத்து, பேச்சு, புகைப்படம், ஓவியம் சார்ந்த ஆவணங்கள்:
              </p>
            </header>

            <div className="anna-showcase-grid">
              {annaCollectionsShowcase.map((col) => (
                <article key={col.id} id={col.id} className="anna-collection-card" aria-labelledby={`col-title-${col.id}`}>
                  <div className="anna-card-header">
                    <span className="anna-card-badge">{col.badge}</span>
                    <h3 id={`col-title-${col.id}`} className="anna-card-title">
                      <Link href={col.targetHref || '#'} className="anna-card-title-link">
                        {col.title}
                      </Link>
                    </h3>
                    <p className="anna-card-desc">{col.description}</p>
                  </div>

                  <ul className="anna-card-item-list" role="list">
                    {col.items.map((item, idx) => (
                      <li key={idx} className="anna-card-item">
                        <Link href={item.href} className="anna-card-item-link">
                          <span className="anna-card-item-name">{item.title}</span>
                          <span className="anna-card-item-note">{item.note}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <div className="anna-card-footer">
                    <Link href={col.targetHref || '#'} className="anna-card-action">
                      முழுப் பகுதியைத் திறக்க →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* 15 Chronological Parts Direct Launcher */}
          <section className="anna-parts-overview-section" aria-labelledby="parts-overview-title">
            <header className="anna-section-header">
              <p className="section-label">காலவரிசைப் பதிவேடு</p>
              <h2 id="parts-overview-title" className="anna-section-title">
                15 கட்டுரைப் பகுதிகள் — நேரடி விரைவுத் தேர்வு
              </h2>
              <p className="anna-section-subtitle">
                1,443 ஆய்வுக் கட்டுரைகளும் 100 கட்டுரைகள் கொண்ட 15 சீரான தொகுதிகளாகப் பிரிக்கப்பட்டுள்ளன:
              </p>
            </header>

            <div className="anna-parts-matrix-grid">
              {partsSummary.map((p) => (
                <Link
                  key={p.part}
                  href={`/annavin_katturaigal?part=${p.part}`}
                  className="anna-part-matrix-card"
                  aria-label={`பகுதி ${p.part}, கட்டுரைகள் ${p.startNo} முதல் ${p.endNo}`}
                >
                  <div className="anna-part-matrix-top">
                    <span className="anna-part-matrix-num">பகுதி {p.part}</span>
                    <span className="anna-part-matrix-count">{p.count} கட்டுரைகள்</span>
                  </div>
                  <div className="anna-part-matrix-range">
                    #{p.startNo} — #{p.endNo}
                  </div>
                  <div className="anna-part-matrix-cta">
                    பதிவேட்டில் திறக்க →
                  </div>
                </Link>
              ))}
            </div>
          </section>

        </div>
      </main>

      <AnnaArchiveFooter />
    </div>
  );
}
