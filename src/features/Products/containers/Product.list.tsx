import { Product } from "../types/product.type";
import ProductCardTemplate from "./ProductCard.template";

const ProductList = ({ data }: { data: Product[] }) => {
  const list = data.map((product) => <ProductCardTemplate product={product} />);

  return <div className="product-list">{list}</div>;
};

export default ProductList;
