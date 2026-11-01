import { useState } from "react";
import arrowLeft from "../../assets/arrow-left.svg";
import arrowRight from "../../assets/arrow-right.svg";
import "./Gallery.css";

export default function Gallery({
  images = [],
  width = 1440,
  height = 681,
  radius = "0px",
  showThumbs = false,
  className = "",
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    setCurrentIndex((index) => Math.min(index + 1, images.length - 1));
  };

  const goPrevious = () => {
    setCurrentIndex((index) => Math.max(index - 1, 0));
  };

  if (images.length === 0) return null;

  return (
    <div className={`gallery ${className}`} style={{ maxWidth: `${width}px` }}>
      <div
        className="gallery-viewport"
        style={{
          aspectRatio: `${width} / ${height}`,
          borderRadius: radius,
        }}
      >
        <div
          className="gallery-track"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div className="gallery-slide" key={index}>
              <img src={image.src} alt={image.alt || `Imagem ${index + 1}`} />
            </div>
          ))}
        </div>

        <button
          type="button"
          className="gallery-arrow gallery-arrow-left"
          onClick={goPrevious}
          disabled={currentIndex === 0}
          aria-label="Imagem anterior"
        >
          <img src={arrowLeft} alt="" />
        </button>

        <button
          type="button"
          className="gallery-arrow gallery-arrow-right"
          onClick={goNext}
          disabled={currentIndex === images.length - 1}
          aria-label="Próxima imagem"
        >
          <img src={arrowRight} alt="" />
        </button>
      </div>

      {showThumbs && (
        <div className="gallery-thumbnails">
          {images.map((image, index) => (
            <button
              type="button"
              key={index}
              className={`gallery-thumbnail ${
                currentIndex === index ? "selected" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
              style={{ borderRadius: radius }}
              aria-label={`Selecionar imagem ${index + 1}`}
              aria-pressed={currentIndex === index}
            >
              <img
                src={image.src}
                alt={image.alt || `Miniatura ${index + 1}`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
