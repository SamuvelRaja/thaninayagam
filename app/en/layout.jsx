import "@/style.css";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";

export const metadata = {
  title: {
    default: "Thani Nayagam Digital Archive",
    template: "%s · Thani Nayagam Digital Archive",
  },
  description:
    "A clear, sourced introduction to the life, scholarship, and global Tamil legacy of Rev. Dr. Xavier S. Thani Nayagam Adigal.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0e2233",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        <SiteHeader lang="en" />
        {children}
        <SiteFooter lang="en" />
      </body>
    </html>
  );
}
