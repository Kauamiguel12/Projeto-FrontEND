import './ProductOptions.css';

function ProductOptions({ options, selected, onChange }) {
  return (
    <div className="product-options">
      <h3>{options.title}</h3>

      <div className="options-list">
        {options.items.map((item) => (
          <button
            key={item}
            type="button"
            className={`option-button ${selected === item ? 'selected' : ''}`}
            onClick={() => onChange(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductOptions;