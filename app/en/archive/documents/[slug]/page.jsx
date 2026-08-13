import { notFound } from "next/navigation";
import DocumentReader from "@/app/components/DocumentReader";
import DocumentTocSidebar from "@/app/components/DocumentTocSidebar";
import {
  getDocument,
  getDocumentNeighbors,
  getDocumentSlugs,
} from "@/app/lib/documents";

export function generateStaticParams() {
  // Include lending / external catalogue pages so static export can serve them.
  return getDocumentSlugs("en", { includeUnavailable: true }).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const doc = getDocument(slug, "en");
  if (!doc) return { title: "Document" };
  return {
    title: doc.title,
    description: doc.summary,
  };
}

export default async function DocumentPage({ params }) {
  const { slug } = await params;
  const doc = getDocument(slug, "en");
  if (!doc) notFound();

  const { prev, next } = getDocumentNeighbors(slug, "en");

  return (
    <main id="main">
      <div className="docs-shell docs-shell-doc">
        <DocumentTocSidebar
          items={doc.headings}
          lang="en"
          title={doc.title}
        />
        <div className="docs-main">
          <DocumentReader doc={doc} lang="en" prev={prev} next={next} />
        </div>
      </div>
    </main>
  );
}
