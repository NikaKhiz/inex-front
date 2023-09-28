export const getCurrentLocale = () => {
  return localStorage.getItem('locale') ?? import.meta.env.VITE_I18N_LOCALE;
};

export const getFallbackLocale = () => {
  return import.meta.env.VITE_I18N_FALLBACK_LOCALE;
};
