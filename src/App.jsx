import React from "react";

// components
import Products from "./components/products/Products";
import Services from "./components/services/Services";
import About from "./components/about/About";
import News from "./components/news/News";
import Partners from "./components/partners/Partners";
const App = () => {
  return (
    <div>
      <Products />
      <Services />
      <About />
      <News />
      <Partners />
    </div>
  );
};

export default App;
