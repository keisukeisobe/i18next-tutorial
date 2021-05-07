import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(HttpApi)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, //react escapes by default
    }
  });

export default i18n;