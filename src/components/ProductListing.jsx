
import ProductCard from './ProductCard';
import './ProductListing.css';

function ProductListing({ products = [] }) {
  return (
    <div className="product-listing">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          id={product.id}
          image={product.image}
          name={product.name}
          category={product.category}
          price={product.price}
          priceDiscount={product.priceDiscount}
        />
      ))}
    </div>
  );
}

export default ProductListing;
