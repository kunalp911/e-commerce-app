import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import products from "../../data/Product";


  
export default function ProductList() {
  const { addToCart } = useCart();  

  return (
    <div className="container mt-4">
      <h2>Products</h2>
      <div className="row">
        {products.slice(0, 10).map((product) => (
          <div className="col-md-4 mb-3" key={product.id}>
            <div className="card p-3">
              <img className="card-img-top" src={product.image} alt={product.name} />
              <h5 className="mt-2">{product.name}</h5>
              <p>${product.price}</p>
              <div className="d-flex justify-content-between">
                <Link to={`/product/${product.id}`} className="btn btn-info">
                  View
                </Link>
                <button className="btn btn-primary" onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
