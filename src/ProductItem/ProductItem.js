import Button from "../Button/Button";
import Image from "../Image/Image";

const ProductItem = ({ item }) => (
  <li>
    <h3>{item.name}</h3>
    <Image imgSrc={item.image}></Image>
    <span>Price: {item.price}</span>
    {/* <button>Add to Cart</button> */}
    <Button>Add to Cart</Button>
  </li>
);
export default ProductItem;
