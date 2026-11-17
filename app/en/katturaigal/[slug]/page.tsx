import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { KatturaiReader } from "@/components/interactive/KatturaiReader";
import { getKatturai, getAllKatturaiSlugs } from "@/lib/katturaigal";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllKatturaiSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const katturai = getKatturai(slug);
  if (!katturai) return {};

  return {
    title: `${katturai.titleEn} — Father Thani Nayagam Archive`,
    description: `${katturai.titleEn}. ${katturai.descriptionEn}`,
  };
}

export default async function EnglishKatturaiDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const katturai = getKatturai(slug);

  if (!katturai) {
    notFound();
  }

  return (
    <>
      <KatturaiReader katturai={katturai} lang="en" />
      <Footer lang="en" />
    </>
  );
}

