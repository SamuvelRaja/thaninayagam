import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { ReaderApparatus } from "@/components/interactive/ReaderApparatus";
import { getDocument, getAllDocumentSlugs } from "@/lib/documents";
import { WORKS, STRINGS } from "@/lib/data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllDocumentSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const doc = getDocument(slug, "en");
  if (!doc) return {};
  return {
    title: `${doc.title} — ${STRINGS.en.title}`,
    description: `${doc.title}. ${doc.summary || doc.details || ""}`,
  };
}

export default async function DocumentPage({ params }: PageProps) {
  const { slug } = await params;
  const doc = getDocument(slug, "en");
  if (!doc) notFound();

  // Sibling works within the same category for linear reading
  const categoryWorks = WORKS.filter((w) => w.cat === doc.cat);
  const currentIndex = categoryWorks.findIndex((w) => w.slug === slug);
  const prevWork = currentIndex > 0 ? categoryWorks[currentIndex - 1] : null;
  const nextWork =
    currentIndex >= 0 && currentIndex < categoryWorks.length - 1
      ? categoryWorks[currentIndex + 1]
      : null;

  return (
    <>
      <ReaderApparatus
        work={doc}
        lang="en"
        prevWork={
          prevWork
            ? { slug: prevWork.slug, title: prevWork.title, titleTa: prevWork.titleTa }
            : null
        }
        nextWork={
          nextWork
            ? { slug: nextWork.slug, title: nextWork.title, titleTa: nextWork.titleTa }
            : null
        }
      />
      <Footer lang="en" />
    </>
  );
}
