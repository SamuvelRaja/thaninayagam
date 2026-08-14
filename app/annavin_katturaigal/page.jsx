'use client';

import { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import AnnaArchiveHeader from '@/app/components/AnnaArchiveHeader';
import AnnaArchiveFooter from '@/app/components/AnnaArchiveFooter';
import { annaWritingsSubNav, allEssaysData } from '@/app/lib/annaArchiveData';

function KatturaigalRegister() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialPart = Number(searchParams.get('part')) || 1;
  const initialSearch = searchParams.get('search') || '';
  const initialJournal = searchParams.get('journal') || 'all';
  const initialHighlight = Number(searchParams.get('highlight')) || null;

  const [selectedPart, setSelectedPart] = useState(initialPart);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedJournal, setSelectedJournal] = useState(initialJournal);
  const [fontSize, setFontSize] = useState('normal'); // 'normal' (20px), 'large' (24px), 'xlarge' (28px)
  const [pageSize, setPageSize] = useState(25); // 25, 50, 100
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
          
          {/* Sub-Navigation for Writings / Literature formats */}
          <nav className="anna-subtabs-nav" aria-label="எழுத்து வடிவங்கள் (Writing Formats)">
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

          {/* Archive Title & Register Header */}
          <header className="anna-register-header">
            <div className="anna-register-title-block">
              <span className="section-label">ஆவணப் பதிவேடு · Historical Register</span>
              <h1 className="anna-register-title">
                அறிஞர் அண்ணாவின் ஆய்வுக் கட்டுரைகள்
              </h1>
              <p className="anna-register-lead">
                1930 முதல் பேரறிஞர் அண்ணா அவர்கள் பல்வேறு நாளிதழ்கள் மற்றும் இதழ்களில் எழுதிய 1,443 கட்டுரைகளின் முழுமையான காலவரிசைப் பதிவேடு.
              </p>
            </div>

            {/* Accessibility Reading Toolbar: Font Scaling & Contrast */}
            <div className="anna-reading-toolbar" aria-label="வாசிப்பு வசதிகள் (Reading Accessibility Controls)">
              <div className="anna-toolbar-group">
                <span className="anna-toolbar-label">எழுத்து அளவு (Font Size):</span>
                <div className="anna-font-buttons" role="group" aria-label="Font Size Controls">
                  <button
                    type="button"
                    className={`anna-tool-btn ${fontSize === 'normal' ? 'is-active' : ''}`}
                    onClick={() => setFontSize('normal')}
                    aria-pressed={fontSize === 'normal'}
                    title="இயல்பான எழுத்து அளவு (20px)"
                  >
                    அ <small>(இயல்பு)</small>
                  </button>
                  <button
                    type="button"
                    className={`anna-tool-btn ${fontSize === 'large' ? 'is-active' : ''}`}
                    onClick={() => setFontSize('large')}
                    aria-pressed={fontSize === 'large'}
                    title="பெரிய எழுத்து அளவு (24px)"
                  >
                    அ+ <small>(பெரியது)</small>
                  </button>
                  <button
                    type="button"
                    className={`anna-tool-btn ${fontSize === 'xlarge' ? 'is-active' : ''}`}
                    onClick={() => setFontSize('xlarge')}
                    aria-pressed={fontSize === 'xlarge'}
                    title="மிகப் பெரிய எழுத்து அளவு (28px - Senior Friendly)"
                  >
                    அ++ <small>(மிகப் பெரியது)</small>
                  </button>
                </div>
              </div>

              <div className="anna-toolbar-group">
                <span className="anna-toolbar-label">பக்கத்திற்கு (Page size):</span>
                <select
                  className="anna-select-input"
                  value={pageSize}
                  onChange={(e) => setPageSize(Number(e.target.value))}
                  aria-label="பக்கத்திற்கு காட்டப்படும் கட்டுரைகளின் எண்ணிக்கை"
                >
                  <option value={25}>25 கட்டுரைகள்</option>
                  <option value={50}>50 கட்டுரைகள்</option>
                  <option value={100}>100 கட்டுரைகள் (முழுப் பகுதி)</option>
                </select>
              </div>
            </div>
          </header>

          {/* Interactive Search, Filter & Part Switcher Bar */}
          <div className="anna-search-filter-card" role="search" aria-label="கட்டுரைகளைத் தேடுக மற்றும் வடிகட்டுக">
            <div className="anna-filter-grid">
              {/* Search input */}
              <div className="anna-search-field">
                <label htmlFor="essay-search" className="anna-field-label">
                  🔍 தலைப்பு, ஆண்டு அல்லது எண் மூலம் தேடுக:
                </label>
                <div className="anna-input-wrapper">
                  <input
                    id="essay-search"
                    type="search"
                    className="anna-text-input"
                    placeholder="எ.கா: ரோமாபுரி ராணிகள், 1942, திராவிடநாடு, 5..."
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

              {/* Journal dropdown */}
              <div className="anna-filter-field">
                <label htmlFor="journal-filter" className="anna-field-label">
                  📰 இதழ் வாரியாக வடிகட்டுக:
                </label>
                <select
                  id="journal-filter"
                  className="anna-select-input"
                  value={selectedJournal}
                  onChange={(e) => setSelectedJournal(e.target.value)}
                >
                  <option value="all">அனைத்து இதழ்களும் ({uniqueJournals.length} இதழ்கள்)</option>
                  {uniqueJournals.map((j) => (
                    <option key={j} value={j}>{j}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Live Results Status Bar */}
            <div className="anna-status-bar" aria-live="polite">
              <span className="anna-status-text">
                {searchQuery || selectedJournal !== 'all' ? (
                  <>
                    தேடல் முடிவுகள்: <strong>{filteredEssays.length}</strong> கட்டுரைகள் கண்டறியப்பட்டன (மொத்தம் 1,443-ல்).
                  </>
                ) : (
                  <>
                    தற்போது காட்சியளிப்பது: <strong>பகுதி {selectedPart}</strong> (இப்பகுதியில் {filteredEssays.length} கட்டுரைகள்).
                  </>
                )}
              </span>
              {(searchQuery || selectedJournal !== 'all') && (
                <button
                  type="button"
                  className="button button-secondary button-small"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedJournal('all');
                  }}
                >
                  வடிகட்டலை மீட்டமைக்க (Reset)
                </button>
              )}
            </div>
          </div>

          {/* 15-Part Pagination Bar (When not in global search mode) */}
          {(!searchQuery && selectedJournal === 'all') && (
            <nav className="anna-part-nav" aria-label="கட்டுரைப் பகுதிகள் 1 முதல் 15">
              <div className="anna-part-nav-header">
                <span className="anna-part-nav-title">பகுதிகள் (Parts 1 to 15):</span>
                <span className="anna-part-nav-current">தற்போதைய பகுதி: <strong>{selectedPart}</strong></span>
              </div>
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

          {/* Accessible Table Container */}
          <div className="anna-table-card">
            <div className="anna-table-header-bar">
              <h2 className="anna-table-caption">
                {searchQuery || selectedJournal !== 'all'
                  ? `தேடல் முடிவுகள் பட்டியல் (${filteredEssays.length} கட்டுரைகள்)`
                  : `அறிஞர் அண்ணாவின் கட்டுரைகள் — பகுதி ${selectedPart}`}
              </h2>
              <span className="anna-page-indicator">
                பக்கம் {subPage} / {totalPages}
              </span>
            </div>

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
                    <th scope="col" className="col-action">ஆவணம்</th>
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
                              aria-label={`கட்டுரை விவரங்களை காண்க: ${essay.title}`}
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
                          <td className="col-action">
                            <button
                              type="button"
                              className="anna-row-view-btn"
                              onClick={() => setActiveModalEssay(essay)}
                              aria-label={`விவரம்: ${essay.title}`}
                            >
                              காண்க 👁️
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan="5" className="anna-empty-cell">
                        <div className="anna-empty-state">
                          <p className="anna-empty-title">கட்டுரைகள் எதுவும் கண்டறியப்படவில்லை.</p>
                          <p className="anna-empty-hint">உங்கள் தேடல் சொற்களை மாற்றி முயற்சிக்கவும் அல்லது வடிகட்டலை மீட்டமைக்கவும்.</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Bottom Pagination Controls */}
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

          {/* Next / Previous Part Switcher Navigation */}
          {(!searchQuery && selectedJournal === 'all') && (
            <div className="anna-part-switcher-bottom">
              <button
                type="button"
                className="button button-secondary"
                disabled={selectedPart <= 1}
                onClick={() => setSelectedPart(p => Math.max(1, p - 1))}
              >
                ← முந்தைய பகுதி ({selectedPart > 1 ? selectedPart - 1 : 1})
              </button>
              <span className="anna-part-status-badge">
                பகுதி {selectedPart} / 15 (100 கட்டுரைகள்)
              </span>
              <button
                type="button"
                className="button button-primary"
                disabled={selectedPart >= maxParts}
                onClick={() => setSelectedPart(p => Math.min(maxParts, p + 1))}
              >
                அடுத்த பகுதி ({selectedPart < maxParts ? selectedPart + 1 : maxParts}) →
              </button>
            </div>
          )}

          {/* Archival Research Notes Box */}
          <section className="anna-info-box" aria-labelledby="archive-notes-title">
            <h3 id="archive-notes-title" className="anna-info-title">
              📌 ஆவணக் குறிப்பு (Archival Note)
            </h3>
            <p>
              இக்கட்டுரைகள் யாவும் பேரறிஞர் அண்ணா அவர்கள் திராவிட நாடு, விடுதலை, குடியரசு உள்ளிட்ட பல்வேறு இதழ்களில் எழுதிய வரலாற்றுச் சிறப்புமிக்க மூலப் பதிவுகளாகும். ஆய்வாளர்கள், பேராசிரியர்கள் மற்றும் வாசகர்களின் வசதிக்காக காலவரிசைப்படி எண்ணிடப்பட்டு பாதுகாத்து வழங்கப்பட்டுள்ளன.
            </p>
          </section>

        </div>
      </main>

      {/* Accessible Modal Drawer for Article Details */}
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
                aria-label="விண்டோவை மூடுக (Close modal)"
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
                  <dt>வெளியான காலம் (Date):</dt>
                  <dd>{activeModalEssay.date || 'வரலாற்று ஆவணம்'}</dd>
                </div>
                <div className="anna-modal-meta-row">
                  <dt>வெளியான இதழ் (Journal):</dt>
                  <dd>{activeModalEssay.journal || 'நாளிதழ் / இதழ் பதிவு'}</dd>
                </div>
                <div className="anna-modal-meta-row">
                  <dt>ஆசிரியர் (Author):</dt>
                  <dd>பேரறிஞர் சி. என். அண்ணாதுரை</dd>
                </div>
                <div className="anna-modal-meta-row">
                  <dt>பதிவு எண் (Register ID):</dt>
                  <dd>ANNA-ESSAY-{String(activeModalEssay.no).padStart(4, '0')}</dd>
                </div>
              </dl>

              <div className="anna-modal-quote-box">
                <p>
                  &ldquo;பேரறிஞர் அண்ணாவின் எழுத்துகள் தமிழ் உரைநடை வரலாற்றின் பொற்காலப் பதிவுகளாகும். இவ்வாவணம் அசல் இதழ் பதிவேட்டின்படி துல்லியமாக வரிசைப்படுத்தப்பட்டுள்ளது.&rdquo;
                </p>
              </div>

              <div className="anna-modal-citation-box">
                <strong>மேற்கோள் வடிவம் (Citation):</strong>
                <p className="anna-citation-text">
                  அண்ணாதுரை, சி. என். &ldquo;{activeModalEssay.title}&rdquo;, <em>{activeModalEssay.journal || 'இதழ்'}</em>, {activeModalEssay.date || 'காலம்'}. பேரறிஞர் அண்ணாவின் படைப்புகள் எண்ணிம ஆவணகம் (எண் #{activeModalEssay.no}).
                </p>
              </div>
            </div>

            <div className="anna-modal-footer">
              <button
                type="button"
                className="button button-secondary"
                onClick={() => setActiveModalEssay(null)}
              >
                மூடுக (Close)
              </button>
              <button
                type="button"
                className="button button-primary"
                onClick={() => {
                  navigator.clipboard?.writeText(
                    `அண்ணாதுரை, சி. என். "${activeModalEssay.title}", ${activeModalEssay.journal}, ${activeModalEssay.date}.`
                  );
                  alert('மேற்கோள் நகலெடுக்கப்பட்டது (Citation copied to clipboard)!');
                }}
              >
                📋 மேற்கோளை நகலெடு
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
            <p className="anna-loading-text">ஆவணப் பதிவேடு ஏற்றப்படுகிறது...</p>
          </div>
        </main>
        <AnnaArchiveFooter />
      </div>
    }>
      <KatturaigalRegister />
    </Suspense>
  );
}
