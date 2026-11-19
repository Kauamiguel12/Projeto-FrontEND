import './ProductDetails.css';

function ProductDetails({ product }) {
  return (
    <section className="product-details">
      <h2>Descrição do produto</h2>

      <p>
        {product.description ||
          'Confira os detalhes deste produto da DRIP STORE. Uma opção para quem busca estilo, conforto e qualidade.'}
      </p>

      <div className="product-details-info">
        <div>
          <strong>Marca:</strong>
          <span>{product.brand}</span>
        </div>

        <div>
          <strong>Categoria:</strong>
          <span>{product.category}</span>
        </div>

        <div>
          <strong>Produto:</strong>
          <span>{product.name}</span>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;