import ProductCard from "../ProductCard/ProductCard";
import "./ProductListing.css";

export default function ProductListing({ products = [] }) {
  return (
    <div className="product-listing">
      {products.map((product, index) => (
        <ProductCard
          key={product.id ?? index}
          id={product.id}
          imagem={product.image}
          name={product.name}
          price={product.price}
          priceDiscount={product.priceDiscount}
        />
      ))}
    </div>
  );
}
