import { useState } from 'react';
import './Gallery.css';

function Gallery({ images = [], showThumbs = true }) {
  const [selectedImage, setSelectedImage] = useState(0);

  if (images.length === 0) {
    return <p>Nenhuma imagem disponível.</p>;
  }

  function previousImage() {
    setSelectedImage((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  }

  function nextImage() {
    setSelectedImage((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  }

  return (
    <div className="product-gallery">
      <div className="gallery-main">
        {images.length > 1 && (
          <button
            type="button"
            className="gallery-arrow gallery-arrow-left"
            onClick={previousImage}
            aria-label="Imagem anterior"
          >
            ‹
          </button>
        )}

        <img
          src={images[selectedImage]}
          alt={`Imagem do produto ${selectedImage + 1}`}
        />

        {images.length > 1 && (
          <button
            type="button"
            className="gallery-arrow gallery-arrow-right"
            onClick={nextImage}
            aria-label="Próxima imagem"
          >
            ›
          </button>
        )}
      </div>

      {showThumbs && images.length > 1 && (
        <div className="gallery-thumbnails">
          {images.map((image, index) => (
            <button
              key={index}
              type="button"
              className={`thumbnail ${
                selectedImage === index ? 'active' : ''
              }`}
              onClick={() => setSelectedImage(index)}
              aria-label={`Selecionar imagem ${index + 1}`}
            >
              <img src={image} alt={`Miniatura ${index + 1}`} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Gallery;