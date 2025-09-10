// types/i18n.d.ts
import 'i18next';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: {
      common: typeof import('./app/i18n/locales/en/common.json');
      form: typeof import('./app/i18n/locales/en/form.json');
      errors: typeof import('./app/i18n/locales/en/errors.json');
      dashboard: typeof import('./app/i18n/locales/en/dashboard.json');
    };
  }
}