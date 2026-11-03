const products = [
  {
    name: "Kaju Katli",
    price: "₹450",
    weight: "500g",
    icon: "🍥",
    tag: "Bestseller",
  },
  {
    name: "Motichoor Ladoo",
    price: "₹350",
    weight: "500g",
    icon: "🟠",
    tag: "Popular",
  },
  {
    name: "Gulab Jamun",
    price: "₹280",
    weight: "500g",
    icon: "🍮",
    tag: "Classic",
  },
  {
    name: "Soan Papdi",
    price: "₹220",
    weight: "500g",
    icon: "🍰",
    tag: "Traditional",
  },
];

function ProductSection() {
  return (
    <section className="products section" id="products">
      <div className="section-heading">
        <p className="eyebrow">CUSTOMER FAVOURITES</p>
        <h2>Our Bestsellers</h2>
        <p>Discover the sweets everyone loves.</p>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.name}>
            <div className="product-image">
              <span className="product-tag">{product.tag}</span>
              <span className="product-emoji">{product.icon}</span>
            </div>

            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.weight}</p>

              <div className="product-bottom">
                <strong>{product.price}</strong>
                <button aria-label={`Add ${product.name} to cart`}>
                  + Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductSection;