import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import DocumentLang from "@/app/components/DocumentLang";

export const metadata = {
  title: {
    default: "Thani Nayagam Digital Archive",
    template: "%s · Thani Nayagam Digital Archive",
  },
  description:
    "A clear, sourced introduction to the life, scholarship, and global Tamil legacy of Rev. Dr. Xavier S. Thani Nayagam Adigal.",
};

export default function EnglishLayout({ children }) {
  return (
    <div className="site-shell">
      <DocumentLang lang="en" />
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <SiteHeader lang="en" />
      {children}
      <SiteFooter lang="en" />
    </div>
  );
}
