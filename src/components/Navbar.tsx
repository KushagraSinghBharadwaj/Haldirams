function Navbar() {
  return (
    <>
      <div className="announcement">
        A little sweetness makes every moment special.
      </div>

      <header className="navbar">
        <h1 className="logo">
          HALDIRAM'S<span>.</span>
        </h1>

        <nav>
          <a href="#">Home</a>
          <a href="#categories">Categories</a>
          <a href="#products">Shop</a>
          <a href="#footer">Contact</a>
        </nav>

        <div className="nav-actions">
          <button aria-label="Search">⌕</button>
          <button aria-label="Account">♙</button>
          <button aria-label="Shopping cart">🛍</button>
        </div>
      </header>
    </>
  );
}

export default Navbar;