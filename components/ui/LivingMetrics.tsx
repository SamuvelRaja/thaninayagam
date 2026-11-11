export function LivingMetrics({ lang }: { lang: "ta" | "en" }) {
  const ta = lang === "ta";
  const metrics = [
    { value: "9", label: ta ? "ஆழ்ந்து பயின்ற மொழிகள்" : "Languages deeply studied", detail: ta ? "வாழ்க்கை வரலாறு · பக். 187" : "Biography · p. 187" },
    { value: "200+", label: ta ? "ஓராண்டில் விரிவுரைகள்" : "Lectures in one year", detail: ta ? "அமெரிக்காவில் ஆற்றிய உரைகள்" : "Talks during his US tour" },
    { value: "4", label: ta ? "உலகத் தமிழ் மாநாடுகள்" : "World Tamil conferences", detail: "1966 · 1968 · 1970 · 1974" },
    { value: "12", label: ta ? "வெளியீட்டு ஆண்டுகள்" : "Years of journal publication", detail: "Tamil Culture · 1952–1966" },
  ];
  return <section className="living-numbers" id="numbers" aria-label={ta ? "உலகளாவிய பங்களிப்பு" : "A global contribution"}><div className="container"><dl className="living-metrics">{metrics.map(metric => <div className="living-metric" key={metric.value}><dt>{metric.label}</dt><dd>{metric.value}</dd><dd className="living-metric-detail">{metric.detail}</dd></div>)}</dl></div></section>;
}
