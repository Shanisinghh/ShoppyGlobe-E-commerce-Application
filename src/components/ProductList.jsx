import React, { useState } from "react";
import "./ProductList.css";
import FetchData from "./FetchData";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { couneInc, addItem } from "../redux/cartSlice";

function ProductList() {
  const { products, error, isLoading } = FetchData();
  const [inputValue, setInputValue] = useState("");
  const [allproduct, setAllProduct] = useState([]);

  function handlesearch() {
    const filteredproduct = products.filter((product) =>
      product.title.toLowerCase().includes(inputValue.toLowerCase())
    );
    setAllProduct(filteredproduct);
    setInputValue("");
  }
  useEffect(() => {
    setAllProduct(products);
  }, [products]);

  const dispatch = useDispatch();
  function handleAddCart(product) {
    dispatch(couneInc());
    dispatch(addItem(product));
  }

  console.log(inputValue);
  if (error) {
    return <h1>{error}</h1>;
  }
  if (isLoading) {
    return  <div className="loading-spinner">
    <div className="spinner"></div>
    <p>Loading...</p>
  </div>;
  }

  return (
    <>
      <div className="product-list-container">
        <div className="search-bar-container">
          <input
            type="text"
            className="search-bar"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            placeholder="Search Products"
          />
          <button onClick={handlesearch} className="search-btn">
            Search
          </button>
        </div>
        <h2 className="heading"> Our Products</h2>
        <div className="product-list">
          {allproduct.map((product) => (
            <div className="product-card">
              <div className="product-img">
                <span className="discount">{product.discountPercentage}%</span>
                <img src={product.images[0]} height={150} alt={product.title} />
              </div>
              <div className="product-info">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">{product.description}</p>
                <p className="product-rating">⭐{product.rating}</p>
                <p className="product-price">
                  <span>${product.price}</span>{" "}
                  <span>
                    $
                    {Math.round(
                      product.price / (1 - product.discountPercentage / 100)
                    )}
                  </span>{" "}
                </p>
                <div className="product-buttons">
                  <button
                    onClick={() => handleAddCart(product)}
                    className="btn add-to-cart"
                  >
                    Add to Cart
                  </button>
                  <Link to={`/product/${product.id}`}>
                    <button className="btn view-details">View Details</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductList;
