import products from "../../data/products";
import ProductCard from "./ProductCard";
import "./Products.css";

export default function Products({ category }) {
  const visibleProducts = products.filter((product) => product.category === category);

  return (
    <div className="products-section">
      <div className="products-topbar">
        <div className="products-count">{visibleProducts.length} products</div>
        <div className="products-sort">
          <span>Sort by:</span>
          <select className="sort-dropdown" defaultValue="">
            <option value="" disabled>
              Select
            </option>
          </select>
        </div>
      </div>

      <div className="products-grid">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
