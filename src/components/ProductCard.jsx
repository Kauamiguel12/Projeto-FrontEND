import { Link } from 'react-router-dom';
import './ProductCard.css';

function ProductCard({ image, name, category, price, priceDiscount, id }) {
  return (
    <Link to={`/produto/${id}`} className="product-card">
      <div className="product-card-image">
        <img src={image} alt={name} />
      </div>

      <div className="product-card-info">
        <p className="product-card-category">{category}</p>

        <h3>{name}</h3>

        <div className="product-card-prices">
          {priceDiscount && (
            <span className="product-card-old-price">
              R$ {price}
            </span>
          )}

          <strong>
            R$ {priceDiscount || price}
          </strong>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;