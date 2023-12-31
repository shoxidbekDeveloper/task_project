import React from "react";
import { useTranslation } from "react-i18next";
import { Grid } from "@mui/material";
import { productsData } from "../../data/productsData";
import "./Products.scss";
const Products = () => {
  const { t } = useTranslation();
  return (
    <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
      <Grid container>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <h2 className="product_hading">{t("products_title")}</h2>
        </Grid>
        {productsData &&
          productsData.map(({ img, title, id }, idx) => {
            return (
              <Grid item lg={4} md={6} sm={12} xs={12} key={idx} px={1}>
                <center>
                  <div className="product_card">
                    <div className="product_card_header">
                      <img className="product_img" src={img} alt="" />
                    </div>
                    <div className="product_card_body">
                      <p className="product_title">
                        {t(`card_${idx + 1}_dec`)}
                      </p>
                    </div>
                    <div className="product_card_footer">
                      <button className="product_btn">
                        {t("product_card_btn_text")}
                      </button>
                    </div>
                  </div>
                </center>
              </Grid>
            );
          })}
      </Grid>

      <Grid container>
        <Grid item lg={12} md={12} sm={12} cs={12}>
          <center>
            <a className="products_link" href="#">
              {t("products_link")}
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <g clip-path="url(#clip0_0_64)">
                <path
                  d="M30 15C30 6.7285 23.2715 -2.94112e-07 15 -6.55671e-07C6.7285 -1.01723e-06 -2.94112e-07 6.72849 -6.55671e-07 15C-1.01723e-06 23.2715 6.72967 30 15 30C23.2703 30 30 23.2715 30 15ZM2.32377 15C2.32377 8.01123 8.01006 2.32377 15 2.32377C21.9899 2.32377 27.6762 8.01123 27.6762 15C27.6762 21.9899 21.9899 27.6762 15 27.6762C8.01006 27.6762 2.32377 21.9888 2.32377 15Z"
                  fill="#0D4C93"
                />
                <path
                  d="M13.3966 21.6344L19.2061 15.8249C19.6569 15.3718 19.6569 14.6398 19.2061 14.1866L13.3966 8.37719C12.9621 8.00424 12.3195 8.00424 11.885 8.37719C11.3981 8.79431 11.3413 9.52861 11.7584 10.0155L16.7428 15L11.7583 19.9961C11.3075 20.4493 11.3075 21.1812 11.7583 21.6344C12.2115 22.0852 12.9435 22.0852 13.3966 21.6344Z"
                  fill="#0D4C93"
                />
              </g>
              <defs>
                <clipPath id="clip0_0_64">
                  <rect
                    width="30"
                    height="30"
                    fill="white"
                    transform="translate(30) rotate(90)"
                  />
                </clipPath>
              </defs>
            </svg>
          </center>
        </Grid>
      </Grid>
    </div>
  );
};

export default Products;
