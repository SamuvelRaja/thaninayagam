'use client';

import { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import AnnaArchiveHeader from '@/app/components/AnnaArchiveHeader';
import AnnaArchiveFooter from '@/app/components/AnnaArchiveFooter';
import { annaWritingsSubNav, allEssaysData } from '@/app/lib/annaArchiveData';

function KatturaigalRegister() {
  const searchParams = useSearchParams();

  const initialPart = Number(searchParams.get('part')) || 1;
  const initialSearch = searchParams.get('search') || '';
  const initialJournal = searchParams.get('journal') || 'all';
  const initialHighlight = Number(searchParams.get('highlight')) || null;

  const [selectedPart, setSelectedPart] = useState(initialPart);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedJournal, setSelectedJournal] = useState(initialJournal);
  const [fontSize, setFontSize] = useState('normal'); // 'normal' (20px), 'large' (24px), 'xlarge' (28px)
  const [pageSize, setPageSize] = useState(50); // 25, 50, 100
  const [subPage, setSubPage] = useState(1);
  const [activeModalEssay, setActiveModalEssay] = useState(null);

  // Sync state if URL searchParams change
  useEffect(() => {
    const p = Number(searchParams.get('part'));
    if (p && p >= 1 && p <= 15) setSelectedPart(p);
    const s = searchParams.get('search');
    if (s !== null) setSearchQuery(s);
    const j = searchParams.get('journal');
    if (j !== null) setSelectedJournal(j);
    const h = Number(searchParams.get('highlight'));
    if (h) {
      const match = allEssaysData.find(e => e.no === h);
      if (match) {
        setActiveModalEssay(match);
        if (match.part) setSelectedPart(match.part);
      }
    }
  }, [searchParams]);

  // Extract unique journal publications for filter dropdown
  const uniqueJournals = useMemo(() => {
    const set = new Set();
    allEssaysData.forEach(e => {
      if (e.journal && e.journal.trim() !== '' && e.journal !== '&nbsp;') {
        set.add(e.journal.trim());
      }
    });
    return Array.from(set).sort();
  }, []);

  // Filtered essays based on part, search query, and journal filter
  const filteredEssays = useMemo(() => {
    let result = allEssaysData;

    // If there is no search query and no journal filter, show the selected part (1..15)
    if (!searchQuery.trim() && selectedJournal === 'all') {
      result = result.filter(e => e.part === selectedPart);
    } else {
      // If searching or filtering, search across ALL 1,443 essays!
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        result = result.filter(e => 
          e.title.toLowerCase().includes(q) ||
          e.date.toLowerCase().includes(q) ||
          (e.journal && e.journal.toLowerCase().includes(q)) ||
          e.no.toString() === q
        );
      }
      if (selectedJournal !== 'all') {
        result = result.filter(e => e.journal && e.journal.trim() === selectedJournal);
      }
    }

    return result;
  }, [selectedPart, searchQuery, selectedJournal]);

  // Pagination within filtered result
  const totalPages = Math.ceil(filteredEssays.length / pageSize) || 1;
  const paginatedEssays = useMemo(() => {
    const start = (subPage - 1) * pageSize;
    return filteredEssays.slice(start, start + pageSize);
  }, [filteredEssays, subPage, pageSize]);

  // Reset subPage on filter change
  useEffect(() => {
    setSubPage(1);
  }, [selectedPart, searchQuery, selectedJournal, pageSize]);

  const maxParts = 15;

  return (
    <div className={`site-shell anna-theme font-scale-${fontSize}`}>
      <AnnaArchiveHeader activePillar="writings" />

      <main id="main" className="anna-main-content">
        <div className="anna-container">
          
          {/* Sub-Navigation for Writings */}
          <nav className="anna-subtabs-nav" aria-label="எழுத்து வடிவங்கள்">
            <ul className="anna-subtabs-list" role="list">
              {annaWritingsSubNav.map((sub) => {
                const isActive = sub.id === 'essays';
                return (
                  <li key={sub.id}>
                    <Link
                      href={sub.href}
                      className={`anna-subtab-pill ${isActive ? 'is-active' : ''}`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <span className="anna-subtab-label">{sub.label}</span>
                      <span className="anna-subtab-count" aria-label={`${sub.count} ஆவணங்கள்`}>
                        {sub.count}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Clean Register Header */}
          <header className="anna-register-header" style={{ marginBottom: '1.25rem', paddingBottom: '1rem' }}>
            <div className="anna-register-title-block">
              <span className="section-label">ஆவணப் பதிவேடு</span>
              <h1 className="anna-register-title" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
                அறிஞர் அண்ணாவின் ஆய்வுக் கட்டுரைகள்
              </h1>
              <p className="anna-register-lead" style={{ fontSize: '0.95rem' }}>
                1930 முதல் அண்ணா எழுதிய 1,443 கட்டுரைகளின் முழுமையான காலவரிசைப் பதிவேடு.
              </p>
            </div>

            {/* Reading Accessibility Font Scaler */}
            <div className="anna-reading-toolbar" aria-label="வாசிப்பு எழுத்து அளவு">
              <div className="anna-toolbar-group">
                <span className="anna-toolbar-label">எழுத்து அளவு:</span>
                <div className="anna-font-buttons" role="group" aria-label="Font Controls">
                  <button
                    type="button"
                    className={`anna-tool-btn ${fontSize === 'normal' ? 'is-active' : ''}`}
                    onClick={() => setFontSize('normal')}
                    aria-pressed={fontSize === 'normal'}
                    title="20px"
                  >
                    அ
                  </button>
                  <button
                    type="button"
                    className={`anna-tool-btn ${fontSize === 'large' ? 'is-active' : ''}`}
                    onClick={() => setFontSize('large')}
                    aria-pressed={fontSize === 'large'}
                    title="24px"
                  >
                    அ+
                  </button>
                  <button
                    type="button"
                    className={`anna-tool-btn ${fontSize === 'xlarge' ? 'is-active' : ''}`}
                    onClick={() => setFontSize('xlarge')}
                    aria-pressed={fontSize === 'xlarge'}
                    title="28px (முதியோர் வசதி)"
                  >
                    அ++
                  </button>
                </div>
              </div>
            </div>
          </header>

          {/* Unified Compact Search & Journal Filter */}
          <div className="anna-search-filter-card" role="search" aria-label="கட்டுரைகளைத் தேடுக">
            <div className="anna-filter-grid" style={{ marginBottom: '0.5rem' }}>
              <div className="anna-search-field">
                <label htmlFor="essay-search" className="anna-field-label">
                  🔍 தேடல் (தலைப்பு, ஆண்டு, எண்):
                </label>
                <div className="anna-input-wrapper">
                  <input
                    id="essay-search"
                    type="search"
                    className="anna-text-input"
                    placeholder="எ.கா: ரோமாபுரி ராணிகள், 1942, திராவிடநாடு..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      className="anna-input-clear-btn"
                      onClick={() => setSearchQuery('')}
                      aria-label="தேடலை நீக்குக"
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>

              <div className="anna-filter-field">
                <label htmlFor="journal-filter" className="anna-field-label">
                  📰 இதழ் வடிகட்டல்:
                </label>
                <select
                  id="journal-filter"
                  className="anna-select-input"
                  value={selectedJournal}
                  onChange={(e) => setSelectedJournal(e.target.value)}
                >
                  <option value="all">அனைத்து இதழ்களும் ({uniqueJournals.length})</option>
                  {uniqueJournals.map((j) => (
                    <option key={j} value={j}>{j}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Live Results Status */}
            <div className="anna-status-bar" aria-live="polite">
              <span className="anna-status-text">
                {searchQuery || selectedJournal !== 'all' ? (
                  <>
                    தேடல் முடிவுகள்: <strong>{filteredEssays.length}</strong> கட்டுரைகள் (மொத்தம் 1,443-ல்).
                  </>
                ) : (
                  <>
                    தற்போது காட்சியளிப்பது: <strong>பகுதி {selectedPart}</strong> ({filteredEssays.length} கட்டுரைகள்).
                  </>
                )}
              </span>
              {(searchQuery || selectedJournal !== 'all') && (
                <button
                  type="button"
                  className="button button-ghost button-small"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedJournal('all');
                  }}
                  style={{ fontSize: '0.8rem' }}
                >
                  வடிகட்டலை மீட்டமைக்க (Reset) ✕
                </button>
              )}
            </div>
          </div>

          {/* 15-Part Navigation Bar (When in default Part mode) */}
          {(!searchQuery && selectedJournal === 'all') && (
            <nav className="anna-part-nav" aria-label="கட்டுரைப் பகுதிகள் 1 முதல் 15" style={{ marginBottom: '1rem', padding: '0.75rem 1rem' }}>
              <ul className="anna-part-buttons-list" role="list">
                {Array.from({ length: maxParts }, (_, i) => i + 1).map((p) => {
                  const isCurrent = selectedPart === p;
                  return (
                    <li key={p}>
                      <button
                        type="button"
                        className={`anna-part-btn ${isCurrent ? 'is-active' : ''}`}
                        aria-current={isCurrent ? 'page' : undefined}
                        onClick={() => setSelectedPart(p)}
                        aria-label={`பகுதி ${p}`}
                      >
                        {p}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          )}

          {/* Accessible Table */}
          <div className="anna-table-card">
            <div className="anna-table-responsive-wrapper">
              <table className="anna-register-table" aria-label="அண்ணாவின் கட்டுரைகள் பதிவேடு">
                <caption className="sr-only">
                  அறிஞர் அண்ணாவின் ஆய்வுக் கட்டுரைகள், வெளியான காலம் மற்றும் இதழ் விவரங்கள்
                </caption>
                <thead>
                  <tr>
                    <th scope="col" className="col-no">எண்</th>
                    <th scope="col" className="col-title">பொருள் / கட்டுரைத் தலைப்பு</th>
                    <th scope="col" className="col-date">காலம்</th>
                    <th scope="col" className="col-journal">வெளியான இதழ்</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedEssays.length > 0 ? (
                    paginatedEssays.map((essay) => {
                      const displayDate = essay.date && essay.date !== '&nbsp;' ? essay.date : '—';
                      const displayJournal = essay.journal && essay.journal !== '&nbsp;' ? essay.journal : '—';
                      const isDravidaNadu = displayJournal.includes('திராவிடநாடு');
                      const isViduthalai = displayJournal.includes('விடுதலை');

                      return (
                        <tr key={essay.no} className="anna-table-row">
                          <td className="col-no">
                            <span className="anna-num-badge">#{essay.no}</span>
                          </td>
                          <td className="col-title">
                            <button
                              type="button"
                              className="anna-essay-title-btn"
                              onClick={() => setActiveModalEssay(essay)}
                              aria-label={`விவரங்களைக் காண்க: ${essay.title}`}
                            >
                              {essay.title}
                            </button>
                            {essay.part && (
                              <span className="anna-row-part-hint">பகுதி {essay.part}</span>
                            )}
                          </td>
                          <td className="col-date">
                            <time className="anna-date-text">{displayDate}</time>
                          </td>
                          <td className="col-journal">
                            {displayJournal !== '—' ? (
                              <span className={`anna-journal-pill ${isDravidaNadu ? 'pill-dravida' : isViduthalai ? 'pill-viduthalai' : ''}`}>
                                {displayJournal}
                              </span>
                            ) : (
                              <span className="anna-journal-empty">—</span>
                            )}
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan="4" className="anna-empty-cell">
                        <div className="anna-empty-state">
                          <p className="anna-empty-title">கட்டுரைகள் எதுவும் கண்டறியப்படவில்லை.</p>
                          <p className="anna-empty-hint">தேடல் சொற்களை மாற்றி முயற்சிக்கவும் அல்லது வடிகட்டலை மீட்டமைக்கவும்.</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Bottom Sub-Pagination if needed */}
            {totalPages > 1 && (
              <div className="anna-sub-pagination" aria-label="பக்கப் பட்டியல்">
                <button
                  type="button"
                  className="button button-secondary button-small"
                  disabled={subPage <= 1}
                  onClick={() => setSubPage(p => Math.max(1, p - 1))}
                  aria-label="முந்தைய பக்கம்"
                >
                  ← முந்தைய பக்கம்
                </button>
                <div className="anna-page-numbers">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                    <button
                      key={p}
                      type="button"
                      className={`anna-page-number-btn ${subPage === p ? 'is-active' : ''}`}
                      aria-current={subPage === p ? 'page' : undefined}
                      onClick={() => setSubPage(p)}
                      aria-label={`பக்கம் ${p}`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  className="button button-secondary button-small"
                  disabled={subPage >= totalPages}
                  onClick={() => setSubPage(p => Math.min(totalPages, p + 1))}
                  aria-label="அடுத்த பக்கம்"
                >
                  அடுத்த பக்கம் →
                </button>
              </div>
            )}
          </div>

          {/* Part Switcher Bottom */}
          {(!searchQuery && selectedJournal === 'all') && (
            <div className="anna-part-switcher-bottom" style={{ marginTop: '1rem' }}>
              <button
                type="button"
                className="button button-secondary button-small"
                disabled={selectedPart <= 1}
                onClick={() => setSelectedPart(p => Math.max(1, p - 1))}
              >
                ← முந்தைய பகுதி ({selectedPart > 1 ? selectedPart - 1 : 1})
              </button>
              <span className="anna-part-status-badge">
                பகுதி {selectedPart} / 15
              </span>
              <button
                type="button"
                className="button button-primary button-small"
                disabled={selectedPart >= maxParts}
                onClick={() => setSelectedPart(p => Math.min(maxParts, p + 1))}
              >
                அடுத்த பகுதி ({selectedPart < maxParts ? selectedPart + 1 : maxParts}) →
              </button>
            </div>
          )}

          {/* Archival Research Note */}
          <section className="anna-info-box" aria-labelledby="archive-notes-title" style={{ marginTop: '2rem' }}>
            <h2 id="archive-notes-title" className="anna-info-title" style={{ fontSize: '1rem', margin: '0 0 0.35rem' }}>
              📌 ஆவணக் குறிப்பு (Archival Note)
            </h2>
            <p style={{ fontSize: '0.9rem' }}>
              இக்கட்டுரைகள் யாவும் பேரறிஞர் அண்ணா அவர்கள் திராவிட நாடு, விடுதலை, குடியரசு உள்ளிட்ட பல்வேறு இதழ்களில் எழுதிய வரலாற்றுச் சிறப்புமிக்க மூலப் பதிவுகளாகும். காலவரிசைப்படி எண்ணிடப்பட்டு பாதுகாத்து வழங்கப்பட்டுள்ளன.
            </p>
          </section>

        </div>
      </main>

      {/* Accessible Modal Drawer */}
      {activeModalEssay && (
        <div
          className="anna-modal-backdrop"
          onClick={() => setActiveModalEssay(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-essay-title"
        >
          <div
            className="anna-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="anna-modal-header">
              <div className="anna-modal-badges">
                <span className="anna-badge">கட்டுரை #{activeModalEssay.no}</span>
                {activeModalEssay.part && (
                  <span className="anna-badge-gold">பகுதி {activeModalEssay.part}</span>
                )}
              </div>
              <button
                type="button"
                className="anna-modal-close-btn"
                onClick={() => setActiveModalEssay(null)}
                aria-label="மூடுக (Close)"
              >
                ✕
              </button>
            </div>

            <div className="anna-modal-body">
              <h2 id="modal-essay-title" className="anna-modal-title">
                {activeModalEssay.title}
              </h2>

              <dl className="anna-modal-meta-list">
                <div className="anna-modal-meta-row">
                  <dt>வெளியான காலம்:</dt>
                  <dd>{activeModalEssay.date || 'வரலாற்று ஆவணம்'}</dd>
                </div>
                <div className="anna-modal-meta-row">
                  <dt>வெளியான இதழ்:</dt>
                  <dd>{activeModalEssay.journal || 'நாளிதழ் / இதழ்'}</dd>
                </div>
                <div className="anna-modal-meta-row">
                  <dt>ஆசிரியர்:</dt>
                  <dd>பேரறிஞர் சி. என். அண்ணாதுரை</dd>
                </div>
              </dl>

              <div className="anna-modal-citation-box">
                <strong>மேற்கோள் வடிவம் (Citation):</strong>
                <p className="anna-citation-text">
                  அண்ணாதுரை, சி. என். &ldquo;{activeModalEssay.title}&rdquo;, <em>{activeModalEssay.journal || 'இதழ்'}</em>, {activeModalEssay.date || 'காலம்'}. (எண் #{activeModalEssay.no}).
                </p>
              </div>
            </div>

            <div className="anna-modal-footer">
              <button
                type="button"
                className="button button-secondary button-small"
                onClick={() => setActiveModalEssay(null)}
              >
                மூடுக
              </button>
              <button
                type="button"
                className="button button-primary button-small"
                onClick={() => {
                  navigator.clipboard?.writeText(
                    `அண்ணாதுரை, சி. என். "${activeModalEssay.title}", ${activeModalEssay.journal}, ${activeModalEssay.date}.`
                  );
                  alert('மேற்கோள் நகலெடுக்கப்பட்டது (Citation copied)!');
                }}
              >
                📋 மேற்கோளை நகலெடுக்க
              </button>
            </div>
          </div>
        </div>
      )}

      <AnnaArchiveFooter />
    </div>
  );
}

export default function AnnavinKatturaigalPage() {
  return (
    <Suspense fallback={
      <div className="site-shell anna-theme">
        <AnnaArchiveHeader activePillar="writings" />
        <main id="main" className="anna-main-content">
          <div className="anna-container">
            <p className="anna-loading-text">ஏற்றப்படுகிறது...</p>
          </div>
        </main>
        <AnnaArchiveFooter />
      </div>
    }>
      <KatturaigalRegister />
    </Suspense>
  );
}
