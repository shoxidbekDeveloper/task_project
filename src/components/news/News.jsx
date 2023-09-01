import React, { useRef } from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import IMAGES from "../../assets/images/index";
import { Grid } from "@mui/material";

import "./News.scss";
const News = () => {
  const { t } = useTranslation();
  const sliderRef = useRef();
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="container news_container">
      <h2 className="news_title">{t("news_title")}</h2>
      <div className="news_slider_inner">
        <Slider {...settings} ref={sliderRef}>
          <div className="about_slider_item">
            <div className="news_card">
              <div className="news_card_header">
                <img className="news_img" src={IMAGES?.newimg} alt="" />
              </div>
              <div className="news_card_body">
                <p className="news_card_title">{t("news_card_title")}</p>
                <span>26.07.2021</span>
                <p className="news_card_dec">{t("news_card_dec")}</p>
              </div>
              <div className="news_card_footer">
                <button className="news_card_btn">
                  {t("news_card_btn_text")}
                </button>
              </div>
            </div>
          </div>

          <div className="about_slider_item">
            <div className="news_card">
              <div className="news_card_header">
                <img className="news_img" src={IMAGES?.newimg} alt="" />
              </div>
              <div className="news_card_body">
                <p className="news_card_title">{t("news_card_title")}</p>
                <span>26.07.2021</span>
                <p className="news_card_dec">{t("news_card_dec")}</p>
              </div>
              <div className="news_card_footer">
                <button className="news_card_btn">
                  {t("news_card_btn_text")}
                </button>
              </div>
            </div>
          </div>

          <div className="about_slider_item">
            <div className="news_card">
              <div className="news_card_header">
                <img className="news_img" src={IMAGES?.newimg} alt="" />
              </div>
              <div className="news_card_body">
                <p className="news_card_title">{t("news_card_title")}</p>
                <span>26.07.2021</span>
                <p className="news_card_dec">{t("news_card_dec")}</p>
              </div>
              <div className="news_card_footer">
                <button className="news_card_btn">
                  {t("news_card_btn_text")}
                </button>
              </div>
            </div>
          </div>

          <div className="about_slider_item">
            <div className="news_card">
              <div className="news_card_header">
                <img className="news_img" src={IMAGES?.newimg} alt="" />
              </div>
              <div className="news_card_body">
                <p className="news_card_title">{t("news_card_title")}</p>
                <span>26.07.2021</span>
                <p className="news_card_dec">{t("news_card_dec")}</p>
              </div>
              <div className="news_card_footer">
                <button className="news_card_btn">
                  {t("news_card_btn_text")}
                </button>
              </div>
            </div>
          </div>
        </Slider>
        <button
          className="new_prev_btn"
          onClick={() => {
            sliderRef.current.slickPrev();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
          >
            <g clip-path="url(#clip0_0_208)">
              <path
                d="M4.08481 9.50007C4.08481 9.15955 4.21482 8.81908 4.47431 8.55946L12.644 0.389891C13.1637 -0.129801 14.0063 -0.129801 14.5257 0.389891C15.0452 0.909372 15.0452 1.75179 14.5257 2.27153L7.29677 9.50007L14.5255 16.7287C15.045 17.2483 15.045 18.0907 14.5255 18.6101C14.006 19.1301 13.1634 19.1301 12.6437 18.6101L4.47406 10.4407C4.21453 10.1809 4.08481 9.84046 4.08481 9.50007Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_0_208">
                <rect
                  width="19"
                  height="19"
                  fill="white"
                  transform="translate(19) rotate(90)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
        <button
          className="new_next_btn"
          onClick={() => {
            sliderRef.current.slickNext();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
          >
            <g clip-path="url(#clip0_0_213)">
              <path
                d="M14.9152 9.50007C14.9152 9.15955 14.7852 8.81908 14.5257 8.55946L6.35603 0.389891C5.83634 -0.129801 4.99375 -0.129801 4.47427 0.389891C3.95479 0.909372 3.95479 1.75179 4.47427 2.27153L11.7032 9.50007L4.47452 16.7287C3.95504 17.2483 3.95504 18.0907 4.47452 18.6101C4.994 19.1301 5.83659 19.1301 6.35628 18.6101L14.5259 10.4407C14.7855 10.1809 14.9152 9.84046 14.9152 9.50007Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_0_213">
                <rect
                  width="19"
                  height="19"
                  fill="white"
                  transform="matrix(4.37114e-08 1 1 -4.37114e-08 0 0)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
      <Grid container>
        <Grid
          item
          lg={6}
          md={6}
          sm={12}
          xs={12}
          justifyContent={"center"}
          display={"flex"}
        >
          <a className="news_left_link" href="#">
            {t("news_left_link")}
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <g clip-path="url(#clip0_0_218)">
              <path
                d="M30 14.7546C30 6.76329 23.2715 0.262695 15 0.262695C6.7285 0.262694 1.6232e-06 6.76329 1.27389e-06 14.7546C9.24573e-07 22.746 6.72967 29.2466 15 29.2466C23.2703 29.2466 30 22.746 30 14.7546ZM2.32377 14.7546C2.32377 8.00258 8.01006 2.50776 15 2.50776C21.9899 2.50776 27.6762 8.00258 27.6762 14.7546C27.6762 21.5078 21.9899 27.0015 15 27.0015C8.01006 27.0015 2.32377 21.5067 2.32377 14.7546Z"
                fill="#00C9C9"
              />
              <path
                d="M13.3966 21.1643L19.2061 15.5517C19.6569 15.1138 19.6569 14.4067 19.2061 13.9689L13.3966 8.35618C12.9621 7.99586 12.3195 7.99586 11.885 8.35618C11.3982 8.75918 11.3413 9.4686 11.7584 9.93897L16.7428 14.7547L11.7583 19.5816C11.3075 20.0194 11.3075 20.7265 11.7583 21.1643C12.2115 21.5999 12.9435 21.5999 13.3966 21.1643Z"
                fill="#00C9C9"
              />
            </g>
            <defs>
              <clipPath id="clip0_0_218">
                <rect
                  width="28.9839"
                  height="30"
                  fill="white"
                  transform="translate(30 0.262695) rotate(90)"
                />
              </clipPath>
            </defs>
          </svg>
        </Grid>
        <Grid
          item
          lg={6}
          md={6}
          sm={12}
          xs={12}
          justifyContent={"center"}
          display={"flex"}
        >
          <a className="news_right_link" href="#">
            {t("news_right_link")}
          </a>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <g clip-path="url(#clip0_0_227)">
              <path
                d="M30 14.7546C30 6.76329 23.2715 0.262695 15 0.262695C6.7285 0.262694 1.6232e-06 6.76329 1.27389e-06 14.7546C9.24573e-07 22.746 6.72967 29.2466 15 29.2466C23.2703 29.2466 30 22.746 30 14.7546ZM2.32377 14.7546C2.32377 8.00258 8.01006 2.50776 15 2.50776C21.9899 2.50776 27.6762 8.00258 27.6762 14.7546C27.6762 21.5078 21.9899 27.0015 15 27.0015C8.01006 27.0015 2.32377 21.5067 2.32377 14.7546Z"
                fill="#0D4C93"
              />
              <path
                d="M13.3966 21.1643L19.2061 15.5517C19.6569 15.1138 19.6569 14.4067 19.2061 13.9689L13.3966 8.35618C12.9621 7.99586 12.3196 7.99586 11.885 8.35618C11.3982 8.75918 11.3413 9.4686 11.7584 9.93897L16.7429 14.7547L11.7583 19.5816C11.3075 20.0194 11.3075 20.7265 11.7583 21.1643C12.2115 21.5999 12.9435 21.5999 13.3966 21.1643Z"
                fill="#0D4C93"
              />
            </g>
            <defs>
              <clipPath id="clip0_0_227">
                <rect
                  width="28.9839"
                  height="30"
                  fill="white"
                  transform="translate(30 0.262695) rotate(90)"
                />
              </clipPath>
            </defs>
          </svg>
        </Grid>
      </Grid>
    </div>
  );
};
export default News;
