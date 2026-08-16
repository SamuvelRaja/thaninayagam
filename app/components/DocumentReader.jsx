import Breadcrumbs from "@/app/components/Breadcrumbs";
import DocsPager from "@/app/components/DocsPager";
import { Citation, ExternalLink } from "@/app/components/Links";
import ReadingProgress from "@/app/components/ReadingProgress";
import { statusLabel, taxonomyFor } from "@/app/lib/archiveMeta";

export default function DocumentReader({
  doc,
  lang = "en",
  prev = null,
  next = null,
}) {
  const archiveHref = lang === "ta" ? "/archive/" : "/en/archive/";
  const archiveLabel = lang === "ta" ? "ஆவணகம்" : "Archive";

  const copy =
    lang === "ta"
      ? {
          source: "மூலப் பதிவு",
          rights: "உரிமைக் குறிப்பு",
          image: "பக்கப் படிமம்",
        }
      : {
          source: "Source record",
          rights: "Rights note",
          image: "Page image",
        };

  const { category, subcategory, categoryId, subcategoryId } = taxonomyFor(doc);
  const categoryLabel =
    lang === "ta" ? category?.ta.label : category?.en.label;
  const subcategoryLabel =
    lang === "ta" ? subcategory?.ta.label : subcategory?.en.label;
  const categoryHref = categoryId
    ? `${archiveHref}?category=${categoryId}#holdings`
    : archiveHref;
  const subHref =
    categoryId && subcategoryId
      ? `${archiveHref}?category=${categoryId}&sub=${subcategoryId}#holdings`
      : categoryHref;

  return (
    <article className="document-reader">
      <ReadingProgress lang={lang} />
      <Breadcrumbs
        lang={lang}
        items={[
          { href: archiveHref, label: archiveLabel },
          ...(categoryLabel
            ? [{ href: categoryHref, label: categoryLabel }]
            : []),
          ...(subcategoryLabel
            ? [{ href: subHref, label: subcategoryLabel }]
            : []),
          { label: doc.title },
        ]}
      />

      <header className="document-header">
        <p className="document-kicker">
          {categoryLabel ? <span>{categoryLabel}</span> : null}
          {subcategoryLabel ? <span>· {subcategoryLabel}</span> : null}
          {doc.year ? (
            <span>
              · {lang === "ta" ? "ஆண்டு" : "Date"} {doc.year}
            </span>
          ) : null}
        </p>
        <h1 id="document-title">{doc.title}</h1>
        {doc.summary ? (
          <p className="document-summary">{doc.summary}</p>
        ) : null}
        {doc.status && doc.status !== "readable" ? (
          <p className={`document-status-badge is-${doc.status}`}>
            {statusLabel(doc.status, lang)}
          </p>
        ) : null}
        {doc.cite?.length ? (
          <p className="document-status">
            <Citation ids={doc.cite} lang={lang} />
          </p>
        ) : null}
      </header>

      <div
        className={`document-layout${doc.images?.[0] ? "" : " is-text-only"}`}
      >
        {doc.images?.[0] ? (
          <figure className="document-figure">
            <p className="section-label">{copy.image}</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={doc.images[0].src}
              alt={doc.images[0].alt || doc.title}
              width={900}
              height={1200}
            />
          </figure>
        ) : null}

        <div className="document-body-wrap">
          <div
            className="document-body prose"
            dangerouslySetInnerHTML={{ __html: doc.bodyHtml }}
          />

          <aside className="document-aside" aria-label={copy.rights}>
            {doc.sourceUrl ? (
              <p>
                <strong>{copy.source}: </strong>
                <ExternalLink href={doc.sourceUrl} lang={lang}>
                  {doc.sourceLabel || doc.sourceUrl}
                </ExternalLink>
              </p>
            ) : null}
            {doc.rights ? (
              <p>
                <strong>{copy.rights}: </strong>
                {doc.rights}
              </p>
            ) : null}
          </aside>
        </div>
      </div>

      <DocsPager prev={prev} next={next} lang={lang} />
    </article>
  );
}
