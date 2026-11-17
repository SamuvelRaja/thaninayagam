import { PaymentCards } from "@/components/interactive/PaymentCards";
import { BrushText } from "@/components/ui/BrushText";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { TributeHero } from "@/components/ui/TributeHero";
import { STRINGS } from "@/lib/data";

export const metadata: Metadata = {
  title: STRINGS.en.title,
  description: STRINGS.en.desc,
};

export default function EnglishSponsorsPage() {
  const collabCards = [
    {
      num: "01",
      icon: "📚",
      title: "Missing Works & Articles",
      desc: "If you have access to missing books, monographs, rare Tamil Culture issues, letters, or photographs of Father Thani Nayagam, please share scans or bibliographic details.",
    },
    {
      num: "02",
      icon: "🔍",
      title: "Missing Archival & Biographical Details",
      desc: "Help us complete the archive with missing dates, lecture transcripts, conference records, university correspondences, or verified biographical details.",
    },
    {
      num: "03",
      icon: "💬",
      title: "Feedback & Suggestions",
      desc: "Share your feedback, bug reports, proofreading corrections, or suggestions to help us continuously improve the reading experience and preservation quality.",
    },
  ];

  return (
    <>
      <Header lang="en" current="sponsors" />
      <main id="main" className="brush-page">
        <PageHeader
          lang="en"
          slug="sponsors"
          title="Showcasing Father Thani Nayagam’s Legacy to the World"
          lead="Guided by the lifelong archival work of Rev. Dr. Amudhan Adigal, this open-access initiative preserves and shares Father Thani Nayagam’s global scholarship."
        />

        {/* Section 01: Tribute Hero */}
        <TributeHero lang="en" />

        {/* Section 02: Financial Support */}
        <section className="section section-donation-tiers" id="donate">
          <div className="container">
            <div className="donation-intro-box">
              <h2 className="section-subhead"><BrushText>Archive & Website Maintenance Fund</BrushText></h2>
              <p className="lede">
                For those who wish to support the technology and documentation work involved to run and maintain this archive, direct contributions can be made via the details below.
              </p>
            </div>

            <PaymentCards lang="en" />

            {/* Donor Intimation */}
            <div className="intimation-card" style={{ marginTop: "32px" }}>
              <div className="intimation-icon" aria-hidden="true">
                <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>
              <div className="intimation-content">
                <h3>Notify Us After Contributing</h3>
                <p>
                  After completing your transfer, please share your transaction reference (Screenshot / UTR Number) to our WhatsApp number so we can acknowledge your support and issue an official digital receipt.
                </p>
                <div className="intimation-actions">
                  <a
                    href="https://wa.me/917200111312?text=Hello%2C%20I%20have%20contributed%20to%20the%20Father%20Thani%20Nayagam%20Archive%20initiative."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-intimate-btn"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.03C9.36 7.03 9.09 7.09 8.85 7.35C8.62 7.6 7.96 8.22 7.96 9.48C7.96 10.74 8.88 11.95 9.01 12.12C9.14 12.3 10.82 14.88 13.38 15.99C15.52 16.91 15.96 16.73 16.42 16.69C16.88 16.65 17.9 16.08 18.11 15.49C18.32 14.9 18.32 14.39 18.26 14.29C18.2 14.19 18.03 14.13 17.78 14C17.53 13.88 16.28 13.27 16.05 13.18C15.82 13.1 15.65 13.06 15.48 13.31C15.31 13.56 14.83 14.13 14.68 14.3C14.53 14.47 14.38 14.5 14.13 14.37C13.88 14.25 12.83 13.9 11.58 12.79C10.61 11.93 9.96 10.87 9.83 10.65C9.71 10.43 9.81 10.31 9.94 10.19C10.05 10.08 10.19 9.9 10.32 9.75C10.45 9.6 10.49 9.48 10.57 9.31C10.65 9.14 10.61 9 10.55 8.88C10.49 8.76 10.02 7.61 9.83 7.15C9.64 6.7 9.45 6.76 9.31 6.75C9.18 6.75 9.03 6.75 8.88 6.75L9.53 7.03Z"/>
                    </svg>
                    <span>Message on WhatsApp: +91 7200111312</span>
                    <span className="btn-arrow" aria-hidden="true">→</span>
                  </a>
                  <span className="intimation-alt">
                    Or confirm via email: <a href="mailto:kesavan@alarveliyeedu.com">kesavan@alarveliyeedu.com</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 03: Help Grow the Archive */}
        <section className="section section-volunteers">
          <div className="container">
            <div className="section-lead-box">
              <h2 className="section-subhead"><BrushText>Missing Works, Archival Information & Feedback</BrushText></h2>
              <p className="lede">
                Help us expand and refine this archive by sharing missing documents, archival context, or feedback on how we can improve.
              </p>
            </div>
            <div className="vol-grid">
              {collabCards.map((v) => (
                <div className="vol-card" key={v.num}>
                  <div className="vol-num">{v.num}</div>
                  <div className="vol-icon">{v.icon}</div>
                  <h3 className="vol-title">{v.title}</h3>
                  <p className="vol-desc">{v.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "36px" }}>
              <a href="mailto:kesavan@alarveliyeedu.com" className="btn btn-ghost">
                Share Information & Feedback: kesavan@alarveliyeedu.com →
              </a>
            </div>
          </div>
        </section>

        {/* Section 04: Open-Access Charter */}
        <section className="section section-charter">
          <div className="container">
            <div className="charter-box">
              <div className="charter-emblem">🛡️</div>
              <div className="charter-text">
                <h3>100% Free & Open-Access Ethical Charter</h3>
                <p>
                  All contributions directly fund the perpetual, open-access preservation of Father Thani Nayagam’s complete intellectual corpus. The library operates entirely non-commercially with no paywalls, subscriptions, or ads.
                </p>
                <div className="tribute-footnote">
                  <span className="tf-icon">💐</span>
                  <span>
                    Dedicated in enduring gratitude and guided by the foundational work of Rev. Dr. Amudhan Adigal (b. 1943), whose 30-year archival dedication produced the landmark 1993 biography of Father Thani Nayagam.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </>
  );
}
