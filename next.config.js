module.exports = {
  i18n: {
    localeDetection: true,
    locales: ["ru", "uk", "en"],
    defaultLocale: "ru",
  },
  reactStrictMode: true,
  env: {
    CONTACT_FORM_HEADER: { ru: "Форма записи", uk: "Форма запису" },
    CONTACT_FORM_NAME: { ru: "Имя", uk: "Ім'я" },
    CONTACT_NAME: { ru: "Ваше имя", uk: "Ваше ім'я" },
    CONTACT_FORM_EMAIL: "Email",
    CONTACT_EMAIL: "example@email.com",
    CONTACT_FORM_PHONE: "Телефон",
    CONTACT_PHONE: { ru: "например: 0951870180", uk: "наприклад: 0951870180" },
    CONTACT_MESSAGE: { ru: "Комментарий", uk: "Коментарій" },
    CONTACT_TEXT: "Pole Dance",
    CONTACT_BTN: { ru: "отправить", uk: "відправити" },
    FOOTER_PHONE: ["0 800 30 40 90",  "095 187 01 80" ],
    FOOTER_ADRESS: {
      uk: "вул. Університетська, 31",
      en: "Universytets'ka St, 31",
      ru: "ул. Университетская, 31",
    },
    FOOTER_PHONE_RESOLVE: {
      uk: "телефон:",
      en: "phone:",
      ru: "телефон:",
    },
    FOOTER_ADRESS_RESOLVE: {
      uk: "адреса:",
      en: "adress:",
      ru: "адрес:",
    },
    HEADER_LANG: {
      ru: "RU",
      uk: "UA",
      en: "EN",    
    },
    PRICE_COUNT: {
      ru: "Рассчитать стоимость",
      uk: "Розрахувати вартість",
      en: "Calculate price",    
    }
  },
};
