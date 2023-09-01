import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "ru",
    fallbackLng: "ru",
    debug: true,

    // backend: {
    //   loadPath: "./locales/{{lng}}/{{ns}}.json",
    //   crossDomain: true,
    // },
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          // header
          header_left_1_text: "c.Tashkent, Chilanzar",
          header_left_2_text: "quarter, house",
          header_right_1_text: "We are Facebook",
          // navbar
          shop: "SHOP",
          about_company: "ABOUT COMPANY",
          products: "PRODUCTS",
          services: "SERVICES",
          promotions_and_news: "PROMOTIONS AND NEWS",
          feedback: "FEEDBACK",
          // home
          Analyzer: "Analyzer",
          home_text:
            "Designed for medium to high throughput tests, the ABL800 FLEX analyzer measures a full range of parameters including pH, blood gases, electrolytes, metabolites and oximetry",
          home_btn_text: "More",
        },
      },
      ru: {
        translation: {
          // header
          header_left_1_text: "г.Ташкент, Чиланзар",
          header_left_2_text: "квартал, дом",
          header_right_1_text: "Мы на Facebook",
          // navbar
          shop: "МАГАЗИН",
          about_company: "О КОМПАНИИ",
          products: "ПРОДУКЦИЯ",
          services: "УСЛУГИ",
          promotions_and_news: "АКЦИИ И НОВОСТИ",
          feedback: "ОБРАТНАЯ СВЯЗЬ",
          // home
          Analyzer: "Анализатор",
          home_text:
            "Ориентированный на среднюю или высокую производительность тестов, анализатор ABL800 FLEX измеряет полный набор параметров, включая pH, газы крови, электролиты, метаболиты и показатели оксиметрии",
          home_btn_text: "Подробнее",
        },
      },
    },
  });

export default i18n;
