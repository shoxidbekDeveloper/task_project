import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "react-languages-select/scss/react-languages-select.scss";

// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import "./i18n";
const app = document.getElementById("root");
const root = createRoot(app);

root.render(<App />);
