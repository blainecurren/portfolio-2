import React from "react";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import ProductList from "./components/productList/ProductList";
import Contact from "./components/contact/Contact";
import "./app.scss";

const App = () => {
  return (
    <div className="app">
      <Intro />
      <div className="sections">
        <About />
        <ProductList />
        <Contact />
      </div>
    </div>
  );
};

export default App;
