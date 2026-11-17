import Image from "next/image";
import type { ReactNode } from "react";
import type { Katturai } from "@/lib/katturaigal";

interface KatturaiThumbnailProps {
  essay: Katturai;
  lang?: "ta" | "en";
  children?: ReactNode;
}

export function KatturaiThumbnail({ essay, lang = "ta", children }: KatturaiThumbnailProps) {
  const { coverImage, authorImage } = essay;
  const thumbnailImage = lang === "en" && essay.thumbnailImageEn ? essay.thumbnailImageEn : essay.thumbnailImage;

  if (thumbnailImage) {
    return (
      <div className="katturai-thumbnail has-featured-art">
        <div className="katturai-thumbnail-art" aria-hidden="true">
          <Image
            src={thumbnailImage}
            alt=""
            width={800}
            height={446}
            className="katturai-featured-art-img"
          />
        </div>
        {children}
      </div>
    );
  }

  return (
    <div className="katturai-thumbnail">
      <div className="katturai-thumbnail-art" aria-hidden="true">
        {coverImage && (
          <div className="katturai-thumbnail-cover">
            <Image src={coverImage} alt="" fill />
          </div>
        )}
        {authorImage && (
          <div className="katturai-thumbnail-portrait">
            <Image src={authorImage} alt="" fill />
          </div>
        )}
      </div>
      {children}
    </div>
  );
}
