import React from "react";
import "./Confermation.css";
import { MdCheckCircle } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Confermation() {
  const address = useSelector((state) => state.product.address);
  console.log(address);
  return (
    <>
      <div className="confermation-container">
        <div className="confermation-box">
          <div>
            <MdCheckCircle className="confermation-icon" />
          </div>
          <h1 className="confermation-title">Thanks you for your order!</h1>
          <h3>Your order has been placed successfully</h3>
          <p>
            Order ID: <span>{Math.floor(Math.random() * 1000000)}</span>
          </p>
          <p>
            Order Date: <span>{new Date().toLocaleDateString()}</span>
          </p>
          <p>We've sent a confirmation email to</p>
          <p>
            <span>{address.email}</span>
          </p>
          <div className="btn-container">
            <Link to="/">
              <button className="btn continue-btn">Return to Home</button>
            </Link>
            <Link to="/products">
              <button className="btn checkout-btn">Continue Shopping</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Confermation;
