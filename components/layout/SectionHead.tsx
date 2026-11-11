import { BrushText } from "@/components/ui/BrushText";
import React from "react";

interface SectionHeadProps {
  num: string;
  title: string;
  scope?: string;
}

export const SectionHead: React.FC<SectionHeadProps> = ({ num, title, scope }) => {
  return (
    <div className="section-head">
      <span className="section-index">{num}</span>
      <h2><BrushText>{title}</BrushText></h2>
      {scope && <span className="section-scope">{scope}</span>}
    </div>
  );
};
