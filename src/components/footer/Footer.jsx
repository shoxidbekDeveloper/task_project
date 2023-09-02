import React from "react";
import "./Footer.scss";
import { Grid } from "@mui/material";
import IMAGES from "../../assets/images/index";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <Grid container>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <div className="footer_inner">
              <div className="">
                <div className="footer_inner_left_1">
                  <h3 className="footer_card_title">Контакты</h3>
                  <div className="footer_icon_con_1">
                    <div className="footer_inner_icon_in">
                      <span className="footer_icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                        >
                          <path
                            d="M12.5 0C7.50757 0 3.44595 4.06162 3.44595 9.054C3.44595 15.2497 11.5484 24.3454 11.8934 24.7295C12.2174 25.0904 12.7832 25.0898 13.1066 24.7295C13.4516 24.3454 21.5541 15.2497 21.5541 9.054C21.554 4.06162 17.4924 0 12.5 0ZM12.5 13.6093C9.98819 13.6093 7.94473 11.5658 7.94473 9.054C7.94473 6.54219 9.98824 4.49873 12.5 4.49873C15.0118 4.49873 17.0552 6.54224 17.0552 9.05405C17.0552 11.5659 15.0118 13.6093 12.5 13.6093Z"
                            fill="#0D4C93"
                          />
                        </svg>
                      </span>
                      <p className="footer_text">
                        г.Ташкент, Чиланзар <br /> 10 квартал, дом 3/1
                      </p>
                    </div>
                    <div className="footer_inner_icon_in">
                      <span className="footer_icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="23"
                          height="23"
                          viewBox="0 0 23 23"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_0_282)">
                            <path
                              d="M20.9785 2.74023H2.02147C1.7103 2.74023 1.41898 2.81674 1.15543 2.94283L11.4551 13.2425L13.7636 11.0239C13.7636 11.0239 13.7637 11.0237 13.7638 11.0236C13.7638 11.0235 13.764 11.0234 13.764 11.0234L21.8449 2.94301C21.5813 2.81683 21.2898 2.74023 20.9785 2.74023Z"
                              fill="#0D4C93"
                            />
                            <path
                              d="M22.7977 3.89624L15.1932 11.5003L22.7974 19.1046C22.9235 18.841 23 18.5497 23 18.2385V4.76197C23 4.45098 22.9237 4.15971 22.7977 3.89624Z"
                              fill="#0D4C93"
                            />
                            <path
                              d="M0.202598 3.89575C0.076502 4.15931 0 4.45063 0 4.7618V18.2384C0 18.5494 0.0764121 18.8407 0.202418 19.1042L7.80693 11.5001L0.202598 3.89575Z"
                              fill="#0D4C93"
                            />
                            <path
                              d="M14.2403 12.453L11.9315 14.6718C11.7999 14.8034 11.6275 14.8692 11.4551 14.8692C11.2828 14.8692 11.1103 14.8034 10.9787 14.6718L8.75977 12.4529L1.15512 20.057C1.41872 20.1832 1.71022 20.2598 2.02148 20.2598H20.9785C21.2897 20.2598 21.581 20.1833 21.8446 20.0572L14.2403 12.453Z"
                              fill="#0D4C93"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_0_282">
                              <rect width="23" height="23" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      <p className="footer_text">info@medol.uz</p>
                    </div>
                  </div>

                  <div className="footer_icon_con_3">
                    <div className="footer_inner_icon_in">
                      <span className="footer_icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_0_298)">
                            <path
                              d="M9.10989 12.89C7.01002 10.7902 6.53589 8.69031 6.42892 7.849C6.39903 7.61637 6.47908 7.38309 6.64551 7.21782L8.34482 5.51927C8.59479 5.26946 8.63915 4.88013 8.45178 4.58048L5.74616 0.379239C5.53888 0.0474371 5.11326 -0.0723136 4.76337 0.102722L0.419887 2.14834C0.136944 2.28767 -0.0294791 2.58829 0.00264593 2.90203C0.230232 5.0641 1.17282 10.379 6.39592 15.6025C11.619 20.826 16.9332 21.7682 19.0964 21.9958C19.4101 22.0279 19.7107 21.8615 19.8501 21.5785L21.8957 17.235C22.0701 16.8859 21.9511 16.4614 21.6207 16.2538L17.4194 13.5489C17.12 13.3613 16.7306 13.4054 16.4806 13.6551L14.7821 15.3544C14.6168 15.5208 14.3835 15.6009 14.1509 15.571C13.3096 15.464 11.2097 14.9899 9.10989 12.89Z"
                              fill="#0D4C93"
                            />
                            <path
                              d="M17.4483 11.7587C17.0293 11.7587 16.6896 11.4191 16.6896 11.0001C16.6861 7.85927 14.1408 5.31401 11 5.31045C10.581 5.31045 10.2414 4.97081 10.2414 4.55183C10.2414 4.13286 10.581 3.79321 11 3.79321C14.9784 3.7976 18.2025 7.02167 18.2069 11.0001C18.2069 11.4191 17.8672 11.7587 17.4483 11.7587Z"
                              fill="#0D4C93"
                            />
                            <path
                              d="M21.2414 11.7586C20.8224 11.7586 20.4827 11.419 20.4827 11C20.4769 5.76524 16.2347 1.52309 11 1.51724C10.581 1.51724 10.2414 1.1776 10.2414 0.758621C10.2414 0.339646 10.581 0 11 0C17.0723 0.00668947 21.9933 4.92764 22 11C22 11.2012 21.9201 11.3942 21.7778 11.5364C21.6355 11.6787 21.4426 11.7586 21.2414 11.7586Z"
                              fill="#0D4C93"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_0_298">
                              <rect width="22" height="22" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      <p className="footer_text">
                        +998 71 276-62-53 <br /> +998 71 276-62-54
                      </p>
                    </div>
                    <button className="footer_btn">Оставить заявку</button>
                  </div>
                </div>
              </div>

              <div className="logo_container">
                <img src={IMAGES?.logo} alt="logo" />
                <p className="footer_dec">
                  Наша цель – построить прозрачный, долгосрочный бизнес,
                  приносить огромную пользу населению, путем решения глобальных
                  вопросов. Внедряя инновационные технологии на рынок
                  Узбекистана.
                </p>
              </div>
            </div>
          </Grid>
          <Grid item lg={2} md={6} sm={12} xs={12} pl={2}>
            <div className="footer_inner">
              <h3 className="footer_card_title">О компании</h3>
              <p className="footer_text">История</p>
              <p className="footer_text"> Партнеры</p>
              <p className="footer_text"> Вакансии</p>
            </div>
          </Grid>
          <Grid item lg={2} md={6} sm={12} xs={12}>
            <div className="footer_inner">
              <h3 className="footer_card_title">Продукция</h3>
              <p className="footer_text">Эндоваскулярная хирургия</p>
              <p className="footer_text"> Аритмология</p>
              <p className="footer_text"> Кардиохирургия</p>
              <p className="footer_text"> Лабораторная диагностика </p>
              <p className="footer_text"> Хирургия</p>
              <p className="footer_text"> Эндоурология</p>
              <p className="footer_text"> Нейрохирургия</p>
              <p className="footer_text"> Анестезиология и реанимация</p>
              <p className="footer_text"> Диабет</p>
            </div>
          </Grid>
          <Grid item lg={2} md={6} sm={12} xs={12}>
            <div className="footer_inner">
              <h3 className="footer_card_title">Услуги</h3>
              <p className="footer_text"> Сервис</p>
              <p className="footer_text"> Регистрации</p>
              <p className="footer_text"> Услуги логистики</p>
            </div>
          </Grid>
        </Grid>

        <Grid container className="footer_bottom">
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <div className="footer_patent">
              © 2023 ООО «Medical Online Services»
            </div>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <div className="footer_bottom_right">
              <p className="muallif">
                Дизайн сделан:{"\n"}
                <a href="https://damingues92@gmail.com">
                  damingues92@gmail.com
                </a>
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
