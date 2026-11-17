import { BrushText } from "@/components/ui/BrushText";
import { PaymentCards } from "@/components/interactive/PaymentCards";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { TributeHero } from "@/components/ui/TributeHero";

export default function SponsorsPage() {
  const collabCards = [
    {
      num: "01",
      icon: "📚",
      title: "விடுபட்ட நூல்கள் & படைப்புகள்",
      desc: "தனிநாயக அடிகளாரின் விடுபட்ட நூல்கள், ஆய்வுக் கட்டுரைகள், ‘Tamil Culture’ அரிய இதழ்கள், கடிதங்கள் அல்லது வரலாற்றுப் புகைப்படங்கள் உங்களிடம் இருப்பின் அவற்றின் படங்களையோ தகவல்களையோ பகிர்ந்து ஆவணகத்தை வளர்த்தெடுக்க உதவலாம்.",
    },
    {
      num: "02",
      icon: "🔍",
      title: "விடுபட்ட தகவல்கள் & ஆவணக் குறிப்புகள்",
      desc: "அடிகளாரின் உலகளாவிய பயணங்கள், சர்வதேச மாநாடுகள், சொற்பொழிவுகள் மற்றும் வரலாற்று நிகழ்வுகள் குறித்த விடுபட்ட தகவல்கள், ஆவணக் குறிப்புகள் அல்லது திருத்தங்களைத் தந்து ஆவணகத்தை முழுமைப்படுத்தலாம்.",
    },
    {
      num: "03",
      icon: "💬",
      title: "கருத்துகள் & ஆலோசனைகள்",
      desc: "இணையதள வடிவமைப்பு, வாசிப்புத் தரம், ஒருங்குறி மெய்ப்புத் திருத்தம் மற்றும் ஆவணகத்தை மேலும் செம்மைப்படுத்துவதற்கான உங்கள் மேலான கருத்துகளையும் ஆலோசனைகளையும் எங்களுக்குத் தெரிவிக்கலாம்.",
    },
  ];

  return (
    <>
      <Header lang="ta" current="sponsors" />
      <main id="main" className="brush-page">
        <PageHeader
          lang="ta"
          slug="sponsors"
          title="அடிகளாரின் தமிழ்ப்பணியை உலகறியச் செய்வோம்"
          lead="அருள்திரு. முனைவர் அமுதன் அடிகள் காட்டிய வழியிலும் வழிகாட்டலிலும் முன்னெடுக்கப்படும் இந்த ஆவணகத்திற்கு உங்கள் ஆதரவும் பங்களிப்பும் துணைநிற்கட்டும்."
        />

        {/* Section 01: Tribute Hero */}
        <TributeHero lang="ta" />

        {/* Section 02: Financial Support */}
        <section className="section section-donation-tiers" id="donate">
          <div className="container">
            <div className="donation-intro-box">
              <h2 className="section-subhead"><BrushText>இணையதளப் பராமரிப்பு மற்றும் ஆவணப் பாதுகாப்பு நிதி</BrushText></h2>
              <p className="lede">
                ஆவணகத்தை இயக்கவும் பராமரிக்கவும் தேவைப்படும் தொழில்நுட்ப மற்றும் ஆவணப் பணிகளுக்காக நிதி உதவி வழங்க விரும்புவோர் பின்வரும் வழிகளில் நேரடியாக அனுப்பலாம். உங்கள் நிதி உதவி இப்பணியைத் தடையின்றித் தொடர்ந்து முன்னெடுக்க உதவும்.
              </p>
            </div>

            <PaymentCards lang="ta" />

            {/* Donor Intimation */}
            <div className="intimation-card" style={{ marginTop: "32px" }}>
              <div className="intimation-icon" aria-hidden="true">
                <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>
              <div className="intimation-content">
                <h3>நிதி அனுப்பிய பின் எங்களுக்குத் தகவல் அளியுங்கள்</h3>
                <p>
                  நீங்கள் நிதி உதவி அனுப்பிய பின், பரிவர்த்தனை குறிப்பு எண் அல்லது ரசீதை (Screenshot / UTR Number) எங்களது WhatsApp எண்ணிற்கு அனுப்பித் தெரியப்படுத்தவும்.
                </p>
                <div className="intimation-actions">
                  <a
                    href="https://wa.me/917200111312?text=%E0%AE%B5%E0%AE%A3%E0%AE%95%E0%AF%8D%E0%AE%95%E0%AE%AE%E0%AF%8D%2C%20%E0%AE%A4%E0%AE%A9%E0%AE%BF%E0%AE%A8%E0%AE%BE%E0%AE%AF%E0%AE%95%E0%AE%AE%E0%AF%8D%20%E0%AE%85%E0%AE%9F%E0%AE%BF%E0%AE%95%E0%AE%B3%E0%AF%8D%20%E0%AE%86%E0%AE%B5%E0%AE%A3%E0%AE%95%E0%AE%AA%E0%AF%8D%20%E0%AE%AA%E0%AE%A3%E0%AE%BF%E0%AE%95%E0%AF%8D%E0%AE%95%E0%AE%BE%E0%AE%A9%20%E0%AE%A8%E0%AE%BF%E0%AE%A4%E0%AE%BF%20%E0%AE%89%E0%AE%A4%E0%AE%B5%E0%AE%BF%20%E0%AE%85%E0%AE%A9%E0%AF%81%E0%AE%AA%E0%AF%8D%E0%AE%AA%E0%AE%BF%E0%AE%AF%E0%AF%81%E0%AE%B3%E0%AF%8D%E0%AE%B3%E0%AF%87%E0%AE%A9%E0%AF%8D."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-intimate-btn"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.03C9.36 7.03 9.09 7.09 8.85 7.35C8.62 7.6 7.96 8.22 7.96 9.48C7.96 10.74 8.88 11.95 9.01 12.12C9.14 12.3 10.82 14.88 13.38 15.99C15.52 16.91 15.96 16.73 16.42 16.69C16.88 16.65 17.9 16.08 18.11 15.49C18.32 14.9 18.32 14.39 18.26 14.29C18.2 14.19 18.03 14.13 17.78 14C17.53 13.88 16.28 13.27 16.05 13.18C15.82 13.1 15.65 13.06 15.48 13.31C15.31 13.56 14.83 14.13 14.68 14.3C14.53 14.47 14.38 14.5 14.13 14.37C13.88 14.25 12.83 13.9 11.58 12.79C10.61 11.93 9.96 10.87 9.83 10.65C9.71 10.43 9.81 10.31 9.94 10.19C10.05 10.08 10.19 9.9 10.32 9.75C10.45 9.6 10.49 9.48 10.57 9.31C10.65 9.14 10.61 9 10.55 8.88C10.49 8.76 10.02 7.61 9.83 7.15C9.64 6.7 9.45 6.76 9.31 6.75C9.18 6.75 9.03 6.75 8.88 6.75L9.53 7.03Z"/>
                    </svg>
                    <span>WhatsApp-ல் தகவல் அனுப்ப: 7200111312</span>
                    <span className="btn-arrow" aria-hidden="true">→</span>
                  </a>
                  <span className="intimation-alt">
                    மின்னஞ்சல் மூலம் உறுதிப்படுத்த: <a href="mailto:kesavan@alarveliyeedu.com">kesavan@alarveliyeedu.com</a>
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
              <h2 className="section-subhead"><BrushText>விடுபட்ட படைப்புகள், தகவல்கள் & உங்கள் மேலான கருத்துகள்</BrushText></h2>
              <p className="lede">
                அடிகளாரின் தமிழ்ப்பணியை உலகிற்கு முழுமையாகக் கொண்டு சேர்க்க, விடுபட்ட நூல்கள், ஆவணக் குறிப்புகள் மற்றும் உங்கள் மேலான கருத்துகளைப் பகிர்ந்து உதவலாம்.
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
                தகவல்கள் & ஆலோசனைகள் பகிர: kesavan@alarveliyeedu.com →
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
                <h3>100% கட்டணமற்ற திறந்தவெளி ஆவணக உறுதிமொழி</h3>
                <p>
                  ஆவணகத்திற்கு வழங்கப்படும் அனைத்து நிதி மற்றும் ஆவணப் பங்களிப்புகளும், தனிநாயக அடிகளாரின் அறிவுச் செல்வத்தை உலகத் தமிழர்களுக்கும் எதிர்கால ஆய்வாளர்களுக்கும் எக்காலத்திற்கும் கட்டணமின்றித் திறந்தவெளியில் வழங்குவதற்காக மட்டுமே பயன்படுத்தப்படுகிறது. விளம்பரங்களோ, சந்தாக் கட்டணங்களோ ஒருபோதும் கிடையாது.
                </p>
                <div className="tribute-footnote">
                  <span className="tf-icon">💐</span>
                  <span>
                    தனிநாயக அடிகளாரின் அறிவுப் பெருவாழ்வை 30 ஆண்டுகள் ஆவணப்படுத்தி முதன்முதலாக வரலாற்று நூலை ஆக்கிய முன்னோடி அருள்திரு. முனைவர் அமுதன் அடிகள் காட்டிய வழியிலும் வழிகாட்டலுடனும் இந்த ஆவணக முயற்சி தொடர்ந்து முன்னெடுக்கப்படுகிறது.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="ta" />
    </>
  );
}
