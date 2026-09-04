import React from "react";
import { SRC_BY } from "@/lib/data";

interface CiteChipProps {
  id: string;
}

export const CiteChip: React.FC<CiteChipProps> = ({ id }) => {
  const src = SRC_BY[id];
  if (!src) return <span className="chip">[{id}]</span>;
  if (src.url) {
    return (
      <a
        className="chip"
        href={src.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={src.title}
      >
        [{id}]
      </a>
    );
  }
  return <span className="chip" title={src.title}>[{id}]</span>;
};
