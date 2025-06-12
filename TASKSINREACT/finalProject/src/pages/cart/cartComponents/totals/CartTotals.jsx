// src/components/CartTotals/CartTotals.jsx
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './totals.scss';

const CartTotals = () => {
  const navigate = useNavigate();
  const items = useSelector(state => state.cart.items);
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const total = subtotal;

  const [address, setAddress] = useState({
    country: '',
    state: '',
    postal: ''
  });

  const handleChange = e => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleCalculate = () => {
    // Навигация на страницу Demo, передаём адрес в состояние навигации
    navigate('/demo', { state: { shippingAddress: address } });
  };

  return (
    <div className="cart-totals">
      <h3>Cart Totals</h3>

      <div className="totals-box">
        <div className="line">
          <span>Subtotals:</span>
          <span>£{subtotal.toFixed(2)}</span>
        </div>
        <div className="line">
          <span>Totals:</span>
          <span>£{total.toFixed(2)}</span>
        </div>
        <p className="note">Shipping & taxes calculated at checkout</p>
        <button
          className="checkout-btn"
          onClick={() => navigate('/checkout')}
        >
          Proceed To Checkout
        </button>
      </div>

      <h3>Calculate Shipping</h3>

      <div className="calculate-box">
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={address.country}
          onChange={handleChange}
        />
        <input
          type="text"
          name="state"
          placeholder="State / Country"
          value={address.state}
          onChange={handleChange}
        />
        <input
          type="text"
          name="postal"
          placeholder="Postal Code"
          value={address.postal}
          onChange={handleChange}
        />
        <button
          className="calc-btn"
          onClick={handleCalculate}
        >
          Calculate Shipping
        </button>
      </div>
    </div>
  );
};

export default CartTotals;
