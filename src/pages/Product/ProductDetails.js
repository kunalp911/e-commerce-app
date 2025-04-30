import { useParams } from "react-router-dom";
import products from "../../data/Product";
import { useCart } from "../../context/CartContext";
import { useState } from "react";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);

  return (
    <div className="container mt-4">
      <div className="text-center">
        <img
          src={product.image}
          alt={product.name}
          style={{
            maxWidth: "300px",
            width: "100%",
            height: "auto",
            objectFit: "contain",
          }}
          className="mb-3"
        />
      </div>
      <div className="text-center">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>
          <strong>Price:</strong> ${product.price}
        </p>

        <div className="d-flex justify-content-center gap-3 align-items-center mt-3">
          <input
            type="number"
            value={qty}
            min="1"
            onChange={(e) => setQty(Number(e.target.value))}
            className="form-control w-25"
          />
          <button
            className="btn btn-success"
            onClick={() => addToCart(product, qty)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
