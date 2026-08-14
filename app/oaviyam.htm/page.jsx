import Link from 'next/link';
import AnnaArchiveHeader from '@/app/components/AnnaArchiveHeader';
import AnnaArchiveFooter from '@/app/components/AnnaArchiveFooter';

export const metadata = {
  title: "ஓவியம் & காட்சி ஆவணங்கள் · பேரறிஞர் அண்ணாவின் படைப்புகள் (Digital Archive)",
  description: "பேரறிஞர் அண்ணாவின் இதழ்களில் வெளிவந்த கருத்துப் படங்கள் (Cartoons), அட்டைப் படங்கள், கையெழுத்துப் பிரதிகள் மற்றும் வரலாற்று விளம்பரங்கள்.",
};

export default function OaviyamArchivePage() {
  const artCategories = [
    {
      id: 'cartoons',
      title: 'கருத்துப் படங்கள் (Political Cartoons)',
      desc: 'திராவிட நாடு, மாலைமணி மற்றும் குடியரசு இதழ்களில் வெளிவந்த விழிப்புணர்வூட்டும் அரசியல் கருத்துப் படங்கள்.',
      highlights: ['சமூக அநீதி எதிர்ப்பு சித்திரங்கள்', 'மொழித் திணிப்பு கேலிச் சித்திரங்கள்', 'மக்களாட்சி விழிப்புணர்வு வரைகலை']
    },
    {
      id: 'covers',
      title: 'அட்டைப் படங்கள் (Historic Book Covers)',
      desc: 'அண்ணாவின் நாவல்கள், சிறுகதைகள், நாடக நூல்கள் மற்றும் சிறப்பு மலர்களின் கலைநயமிக்க அட்டை வடிவமைப்பு.',
      highlights: ['ரோமாபுரி ராணிகள் முதல் பதிப்பு அட்டை', 'ஓர் இரவு நாடக நூல் அட்டை', 'திராவிட நாடு பொங்கல் மலர் அட்டைகள்']
    },
    {
      id: 'manuscripts',
      title: 'கையெழுத்துப் பிரதிகள் (Original Manuscripts)',
      desc: 'அண்ணாவின் திருக்கரங்களால் தமிழ் மற்றும் ஆங்கிலத்தில் எழுதப்பட்ட தலையங்கங்கள், கடிதங்கள் மற்றும் உரைக் குறிப்புகள்.',
      highlights: ['தம்பிக்கு கடிதம் மூலப் பிரதி', 'சட்டமன்றக் குறிப்பு தாள்கள்', 'நாடக உரையாடல் கையெழுத்துப் படிவம்']
    },
    {
      id: 'ads',
      title: 'விளம்பரங்கள் (Historic Advertisements)',
      desc: 'நாடக அரங்கேற்ற விளம்பரங்கள், மாநாட்டு சுவரொட்டிகள் மற்றும் நூல்கள் வெளியீட்டு அறிவிப்புகள்.',
      highlights: ['வேலைக்காரி நாடக விளம்பரம்', '1949 திமுக தொடக்க விழா சுவரொட்டி', 'திராவிட நாடு சந்தா விளம்பரம்']
    },
    {
      id: 'posters',
      title: 'சுவரொட்டிகள் (Vintage Movement Posters)',
      desc: 'மாநில சுயாட்சி மாநாடு, இந்தி எதிர்ப்பு மற்றும் உலகத் தமிழ் மாநாட்டு வரலாற்றுச் சுவரொட்டிகள்.',
      highlights: ['1968 உலகத் தமிழ் மாநாட்டுச் சுவரொட்டி', 'கழகப் பொதுக்குழு மாநாட்டுச் சுவரொட்டி', 'பவள விழா மலர் போஸ்டர்']
    },
    {
      id: 'periodicals',
      title: 'பத்திரிகைகள் (Periodicals & Journals Frontpages)',
      desc: 'குடியரசு, விடுதலை, திராவிட நாடு, மாலைமணி, காஞ்சி உள்ளிட்ட இதழ்களின் வரலாற்று முகப்புப் பக்கங்கள்.',
      highlights: ['திராவிட நாடு இதழ் முதல் இதழ் (1942)', 'மாலைமணி நாளிதழ் தலையங்கம்', 'காஞ்சி வார இதழ் முகப்பு']
    }
  ];

  return (
    <div className="site-shell anna-theme">
      <AnnaArchiveHeader activePillar="paintings" />

      <main id="main" className="anna-main-content">
        <div className="anna-container">
          <header className="anna-register-header">
            <div className="anna-register-title-block">
              <span className="section-label">காட்சிப் பதிவுகள் · Visual Artifacts</span>
              <h1 className="anna-register-title">
                ஓவியம், கருத்துப் படங்கள் & கையெழுத்துப் பிரதிகள்
              </h1>
              <p className="anna-register-lead">
                அறிஞர் அண்ணாவின் இதழியல் படைப்பாற்றல், நூல்களின் வரலாற்று அட்டைப் படங்கள், கையெழுத்துப் பிரதிகள் மற்றும் அரசியல் கருத்துப் படங்களின் ஆவணக் களஞ்சியம்.
              </p>
            </div>

            <div className="anna-quick-actions">
              <Link href="/annavin_katturaigal" className="button button-secondary">
                📖 கட்டுரைகள் பதிவேடு
              </Link>
              <Link href="/home.htm" className="button button-primary">
                🏛️ ஆவணக முகப்பு
              </Link>
            </div>
          </header>

          <div className="anna-showcase-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            {artCategories.map((cat) => (
              <article key={cat.id} id={cat.id} className="anna-collection-card" aria-labelledby={`title-${cat.id}`}>
                <div className="anna-card-header">
                  <div className="anna-card-badge-row">
                    <span className="anna-badge">காட்சி ஆவணம்</span>
                    <span className="anna-card-eng">Visual Archive</span>
                  </div>
                  <h2 id={`title-${cat.id}`} className="anna-card-title" style={{ fontSize: '1.25rem' }}>
                    {cat.title}
                  </h2>
                  <p className="anna-card-desc">{cat.desc}</p>
                </div>

                <div style={{ padding: '0 1.25rem 1.25rem' }}>
                  <strong style={{ fontSize: '0.85rem', color: 'var(--anna-accent-dark)', display: 'block', marginBottom: '0.5rem' }}>
                    தொகுப்பிலுள்ள முக்கிய ஆவணங்கள்:
                  </strong>
                  <ul className="anna-card-item-list" role="list">
                    {cat.highlights.map((h, i) => (
                      <li key={i} className="anna-card-item">
                        <span className="anna-card-item-name">🎨 {h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="anna-card-footer">
                  <span className="anna-card-status">எண்ணிம ஆவணப்படுத்தப்பட்டது</span>
                </div>
              </article>
            ))}
          </div>

          <section className="anna-info-box" style={{ marginTop: '2.5rem' }}>
            <h3 className="anna-info-title">📌 காட்சி ஆவண முறைமை (Visual Preservation Note)</h3>
            <p>
              அண்ணாவின் காலகட்டத்து அச்சுக்கலை, வரைகலை மற்றும் இதழியல் வடிவமைப்பு முறைகளை அடுத்த தலைமுறை ஆய்வாளர்கள் நேரடியாக உணரும் வண்ணம் மூல ஆவணங்கள் மிகத் துல்லியமாக டிஜிட்டல் ஆவணமாக்கப்பட்டுள்ளன.
            </p>
          </section>
        </div>
      </main>

      <AnnaArchiveFooter />
    </div>
  );
}
