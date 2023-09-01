import React from "react";
import { useTranslation } from "react-i18next";
import { Grid } from "@mui/material";
import IMAGES from "../../assets/images/index";
import "./About.scss";
const About = () => {
  const { t } = useTranslation();
  return (
    <div className="container">
      <Grid container alignItems={"center"}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <h2 className="about_title">{t("about_title")}</h2>
        </Grid>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <center>
            <div className="about_left">
              <div className="circle_lg">
                <div className="circle_md">
                  <div className="circle_sm">
                    <img className="about_logo" src={IMAGES?.logo} alt="Logo" />
                  </div>
                </div>
              </div>
            </div>
          </center>
        </Grid>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <dv className="about_right">
            <p className="about_right_text">{t("about_dec")}</p>
            <button className="about_btn_text">{t("about_btn_text")}</button>
          </dv>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
