import { Link } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({
  id,
  imagem,
  image,
  name,
  price,
  priceDiscount,
}) {
  const productImage = imagem ?? image;

  const hasDiscount = priceDiscount !== undefined && priceDiscount !== null;

  function formatPrice(value) {
    return Number(value).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  return (
    <Link to={`/product/${id}`} className="product-card-link">
      <article className="product-card">
        <div className="product-card-image">
          <img src={productImage} alt={name} />
        </div>

        <h3 className="product-card-name">{name}</h3>

        <div className="product-card-prices">
          <span className={hasDiscount ? "old-price" : "current-price"}>
            {formatPrice(price)}
          </span>

          {hasDiscount && (
            <span className="current-price">{formatPrice(priceDiscount)}</span>
          )}
        </div>
      </article>
    </Link>
  );
}
