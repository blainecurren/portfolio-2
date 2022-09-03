import React from "react";
import "./productList.css";
import Product from "../product/Product";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. It's Blaine</h1>
        <p className="pl-desc">
          This is a creative portfolio that your work has been waiting for.
          Beautiful hoomes, stunning portfolio styles & a whole lot more awaits
          inside.
        </p>
      </div>
      <div className="pl-list">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default ProductList;
