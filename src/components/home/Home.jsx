import React, { useEffect } from "react";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import { Grid } from "@mui/material";
import IMAGES from "../../assets/images";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import "./Home.scss";
const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const Home = () => {
  const width = window.screen.width;
  const { t } = useTranslation();
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <div className="home">
      <div className="container">
        <Header />
        <Navbar setOpenMenu={setOpenMenu} openMenu={openMenu} />

        <Slider
          {...settings}
          className="slider_container"
          style={{
            zIndex:
              openMenu && width <= 768 ? "-1" : -1 + setTimeout(() => 2, 500),
          }}
        >
          <div className="slider_item">
            <Grid container alignItems={"center"}>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <div className="home_left">
                  <h1 className="home_left_title">
                    {t("Analyzer")} <br /> ABL800 FLEX
                  </h1>
                  <p className="home_left_text">{t("home_text")}</p>
                  <button className="home_left_btn">
                    {t("home_btn_text")}
                  </button>
                </div>
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <div className="home_right">
                  <img
                    className="home_right_img"
                    src={IMAGES?.printer}
                    alt="home-img"
                  />
                </div>
              </Grid>
            </Grid>
          </div>
          <div className="slider_item">
            <Grid container alignItems={"center"}>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <div className="home_left">
                  <h1 className="home_left_title">
                    {t("Analyzer")} <br /> ABL800 FLEX
                  </h1>
                  <p className="home_left_text">{t("home_text")}</p>
                  <button className="home_left_btn">
                    {t("home_btn_text")}
                  </button>
                </div>
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <div className="home_right">
                  <img
                    className="home_right_img"
                    src={IMAGES?.printer}
                    alt="home-img"
                  />
                </div>
              </Grid>
            </Grid>
          </div>
          <div className="slider_item">
            <Grid container alignItems={"center"}>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <div className="home_left">
                  <h1 className="home_left_title">
                    {t("Analyzer")} <br /> ABL800 FLEX
                  </h1>
                  <p className="home_left_text">{t("home_text")}</p>
                  <button className="home_left_btn">
                    {t("home_btn_text")}
                  </button>
                </div>
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <div className="home_right">
                  <img
                    className="home_right_img"
                    src={IMAGES?.printer}
                    alt="home-img"
                  />
                </div>
              </Grid>
            </Grid>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Home;
