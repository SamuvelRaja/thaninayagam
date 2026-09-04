import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHead } from "@/components/layout/SectionHead";
import { TributeHero } from "@/components/ui/TributeHero";
import { PaymentCards } from "@/components/interactive/PaymentCards";

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
      desc: "இணையதள வடிவமைப்பு, வாசிப்புத் தரம், ஒருங்குறி மெய்ப்புத் திருத்தம் மற்றும் இவ்வெண்மிய ஆவணகத்தை மேலும் செம்மைப்படுத்துவதற்கான உங்கள் மேலான கருத்துகளையும் ஆலோசனைகளையும் எங்களுக்குத் தெரிவிக்கலாம்.",
    },
  ];

  return (
    <>
      <Header lang="ta" current="sponsors" />
      <main id="main">
        <PageHeader
          slug="sponsors"
          title="அடிகளாரின் தமிழ்ப்பணியை உலகறியச் செய்வோம்"
          lead="அருள்திரு. முனைவர் அமுதன் அடிகள் காட்டிய வழியிலும் வழிகாட்டலிலும் முன்னெடுக்கப்படும் இவ்வெண்மிய ஆவணகத்திற்கு உங்கள் ஆதரவும் பங்களிப்பும் துணைநிற்கட்டும்."
        />

        {/* Section 01: Tribute Hero */}
        <TributeHero lang="ta" />

        {/* Section 02: Financial Support */}
        <section className="section section-donation-tiers" id="donate">
          <div className="container">
            <SectionHead
              num="02"
              title="இணையதளப் பராமரிப்பு நிதி"
              scope="முதன்மை உதவி"
            />
            <div className="donation-intro-box">
              <h2 className="display-2">இணையதளப் பராமரிப்பு மற்றும் ஆவணப் பாதுகாப்பு நிதி</h2>
              <p className="lede">
                இவ்வெண்மிய ஆவணகத்தின் சர்வர் பராமரிப்பு, மேகக்கணி சேமிப்பகம் (Cloud Hosting) மற்றும் தொடர்ச்சியான ஆவணப் பணிகளுக்காக நிதி உதவி வழங்க விரும்புவோர் பின்வரும் வழிகளில் நேரடியாக அனுப்பலாம். உங்கள் நிதி உதவி இவ்வெண்மியப் பணியைத் தடையின்றித் தொடர்ந்து முன்னெடுக்க உதவும்.
              </p>
            </div>

            <PaymentCards lang="ta" />

            {/* Donor Intimation */}
            <div className="intimation-card" style={{ marginTop: "32px" }}>
              <div className="intimation-icon">📜</div>
              <div className="intimation-content">
                <p className="eyebrow">நன்கொடைத் தகவல் & ரசீது</p>
                <h3>நிதி அனுப்பிய பின் எங்களுக்குத் தகவல் அளியுங்கள்</h3>
                <p>
                  நீங்கள் நிதி அனுப்பியவுடன், பரிவர்த்தனை குறிப்பு எண்ணை (UTR / Reference Number){" "}
                  <strong>donations@thaninayagam.org</strong> முகவரிக்கு மின்னஞ்சல் செய்யவும். நாங்கள் அதிகாரப்பூர்வ எண்மிய ரசீதை அனுப்பி வைப்போம்.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 03: Help Grow the Archive */}
        <section className="section section-volunteers">
          <div className="container">
            <SectionHead
              num="03"
              title="ஆவணகத்தை வளர்த்தெடுக்க உதவுங்கள்"
              scope="தகவல்கள் & ஆலோசனைகள்"
            />
            <div className="section-lead-box">
              <h2 className="display-2">விடுபட்ட படைப்புகள், தகவல்கள் & உங்கள் மேலான கருத்துகள்</h2>
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
              <a href="mailto:volunteer@thaninayagam.org" className="btn btn-ghost">
                தகவல்கள் & ஆலோசனைகள் பகிர: volunteer@thaninayagam.org →
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
                  இவ்வெண்மிய ஆவணகத்திற்கு வழங்கப்படும் அனைத்து நிதி மற்றும் ஆவணப் பங்களிப்புகளும், தனிநாயக அடிகளாரின் அறிவுச் செல்வத்தை உலகத் தமிழர்களுக்கும் எதிர்கால ஆய்வாளர்களுக்கும் எக்காலத்திற்கும் கட்டணமின்றித் திறந்தவெளியில் வழங்குவதற்காக மட்டுமே பயன்படுத்தப்படுகிறது. விளம்பரங்களோ, சந்தாக் கட்டணங்களோ ஒருபோதும் கிடையாது.
                </p>
                <div className="tribute-footnote">
                  <span className="tf-icon">💐</span>
                  <span>
                    தனிநாயக அடிகளாரின் அறிவுப் பெருவாழ்வை 30 ஆண்டுகள் ஆவணப்படுத்தி முதன்முதலாக வரலாற்று நூலை ஆக்கிய முன்னோடி அருள்திரு. முனைவர் அமுதன் அடிகள் காட்டிய வழியிலும் அவரது ஆசிகளுடனும் வழிகாட்டலுடனும் இவ்வெண்மிய ஆவணக முயற்சி தொடர்ந்து முன்னெடுக்கப்படுகிறது.
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
