import Link from "next/link";

export function ArchiveArrow() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6" /></svg>;
}

export function LivingHero({ lang }: { lang: "ta" | "en" }) {
  const ta = lang === "ta";
  const prefix = ta ? "" : "/en";
  return <section className="living-hero brush-hero" aria-labelledby="living-title">
    <div className="container brush-hero-topline"><span>{ta ? "தனிநாயக அடிகள் ஆவணகம்" : "The Thani Nayagam archive"}</span><span>{ta ? "ஒரு மொழி. உலகளாவிய உரையாடல்." : "One language. A world of connections."}</span></div>
    <div className="container brush-hero-grid">
      <div className="brush-hero-copy">
        <div className="brush-hero-title">
        <p className="living-kicker living-hero-kicker">{ta ? "தமிழ்த்தூதுவர்" : "The Tamil ambassador"}<span>1913 — 1980</span></p>
        <h1 id="living-title" className={ta ? "brush-main-title" : "brush-main-title brush-title-en"}>
          {ta ? (
            <>
              <span className="brush-title-line line-1"><span className="brush-heading-mark"><span className="brush-heading-ink">தமிழ்த்தாயின்</span></span></span>{" "}
              <span className="brush-title-line line-2"><span className="brush-heading-mark"><span className="brush-heading-ink">உலகத்</span></span></span>{" "}
              <span className="brush-title-line line-3"><span className="brush-heading-mark"><span className="brush-heading-ink"><em>தூதர்.</em></span></span></span>
            </>
          ) : (
            <>
              <span className="brush-title-line line-1"><span className="brush-heading-mark"><span className="brush-heading-ink">Tamil.</span></span></span>{" "}
              <span className="brush-title-line line-2"><span className="brush-heading-mark"><span className="brush-heading-ink">Without</span></span></span>{" "}
              <span className="brush-title-line line-3"><span className="brush-heading-mark"><span className="brush-heading-ink"><em>Borders.</em></span></span></span>
            </>
          )}
        </h1>
        <p className="living-hero-person">{ta ? "அருள்திரு. முனைவர் சேவியர் தனிநாயகம் அடிகள்" : "Rev. Dr. Xavier S. Thani Nayagam"}</p>
        </div>
        <div className="brush-hero-story">
        <p className="living-hero-lede">{ta ? "தமிழின் வழியே உலகை இணைத்த ஓர் அறிஞர். தனிநாயக அடிகளாரின் எழுத்துகள், ஆய்வுகள், உலகப் பயணங்கள் வழியே அந்த அறிவுப் பயணத்தைத் தொடருங்கள்." : "A scholar who connected the world through Tamil. Follow Thani Nayagam’s life through his writings, research, and journeys across languages and continents."}</p>
        <div className="living-hero-actions">
          <a className="living-button living-button-primary" href="#documents">{ta ? "வாசிக்கத் தொடங்குங்கள்" : "Start exploring"}<ArchiveArrow /></a>
          <Link className="living-button living-button-secondary" href={`${prefix}/about/`}>{ta ? "வாழ்க்கை வரலாறு" : "His life"}<ArchiveArrow /></Link>
        </div>
        <div className="living-hero-footnote">
          <p className="living-hero-roles">{ta ? "பன்மொழிப் புலவர் · பேராசிரியர் · இதழாசிரியர்" : "Scholar · Teacher · Editor"}</p>
          <details className="living-hero-source"><summary>{ta ? "வாழ்க்கை வரலாற்றிலிருந்து" : "From his biography"}<svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="m4 6 4 4 4-4" /></svg></summary><p>{ta ? <>அமுதன் அடிகள், <cite>தனிநாயகம் அடிகளார்</cite> (1993), பக். 8–11, 65–71, 97–108. அவரது தமிழ்க் கல்வி, அறிஞர்களை இணைத்த பணி, ஆய்விதழியல் ஆகியவற்றை அடிப்படையாகக் கொண்ட அறிமுகம்.</> : <>Amudhan Adigal, <cite>Thani Nayagam Adigal</cite> (1993), pp. 8–11, 65–71, 97–108. This introduction draws on his Tamil studies, scholarly collaboration, and journal publishing.</>}</p></details>
        </div>
        </div>
      </div>
      <figure className="brush-portrait">
        <img className="brush-sun brush-sun-round brush-painted-blue" src="/images/brush/blue-sun.webp" width={1254} height={1254} alt="" aria-hidden="true" />
        <img className="brush-portrait-person" src="/images/brush/thani-nayagam-cutout.webp" width={1115} height={1410} alt={ta ? "அருள்திரு. தனிநாயகம் அடிகள்" : "Father Thani Nayagam"} fetchPriority="high" loading="eager" />
        <span className="brush-ground" aria-hidden="true" />
        <figcaption>
          <span>{ta ? "அருள்திரு. தனிநாயகம் அடிகள்" : "Father Thani Nayagam"}</span>
          <span>1913 — 1980</span>
        </figcaption>
      </figure>
    </div>
    <div className="brush-hero-bottom"><div className="container"><span>{ta ? "ஒரு வாழ்வின் சுவடுகள். அனைவருக்கும் திறந்த ஆவணகம்." : "A lifetime of discovery. An archive open to everyone."}</span><a href="#journey"><span className="brush-scroll-icon" aria-hidden="true">↓</span>{ta ? "அவரது பயணத்தை அறியுங்கள்" : "Trace his journey"}</a></div></div>
  </section>;
}
