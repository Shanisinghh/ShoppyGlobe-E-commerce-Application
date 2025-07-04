import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineLocalOffer } from "react-icons/md";
import { IoCompassOutline } from "react-icons/io5";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Home() {
  return (
    <>
      <div>
        <div className="home-container">
          <div className="home-img-container">
            <div className="home-text">
              <h1>DISCOVER THE PERFECT STYLE FOR YOU</h1>
              <h2>Premium Shopping Experience with Incredible Deals</h2>
              <div className="home-btn-container">
                <Link to="/products">
                  <button className="btn continue-btn">Shop Now</button>
                </Link>
                <Link to="/products">
                  <button className="btn checkout-btn">New Arrivals</button>
                </Link>
              </div>
            </div>
            <div className="home-img">
              <img src="/src/image/cover-banner.png" alt="" />
            </div>
          </div>
          <div className="why-choose-us-container">
            <div className="why-choose-us-text">
              <h1>Why Choose Us</h1>
            </div>
            <div className="why-choose-us-box-container">
              <div className="why-choose-us-box product-card">
                <TbTruckDelivery className="why-choose-us-icon" />
                <p>Free Delivery</p>
                <span>Get your products delivered in 24-48 hours</span>
              </div>
              <div className="why-choose-us-box product-card">
                <MdOutlineLocalOffer className="why-choose-us-icon" />
                <p>Best Offers</p>
                <span>Get the best offers on our products</span>
              </div>
              <div className="why-choose-us-box product-card">
                <IoCompassOutline className="why-choose-us-icon" />
                <p>Wide Selection</p>
                <span>Browse through thousands of quality products</span>
              </div>
              <div className="why-choose-us-box product-card">
                <MdOutlineSupportAgent className="why-choose-us-icon" />
                <p>24/7 Support</p>
                <span>Get help from our dedicated customer support team</span>
              </div>
            </div>
          </div>
          <div className="footer">
            <div className="footer-container">
              <div className="footer-box">
                <div className="web-logo footer-logo">
                  <img
                    src="/src/image/ecommerce logo.png"
                    height={100}
                    className="logo"
                    alt="kjwvb"
                  />
                  <h1>SHOPPYGLOBE</h1>
                </div>
              </div>
              <div className="footer-box">
                <h2>Company</h2>
                <Link to={"/"} className="footer-link">
                  <p>Home</p>
                </Link>
                <Link to={"/products"} className="footer-link">
                  <p>Products</p>
                </Link>

                <p>About Us</p>
                <p>Contact Us</p>
              </div>
              <div className="footer-box">
                <h2>Support</h2>
                <p>FAQ</p>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
                <p>Refund Policy</p>
              </div>
              <div className="footer-box">
                <h2>Contact Us</h2>
                <p>
                  <FaPhoneAlt /> 123-456-789
                </p>
                <p>
                  <MdEmail /> shoppyglobe@gmail.com
                </p>
                <p>
                  <FaInstagramSquare /> shoppyglobe
                </p>
                <p>
                  <FaFacebook /> shoppyglobe
                </p>
              </div>
            </div>
            <div className="copyright">
              <p>© 2025 ShoppyGlobe. All rights reserved. </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
