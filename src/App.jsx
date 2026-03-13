import ProductCard from "./components/productCard/ProductCard";

function App() {

  const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "₹1999",
    category: "Electronics",
    image:
      "https://avstore.in/cdn/shop/files/1.AVStore-Sonos-Ace-Front-Angled-View-Hero-Black.jpg?v=1725620870",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "₹2999",
    category: "Gadgets",
    image:
      "https://ddfndelma2gpn.cloudfront.net/color/1591/oraimo_watch_5_black_1.webp",
  },
  {
    id: 3,
    name: "Running Shoes",
    price: "₹2499",
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
  },
];

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Our Products</h1>

      <div className="container">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            name={p.name}
            price={p.price}
            category={p.category}
            image={p.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;