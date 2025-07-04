import React from "react";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import FetchData from "./FetchData";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { couneInc, addItem } from "../redux/cartSlice";
import { useDispatch } from "react-redux";


function ProductDetails() {
  const { id } = useParams();
  const { products, isLoading } = FetchData();

  console.log(id);
  const dispatch = useDispatch();
  const product = products.filter((product) => product.id == id);
  console.log(product);
  function handleAddCart(product) {
    dispatch(couneInc());
    dispatch(addItem(product));
  }

  console.log();
  if (isLoading) {
    return (
      <div className="loading-spinner">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <>
      <div className="product-details-container">
        <Link to="/products" style={{ textDecoration: "none" }}>
          <button className="back-btn">Back to Products Page</button>
        </Link>
        {product.map((product) => (
          <div>
            <div className="product-details">
              <div className="product-details-img">
                <img src={product.images[0]} alt={product.title} />
              </div>
              <div className="product-details-info">
                <h1 className="product-details-title">{product.title}</h1>
                <p className="product-details-brand">{product.brand}</p>
                <p className="product-details-price">
                  <span>${product.price}</span>{" "}
                  <span className="product-details-price-strike">
                    $
                    {Math.round(
                      product.price / (1 - product.discountPercentage / 100)
                    )}
                  </span>{" "}
                  <span className="product-details-discount">
                    {product.discountPercentage}% Off
                  </span>
                </p>
                <p className="product-details-rating">
                  <span>Rating : </span>
                  {product.rating}⭐
                </p>
                <p className="product-details-category">
                  <span>Category : </span>
                  {product.category}
                </p>
                <p className="product-details-dimention">
                  <span>Dimention : </span>
                  {product.dimensions.depth} x {product.dimensions.height} x{" "}
                  {product.dimensions.width}
                </p>
                <p className="product-details-description">
                  <span>Summary : </span>
                  {product.description}
                </p>
                <p className="product-details-stock">
                  <span>Availability : </span>
                  {product.stock} {product.stock ? "In Stock" : "Out of Stock"}{" "}
                </p>

                <button
                  onClick={() => handleAddCart(product)}
                  className="btn add-to-cart-btn"
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="product-details-delivery-reviews-container">
              <div className="product-details-delivery-container">
                <h2>Delivery Information :</h2>
                <p className="product-details-Delivery-info">
                  <span>Availability : </span>
                  {product.stock} {product.stock ? "In Stock" : "Out of Stock"}{" "}
                </p>
                <p className="product-details-Delivery-info">
                  <span>Warranty : </span>
                  {product.warrantyInformation}
                </p>
                <p className="product-details-Delivery-info">
                  <span>Minimum order : </span>
                  {product.minimumOrderQuantity}
                </p>
                <p className="product-details-Delivery-info">
                  <span>Return : </span>
                  {product.returnPolicy}
                </p>
                <p className="product-details-Delivery-info">
                  <span>Shipping : </span>
                  {product.shippingInformation}
                </p>
                <h2>Meta Information :</h2>
                <p className="product-details-Delivery-info">
                  <span>Barcode : </span>
                  {product.meta.barcode}
                </p>
                <p className="product-details-Delivery-info">
                  <span>CreatedAt : </span>
                  {product.meta.createdAt}
                </p>
                <p className="product-details-Delivery-info">
                  <span>UpdatedAt : </span>
                  {product.meta.updatedAt}
                </p>
                <p className="product-details-Delivery-info">
                  <span>QrCode : </span>
                  <img src={product.meta.qrCode} height={30} alt="" />
                </p>
              </div>
              <div className="product-details-reviews-container">
                <h2>Reviews :</h2>
                {product.reviews.map((review) => (
                  <div className="product-details-review-box">
                    <div className="product-details-review-user">
                      <div className="product-details-review-img"></div>
                      <p className="product-details-review-name">
                        {review.reviewerName}
                      </p>
                      <p className="product-details-review-rating">
                        {review.rating}⭐
                      </p>
                    </div>
                    <div>
                      <p className="product-details-review-comment">
                        {review.comment}
                      </p>
                      <p className="product-details-review-date">
                        {review.date} {review.reviewerEmail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductDetails;
