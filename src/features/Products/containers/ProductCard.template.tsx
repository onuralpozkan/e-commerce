import { Product } from "../types/product.type";

const ProductCardTemplate = ({ product }: { product: Product }) => {
  // const imgList = product.images && product.images.length > 1 ? product.images.map(imgSrc => <img src={imgSrc} alt="test"/>) : <img src={product.images[0]}/>:
  return (
    <div className="product-card">
      <img
        className="product__img"
        src={product?.images[0] || ""}
        alt={product.title}
        style={{ maxWidth: 180 }}
      />
      <span className="product-card__title">{product.title}</span>
      <span className="product-card__description">{product.description}</span>
    </div>
  );
};

export default ProductCardTemplate;
