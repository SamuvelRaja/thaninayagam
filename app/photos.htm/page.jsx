import Link from 'next/link';
import AnnaArchiveHeader from '@/app/components/AnnaArchiveHeader';
import AnnaArchiveFooter from '@/app/components/AnnaArchiveFooter';

export const metadata = {
  title: "புகைப்பட ஆவணகம் (1909–1969) · பேரறிஞர் அண்ணாவின் படைப்புகள் (Digital Archive)",
  description: "பேரறிஞர் அண்ணாவின் 6 தசாப்த கால (1909 முதல் 1969 வரை) அரிய வரலாற்று புகைப்படங்களின் எண்ணிம ஆவணக் காப்பகம்.",
};

export default function PhotosArchivePage() {
  const photoDecades = [
    {
      id: '1909-19',
      period: '1909–1919',
      title: 'காஞ்சிபுரம் இளமைப் பருவம் & தொடக்கக் கல்வி',
      desc: 'காஞ்சிபுரத்தில் நெசவாளர் குடும்பத்தில் பிறந்து தொடக்கப் பள்ளி கல்வி பயின்ற அண்ணாவின் தொடக்க கால நிழற்படக் குறிப்புகள்.',
      items: ['காஞ்சிபுரம் இல்லம்', 'பள்ளி நண்பர்களுடன் அண்ணா', 'சின்ன காஞ்சிபுரம் நினைவுகள்']
    },
    {
      id: '1920-29',
      period: '1920–1929',
      title: 'சென்னை பச்சையப்பன் கல்லூரி மாணவர் பருவம்',
      desc: 'பச்சையப்பன் கல்லூரியில் பி.ஏ (பொருளாதாரம்) மற்றும் எம்.ஏ பட்டம் பயின்ற மாணவர் சங்கத் தலைவர் காலப் புகைப்படங்கள்.',
      items: ['கல்லூரி விவாத மன்றக் குழு', 'பச்சையப்பன் கல்லூரி வளாகம்', 'பேராசிரியர்களுடன் மாணவர் அண்ணா']
    },
    {
      id: '1930-39',
      period: '1930–1939',
      title: 'பொதுவாழ்வு தொடக்கம் & பெரியார் உடனான உறவு',
      desc: 'நீதிக்கட்சி, சுயமரியாதை இயக்கம் மற்றும் தந்தை பெரியார் அவர்களுடன் இணைந்து பணியாற்றிய வரலாற்றுத் தொடக்கப் படங்கள்.',
      items: ['ஈரோடு இல்லத்தில் பெரியாருடன் அண்ணா', 'நீதிக்கட்சி மாநாட்டுப் படங்கள்', 'குடியரசு மற்றும் விடுதலை இதழ் அலுவலகம்']
    },
    {
      id: '1940-49',
      period: '1940–1949',
      title: 'திராவிடர் கழகம் & திமுக தோற்றம் (1949)',
      desc: 'சேலம் மாநாடு, திராவிட நாடு இதழ் தோற்றம் மற்றும் 1949 செப்டம்பர் 17-ல் ராபின்சன் பூங்காவில் திமுக தோற்றுவிக்கப்பட்ட வரலாற்றுத் தருணங்கள்.',
      items: ['1944 சேலம் மாநாடு', '1949 செப்டம்பர் 17 சென்னை ராபின்சன் பூங்கா', 'திராவிட நாடு இதழ் காரியாலயம்']
    },
    {
      id: '1950-59',
      period: '1950–1959',
      title: 'தேர்தல் அரசியல் & மக்கள் இயக்கப் போராட்டங்கள்',
      desc: '1957 பொதுத்தேர்தல், காஞ்சிபுரம் சட்டமன்றத் தொகுதி வெற்றி மற்றும் இந்தி எதிர்ப்புப் போராட்ட நிழற்படங்கள்.',
      items: ['1957 காஞ்சிபுரம் தேர்தல் பரப்புரை', 'சட்டமன்ற உறுப்பினர் அண்ணா', 'திமுக தலைவர்களுடன் மாநாட்டு மேடையில்']
    },
    {
      id: '1960-69',
      period: '1960–1969',
      title: 'முதலமைச்சர் பொறுப்பு, உலகப் பயணம் & இறுதி நாட்கள்',
      desc: '1967 வரலாற்றுப் பெருவெற்றி, தமிழ்நாடு முதலமைச்சராகப் பதவியேற்பு, அமெரிக்க யேல் பல்கலைக்கழகப் பயணம் மற்றும் இறுதி யாத்திரை.',
      items: ['1967 புனித ஜார்ஜ் கோட்டையில் பதவியேற்பு', 'அமெரிக்க யேல் பல்கலைக்கழகத்தில் சாப்மேன் பெல்லோஷிப்', 'இரண்டாம் உலகத் தமிழ் மாநாடு (1968)']
    }
  ];

  return (
    <div className="site-shell anna-theme">
      <AnnaArchiveHeader activePillar="photos" />

      <main id="main" className="anna-main-content">
        <div className="anna-container">
          <header className="anna-register-header">
            <div className="anna-register-title-block">
              <span className="section-label">காட்சி ஆவணம் · Historical Photographs</span>
              <h1 className="anna-register-title">
                அறிஞர் அண்ணாவின் வரலாற்று நிழற்படக் காப்பகம்
              </h1>
              <p className="anna-register-lead">
                1909 முதல் 1969 வரையிலான ஆறு சகாப்தங்களில் (6 Decades) அண்ணாவின் வாழ்வியல், பொதுத்தொண்டு, மாநாடுகள் மற்றும் உலகப் பயணங்களின் அரிய வரலாற்றுப் புகைப்பட ஆவணங்கள்.
              </p>
            </div>

            <div className="anna-quick-actions">
              <Link href="/annavin_katturaigal" className="button button-secondary">
                📖 எழுத்துப் பதிவேடு
              </Link>
              <Link href="/home.htm" className="button button-primary">
                🏛️ ஆவணக முகப்பு
              </Link>
            </div>
          </header>

          <div className="anna-showcase-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))' }}>
            {photoDecades.map((dec) => (
              <article key={dec.id} id={dec.id} className="anna-collection-card" aria-labelledby={`title-${dec.id}`}>
                <div className="anna-card-header">
                  <div className="anna-card-badge-row">
                    <span className="anna-badge-gold">சகாப்தம்</span>
                    <span className="anna-card-eng">{dec.period}</span>
                  </div>
                  <h2 id={`title-${dec.id}`} className="anna-card-title" style={{ fontSize: '1.25rem' }}>
                    {dec.title}
                  </h2>
                  <p className="anna-card-desc">{dec.desc}</p>
                </div>

                <div style={{ padding: '0 1.25rem 1.25rem' }}>
                  <strong style={{ fontSize: '0.85rem', color: 'var(--anna-accent-dark)', display: 'block', marginBottom: '0.5rem' }}>
                    அடங்கியுள்ள அரிய நிழற்படப் பதிவுகள்:
                  </strong>
                  <ul className="anna-card-item-list" role="list">
                    {dec.items.map((it, i) => (
                      <li key={i} className="anna-card-item">
                        <span className="anna-card-item-name">📷 {it}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="anna-card-footer">
                  <span className="anna-card-status">அறிஞர் அண்ணா அறக்கட்டளை ஆவணப் பதிவேடு</span>
                </div>
              </article>
            ))}
          </div>

          <section className="anna-info-box" style={{ marginTop: '2.5rem' }}>
            <h3 className="anna-info-title">📌 ஒளிப்பட ஆவணப் பாதுகாப்பு (Archival Preservation)</h3>
            <p>
              இப்புகைப்படங்கள் அனைத்தும் தமிழ்நாடு செய்தி மக்கள் தொடர்புத் துறை, இந்து நாளிதழ் ஆவணக் காப்பகம் மற்றும் டாக்டர். அண்ணா பரிமளம் அவர்களின் தனிப்பட்ட சேகரிப்புகளிலிருந்து பாதுகாக்கப்பட்ட உயர் தெளிவுத்திறன் கொண்ட வரலாற்றுப் பிரதிகளாகும்.
            </p>
          </section>
        </div>
      </main>

      <AnnaArchiveFooter />
    </div>
  );
}
