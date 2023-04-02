import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import EN from '../../../../public/locales/en/translation.json';
import aboutEN from '../../../../public/locales/en/about.json';
import mainEN from '../../../../public/locales/en/main.json';

import RU from '../../../../public/locales/ru/translation.json';
import aboutRU from '../../../../public/locales/ru/about.json';
import mainRU from '../../../../public/locales/ru/main.json';

const resources = {
  en: {
    translation: EN,
    main: mainEN,
    about: aboutEN,
  },
  ru: {
    translation: RU,
    main: mainRU,
    about: aboutRU,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: 'en',
    lng: 'en',
    debug: __IS_DEV__,
    interpolation: {
      escapeValue: false,
    },
    ns: ['translation', 'main', 'about'],
    defaultNS: 'translation',
    resources,
    backend: {
      loadPath: '../../../../locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;
