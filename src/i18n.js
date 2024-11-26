import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

import { translateEs } from "./locales/es/translate.js";
import { translateFr } from "./locales/fr/translate.js";
import { translateEn } from "./locales/en/translate.js";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "fr",
    lng: "fr",
    resources: {
      es: {
        translation: translateEs,
      },
      fr: {
        translation: translateFr,
      },
      en: {
        translation: translateEn,
      },
    },
  });

export default i18n;
