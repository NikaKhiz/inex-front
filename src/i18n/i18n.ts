import i18n from 'i18next';
import {
  HOME_EN,
  HOME_KA,
  NAVIGATION_EN,
  NAVIGATION_KA,
  LOGIN_EN,
  LOGIN_KA,
  REGISTER_EN,
  REGISTER_KA,
  DASHBOARD_EN,
  DASHBOARD_KA,
  VALIDATION_EN,
  VALIDATION_KA,
} from 'src/locales';
import { initReactI18next } from 'react-i18next';
import { getCurrentLocale, getFallbackLocale } from 'src/helpers/getLocale';

const resources = {
  en: {
    translation: {
      home: HOME_EN,
      navigation: NAVIGATION_EN,
      login: LOGIN_EN,
      register: REGISTER_EN,
      dashboard: DASHBOARD_EN,
      validation: VALIDATION_EN,
    },
  },
  ka: {
    translation: {
      home: HOME_KA,
      navigation: NAVIGATION_KA,
      login: LOGIN_KA,
      register: REGISTER_KA,
      dashboard: DASHBOARD_KA,
      validation: VALIDATION_KA,
    },
  },
};

i18n.use(initReactI18next).init({
  lng: getCurrentLocale(),
  fallbackLng: getFallbackLocale(),
  debug: false,
  interpolation: {
    escapeValue: false,
  },
  resources,
});
export default i18n;
