import "./Filters.css";

export default function Filters() {
  const brandOptions = ["All brands", "LG", "Samsung", "Xiaomi", "Lenovo"];

  return (
    <div className="filter">
      <div className="filter-header">Filters</div>
      <div className="filter-body">
        <div className="filter-body-content">
          <div className="filter-body-content-header">Brand</div>
          <div className="filter-body-content-filters">
            <select className="brand-dropdown" defaultValue="All brands">
              {brandOptions.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="filter-body-content">
          <div className="filter-body-content-header">Price</div>
          <div className="filter-body-content-filters price-inputs">
            <input
              className="price-box"
              type="number"
              placeholder="0"
              min="0"
            />
            <input
              className="price-box"
              type="number"
              placeholder="5000"
              min="0"
            />
          </div>
        </div>
        <div className="filter-body-content">
          <button className="apply-button">Apply filters</button>
        </div>
      </div>
    </div>
  );
}
