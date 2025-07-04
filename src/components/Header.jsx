import React from "react";
import "./Header.css";
import { IoHome } from "react-icons/io5";
import { IoBag } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const count = useSelector((state) => state.product.count);
  const product = useSelector((state) => state.product.products);
  console.log(product);
  return (
    <>
      <div className="navbar">
        <Link to={"/"} style={{ textDecoration: "none" }} className="footer-link">
          <div className="web-logo">
            <img
              src="/src/image/ecommerce logo.png"
              height={100}
              className="logo"
              alt="kjwvb"
            />
            <h1>SHOPPYGLOBE</h1>
          </div>
        </Link>

        <div className="nav-items">
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="nav-item">
              {/* <IoHome className='nav-icon'/> */}
              <p>Home</p>
            </div>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <div className="nav-item">
              {/* <IoBag className='nav-icon'/> */}
              <p>Products</p>
            </div>
          </Link>
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <div className="nav-item ">
              <FaShoppingCart className="cart-icon " />
              <span className="cart-count">{count}</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
