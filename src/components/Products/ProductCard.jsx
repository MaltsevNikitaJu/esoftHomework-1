import { useMemo, useState } from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import "./ProductCard.css";

function formatPrice(price) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}

export default function ProductCard({ product }) {
  const [imageIndex, setImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const totalImages = product.images.length;
  const currentImage = product.images[imageIndex];

  const nextImage = () => {
    setImageIndex((prev) => (prev + 1) % totalImages);
  };

  const prevImage = () => {
    setImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  return (
    <div className="product-card">
      <div className="product-media">
        {product.isSpecialOffer && <div className="offer-badge">Special Offer</div>}

        <button
          className="favorite-button"
          type="button"
          onClick={() => setIsFavorite((prev) => !prev)}
          aria-label="Toggle favorite"
        >
          {isFavorite ? "♥" : "♡"}
        </button>

        <img src={currentImage} alt={`${product.make} ${product.model}`} />

        {totalImages > 1 && (
          <>
            <button type="button" className="carousel-arrow left" onClick={prevImage}>
              {"<"}
            </button>
            <button type="button" className="carousel-arrow right" onClick={nextImage}>
              {">"}
            </button>
          </>
        )}

        <button type="button" className="images-counter" onClick={nextImage}>
          {imageIndex + 1}/{totalImages}
        </button>
      </div>

      <div className="product-content">
        <div className="product-brand">{product.make}</div>
        <div className="product-model">{product.model}</div>
        <div className="product-price">{formatPrice(product.price)}</div>
      </div>

      <div className="product-footer">
        {cartCount === 0 ? (
          <PrimaryButton className="cart-button" onClick={() => setCartCount(1)}>
            Add to Cart
          </PrimaryButton>
        ) : (
          <div className="cart-counter">
            <button type="button" onClick={() => setCartCount((prev) => prev - 1)}>
              -
            </button>
            <span>{cartCount} in cart</span>
            <button type="button" onClick={() => setCartCount((prev) => prev + 1)}>
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
