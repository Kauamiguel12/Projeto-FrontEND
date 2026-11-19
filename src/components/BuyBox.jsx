import { useState } from 'react';
import ProductOptions from './ProductOptions';
import './BuyBox.css';

function BuyBox({ product }) {
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');

  return (
    <div className="buy-box">
      <h1>{product.name}</h1>

      <p className="buy-box-category">
        {product.category} | {product.brand}
      </p>

      <div className="buy-box-price">
        <span className="old-price">
          R$ {product.price}
        </span>

        <strong>
          R$ {product.priceDiscount || product.price}
        </strong>
      </div>

      <p className="buy-box-description">
        Produto selecionado da coleção DRIP STORE.
        Confira as opções disponíveis antes de comprar.
      </p>

      <ProductOptions
        options={{
          title: 'Tamanho',
          items: ['38', '39', '40', '41', '42'],
        }}
        selected={size}
        onChange={setSize}
      />

      <ProductOptions
        options={{
          title: 'Cor',
          items: ['Preto', 'Branco', 'Azul'],
        }}
        selected={color}
        onChange={setColor}
      />

      <button
        className="buy-button"
        disabled={!size || !color}
        onClick={() => alert(`Produto: ${product.name}\nTamanho: ${size}\nCor: ${color}`)}
      >
        COMPRAR
      </button>
    </div>
  );
}

export default BuyBox;