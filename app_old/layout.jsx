import "@/style.css";
import "@/app/theme/foundation.css";

export const metadata = {
  title: {
    default: "தனிநாயகம் அடிகளார் ஆவணகம்",
    template: "%s · தனிநாயகம் அடிகளார் ஆவணகம்",
  },
  description:
    "அருள்திரு. முனைவர் சேவியர் தனிநாயகம் அடிகளாரின் வாழ்வு, ஆய்வு, உலகத் தமிழ் மரபு பற்றிய தெளிவான ஆவண அறிமுகம்.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a4d63",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ta" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
