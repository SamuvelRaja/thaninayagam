import HashRedirect from "@/app/components/HashRedirect";

export const metadata = {
  title: "காலக்கோடு",
  description:
    "தனிநாயகம் அடிகளார் காலவரிசை — இப்போது பங்களிப்புகள் பக்கத்தில் உள்ளது.",
};

export default function TimelinePage() {
  return (
    <HashRedirect
      href="/contributions/#timeline"
      label="பங்களிப்புகள் · காலவரிசைக்குச் செல்ல"
    />
  );
}
