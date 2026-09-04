import React from "react";

interface PageHeaderProps {
  slug: string;
  title: string;
  lead?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ slug, title, lead }) => {
  return (
    <section className={`page-header page-header-${slug}`}>
      <div className="container">
        <p className="slug-row">{slug}</p>
        <h1 className="display-2">{title}</h1>
        {lead && <p className="lede">{lead}</p>}
      </div>
    </section>
  );
};
