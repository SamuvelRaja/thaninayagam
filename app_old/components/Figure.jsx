import { Citation, ExternalLink } from "./Links";
import { sources } from "@/app/lib/data";
import { sourcesTa } from "@/app/lib/data.ta";

export default function Figure({
  image,
  className = "",
  priority = false,
  citeIds,
  captionExtra,
  lang = "en",
  hideCaption = false,
}) {
  if (!image) return null;

  const sourceList = lang === "ta" ? sourcesTa : sources;
  const source =
    image.sourceId != null ? sourceList[image.sourceId - 1] : undefined;

  return (
    <figure className={`doc-figure ${className}`.trim()}>
      <div className="figure-media">
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : undefined}
          decoding="async"
        />
      </div>
      {hideCaption ? null : (
        <figcaption>
          <strong>{image.title}</strong>
          <span>
            {image.description}
            {captionExtra ? <> {captionExtra}</> : null}
            {citeIds ? <Citation ids={citeIds} lang={lang} /> : null}
          </span>
          {source ? (
            <ExternalLink href={source.url} lang={lang}>{image.credit}</ExternalLink>
          ) : (
            <span className="figure-credit">{image.credit}</span>
          )}
        </figcaption>
      )}
    </figure>
  );
}
