"use client";

import { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n, {
  LANG_STORAGE_KEY,
  syncResourceBundles,
  type AppLanguage,
} from "@/lib/i18n";

function applyLanguage(lng: string) {
  document.documentElement.lang = lng;
  document.documentElement.classList.toggle("lang-ml", lng === "ml");
}

export default function I18nProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    syncResourceBundles();
    const saved = window.localStorage.getItem(LANG_STORAGE_KEY);
    if (saved === "en" || saved === "ml") {
      void i18n.changeLanguage(saved as AppLanguage);
      applyLanguage(saved);
    } else {
      applyLanguage(i18n.language);
    }

    const onChanged = (lng: string) => applyLanguage(lng);
    i18n.on("languageChanged", onChanged);
    return () => {
      i18n.off("languageChanged", onChanged);
    };
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
