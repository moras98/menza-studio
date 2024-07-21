import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'es',
    lng: 'es', // Idioma por defecto
    backend: {
      loadPath: 'menza-studio/locales/{{lng}}/{{ns}}.json'
    },
    ns: ['home', 'about', 'services', 'contact'],
    defaultNS: 'home',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
