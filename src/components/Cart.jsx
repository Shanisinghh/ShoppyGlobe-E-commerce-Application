import { useDispatch, useSelector } from "react-redux";
import {
  incrementItem,
  decrementItem,
  couneInc,
  couneDec,
  removeItem,
} from "../redux/cartSlice";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Cart.css";


function Cart() {
  const cartItems = useSelector((store) => store.product.items);
  console.log("object", cartItems);
  const dispatch = useDispatch();
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

  function handleIncrement(item) {
    dispatch(incrementItem(item));
    dispatch(couneInc());
  }

  function handleDecrement(item) {
    dispatch(decrementItem(item));
    dispatch(couneDec());
  }
  function handleRemove(item, quantity) {
    dispatch(removeItem(item));
    dispatch(couneDec(quantity));
  }

  if (cartItems.length == 0) {
    return (
      <div className="no-item">
        <h1 c>No items Found</h1>
        <Link to="/products">
          <button className="btn">Browse-More</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart">
        <div className="cart-title">
          <h2>Your Cart ({cartItems.length} items)</h2>
        </div>

        <div className="cart-item-container">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="cart-box-item">
                <div>
                  <img
                    src={item.images[0]}
                    height={100}
                    className="cart-img"
                    alt={item.title}
                  />
                </div>
                <div>
                  <h2 className="cart-item-title">{item.title}</h2>
                  <p className="cart-item-brand">{item.brand}</p>
                  <h2 className="cart-item-price">
                    ${(item.price * item.quantity).toFixed(2)}{" "}
                    <span>
                      $
                      {Math.round(
                        item.price / (1 - item.discountPercentage / 100)
                      ) * item.quantity}
                    </span>
                  </h2>
                </div>
              </div>
              <div className="cart-item-quantity">
                <div className="inc-dic-btn">
                  <button className="btn" onClick={() => handleIncrement(item)}>
                    +
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button className="btn" onClick={() => handleDecrement(item)}>
                    -{" "}
                  </button>
                </div>
                <button
                  className="btn remove-btn"
                  onClick={() => handleRemove(item.id, item.quantity)}
                >
                  <MdDelete />
                  Remive
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="cart-price-container">
        <h2 className="cart-title">Price Details</h2>
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
        </div>

        <div className="btn-container">
          <Link to="/products">
            <button className="btn continue-btn">Continue Shopping</button>
          </Link>
          <Link to="/checkout">
            <button className="btn checkout-btn">Proceed to Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
