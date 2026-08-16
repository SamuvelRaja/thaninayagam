'use client';

import Link from 'next/link';
import { annaQuote, annaTopPillars } from '@/app/lib/annaArchiveData';

export default function AnnaArchiveHeader({ activePillar = 'home' }) {
  return (
    <header className="anna-header" role="banner">
      {/* Accessibility Skip Link */}
      <a href="#main" className="skip-link">
        முதன்மை உள்ளடக்கத்திற்குத் தாவுக (Skip to main content)
      </a>

      {/* Clean Masthead */}
      <div className="anna-masthead">
        <div className="anna-container anna-masthead-inner">
          <div className="anna-brand-block">
            <span className="anna-badge-category">எண்ணிம ஆவணகம் · Digital Archive</span>
            <div className="anna-archive-heading">
              <Link href="/home.htm" className="anna-brand-title-link">
                {annaQuote.title}
              </Link>
            </div>
            <p className="anna-archive-subtext">{annaQuote.subtitle}</p>
          </div>

          <div className="anna-quick-actions" role="toolbar" aria-label="விரைவு அணுகல்">
            <Link href="/annavin_katturaigal" className="button button-primary">
              📖 கட்டுரைகள் (1,443)
            </Link>
            <Link href="/nandrigal.htm" className="button button-secondary">
              🏛️ அண்ணா அறக்கட்டளை
            </Link>
          </div>
        </div>
      </div>

      {/* 6 Top Navigation Pillars (Direct, High-Contrast Navigation Tabs) */}
      <nav className="anna-pillars-nav" aria-label="முதன்மை ஆவணப் பிரிவுகள் (Primary Pillars)">
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
