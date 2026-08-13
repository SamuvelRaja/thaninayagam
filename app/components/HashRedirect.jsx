"use client";

import { useEffect } from "react";

/** Client redirect that keeps a hash (static export cannot). */
export default function HashRedirect({ href, label }) {
  useEffect(() => {
    window.location.replace(href);
  }, [href]);

  return (
    <main id="main" className="page-shell" style={{ padding: "3rem 1.25rem" }}>
      <p>
        <a href={href}>{label}</a>
      </p>
    </main>
  );
}
