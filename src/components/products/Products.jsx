import React from "react";
import "./Products.scss";
import { Grid } from "@mui/material";
import { productsData } from "../../data/productsData";
const products = () => {
  return (
    <div style={{ maxWidth: "1360px", margin: "0 auto" }}>
      <Grid container>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <h2 className="product_hading">ПРОДУКЦИЯ</h2>
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
                      <p className="product_title">{title}</p>
                    </div>
                    <div className="product_card_footer">
                      <button className="product_btn">Посмотреть все</button>
                    </div>
                  </div>
                </center>
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};

export default products;
