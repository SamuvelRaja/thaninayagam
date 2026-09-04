import Link from 'next/link';
import AnnaArchiveHeader from '@/app/components/AnnaArchiveHeader';
import AnnaArchiveFooter from '@/app/components/AnnaArchiveFooter';
import { annaTribute } from '@/app/lib/annaArchiveData';

export const metadata = {
  title: "தொடர்பு & ஆவணப் பங்களிப்பு · பேரறிஞர் அண்ணாவின் படைப்புகள் (Digital Archive)",
  description: "அறிஞர் அண்ணா அறக்கட்டளை, ஆவணப் பாதுகாப்பு முயற்சிகள் மற்றும் தொடர்பு விவரங்கள்.",
};

export default function ContactArchivePage() {
  return (
    <div className="site-shell anna-theme">
      <AnnaArchiveHeader activePillar="contact" />

      <main id="main" className="anna-main-content">
        <div className="anna-container">
          <header className="anna-register-header">
            <div className="anna-register-title-block">
              <span className="section-label">தொடர்பு & பங்களிப்பு · Contact & Institutional Trust</span>
              <h1 className="anna-register-title">
                அறிஞர் அண்ணா அறக்கட்டளை மற்றும் ஆவணத் தொடர்பு
              </h1>
              <p className="anna-register-lead">
                பேரறிஞர் அண்ணாவின் வரலாற்று ஆவணங்கள், நூல்கள் மற்றும் ஒளிப்படங்களைப் பாதுகாத்து வரும் அண்ணா அறக்கட்டளையின் வழிகாட்டல் குறிப்புகள்.
              </p>
            </div>

            <div className="anna-quick-actions">
              <Link href="/home.htm" className="button button-primary">
                🏛️ ஆவணக முகப்பு
              </Link>
            </div>
          </header>

          <div className="anna-hero-layout" style={{ gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <article className="anna-collection-card" style={{ padding: '1.5rem' }}>
              <div className="anna-card-header">
                <span className="anna-badge-gold">அறக்கட்டளை தகவல்</span>
                <h2 className="anna-card-title" style={{ fontSize: '1.35rem', marginTop: '0.5rem' }}>
                  அறிஞர் அண்ணா அறக்கட்டளை (Arignar Anna Trust)
                </h2>
                <p className="anna-card-desc">
                  பேரறிஞர் அண்ணாவின் சிந்தனைகள், எழுத்துகள் மற்றும் வரலாற்று ஆவணங்களை எக்காலத்திற்கும் பாதுகாக்கும் நோக்குடன் செயல்பட்டு வரும் அறக்கட்டளை.
                </p>
              </div>

              <dl className="anna-modal-meta-list" style={{ marginTop: '1rem' }}>
                <div className="anna-modal-meta-row">
                  <dt>முக்கிய நிர்வாகி:</dt>
                  <dd>{annaTribute.name} ({annaTribute.title})</dd>
                </div>
                <div className="anna-modal-meta-row">
                  <dt>நோக்கம்:</dt>
                  <dd>எண்ணிம ஆவணப் பாதுகாப்பு & உலகளாவிய அணுகல்</dd>
                </div>
                <div className="anna-modal-meta-row">
                  <dt>ஆவணப் பதிவுகள்:</dt>
                  <dd>1,443 ஆய்வுக் கட்டுரைகள், நூற்றுக்கணக்கான உரைகள்</dd>
                </div>
              </dl>

              <div style={{ marginTop: '1.5rem' }}>
                <Link href="/nandrigal.htm" className="button button-primary">
                  📜 முழுமையான நன்றிகள் பக்கத்தைக் காண்க →
                </Link>
              </div>
            </article>

            <article className="anna-collection-card" style={{ padding: '1.5rem' }}>
              <div className="anna-card-header">
                <span className="anna-badge">ஆய்வாளர் வழிகாட்டல்</span>
                <h2 className="anna-card-title" style={{ fontSize: '1.35rem', marginTop: '0.5rem' }}>
                  ஆவணப் பயன்பாடு & மேற்கோள் நெறிமுறைகள்
                </h2>
                <p className="anna-card-desc">
                  பல்கலைக்கழக ஆய்வாளர்கள், பேராசிரியர்கள் மற்றும் மாணவர்கள் இவ்வாவணகத்தை கல்வி மற்றும் வரலாற்று ஆய்வுகளுக்கு இலவசமாகப் பயன்படுத்திக் கொள்ளலாம்.
                </p>
              </div>

              <ul className="anna-card-item-list" style={{ marginTop: '1rem' }} role="list">
                <li className="anna-card-item">
                  <span className="anna-card-item-name">📚 ஆய்வுக் கட்டுரைகளுக்கான துல்லியமான பதிவு எண்கள் வழங்கப்பட்டுள்ளன.</span>
                </li>
                <li className="anna-card-item">
                  <span className="anna-card-item-name">♿ பார்வை மாற்றுத்திறனாளிகள் மற்றும் முதியோருக்கான WCAG AAA அணுகல் வசதிகள் உள்ளன.</span>
                </li>
                <li className="anna-card-item">
                  <span className="anna-card-item-name">🔍 உடனடி தேடல் வசதி மூலம் அனைத்து 1,443 கட்டுரைகளையும் கண்டறியலாம்.</span>
                </li>
              </ul>

              <div style={{ marginTop: '1.5rem' }}>
                <Link href="/annavin_katturaigal" className="button button-secondary">
                  📖 கட்டுரைகள் பதிவேட்டைத் திறக்க →
                </Link>
              </div>
            </article>
          </div>
        </div>
      </main>

      <AnnaArchiveFooter />
    </div>
  );
}
