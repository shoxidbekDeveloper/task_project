import React from "react";
// components
import Products from "./components/products/Products";
// import Services from "./components/services/Services";
// import About from "./components/about/About";
// import News from "./components/news/News";
// import Partners from "./components/partners/Partners";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import "./App.scss";
const App = () => {
  return (
    <div>
      <Home />
      <Products />
      {/* <Services /> */}
      {/* <About /> */}
      {/* <News /> */}
      {/* <Partners />  */}
    </div>
  );
};

export default App;
