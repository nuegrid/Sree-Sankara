import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "@/locales/en.json";
import ml from "@/locales/ml.json";

export const LANG_STORAGE_KEY = "ss-lang";
export const LANGUAGES = [
  { code: "en" as const, labelKey: "lang.en" },
  { code: "ml" as const, labelKey: "lang.ml" },
];

export type AppLanguage = (typeof LANGUAGES)[number]["code"];

export function syncResourceBundles() {
  i18n.addResourceBundle("en", "translation", en, true, true);
  i18n.addResourceBundle("ml", "translation", ml, true, true);
}

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      ml: { translation: ml },
    },
    lng: "en",
    fallbackLng: "en",
    keySeparator: ".",
    nsSeparator: ":",
    interpolation: { escapeValue: false },
    react: {
      bindI18n: "languageChanged loaded added",
    },
  });
} else {
  syncResourceBundles();
}

export default i18n;
