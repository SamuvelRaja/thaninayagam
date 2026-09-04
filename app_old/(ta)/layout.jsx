import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import DocumentLang from "@/app/components/DocumentLang";

export const metadata = {
  title: {
    default: "தனிநாயகம் அடிகளார் ஆவணகம்",
    template: "%s · தனிநாயகம் அடிகளார் ஆவணகம்",
  },
  description:
    "அருள்திரு. முனைவர் சேவியர் தனிநாயகம் அடிகளாரின் வாழ்வு, ஆய்வு, உலகத் தமிழ் மரபு பற்றிய தெளிவான ஆவண அறிமுகம்.",
};

export default function TamilLayout({ children }) {
  return (
    <div className="site-shell">
      <DocumentLang lang="ta" />
      <a className="skip-link" href="#main">
        முதன்மை உள்ளடக்கத்திற்குச் செல்க
      </a>
      <SiteHeader lang="ta" />
      {children}
      <SiteFooter lang="ta" />
    </div>
  );
}
