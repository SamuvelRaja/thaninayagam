"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

export function FontLoader() {
  const pathname = usePathname();
  useLayoutEffect(() => {
    try {
      const isEn = pathname === "/en" || pathname.startsWith("/en/");
      document.documentElement.lang = isEn ? "en" : "ta";
    } catch {
    }
  }, [pathname]);
  return null;
}

