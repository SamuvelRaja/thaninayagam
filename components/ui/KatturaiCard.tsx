import Link from "next/link";
import { ArchiveArrow } from "@/components/ui/LivingHero";
import { KatturaiThumbnail } from "@/components/ui/KatturaiThumbnail";
import type { Katturai } from "@/lib/katturaigal";

interface KatturaiCardProps {
  essay: Katturai;
  lang: "ta" | "en";
  featured?: boolean;
}

export function KatturaiCard({ essay, lang, featured = false }: KatturaiCardProps) {
  const ta = lang === "ta";
  const titleId = `katturai-${essay.slug}-title`;
  const href = `${ta ? "" : "/en"}/katturaigal/${essay.slug}/`;
  const Heading = featured ? "h3" : "h2";
  const title = <Heading id={titleId} className="katturai-card-title">{ta ? essay.title : essay.titleEn}</Heading>;
  const hasThumb = Boolean(essay.thumbnailImage);

  // If there is custom thumbnail artwork, keep title in the copy column to avoid covering the art
  const overlayTitle = featured && !hasThumb;

  return (
    <article className="katturai-card">
      <Link className="katturai-card-link" href={href} aria-labelledby={titleId}>
        <KatturaiThumbnail essay={essay} lang={lang}>
          {overlayTitle && title}
        </KatturaiThumbnail>
        <div className="katturai-card-copy">
          {!overlayTitle && title}
          <p className="katturai-card-author">{ta ? essay.author : essay.authorEn}</p>
          <p className="katturai-card-description">{ta ? essay.description : essay.descriptionEn}</p>
          <p className="katturai-card-source">{ta ? essay.source : essay.sourceEn}</p>
          <span className="katturai-card-action" aria-hidden="true">
            {ta ? "கட்டுரையை வாசிக்க" : "Read the essay"}
            <ArchiveArrow />
          </span>
        </div>
      </Link>
    </article>
  );
}
