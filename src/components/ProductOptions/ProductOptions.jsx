import { useState } from "react";
import "./ProductOptions.css";

export default function ProductOptions({
  options = [],
  radius = "4px",
  shape = "square",
  type = "text",
}) {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="product-options">
      {options.map((option, index) => (
        <button
          key={`${option}-${index}`}
          type="button"
          className={`product-option ${shape} ${
            selectedOption === index ? "selected" : ""
          }`}
          style={{
            borderRadius: shape === "circle" ? "50%" : radius,
            backgroundColor: type === "color" ? option : "#ffffff",
          }}
          onClick={() => setSelectedOption(index)}
          aria-label={
            type === "color"
              ? `Selecionar cor ${option}`
              : `Selecionar tamanho ${option}`
          }
          aria-pressed={selectedOption === index}
        >
          {type === "text" && option}
        </button>
      ))}
    </div>
  );
}
