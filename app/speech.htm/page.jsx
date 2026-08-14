import Link from 'next/link';
import AnnaArchiveHeader from '@/app/components/AnnaArchiveHeader';
import AnnaArchiveFooter from '@/app/components/AnnaArchiveFooter';
import { annaCollectionsShowcase } from '@/app/lib/annaArchiveData';

export const metadata = {
  title: "பேச்சுப் பதிவேடு · பேரறிஞர் அண்ணாவின் படைப்புகள் (Digital Archive)",
  description: "பேரறிஞர் அண்ணாவின் மேடைப் பேச்சுகள், சட்டமன்ற, பாராளுமன்ற உரைகள், வானொலி உரைகள் மற்றும் பேட்டிகளின் ஆவணத் தொகுப்பு.",
};

export default function SpeechArchivePage() {
  const speechSection = annaCollectionsShowcase.find(c => c.id === 'speech');

  const speechCategories = [
    {
      id: 'medai',
      title: 'மேடைப் பேச்சுகள் (Stage Speeches)',
      count: '450+ உரைகள்',
      desc: 'மாநாடுகள், பொதுக்கூட்டங்கள் மற்றும் திராவிட இயக்கக் கொள்கைப் பேருரைகளின் வரலாற்றுத் தொகுப்பு.',
      highlights: ['கடமை, கண்ணியம், கட்டுப்பாடு', 'தமிழர் மறுமலர்ச்சி மாநாட்டு உரை', 'திருச்சி மாநாட்டுப் பேருரை']
    },
    {
      id: 'sattamandram',
      title: 'சட்டமன்ற உரைகள் (Assembly Debates)',
      count: '280+ விவாதங்கள்',
      desc: 'தமிழ்நாடு சட்டமன்றப் பேரவை மற்றும் மேலவையில் ஆற்றிய வாதங்கள் மற்றும் கொள்கை விளக்கங்கள்.',
      highlights: ['இருமொழிக் கொள்கை பிரகடனம்', 'மெட்ராஸ் மாநிலத்திற்கு "தமிழ்நாடு" எனப் பெயர் மாற்றம்', 'சுயமரியாதைத் திருமணச் சட்டம்']
    },
    {
      id: 'parliament',
      title: 'பாராளுமன்ற விவாதங்கள் (Parliament Speeches)',
      count: '65+ உரைகள்',
      desc: 'இந்திய நாடாளுமன்ற மாநிலங்களவையில் (Rajya Sabha) ஆற்றிய வரலாற்றுச் சிறப்புமிக்க ஆங்கில மற்றும் தமிழ் உரைகள்.',
      highlights: ['I belong to the Dravidian stock — மாநில சுயாட்சி உரை', 'அதிகாரப் பகிர்வு விவாதம்', 'இந்தி திணிப்பு எதிர்ப்பு உரை']
    },
    {
      id: 'colleges',
      title: 'பள்ளி, கல்லூரி கூட்டங்கள் (Academic Addresses)',
      count: '120+ உரைகள்',
      desc: 'பச்சையப்பன் கல்லூரி, அண்ணாமலைப் பல்கலைக்கழகம் உள்ளிட்ட மாணவர் அரங்குகளில் ஆற்றிய எழுச்சியுரைகள்.',
      highlights: ['மாணவர்களும் அரசியலும்', 'இளைஞர் சமுதாயத்தின் கடமை', 'அண்ணாமலை பல்கலை பட்டமளிப்பு விழா உரை']
    },
    {
      id: 'forums',
      title: 'மன்றம் & கழக நிகழ்வுகள் (Forums & Cultural Events)',
      count: '95+ உரைகள்',
      desc: 'அறிவொளி மன்றக் கூட்டங்கள், தமிழ்ச் சங்கப் பொழிவு மற்றும் பண்பாட்டு விழா உரைகள்.',
      highlights: ['திருக்குறள் மாநாட்டு உரை', 'பாரதி விழாப் பேருரை', 'கம்பன் கழகப் பொழிவு']
    },
    {
      id: 'interviews',
      title: 'நேர்காணல் & பேட்டிகள் (Interviews & Press Meets)',
      count: '40+ பேட்டிகள்',
      desc: 'உள்நாட்டு மற்றும் வெளிநாட்டு இதழாளர்களுக்கு அளித்த விரிவான கொள்கை நேர்காணல்கள்.',
      highlights: ['யேல் பல்கலைக்கழகப் பேட்டி', 'பிபிசி தமிழோசை நேர்காணல்', 'தினமணி மற்றும் கல்கி பேட்டிகள்']
    },
    {
      id: 'radio',
      title: 'வானொலி உரைகள் (AIR Radio Speeches)',
      count: '25+ ஒலிப்பதிவுகள்',
      desc: 'அகில இந்திய வானொலி சென்னை நிலையத்தில் ஆற்றிய புத்தாண்டு, பொங்கல் மற்றும் அரசுப் பேருரைகள்.',
      highlights: ['பொங்கல் திருநாள் வாழ்த்துரை', 'இயற்கைப் பேரிடர் நிவாரண உரை', 'மக்களுக்கு முதல்வரின் செய்தி']
    }
  ];

  return (
    <div className="site-shell anna-theme">
      <AnnaArchiveHeader activePillar="speech" />

      <main id="main" className="anna-main-content">
        <div className="anna-container">
          <header className="anna-register-header">
            <div className="anna-register-title-block">
              <span className="section-label">ஆவணப் பிரிவு · Speeches & Oratory</span>
              <h1 className="anna-register-title">
                பேரறிஞர் அண்ணாவின் மேடை & சட்டமன்ற உரைகள்
              </h1>
              <p className="anna-register-lead">
                தமிழர்களின் உள்ளங்களைக் கவர்ந்த அடுக்குமொழி மேடைப் பேச்சுகள், நாடாளுமன்ற மாநில சுயாட்சி விவாதங்கள் மற்றும் அரிய வானொலி ஒலிப்பதிவு ஆவணங்களின் முழுமையான தொகுப்பு.
              </p>
            </div>

            <div className="anna-quick-actions">
              <Link href="/annavin_katturaigal" className="button button-secondary">
                📖 எழுத்துப் பதிவேடு (1,443)
              </Link>
              <Link href="/home.htm" className="button button-primary">
                🏛️ ஆவணக முகப்பு
              </Link>
            </div>
          </header>

          <div className="anna-showcase-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            {speechCategories.map((cat) => (
              <article key={cat.id} id={cat.id} className="anna-collection-card" aria-labelledby={`title-${cat.id}`}>
                <div className="anna-card-header">
                  <div className="anna-card-badge-row">
                    <span className="anna-card-badge">உரைக் களம்</span>
                    <span className="anna-card-eng">{cat.count}</span>
                  </div>
                  <h2 id={`title-${cat.id}`} className="anna-card-title" style={{ fontSize: '1.25rem' }}>
                    {cat.title}
                  </h2>
                  <p className="anna-card-desc">{cat.desc}</p>
                </div>

                <div style={{ padding: '0 1.25rem 1.25rem' }}>
                  <strong style={{ fontSize: '0.85rem', color: 'var(--anna-accent-dark)', display: 'block', marginBottom: '0.5rem' }}>
                    முக்கிய வரலாற்று உரைகள்:
                  </strong>
                  <ul className="anna-card-item-list" role="list">
                    {cat.highlights.map((h, i) => (
                      <li key={i} className="anna-card-item">
                        <span className="anna-card-item-name">🎙️ {h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="anna-card-footer">
                  <span className="anna-card-status">ஆவணக் குறிப்புப் பதிவு செய்யப்பட்டுள்ளது</span>
                </div>
              </article>
            ))}
          </div>

          <section className="anna-info-box" style={{ marginTop: '2.5rem' }}>
            <h3 className="anna-info-title">📌 ஆய்வு வழிகாட்டல் (Research Notice)</h3>
            <p>
              பேரறிஞர் அண்ணாவின் சட்டமன்ற உரைகள் தமிழ்நாடு சட்டமன்ற நூலக ஆவணங்களின் அடிப்படையிலும், மாநிலங்களவை உரைகள் இந்திய நாடாளுமன்ற விவாதக் குறிப்புகளின் (Parliamentary Debates Official Report) அடிப்படையிலும் வரிசைப்படுத்தப்பட்டுள்ளன.
            </p>
          </section>
        </div>
      </main>

      <AnnaArchiveFooter />
    </div>
  );
}
