import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import commonEn from './locales/en/common.json';

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false, // Set to true for development
    interpolation: {
      escapeValue: false, // React Native already handles escaping
    },
    resources: {} // Start with empty resources if loading dynamically
  });

export default i18n;