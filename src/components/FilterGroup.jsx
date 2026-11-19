import './FilterGroup.css';

function FilterGroup({
  title,
  options = [],
  selectedValues = [],
  onChange
}) {
  function handleChange(option) {
    if (!onChange) return;

    const isSelected = selectedValues.includes(option);

    const updatedValues = isSelected
      ? selectedValues.filter((item) => item !== option)
      : [...selectedValues, option];

    onChange(updatedValues);
  }

  return (
    <div className="filter-group">
      <h3>{title}</h3>

      {options.map((option) => (
        <label className="filter-option" key={option}>
          <input
            type="checkbox"
            checked={selectedValues.includes(option)}
            onChange={() => handleChange(option)}
          />

          <span>{option}</span>
        </label>
      ))}
    </div>
  );
}

export default FilterGroup;