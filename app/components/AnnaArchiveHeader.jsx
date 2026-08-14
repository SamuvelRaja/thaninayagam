'useclient';

import Link from 'next/link';
import { annaQuote, annaTopPillars } from '@/app/lib/annaArchiveData';

export default function AnnaArchiveHeader({ activePillar = 'home' }) {
  return (
    <header className="anna-header" role="banner">
      {/* Accessibility Skip Link */}
      <a href="#main" className="skip-link">
        முதன்மை உள்ளடக்கத்திற்குத் தாவுக (Skip to main content)
      </a>

      {/* Archival Banner Top Bar */}
      <div className="anna-motto-bar" aria-label="Archive Motto">
        <div className="anna-container anna-motto-content">
          <span className="anna-motto-badge">✨ {annaQuote.motto}</span>
          <p className="anna-motto-quote">
            <q>{annaQuote.quote}</q>
            <cite className="anna-motto-author"> — {annaQuote.author}</cite>
          </p>
          <Link href="/nandrigal.htm" className="anna-motto-tribute-link" title="அண்ணா அறக்கட்டளை & நன்றிகள்">
            🏛️ நன்றிகள் / அறக்கட்டளை
          </Link>
        </div>
      </div>

      {/* Main Masthead Brand Area */}
      <div className="anna-masthead">
        <div className="anna-container anna-masthead-inner">
          <div className="anna-brand-block">
            <div className="anna-brand-meta">
              <span className="anna-badge-category">வரலாற்று எண்ணிம ஆவணகம் · Digital Archive</span>
              <span className="anna-badge-date">1909–1969</span>
            </div>
            <div className="anna-archive-heading">
              <Link href="/home.htm" className="anna-brand-title-link">
                {annaQuote.title}
              </Link>
            </div>
            <p className="anna-archive-subtext">{annaQuote.subtitle}</p>
          </div>

          <div className="anna-quick-actions" role="toolbar" aria-label="விரைவு அணுகல் பொத்தான்கள்">
            <Link href="/annavin_katturaigal" className="button button-primary">
              📖 கட்டுரைகள் பதிவு (1,443)
            </Link>
            <Link href="/home.htm" className="button button-secondary">
              🏛️ ஆவணக முகப்பு
            </Link>
          </div>
        </div>
      </div>

      {/* 6 Top Navigation Pillars (Fully Accessible Navigation Bar) */}
      <nav className="anna-pillars-nav" aria-label="முதன்மை ஆவணப் பிரிவுகள் (Primary Archive Pillars)">
        <div className="anna-container">
          <ul className="anna-pillars-list" role="list">
            {annaTopPillars.map((pillar) => {
              const isActive = activePillar === pillar.id;
              return (
                <li key={pillar.id} className="anna-pillar-item">
                  <Link
                    href={pillar.href}
                    className={`anna-pillar-card ${isActive ? 'is-active' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                    title={pillar.description}
                  >
                    <span className="anna-pillar-label">{pillar.label}</span>
                    <span className="anna-pillar-hint">{pillar.description}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
