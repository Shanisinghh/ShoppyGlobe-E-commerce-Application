import React from "react";
import "./CheckOut.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import { addaddress, emptyCount, emptyItems } from "../redux/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CheckOut() {
  const cartItems = useSelector((store) => store.product.items);
  const all = useSelector((store) => store.product.address);
  console.log(all);

  const [allok, setAllok] = useState(false);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [mobile, setMobile] = useState("");
  const [pyment, setPyment] = useState("");
  // const [Paypal, setPaypal] = useState("");
  // const [cradit, setCradit] = useState("");
  // const [cod, setCod] = useState("");
  // console.log(email,name,address,city,state,zip,mobile,paymentMethod);

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const MRP = cartItems.reduce(
    (total, item) =>
      total +
      Math.round(item.price / (1 - item.discountPercentage / 100)) *
        item.quantity,
    0
  );

  function handleSubmit() {
    dispatch(
      addaddress({
        name,
        address,
        city,
        state,
        zip,
        mobile,
        email,
        pyment,
      })
    );
    if (
      email.trim() === "" ||
      name.trim() === "" ||
      address.trim() === "" ||
      city.trim() === "" ||
      state.trim() === "" ||
      zip.trim() === "" ||
      pyment.trim() === "" ||
      mobile.trim() === ""
    ) {
      // alert("Please Fill All Fields");
      toast("Please fill all Fields!", {
        position: "bottom-center",
      });

      return;
    }
    setAllok(true);
  }
  function handleSubmitte() {
    dispatch(emptyCount());
    dispatch(emptyItems());
  }

  return (
    <>
      <div className="checkout">
        <div>
          <h1 className="checkout-title">CheckOut</h1>
          <div className="checkout-container">
            <form className="checkout-form">
              <h2>Shipping Address</h2>
              <label>Full Name:</label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                required
              />
              <label>Address:</label>
              <input
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                type="text"
                required
              />
              <label>City:</label>
              <input
                onChange={(e) => setCity(e.target.value)}
                value={city}
                type="text"
                required
              />
              <label>Zip Code:</label>
              <input
                onChange={(e) => setZip(e.target.value)}
                value={zip}
                type="text"
                required
              />
              <label>State:</label>
              <input
                onChange={(e) => setState(e.target.value)}
                value={state}
                type="text"
                required
              />
              <label>Phone Number:</label>
              <input
                onChange={(e) => setMobile(e.target.value)}
                value={mobile}
                type="number"
                required
              />
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <h3 className="payment-method-title">Payment Method</h3>
              <div className="payment-method">
                <label>
                  <input
                    onChange={(e) => setPyment(e.target.value)}
                    className="checkbox"
                    type="radio"
                    name="payment"
                    value="paypal"
                  />{" "}
                  Paypal
                </label>
                <label>
                  <input
                    onChange={(e) => setPyment(e.target.value)}
                    className="checkbox"
                    type="radio"
                    name="payment"
                    value="cradit card"
                  />{" "}
                  Cradit Card
                </label>
                <label>
                  <input
                    onChange={(e) => setPyment(e.target.value)}
                    className="checkbox"
                    type="radio"
                    name="payment"
                    value="cod"
                  />{" "}
                  COD
                </label>
              </div>
            </form>

            <div className="checkout-price-container">
              <h2 className="cart-title">Order Summary</h2>
              <div className="checkout-items">
                {cartItems.map((item) => (
                  <div className="checkout-item">
                    <img src={item.images[0]} height={50} alt={item.title} />
                    <div className="checkout-item-info">
                      <div>
                        <p className="checkout-item-title">{item.title}</p>
                        <p className="checkout-item-quantity">Quantity : {item.quantity}</p>
                      </div>
                      <p className="checkout-item-price">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="cart-price-details">
                <p>
                  <span>MRP : </span>${MRP.toFixed(2)}
                </p>
                <p>
                  <span>Delevery : </span>Free Delevery
                </p>
                <p className="save">
                  <span>You Save : </span>$
                  {(MRP.toFixed(2) - cartTotal.toFixed(2)).toFixed(2)}
                </p>
                <p className="total">
                  <span>Total : </span>${cartTotal.toFixed(2)}
                </p>
                {allok ? (
                  <Link to="/confermation">
                    <button
                      onClick={handleSubmitte}
                      className="btn place-order-btn"
                    >
                      Place Order
                    </button>
                    <ToastContainer />
                  </Link>
                ) : (
                  <div>
                    <button
                      onClick={handleSubmit}
                      className="btn place-order-btn"
                    >
                      Place Order
                    </button>
                    <ToastContainer />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckOut;
