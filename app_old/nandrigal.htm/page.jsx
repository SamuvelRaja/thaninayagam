import Link from 'next/link';
import AnnaArchiveHeader from '@/app/components/AnnaArchiveHeader';
import AnnaArchiveFooter from '@/app/components/AnnaArchiveFooter';
import { annaTribute } from '@/app/lib/annaArchiveData';

export const metadata = {
  title: "நன்றிகள் & அர்ப்பணிப்பு · பேரறிஞர் அண்ணாவின் படைப்புகள் (Digital Archive)",
  description: "டாக்டர். அண்ணா பரிமளம் மற்றும் அறிஞர் அண்ணா அறக்கட்டளையின் ஆவணப் பாதுகாப்பு முயற்சிக்கு நன்றிகள்.",
};

export default function NandrigalArchivePage() {
  const acknowledgements = [
    {
      title: "டாக்டர். அண்ணா பரிமளம்",
      role: "அண்ணா அறக்கட்டளை நிறுவனர் & ஆவணப் பாதுகாவலர்",
      desc: "பேரறிஞர் அண்ணாவின் வாழ்நாள் ஆவணங்களை அயராது சேகரித்து, பாதுகாத்து, எண்ணிம ஆவணகமாக உலகத் தமிழர்களுக்கு வழங்கிய முதன்மை வழிகாட்டி.",
      badge: "முதன்மை ஆவணப் பாதுகாவலர்"
    },
    {
      title: "அறிஞர் அண்ணா அறக்கட்டளை (Arignar Anna Trust)",
      role: "நிறுவனப் புரவலர்",
      desc: "அண்ணாவின் சிந்தனைகள், கொள்கைகள், உரைநடை மற்றும் வரலாற்றுத் தடங்களைச் சமூகத்திற்கு கொண்டு சேர்க்கும் அறப்பணி.",
      badge: "நிறுவனப் புரவலர்"
    },
    {
      title: "தமிழ் இதழியல் மற்றும் வரலாற்று ஆய்வாளர்கள்",
      role: "ஆவணச் சரிபார்ப்பு & ஆய்வு பங்களிப்பு",
      desc: "திராவிட நாடு, விடுதலை, குடியரசு, காஞ்சி உள்ளிட்ட இதழ்களின் மூலப் பிரதிகளை ஒப்பீடு செய்து சரிபார்த்த அறிஞர் பெருமக்கள்.",
      badge: "ஆய்வுப் பங்களிப்பு"
    },
    {
      title: "எண்ணிம ஆவணப் பாதுகாப்புக் குழுவினர்",
      role: "Digital Preservation & WCAG AAA Accessibility",
      desc: "நவீன இணைய அணுகல் விதிகளின்படி அனைத்துத் தலைமுறையினரும், முதியோரும் எளிதில் வாசிக்கும் வகையில் கட்டமைத்த தொழில்நுட்பப் பங்களிப்பாளர்கள்.",
      badge: "தொழில்நுட்பப் பாதுகாப்பு"
    }
  ];

  return (
    <div className="site-shell anna-theme">
      <AnnaArchiveHeader activePillar="contact" />

      <main id="main" className="anna-main-content">
        <div className="anna-container">
          <header className="anna-register-header">
            <div className="anna-register-title-block">
              <span className="section-label">நன்றிகள் & அர்ப்பணிப்பு · Acknowledgements & Trust</span>
              <h1 className="anna-register-title">
                ஆவணப் பாதுகாப்புப் பெருமுயற்சி — நன்றியுரை
              </h1>
              <p className="anna-register-lead">
                பேரறிஞர் அண்ணாவின் வரலாற்று ஆவணங்களை இணையத்தில் அழியாத கருவூலமாக நிலைநிறுத்திய டாக்டர். அண்ணா பரிமளம் மற்றும் அறிஞர் அண்ணா அறக்கட்டளைக்கான வரலாற்று அர்ப்பணிப்பு.
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

          {/* Tribute Hero Card */}
          <div className="anna-hero-layout" style={{ gridTemplateColumns: '1fr', marginBottom: '2.5rem' }}>
            <aside className="anna-tribute-card" style={{ maxWidth: '900px', margin: '0 auto', width: '100%' }}>
              <div className="anna-tribute-header">
                <div className="anna-tribute-avatar-box">
                  <span className="anna-tribute-icon" aria-hidden="true">🏛️</span>
                </div>
                <div>
                  <h2 className="anna-tribute-name">{annaTribute.name}</h2>
                  <p className="anna-tribute-title">{annaTribute.title}</p>
                </div>
              </div>
              <blockquote className="anna-tribute-body" style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                <p>
                  &ldquo;பேரறிஞர் அண்ணாவின் எழுத்துகளும் உரைகளும் தமிழ் இனத்தின் விலைமதிப்பற்ற சொத்துக்கள். அவற்றை காலத்தின் மாற்றங்களாலும் சிதையாமல், எதிர்கால ஆய்வாளர்களுக்கும் தமிழ் ஆர்வலர்களுக்கும் எளிய முறையில் கொண்டு சேர்ப்பதே எங்களது தலையாய கடமை.&rdquo;
                </p>
              </blockquote>
              <div className="anna-tribute-footer">
                <p className="anna-tribute-note">{annaTribute.trustNote}</p>
              </div>
            </aside>
          </div>

          {/* Acknowledgements Grid */}
          <div className="anna-showcase-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            {acknowledgements.map((ack, idx) => (
              <article key={idx} className="anna-collection-card">
                <div className="anna-card-header">
                  <div className="anna-card-badge-row">
                    <span className="anna-badge-gold">{ack.badge}</span>
                  </div>
                  <h3 className="anna-card-title" style={{ fontSize: '1.3rem' }}>
                    {ack.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--anna-accent)', fontWeight: 600, margin: '0.25rem 0 0.5rem' }}>
                    {ack.role}
                  </p>
                  <p className="anna-card-desc">{ack.desc}</p>
                </div>
                <div className="anna-card-footer">
                  <span className="anna-card-status">நன்றியுடன் பதிவு செய்யப்படுகிறது ✨</span>
                </div>
              </article>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/annavin_katturaigal" className="button button-primary button-large">
              📖 1,443 ஆய்வுக் கட்டுரைகள் பதிவேட்டை வாசிக்க →
            </Link>
          </div>
        </div>
      </main>

      <AnnaArchiveFooter />
    </div>
  );
}
