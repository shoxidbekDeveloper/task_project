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
          // products
          products_title: "PRODUCTS",
          card_1_dec: "Endovascular surgery",
          card_2_dec: "Laboratory diagnostics",
          card_3_dec: "cardiac surgery",
          card_4_dec: "DIABETES",
          card_5_dec: "ENDOUROLOGY",
          card_6_dec: "ARHYTHMOLOGY",
          product_card_btn_text: "View all",
          products_link: "Go to our product catalog",
          // services
          services_header_title: "SERVICES",
          services_title_1: "EQUIPMENT SERVICE",
          services_title_2: "REGISTRATIONS",
          services_title_3: "LOGISTICS SERVICES",
          services_dec_1:
            "The company provides after-sales service for all products provided. Our engineers have experience and certificates of manufacturers......",
          services_dec_2:
            " Ensuring the receipt of permits, registration certificates for medical devices Preparation of facilities for carrying out ....",
          services_dec_3:
            "The company provides after-sales service for all products provided. Our engineers have experience and certificates of manufacturers.....",
          services_card_btn: "More",
          // about
          about_title: "ABOUT COMPANY",
          about_dec:
            'The MEDOL group of companies was created by highly qualified specialists in the field of medicine, engineering and economics, who have significant experience in the high medical technology market, which has its own offices in different parts of the world. In 2011, MEDOL registered in Uzbekistan FE LLC "Medical Online Services". The company\'s goal is to build a transparent long-term business, to benefit society through the development and implementation of advanced technologies in the healthcare system of the Republic of Uzbekistan.',
          about_btn_text: "To learn more",
          // news
          news_title: "NEWS",
          news_card_title:
            "Master class performed by Gallyamov Eduard Abdulkhaevich",
          news_card_btn_text: "More",
          news_card_dec:
            'From April 19 to April 21, a master class was held at JSC "RSNPMTSU" (Republican Specialized Scientific and Practical Medical Center of Urology) with the support of Ethicon Endo Surgery (Johnson&Johnson) and FE LLC "Medical Online Services"...',
          news_left_link: "View all news",
          news_right_link: "Subscribe to news",
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
          // products
          products_title: "ПРОДУКЦИЯ",
          card_1_dec: "Эндоваскулярная хирургия",
          card_2_dec: "Лабораторная диагностика",
          card_3_dec: "Кардиохирургия",
          card_4_dec: "ДИАБЕТ",
          card_5_dec: "ЭНДОУРОЛОГИЯ",
          card_6_dec: "АРИТМОЛОГИЯ",
          product_card_btn_text: "Посмотреть все",
          products_link: "Перейти в каталог нашей продукции",
          //  services
          services_header_title: "УСЛУГИ",
          services_title_1: "СЕРВИС ОБОРУДОВАНИЯ",
          services_title_2: "РЕГИСТРАЦИИ",
          services_title_3: "УСЛУГИ ЛОГИСТИКИ",
          services_dec_1:
            "Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей......",
          services_dec_2:
            "Обеспечение получения разрешительных документов, регистрационного удостоверения на изделия медицинского назначения Подготовка объектов к проведению ....",
          services_dec_3:
            "Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей.....",
          services_card_btn: "Подробнее",
          // about
          about_title: "О КОМПАНИИ",
          about_dec:
            'Группа компаний MEDOL создавалась высококвалифицированными специалистами в сфере медицины, инженерии и экономики, за плечами которых значительный опыт на рынке высоких медицинских технологий, которая имеет свои представительства в разных уголках Земли. В 2011 году MEDOL зарегистрировал в Узбекистане ИП ООО “Medical Online Services". Цель компании построить прозрачный долгосрочный бизнес, принести пользу обществу путем развития и внедрения передовых технологий в систему здравоохранения Республики Узбекистан. ',
          about_btn_text: "Узнать больше",
          // news
          news_title: "НОВОСТИ",
          news_card_title:
            "Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича",
          news_card_dec:
            "С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...",
          news_card_btn_text: "Подробнее",
          news_left_link: "Посмотреть все новости ",
          news_right_link: "Подписаться на новости",
        },
      },
    },
  });

export default i18n;
