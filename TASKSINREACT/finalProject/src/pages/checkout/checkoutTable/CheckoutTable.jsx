// src/pages/checkout/checkoutTable/CheckoutTable.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaRegClock, FaCheckCircle, FaRegClipboard } from "react-icons/fa";
import "./checkout.scss";

const CheckoutTable = () => {
  const navigate = useNavigate();

  return (
    <div className="checkout">
      <div className="checkout__message">
        <div className="checkout__icons">
          <FaRegClock className="icon clock" />
          <div className="line" />
          <FaRegClipboard className="icon note" />
        </div>
        <div className="checkout__text">
          <FaCheckCircle className="icon check" />
          <h2>Your Order Is Completed!</h2>
          <p>
            Thank you for your order! Your order is being processed and will be
            completed within 3–6 hours. You will receive an email confirmation
            when your order is completed.
          </p>
          <button
            className="btn-continue"
            onClick={() => navigate("/shop")}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
);

};

export default CheckoutTable;
