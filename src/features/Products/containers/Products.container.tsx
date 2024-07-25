import { useProductsQuery } from "../queries/products.query";
import ProductList from "./Product.list";

const ProductsContainer = () => {
  const { isLoading, data } = useProductsQuery(false);

  if (isLoading) return "Loading...";

  if (!data) return <>No data retrieved</>;

  return (
    <div className="product-card-container">
      <ProductList data={data} />
    </div>
  );
};

export default ProductsContainer;
