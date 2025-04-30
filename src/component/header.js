import React from "react";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const { totalItems } = useCart();
    const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary text-white p-2" style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
    <a className="navbar-brand text-white" href="#" onClick={() => navigate("/")}>
      E-Commerce App
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link text-white" href="#" onClick={() => navigate("/")}>
            Home
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link text-white" href="#" onClick={() => navigate("/product")}>
            Product
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link text-white" style={{ cursor: 'pointer' }} onClick={() => navigate("/cart")}>
            <Badge badgeContent={totalItems} color="secondary">
              <ShoppingCartIcon style={{ color: 'white' }} />
            </Badge>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link text-white" href="#" onClick={logout}>
            Log Out
          </a>
        </li>
      </ul>
    </div>
  </nav>

  );
};

export default Header;
