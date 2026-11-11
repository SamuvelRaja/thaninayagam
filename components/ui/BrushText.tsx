import type { ReactNode } from "react";

export function BrushText({ children }: { children: ReactNode }) {
  return <span className="brush-heading-mark brush-heading-mark--section"><span className="brush-heading-ink">{children}</span></span>;
}
