import { getCurrentLocale, getFallbackLocale } from 'src/helpers/getLocale';
import { create } from 'zustand';

interface LanguageType {
  locale: string;
  fallbackLocale: string;
  changeLocale: (locale: string) => void;
}

const useLanguageState = create<LanguageType>((set) => ({
  locale: getCurrentLocale(),
  fallbackLocale: getFallbackLocale(),
  changeLocale: (locale: string) => {
    set(() => ({
      locale: locale,
    }));
    localStorage.setItem('locale', locale.toLowerCase());
  },
}));

export default useLanguageState;
