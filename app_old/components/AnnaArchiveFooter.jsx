import Link from 'next/link';
import { annaTopPillars } from '@/app/lib/annaArchiveData';

export default function AnnaArchiveFooter() {
  return (
    <footer className="anna-footer" role="contentinfo" id="footer">
      <div className="anna-container anna-footer-inner">
        <div className="anna-footer-grid">
          <div className="anna-footer-brand">
            <h2 className="anna-footer-heading">பேரறிஞர் அண்ணாவின் படைப்புகள்</h2>
            <p className="anna-footer-desc">
              அறிஞர் அண்ணா அறக்கட்டளை (Arignar Anna Trust) மற்றும் டாக்டர். அண்ணா பரிமளம் அவர்களின் சீரிய ஆவணப் பாதுகாப்பு முயற்சியின் அடிப்படையில் மீளுருவாக்கம் செய்யப்பட்ட எண்ணிம ஆவணக் களஞ்சியம்.
            </p>
            <p className="anna-footer-motto">
              <em>&ldquo;மக்களிடம் செல்; அவர்களோடு வாழ்; அவர்களிடமிருந்து கற்றுக்கொள்; அவர்களை நேசி; அவர்களுக்கு சேவை செய்.&rdquo;</em>
            </p>
          </div>

          <div className="anna-footer-nav-col">
            <h3 className="anna-footer-subheading">ஆவணப் பிரிவுகள்</h3>
            <ul className="anna-footer-links" role="list">
              {annaTopPillars.map((pillar) => (
                <li key={pillar.id}>
                  <Link href={pillar.href} className="anna-footer-link">
                    {pillar.label} — <span className="anna-footer-link-hint">{pillar.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="anna-footer-nav-col">
            <h3 className="anna-footer-subheading">ஆவணத் தொடர்பு & உதவி</h3>
            <p className="anna-footer-contact-info">
              <strong>அறிஞர் அண்ணா அறக்கட்டளை</strong><br />
              ஆவணப் பதிவுகள் மற்றும் வரலாற்று ஆய்வுக் குறிப்புகள் பொதுப் பயன்பாட்டிற்காகப் பேணப்படுகின்றன.
            </p>
            <ul className="anna-footer-aux-links" role="list">
              <li>
                <Link href="/nandrigal.htm" className="anna-footer-link">
                  🏛️ நன்றிகள் & அறக்கட்டளை அர்ப்பணிப்பு
                </Link>
              </li>
              <li>
                <Link href="/contact.htm" className="anna-footer-link">
                  📬 தொடர்புக்கு & ஆவண பங்களிப்பு
                </Link>
              </li>
            </ul>
            <div className="anna-footer-actions">
              <a href="#main" className="button button-secondary button-small">
                ↑ பக்கத்தின் மேல்பகுதிக்குச் செல்க
              </a>
              <Link href="/" className="anna-footer-portal-link">
                ← தனிநாயகம் அடிகளார் முதன்மை ஆவணகம்
              </Link>
            </div>
          </div>
        </div>

        <div className="anna-footer-bottom">
          <p className="anna-footer-copy">
            © {new Date().getFullYear()} Arignar Anna Digital Archive · அறிஞர் அண்ணா எண்ணிம ஆவணகம் · Accessibility First Preservation
          </p>
          <div className="anna-footer-badges">
            <span className="anna-tag">WCAG AAA Accessible</span>
            <span className="anna-tag">1,443 Articles Indexed</span>
            <span className="anna-tag">Screen Reader Verified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
