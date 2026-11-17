import type { Metadata } from "next";
import { KatturaigalIndex } from "@/components/ui/KatturaigalIndex";

export const metadata: Metadata = {
  title: "Essays on Father Thani Nayagam — Digital Archive",
  description:
    "A collection of essays and studies on Rev. Dr. Xavier S. Thani Nayagam by researchers and scholars.",
};

export default function EnglishKatturaigalPage() {
  return <KatturaigalIndex lang="en" />;
}
