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
              <div className="intimation-icon">📜</div>
              <div className="intimation-content">
                <h3>Notify Us After Contributing</h3>
                <p>
                  After completing your transfer, please email your transaction reference (UTR / Receipt) to <a href="mailto:kesavan@alarveliyeedu.com">kesavan@alarveliyeedu.com</a> so we can send an acknowledgement.
                </p>
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
