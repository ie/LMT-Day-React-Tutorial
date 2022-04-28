import ProductItem from "./../ProductItem/ProductItem";
import react from "react";

const Products = ({ data }) => (
  <ul className="products">
    {data.map((item) => (
      <ProductItem item={item} />
    ))}
  </ul>
);

export default Products;
