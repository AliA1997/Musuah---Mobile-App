import { i18n } from "i18next";
import commonAl from './locales/al/common.json';
import formAl from './locales/al/form.json';
import dashboardAl from './locales/al/dashboard.json';
import errorAl from './locales/al/errors.json';

import commonAr from './locales/ar/common.json';
import formAr from './locales/ar/form.json';
import dashboardAr from './locales/ar/dashboard.json';
import errorAr from './locales/ar/errors.json';

import commonBa from './locales/ba/common.json';
import formBa from './locales/ba/form.json';
import dashboardBa from './locales/ba/dashboard.json';
import errorBa from './locales/ba/errors.json';

import commonCn from './locales/cn/common.json';
import formCn from './locales/cn/form.json';
import dashboardCn from './locales/cn/dashboard.json';
import errorCn from './locales/cn/errors.json';

import commonDe from './locales/de/common.json';
import formDe from './locales/de/form.json';
import dashboardDe from './locales/de/dashboard.json';
import errorDe from './locales/de/errors.json';

import commonEn from './locales/en/common.json';
import formEn from './locales/en/form.json';
import dashboardEn from './locales/en/dashboard.json';
import errorEn from './locales/en/errors.json';

import commonEs from './locales/es/common.json';
import formEs from './locales/es/form.json';
import dashboardEs from './locales/es/dashboard.json';
import errorEs from './locales/es/errors.json';

import commonFa from './locales/fa/common.json';
import formFa from './locales/fa/form.json';
import dashboardFa from './locales/fa/dashboard.json';
import errorFa from './locales/fa/errors.json';

import commonFr from './locales/fr/common.json';
import formFr from './locales/fr/form.json';
import dashboardFr from './locales/fr/dashboard.json';
import errorFr from './locales/fr/errors.json';

import commonHi from './locales/hi/common.json';
import formHi from './locales/hi/form.json';
import dashboardHi from './locales/hi/dashboard.json';
import errorHi from './locales/hi/errors.json';

import commonJp from './locales/jp/common.json';
import formJp from './locales/jp/form.json';
import dashboardJp from './locales/jp/dashboard.json';
import errorJp from './locales/jp/errors.json';

import commonRu from './locales/ru/common.json';
import formRu from './locales/ru/form.json';
import dashboardRu from './locales/ru/dashboard.json';
import errorRu from './locales/ru/errors.json';

import commonTr from './locales/tr/common.json';
import formTr from './locales/tr/form.json';
import dashboardTr from './locales/tr/dashboard.json';
import errorTr from './locales/tr/errors.json';

import commonUr from './locales/ur/common.json';
import formUr from './locales/ur/form.json';
import dashboardUr from './locales/ur/dashboard.json';
import errorUr from './locales/ur/errors.json';


export default function initializeResourceBundle(i18nInstance: i18n) {
    i18nInstance.addResourceBundle('en', 'common', commonEn, true, true)
    i18nInstance.addResourceBundle('en', 'form', formEn, true, true)
    i18nInstance.addResourceBundle('en', 'dashboard', dashboardEn, true, true)
    i18nInstance.addResourceBundle('en', 'errors', errorEn, true, true)

    i18nInstance.addResourceBundle('al', 'common', commonAl, true, true)
    i18nInstance.addResourceBundle('al', 'form', formAl, true, true)
    i18nInstance.addResourceBundle('al', 'dashboard', dashboardAl, true, true)
    i18nInstance.addResourceBundle('al', 'errors', errorAl, true, true)

    i18nInstance.addResourceBundle('ar', 'common', commonAr, true, true)
    i18nInstance.addResourceBundle('ar', 'form', formAr, true, true)
    i18nInstance.addResourceBundle('ar', 'dashboard', dashboardAr, true, true)
    i18nInstance.addResourceBundle('ar', 'errors', errorAr, true, true)

    i18nInstance.addResourceBundle('ba', 'common', commonBa, true, true)
    i18nInstance.addResourceBundle('ba', 'form', formBa, true, true)
    i18nInstance.addResourceBundle('ba', 'dashboard', dashboardBa, true, true)
    i18nInstance.addResourceBundle('ba', 'errors', errorBa, true, true)

    i18nInstance.addResourceBundle('cn', 'common', commonCn, true, true)
    i18nInstance.addResourceBundle('cn', 'form', formCn, true, true)
    i18nInstance.addResourceBundle('cn', 'dashboard', dashboardCn, true, true)
    i18nInstance.addResourceBundle('cn', 'errors', errorCn, true, true)

    i18nInstance.addResourceBundle('de', 'common', commonDe, true, true)
    i18nInstance.addResourceBundle('de', 'form', formDe, true, true)
    i18nInstance.addResourceBundle('de', 'dashboard', dashboardDe, true, true)
    i18nInstance.addResourceBundle('de', 'errors', errorDe, true, true)

    i18nInstance.addResourceBundle('es', 'common', commonEs, true, true)
    i18nInstance.addResourceBundle('es', 'form', formEs, true, true)
    i18nInstance.addResourceBundle('es', 'dashboard', dashboardEs, true, true)
    i18nInstance.addResourceBundle('es', 'errors', errorEs, true, true)

    i18nInstance.addResourceBundle('fa', 'common', commonFa, true, true)
    i18nInstance.addResourceBundle('fa', 'form', formFa, true, true)
    i18nInstance.addResourceBundle('fa', 'dashboard', dashboardFa, true, true)
    i18nInstance.addResourceBundle('fa', 'errors', errorFa, true, true)

    i18nInstance.addResourceBundle('fr', 'common', commonFr, true, true)
    i18nInstance.addResourceBundle('fr', 'form', formFr, true, true)
    i18nInstance.addResourceBundle('fr', 'dashboard', dashboardFr, true, true)
    i18nInstance.addResourceBundle('fr', 'errors', errorFr, true, true)

    i18nInstance.addResourceBundle('hi', 'common', commonHi, true, true)
    i18nInstance.addResourceBundle('hi', 'form', formHi, true, true)
    i18nInstance.addResourceBundle('hi', 'dashboard', dashboardHi, true, true)
    i18nInstance.addResourceBundle('hi', 'errors', errorHi, true, true)

    i18nInstance.addResourceBundle('jp', 'common', commonJp, true, true)
    i18nInstance.addResourceBundle('jp', 'form', formJp, true, true)
    i18nInstance.addResourceBundle('jp', 'dashboard', dashboardJp, true, true)
    i18nInstance.addResourceBundle('jp', 'errors', errorJp, true, true)

    i18nInstance.addResourceBundle('ru', 'common', commonRu, true, true)
    i18nInstance.addResourceBundle('ru', 'form', formRu, true, true)
    i18nInstance.addResourceBundle('ru', 'dashboard', dashboardRu, true, true)
    i18nInstance.addResourceBundle('ru', 'errors', errorRu, true, true)

    i18nInstance.addResourceBundle('tr', 'common', commonTr, true, true)
    i18nInstance.addResourceBundle('tr', 'form', formTr, true, true)
    i18nInstance.addResourceBundle('tr', 'dashboard', dashboardTr, true, true)
    i18nInstance.addResourceBundle('tr', 'errors', errorTr, true, true)

    i18nInstance.addResourceBundle('ur', 'common', commonUr, true, true)
    i18nInstance.addResourceBundle('ur', 'form', formUr, true, true)
    i18nInstance.addResourceBundle('ur', 'dashboard', dashboardUr, true, true)
    i18nInstance.addResourceBundle('ur', 'errors', errorUr, true, true)
}