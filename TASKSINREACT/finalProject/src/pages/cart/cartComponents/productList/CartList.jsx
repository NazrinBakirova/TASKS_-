import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeFromCart,
  updateQuantity,
  clearCart
} from '../../../../redux/cartSlice';
import './orderStyle/cart.scss';

const CartList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const handleDecrement = (id, qty) => {
    if (qty > 1) {
      dispatch(updateQuantity({ id, quantity: qty - 1 }));
    }
  };

  const handleIncrement = (id, qty) => {
    dispatch(updateQuantity({ id, quantity: qty + 1 }));
  };

  return (
    <div className="cart-container">
      <div className="cart-header-row">
        <div>Product</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Total</div>
        <div></div>
      </div>

      {cartItems.map(item => (
        <div className="cart-row" key={item.id}>
          <div className="product-info">
            <img src={item.thumbnail} alt={item.title} />
            <div>
              <p>{item.title}</p>
              <span>Brand: {item.brand}</span>
            </div>
          </div>

          <div className="price">£{item.price.toFixed(2)}</div>

          <div className="quantity">
            <button
              className="qty-btn"
              onClick={() => handleDecrement(item.id, item.quantity)}
            >–</button>
            <span className="qty-value">{item.quantity}</span>
            <button
              className="qty-btn"
              onClick={() => handleIncrement(item.id, item.quantity)}
            >+</button>
          </div>

          <div className="total">
            £{(item.price * item.quantity).toFixed(2)}
          </div>

          <button
            className="remove-btn"
            onClick={() => dispatch(removeFromCart(item.id))}
          >×</button>
        </div>
      ))}

      <div className="cart-actions">
        <button
          className="clear-cart-btn"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default CartList;
