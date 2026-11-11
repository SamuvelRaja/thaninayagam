import Link from "next/link";

/** Original homepage presentation, retained alongside the new navigation. */
export function OriginalHomeIntro({ lang }: { lang: "ta" | "en" }) {
  return lang === "ta" ? <>
<section className="hero section-hero">
          <div className="hero-landmark" aria-hidden="true">
            <svg
              className="hero-geom-svg"
              viewBox="0 0 500 500"
              width="500"
              height="500"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="250" cy="250" r="230" strokeWidth="1" strokeDasharray="4 6" opacity="0.4" />
              <circle cx="250" cy="250" r="180" strokeWidth="1" opacity="0.5" />
              <circle cx="250" cy="250" r="130" strokeWidth="1" strokeDasharray="2 8" opacity="0.4" />
              <circle cx="250" cy="250" r="80" strokeWidth="1" opacity="0.6" />
              <line x1="10" y1="250" x2="490" y2="250" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
              <line x1="250" y1="10" x2="250" y2="490" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
              <circle cx="250" cy="250" r="4" fill="currentColor" opacity="0.8" />
              <circle cx="250" cy="70" r="3" fill="currentColor" opacity="0.6" />
              <circle cx="250" cy="430" r="3" fill="currentColor" opacity="0.6" />
              <circle cx="70" cy="250" r="3" fill="currentColor" opacity="0.6" />
              <circle cx="430" cy="250" r="3" fill="currentColor" opacity="0.6" />
            </svg>
          </div>
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">1913 — 1980 · பன்மொழிப் பேரறிஞர்</p>
              <h1 className="display-1">
                <span className="hero-title-prefix">அருள்திரு. முனைவர் சேவியர்</span>
                <span className="hero-title-name">தனிநாயகம் அடிகள்</span>
              </h1>
              <p className="hero-quote">“தமிழ்த்தூதுவர்”</p>
              <p className="lede">
                கத்தோலிக்க குரு, பன்மொழிப் புலவர், இதழாசிரியர் — &apos;Tamil Culture&apos; சர்வதேச ஆய்விதழ், உலகத் தமிழாராய்ச்சி மன்றம் (IATR), 1966 கோலாலம்பூர் மாநாடு ஆகியவற்றின் வழியே தமிழ் மொழியின் செவ்வியல் சிறப்பையும் தொன்மையையும் உலகப் பல்கலைக்கழகங்களின் ஆய்வுக்களத்திற்கு எடுத்துச் சென்ற பெருமகனார்.
              </p>
              <div className="btn-row">
                <Link className="btn btn-primary" href="/archive/">
                  ஆவணகத்தை ஆராய்க
                </Link>
                <Link className="btn btn-ghost" href="/about/">
                  முழு வாழ்க்கை வரலாறு
                </Link>
              </div>
            </div>
            <figure className="plate plate--hero hero-plate">
              <div className="plate-mat">
                <img
                  src="/tna.webp" fetchPriority="high" loading="eager"
                  alt="அருள்திரு. தனிநாயக அடிகளாரின் வரலாற்று ஆவணப் படம் (1913–1980)"
                  width={640}
                  height={809}
                />
              </div>
              <figcaption>அருள்திரு. தனிநாயக அடிகளாரின் வரலாற்று ஆவணப் படம் (1913–1980)</figcaption>
            </figure>
          </div>
        </section>

        {/* Epigraph */}
        <section className="epigraph section-epigraph">
          <div className="container">
            <blockquote>
              <p className="ta">“யாதும் ஊரே யாவரும் கேளிர்”</p>
              <p className="en">Every town is our hometown; every person is our kin.</p>
              <p className="meta">— புறநானூறு 192, கணியன் பூங்குன்றனார்</p>
            </blockquote>
          </div>
        </section>

        {/* Key Metrics Stats */}
        <section className="stat-band section-stats" aria-label="வரலாற்றுப் பெருவெற்றிகள்">
          <div className="container">
            <div className="stat-cell">
              <div className="stat-num">200+</div>
              <div className="stat-badge">ஓராண்டில் 200+ உலக விரிவுரைகள்</div>
              <div className="stat-title">உலகளாவிய கல்வித் தூதுப்பணி (1954–55)</div>
              <div className="stat-detail">
                ஐரோப்பா, அமெரிக்கா, ஆசிய நாடுகள் எங்கும் ஓராண்டில் 200-க்கும் மேற்பட்ட பல்கலைக்கழக விரிவுரைகளை ஆற்றித் தமிழின் செவ்வியல் சிறப்பை உலகிற்கு உணர்த்திய வரலாற்றுப் பயணம்.
              </div>
            </div>
            <div className="stat-cell">
              <div className="stat-num">12+</div>
              <div className="stat-badge">பன்மொழிப் புலமை</div>
              <div className="stat-title">சர்வதேச மொழியியல் தேர்ச்சி</div>
              <div className="stat-detail">
                தமிழ், ஆங்கிலம், இலத்தீன், கிரேக்கம், பிரெஞ்சு, ஜெர்மன், இத்தாலியன், ஸ்பானிஷ், போர்த்துக்கீசியம் உள்ளிட்ட 12-க்கும் மேற்பட்ட செம்மொழிகள் மற்றும் உலக மொழிகளில் ஆழ்ந்த புலமை.
              </div>
            </div>
            <div className="stat-cell">
              <div className="stat-num">4</div>
              <div className="stat-badge">உலகத் தமிழ் மாநாடுகள்</div>
              <div className="stat-title">வரலாற்று மாநாடுகளின் நாயகர்</div>
              <div className="stat-detail">
                கோலாலம்பூர் (1966), சென்னை (1968), பாரிஸ் (1970), யாழ்ப்பாணம் (1974) ஆகிய முதல் நான்கு உலகத் தமிழாராய்ச்சி மாநாடுகளை முன்னின்று ஒருங்கிணைத்துத் தமிழியலை உலக அரங்கில் நிலைநிறுத்தினார்.
              </div>
            </div>
            <div className="stat-cell">
              <div className="stat-num">14</div>
              <div className="stat-badge">14 ஆண்டுகள் தொடர் ஆய்வு இதழியல்</div>
              <div className="stat-title">‘Tamil Culture’ சர்வதேச ஆய்விதழின் நிறுவனர்</div>
              <div className="stat-detail">
                தமிழாய்வை உலகப் பல்கலைக்கழகங்களின் கல்வி உரையாடலாக உயர்த்திய புகழ்பெற்ற ஆங்கிலக் காலாண்டு ஆய்விதழின் நிறுவனர் மற்றும் முதன்மை ஆசிரியர்.
              </div>
            </div>
          </div>
        </section>
  </> : <>
<section className="hero section-hero">
          <div className="hero-landmark" aria-hidden="true">
            <svg
              className="hero-geom-svg"
              viewBox="0 0 500 500"
              width="500"
              height="500"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="250" cy="250" r="230" strokeWidth="1" strokeDasharray="4 6" opacity="0.4" />
              <circle cx="250" cy="250" r="180" strokeWidth="1" opacity="0.5" />
              <circle cx="250" cy="250" r="130" strokeWidth="1" strokeDasharray="2 8" opacity="0.4" />
              <circle cx="250" cy="250" r="80" strokeWidth="1" opacity="0.6" />
              <line x1="10" y1="250" x2="490" y2="250" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
              <line x1="250" y1="10" x2="250" y2="490" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
              <circle cx="250" cy="250" r="4" fill="currentColor" opacity="0.8" />
              <circle cx="250" cy="70" r="3" fill="currentColor" opacity="0.6" />
              <circle cx="250" cy="430" r="3" fill="currentColor" opacity="0.6" />
              <circle cx="70" cy="250" r="3" fill="currentColor" opacity="0.6" />
              <circle cx="430" cy="250" r="3" fill="currentColor" opacity="0.6" />
            </svg>
          </div>
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">1913 — 1980 · Polyglot Scholar-Priest</p>
              <h1 className="display-1"><span className="hero-title-prefix">Rev. Dr. Xavier S.</span><span className="hero-title-name">Thani Nayagam</span></h1>
              <p className="hero-quote">“Global Ambassador of Tamil Studies”</p>
              <p className="lede">
                Catholic priest, polyglot scholar, and founding editor who placed classical Tamil scholarship on the global academic map through the Tamil Culture quarterly, the International Association for Tamil Research (IATR), and landmark world conferences.
              </p>
              <div className="btn-row">
                <Link className="btn btn-primary" href="/en/archive/">
                  Explore the Archive
                </Link>
                <Link className="btn btn-ghost" href="/en/about/">
                  Read Biography
                </Link>
              </div>
            </div>
            <figure className="plate plate--hero hero-plate">
              <div className="plate-mat">
                <img
                  src="/tna.webp" fetchPriority="high" loading="eager"
                  alt="Rev. Dr. Xavier S. Thani Nayagam archival photograph"
                  width={640}
                  height={809}
                />
              </div>
              <figcaption>Rev. Dr. Xavier S. Thani Nayagam Archival Portrait (1913–1980)</figcaption>
            </figure>
          </div>
        </section>

        {/* Epigraph */}
        <section className="epigraph section-epigraph">
          <div className="container">
            <blockquote>
              <p className="ta">“யாதும் ஊரே யாவரும் கேளிர்”</p>
              <p className="en">Every town is our hometown; every person is our kin.</p>
              <p className="meta">— புறநானூறு 192, கணியன் பூங்குன்றனார்</p>
            </blockquote>
          </div>
        </section>

        {/* Metrics Stats */}
        <section className="stat-band section-stats" aria-label="Key Archival Metrics">
          <div className="container">
            <div className="stat-cell">
              <div className="stat-num">200+</div>
              <div className="stat-badge">200+ Global Lectures in 1 Year</div>
              <div className="stat-title">Global Academic Diplomacy (1954–55)</div>
              <div className="stat-detail">
                Delivered over 200 lectures across Europe, the Americas, and Asia to awaken international scholars to classical Tamil.
              </div>
            </div>
            <div className="stat-cell">
              <div className="stat-num">12+</div>
              <div className="stat-badge">12+ Languages Mastered</div>
              <div className="stat-title">Polyglot Linguistic Scholarship</div>
              <div className="stat-detail">
                Profound mastery of Tamil, English, Latin, Greek, French, German, Italian, Spanish, Portuguese, and other classical and modern world languages.
              </div>
            </div>
            <div className="stat-cell">
              <div className="stat-num">4</div>
              <div className="stat-badge">4 World Tamil Conferences</div>
              <div className="stat-title">Architect of Global Tamil Summits</div>
              <div className="stat-detail">
                Convened and guided the first four landmark International Conferences of Tamil Studies: Kuala Lumpur (1966), Madras (1968), Paris (1970), and Jaffna (1974).
              </div>
            </div>
            <div className="stat-cell">
              <div className="stat-num">14</div>
              <div className="stat-badge">14-Year Scholarly Journal</div>
              <div className="stat-title">Founder-Editor of &apos;Tamil Culture&apos;</div>
              <div className="stat-detail">
                Founded and edited the premier peer-reviewed research quarterly (1952–1966), carrying Tamil into world universities.
              </div>
            </div>
          </div>
        </section>
  </>;
}
