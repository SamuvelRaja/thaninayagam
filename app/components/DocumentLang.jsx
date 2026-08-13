"use client";

import { useLayoutEffect } from "react";

/** Keeps <html lang> in sync for locale layouts (root defaults to ta). */
export default function DocumentLang({ lang = "ta" }) {
  useLayoutEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return null;
}
