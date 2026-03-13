import "./ProductCard.css";

function ProductCard({ name, price, category, image }) {
  return (
    <div className="card">
      <img src={image} alt={name} className="product-img" />

      <h3>{name}</h3>
      <h5 className="category">{category}</h5>
      <p className="price">{price}</p>
      <button className="btn">Add To Cart</button>
    </div>
  );
}

export default ProductCard;