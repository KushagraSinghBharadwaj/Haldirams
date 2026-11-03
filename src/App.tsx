import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategorySection from "./components/CategorySection";
import ProductSection from "./components/ProductSection";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="website">
      <Navbar />

      <main>
        <Hero />
        <CategorySection />
        <ProductSection />
      </main>
        <Footer />
    </div>
  );
}

export default App;