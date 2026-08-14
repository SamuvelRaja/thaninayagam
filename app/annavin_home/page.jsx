import Link from 'next/link';
import AnnaArchiveHeader from '@/app/components/AnnaArchiveHeader';
import AnnaArchiveFooter from '@/app/components/AnnaArchiveFooter';
import { annaCollectionsShowcase, annaTribute, allEssaysData } from '@/app/lib/annaArchiveData';

export const metadata = {
  title: "முகப்பு · பேரறிஞர் அண்ணாவின் படைப்புகள் (Digital Archive)",
  description: "பேரறிஞர் அண்ணாவின் எழுத்துகள், கட்டுரைகள், கடிதங்கள், உரைகள், வரலாற்றுப் புகைப்படங்கள் மற்றும் ஓவிய ஆவணங்களின் முழுமையான எண்ணிம ஆவணகம்.",
};

export default function AnnaHomePage() {
  // Highlight 6 famous essays from the database
  const highlightSlugs = [1, 19, 39, 43, 66, 70];
  const highlightedEssays = allEssaysData.filter(e => highlightSlugs.includes(e.no));

  // 15 Parts overview for the register launcher
  const partsSummary = Array.from({ length: 15 }, (_, i) => {
    const partNum = i + 1;
    const partEssays = allEssaysData.filter(e => e.part === partNum);
    const firstYear = partEssays[0]?.date || '';
    const lastYear = partEssays[partEssays.length - 1]?.date || '';
    return {
      part: partNum,
      count: partEssays.length,
      startNo: (partNum - 1) * 100 + 1,
      endNo: Math.min(partNum * 100, allEssaysData.length),
      timeRange: firstYear && lastYear ? `${firstYear.split('-').pop()}–${lastYear.split('-').pop()}` : 'வரலாற்றுப் பகுதி'
    };
  });

  return (
    <div className="site-shell anna-theme">
      <AnnaArchiveHeader activePillar="home" />

      <main id="main" className="anna-main-content">
        {/* Hero Section */}
        <section className="anna-hero" aria-labelledby="hero-title">
          <div className="anna-container">
            <div className="anna-hero-layout">
              <div className="anna-hero-text">
                <div className="anna-hero-badge-row">
                  <span className="anna-badge">பேரறிஞர் சி. என். அண்ணாதுரை (1909–1969)</span>
                  <span className="anna-badge-gold">வரலாற்று ஆவணம்</span>
                </div>
                <h1 id="hero-title" className="anna-hero-title">
                  தமிழ் உரைநடையின் சிற்பி · பேரறிஞர் அண்ணாவின் படைப்புக் களஞ்சியம்
                </h1>
                <p className="anna-hero-lead">
                  தமிழ்நாட்டின் முன்னாள் முதலமைச்சரும், தலைசிறந்த எழுத்தாளரும், மேடைப் பேச்சாளருமான பேரறிஞர் அண்ணாவின் 1,440-க்கும் மேற்பட்ட ஆய்வுக் கட்டுரைகள், கடிதங்கள், நாடகங்கள், நாடாளுமன்ற உரைகள் மற்றும் அரிய காட்சி ஆவணங்களை நவீன அணுகல் வசதியுடன் (WCAG AAA Accessibility) வாசித்து ஆய்ந்திட உதவும் எண்ணிம ஆவணகம்.
                </p>
                <div className="anna-hero-actions">
                  <Link href="/annavin_katturaigal" className="button button-primary button-large">
                    📖 கட்டுரைகள் பதிவேடு (1,443)
                  </Link>
                  <a href="#showcase" className="button button-secondary button-large">
                    🏛️ தொகுப்புகளை உலாவுக
                  </a>
                  <Link href="/nandrigal.htm" className="button button-secondary button-large">
                    📜 அறக்கட்டளை அர்ப்பணிப்பு
                  </Link>
                </div>
              </div>

              {/* Tribute & Archivist Card (Preserving original home.htm structure) */}
              <aside className="anna-tribute-card" aria-label="Archive Dedication and Origin">
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
                  <p className="anna-tribute-note">{annaTribute.trustNote}</p>
                  <Link href="/nandrigal.htm" className="anna-tribute-readmore">
                    நன்றிகள் பக்கத்தை வாசிக்க →
                  </Link>
                </div>
              </aside>
            </div>

            {/* Archive Quick Stats Bar */}
            <div className="anna-stats-strip" aria-label="ஆவணக புள்ளிவிவரங்கள் (Archive Statistics)">
              <div className="anna-stat-item">
                <strong className="anna-stat-number">1,443</strong>
                <span className="anna-stat-label">ஆய்வுக் கட்டுரைகள் (15 பகுதிகள்)</span>
              </div>
              <div className="anna-stat-item">
                <strong className="anna-stat-number">6</strong>
                <span className="anna-stat-label">முதன்மைக் களஞ்சியப் பிரிவுகள்</span>
              </div>
              <div className="anna-stat-item">
                <strong className="anna-stat-number">60+</strong>
                <span className="anna-stat-label">ஆண்டுகால வரலாற்று நிழற்படங்கள்</span>
              </div>
              <div className="anna-stat-item">
                <strong className="anna-stat-number">100%</strong>
                <span className="anna-stat-label">முழுமையான அணுகல்தன்மை (A11y)</span>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Main Collection Showcase Panels (Recreating 4 hanging scroll cards) */}
        <section id="showcase" className="anna-showcase-section" aria-labelledby="showcase-title">
          <div className="anna-container">
            <header className="anna-section-header">
              <p className="section-label">ஆவணகத் தொகுப்புகள் · Archive Holdings</p>
              <h2 id="showcase-title" className="anna-section-title">
                4 முதன்மைக் களஞ்சியப் பிரிவுகள்
              </h2>
              <p className="anna-section-subtitle">
                அசல் ஆவணகத்தின் நான்கு தூண்களான எழுத்து, பேச்சு, புகைப்படம், ஓவியம் சார்ந்த ஆவணங்கள் கீழே தொகுக்கப்பட்டுள்ளன.
              </p>
            </header>

            <div className="anna-showcase-grid">
              {annaCollectionsShowcase.map((col) => (
                <article key={col.id} id={col.id} className="anna-collection-card" aria-labelledby={`col-title-${col.id}`}>
                  <div className="anna-card-header">
                    <div className="anna-card-badge-row">
                      <span className="anna-card-badge">{col.badge}</span>
                      <span className="anna-card-eng">{col.englishTitle}</span>
                    </div>
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
          </div>
        </section>

        {/* 15 Chronological Parts Direct Launcher */}
        <section className="anna-parts-overview-section" aria-labelledby="parts-overview-title">
          <div className="anna-container">
            <header className="anna-section-header">
              <p className="section-label">காலவரிசைப் பதிவேடு · Chronological Parts</p>
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
          </div>
        </section>

        {/* Featured Essays Spotlight */}
        <section className="anna-featured-section" aria-labelledby="featured-title">
          <div className="anna-container">
            <header className="anna-section-header">
              <p className="section-label">முக்கியப் பதிவுகள் · Featured Archives</p>
              <h2 id="featured-title" className="anna-section-title">
                அறிஞர் அண்ணாவின் வரலாற்றுச் சிறப்புமிக்க கட்டுரைகள்
              </h2>
              <p className="anna-section-subtitle">
                1930 முதல் 1942 வரையிலான திருப்புமுனை ஆய்வுக் கட்டுரைகளில் சில:
              </p>
            </header>

            <div className="anna-featured-grid">
              {highlightedEssays.map((essay) => (
                <article key={essay.no} className="anna-featured-card">
                  <div className="anna-featured-meta">
                    <span className="anna-essay-no">எண் #{essay.no}</span>
                    <span className="anna-essay-date">{essay.date}</span>
                  </div>
                  <h3 className="anna-featured-essay-title">
                    <Link href={`/annavin_katturaigal?highlight=${essay.no}&search=${encodeURIComponent(essay.title)}`}>
                      {essay.title}
                    </Link>
                  </h3>
                  <div className="anna-featured-footer">
                    <span className="anna-journal-tag">
                      {essay.journal && essay.journal !== '&nbsp;' ? `இதழ்: ${essay.journal}` : 'இதழ் ஆவணம்'}
                    </span>
                    <Link href={`/annavin_katturaigal?highlight=${essay.no}&search=${encodeURIComponent(essay.title)}`} className="anna-featured-read-link">
                      பதிவேட்டில் காண்க →
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <div className="anna-featured-cta">
              <Link href="/annavin_katturaigal" className="button button-primary button-large">
                அனைத்து 1,443 கட்டுரைகளையும் முழுமையாகப் பார்க்க →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <AnnaArchiveFooter />
    </div>
  );
}
