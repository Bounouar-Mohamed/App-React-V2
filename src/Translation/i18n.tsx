import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import En from './locales/en/translation.json'
import Fr from './locales/fr/translation.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true, // this will log errors with loading translations 
    fallbackLng: 'en', 
    defaultNS: 'common',
    interpolation: {
      escapeValue: false, // this can be set to false in React as React does it automatically
    },
   
resources: {
  en: {
      common: En
  },
  fr: {
      common: Fr
  },
},
  });
 

export default i18n;
