// src/pages/cart/cartList/OrderList.jsx
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./orderList.scss";

const OrderList = () => {
  const navigate = useNavigate();
  const items = useSelector(state => state.cart.items);

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 10 : 0;
  const total = subtotal + shipping;

  return (
    <div className="order-list">
      <div className="order-list__items">
        {items.map(item => (
          <div className="order-list__row" key={item.id}>
            <div className="row__left">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="row__img"
              />
              <div className="row__info">
                <p className="row__title">{item.title}</p>
                <p className="row__meta">
                  Color: <span>{item.color || "Brown"}</span>
                </p>
                <p className="row__meta">
                  Size: <span>{item.size || "XL"}</span>
                </p>
              </div>
            </div>
            <div className="row__right">
              <p className="row__price">
                £{(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="order-list__totals">
        <div className="totals__line">
          <span>Subtotals:</span>
          <span>£{subtotal.toFixed(2)}</span>
        </div>
        <div className="totals__line">
          <span>Shipping:</span>
          <span>£{shipping.toFixed(2)}</span>
        </div>
        <div className="totals__line totals__line--total">
          <span>Totals:</span>
          <span>£{total.toFixed(2)}</span>
        </div>
        <p className="totals__note">
          Shipping & taxes calculated at checkout
        </p>
        <button
          className="totals__btn"
          onClick={() => navigate("/checkout")}
        >
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

export default OrderList;
