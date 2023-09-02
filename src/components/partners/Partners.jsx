import React, { useRef } from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import { partnersData } from "../../data/partnersDate";
import "./Partners.scss";
const Partners = () => {
  const { t } = useTranslation();
  const sliderRef = useRef();
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container partners_container">
      <h2 className="partners_title">{t("partners_title")}</h2>
      <div className="news_slider_inner" style={{ textAlign: "center" }}>
        <Slider {...settings} ref={sliderRef} className="slider_con">
          {partnersData &&
            partnersData.map((item, idx) => {
              return (
                <div key={idx} className="partners_item">
                  <center>
                    <div className="inner_1">
                      <img
                        className="parnter_logo"
                        src={item?.img}
                        alt="rasm"
                      />
                    </div>
                    <div className="inner_1">
                      <img
                        className="parnter_logo"
                        src={item?.img2}
                        alt="rasm"
                      />
                    </div>
                  </center>
                </div>
              );
            })}
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
      <br />
      <br />
      <br />
    </div>
  );
};
export default Partners;
