import type { Metadata } from "next";
import { KatturaigalIndex } from "@/components/ui/KatturaigalIndex";

export const metadata: Metadata = {
  title: "தனிநாயக அடிகள் பற்றிய கட்டுரைகள் — ஆவணகம்",
  description:
    "அருள்திரு. முனைவர் சேவியர் தனிநாயகம் அடிகளாரின் வாழ்வு மற்றும் தமிழ்ப்பணி குறித்து ஆய்வாளர்கள் எழுதிய கட்டுரைகளின் தொகுப்பு.",
};

export default function KatturaigalPage() {
  return <KatturaigalIndex lang="ta" />;
}
