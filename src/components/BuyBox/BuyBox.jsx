import starIcon from "../../assets/star-icon.svg";
import "./BuyBox.css";

export default function BuyBox({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  children,
}) {
  const hasDiscount = priceDiscount !== undefined && priceDiscount !== null;

  function formatPrice(value) {
    return Number(value).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  return (
    <div className="buy-box">
      {/* Nome do produto */}
      <h1 className="buy-box-name">{name}</h1>

      {/* Referência */}
      <p className="buy-box-reference">Ref: {reference}</p>

      {/* Avaliações */}
      <div className="buy-box-rating">
        <div className="buy-box-stars">
          <span>{stars}</span>
          <img src={starIcon} alt="" />
        </div>

        <span className="buy-box-rating-count">({rating} avaliações)</span>
      </div>

      {/* Preços */}
      <div className="buy-box-prices">
        <span
          className={
            hasDiscount ? "buy-box-old-price" : "buy-box-current-price"
          }
        >
          {formatPrice(price)}
        </span>

        {hasDiscount && (
          <span className="buy-box-current-price">
            {formatPrice(priceDiscount)}
          </span>
        )}
      </div>

      {/* Descrição */}
      <div className="buy-box-description">
        <h3>Descrição do produto</h3>
        <p>{description}</p>
      </div>

      {/* Opções de tamanho e cor */}
      {children && <div className="buy-box-options">{children}</div>}

      {/* Botão Comprar */}
      <button type="button" className="buy-box-button">
        COMPRAR
      </button>
    </div>
  );
}
