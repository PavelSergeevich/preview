module.exports = {
  i18n: {
    localeDetection: true,
    locales: ["ru", "uk"],
    defaultLocale: "ru",
  },
  reactStrictMode: true,
  env: {   
    CONTACT_FORM_HEADER: { ru: "Форма записи", uk: "Форма запису" },
    CONTACT_FORM_NAME: { ru: "Имя", uk: "Ім'я" },
    CONTACT_NAME: { ru: "Ваше имя", uk: "Ваше ім'я" },
    CONTACT_FORM_PHONE: "Телефон",
    CONTACT_PHONE: { ru: "например: 0951870180", uk: "наприклад: 0951870180" },
    CONTACT_MESSAGE: { ru: "Комментарий", uk: "Коментар" },
    CONTACT_TEXT: "Pole Dance",
    CONTACT_BTN: { ru: "отправить", uk: "відправити" },
    FOOTER_PHONE: ["0 800 30 40 90", "095 187 01 80"],
    FOOTER_ADRESS: {
      ru: "Университетская, 31",
      uk: "Університетська, 31",
    },
    FOOTER_PHONE_RESOLVE: {
      ru: "телефон:",
      uk: "телефон:",
    },
    FOOTER_ADRESS_RESOLVE: {
      ru: "адрес: ул.",
      uk: "адреса: вул.",
    },
    HEADER_LANG: {
      ru: "RU",
      uk: "UA",
    },
    PRICE_FIELD: {
      ru: {
        ticket: "Тип абонемента",
        type: "Вид абонемента",
        count: "Количество занятий",
      },
      uk: {
        ticket: "Тип абонементу",
        type: "Вид абонемента",
        count: "Кількість занять",
      },
    },
    PRICE_TYPE: {
      ru: { first: "фиксированный", second: "свободный" },
      uk: { first: "фіксований", second: "вільний" },
    },
    PRICE_COUNT: {
      ru: "Рассчитать стоимость",
      uk: "Розрахувати вартість",
    },
  },
};
