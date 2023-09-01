import React from "react";
import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import { servicesData } from "../../data/servicesData";
import "./Services.scss";
const Services = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="services_title">{t("services_header_title")}</div>
      <div className="container_services">
        <div className="container">
          <Grid container pt={5}>
            {servicesData &&
              servicesData.map((item, idx) => {
                return (
                  <Grid item lg={4} md={6} sm={12} xs={12}>
                    <center>
                      <div className="services_card">
                        <div className="services_card_header">
                          <img
                            className="services_img"
                            src={item?.img}
                            alt="services_img"
                          />
                        </div>
                        <div className="services_card_body">
                          <h2 className="title">
                            {t(`services_title_${idx + 1}`)}
                          </h2>
                          <p className="services_dec">
                            {t(`services_dec_${idx + 1}`)}
                          </p>
                        </div>
                        <div className="services_card_footer">
                          <button className="services_btn">
                            {t("services_card_btn")}
                          </button>
                        </div>
                      </div>
                    </center>
                  </Grid>
                );
              })}
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Services;
