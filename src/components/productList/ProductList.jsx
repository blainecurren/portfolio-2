import "./productList.scss";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl" id="productList">
      <div className="pl-texts">
        <h1 className="pl-title">Take a look at a couple of my projects!</h1>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
