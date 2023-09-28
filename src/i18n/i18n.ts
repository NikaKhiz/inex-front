import i18n from 'i18next';
import { HOME_EN } from 'src/locales';
import { HOME_KA } from 'src/locales';
import { NAVIGATION_EN } from 'src/locales';
import { NAVIGATION_KA } from 'src/locales';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      home: HOME_EN,
      navigation: NAVIGATION_EN,
    },
  },
  ka: {
    translation: {
      home: HOME_KA,
      navigation: NAVIGATION_KA,
    },
  },
};

i18n.use(initReactI18next).init({
  lng: 'ka',
  fallbackLng: 'en',
  debug: true,
  interpolation: {
    escapeValue: false,
  },
  resources,
});
export default i18n;
