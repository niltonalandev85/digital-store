import "./FilterGroup.css";

export default function FilterGroup({
  title,
  inputType = "checkbox",
  options = [],
  name,
  selectedValues,
  onChange,
}) {
  return (
    <fieldset className="filter-group">
      <legend className="filter-group-title">{title}</legend>

      <div className="filter-group-options">
        {options.map((option) => {
          const value = option.value ?? option.text;

          return (
            <label className="filter-option" key={`${title}-${value}`}>
              <input
                type={inputType}
                name={name ?? title}
                value={value}
                checked={
                  selectedValues ? selectedValues.includes(value) : undefined
                }
                onChange={(event) => onChange?.(value, event.target.checked)}
              />

              <span>{option.text}</span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
