import React, { useState } from "react";
import IMAGES from "../../assets/images";
import { useTranslation } from "react-i18next";
import ReactLanguageSelect from "react-languages-select";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";
import "./Navbar.scss";
const Navbar = ({ openMenu, setOpenMenu }) => {
  const [language, setLangugae] = useState("ru");
  const { t, i18n } = useTranslation();
  const [active, setActive] = useState(2);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="navbar_container">
      <nav className="navbar">
        <div className="brand">
          <img src={IMAGES?.logo} alt="logo" />
        </div>
        <ul className={`menu_list ${openMenu ? "active_menu" : ""}`}>
          <li
            className={`${active === 1 ? "active" : ""}`}
            onClick={() => {
              setOpenMenu(!openMenu);
              setActive(1);
            }}
          >
            <a href="#">{t("shop")}</a>
          </li>
          <li
            className={`${active === 2 ? "active" : ""}`}
            onClick={() => {
              setOpenMenu(!openMenu);
              setActive(2);
            }}
          >
            <a href="#">{t("about_company")}</a>
          </li>
          <li
            className={`${active === 3 ? "active" : ""}`}
            onClick={() => {
              setOpenMenu(!openMenu);
              setActive(3);
            }}
          >
            <a href="#">{t("products")}</a>
          </li>
          <li
            className={`${active === 4 ? "active" : ""}`}
            onClick={() => {
              setOpenMenu(!openMenu);
              setActive(4);
            }}
          >
            <a href="#">{t("services")}</a>
          </li>
          <li
            className={`${active === 5 ? "active" : ""}`}
            onClick={() => {
              setOpenMenu(!openMenu);
              setActive(5);
            }}
          >
            <a href="#">{t("promotions_and_news")}</a>
          </li>
          <li
            className={`last_child ${active === 6 ? "active" : ""}`}
            onClick={() => {
              setOpenMenu(!openMenu);
              setActive(6);
            }}
          >
            <a href="#">{t("feedback")}</a>
          </li>
          <div className="language_navbar_btn">
            <button className="language_btn">
              <img
                src={language === "ru" ? IMAGES?.ru_flag : IMAGES?.en_flag}
                alt="flag"
                className="flag_img"
              />
              <ReactLanguageSelect
                defaultLanguage="ru"
                languages={["en", "ru"]}
                className="language"
                onSelect={(e) => {
                  changeLanguage(e);
                  setLangugae(e);
                }}
              />
            </button>
          </div>
        </ul>
        <div className="bar_menu">
          {openMenu ? (
            <LiaTimesSolid onClick={() => setOpenMenu(!openMenu)} />
          ) : (
            <HiMiniBars3BottomRight onClick={() => setOpenMenu(!openMenu)} />
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
