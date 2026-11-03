
const categories = [
  { name: "Indian Sweets", icon: "🍬" },
  { name: "Namkeen", icon: "🥨" },
  { name: "Gift Boxes", icon: "🎁" },
  { name: "Bakery", icon: "🍪" },
];

function CategorySection() {
  return (
    <section className="categories section" id="categories">
      <div className="section-heading">
        <p className="eyebrow">EXPLORE OUR COLLECTION</p>
        <h2>Shop by Category</h2>
      </div>

      <div className="category-grid">
        {categories.map((category) => (
          <div className="category-card" key={category.name}>
            <span>{category.icon}</span>
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategorySection;
