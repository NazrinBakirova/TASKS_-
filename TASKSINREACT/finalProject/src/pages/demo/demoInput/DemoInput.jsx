// src/pages/demo/demoInput/DemoInput.jsx
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./demoInput.scss";

const DemoInput = () => {
  const user = useSelector(state => state.user.data);
  const navigate = useNavigate();

  // Если не залогинен, перекидываем на страницу логина
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const [contactEmail, setContactEmail] = useState("");
  const [keepUpdated, setKeepUpdated] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [apt, setApt] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("Bangladesh");
  const [postalCode, setPostalCode] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    // Здесь можно отправить данные или перейти дальше
    console.log({
      contactEmail,
      keepUpdated,
      firstName,
      lastName,
      address,
      apt,
      city,
      country,
      postalCode
    });
    navigate("/checkout");
  };

  return (
    <form className="demo-input" onSubmit={handleSubmit}>
      <h1 className="demo-input__title">Hekto Demo</h1>
      <p className="demo-input__steps">Cart / Information / Shipping / Payment</p>

      <section className="demo-input__section">
        <div className="demo-input__header">
          <h2>Contact Information</h2>
          <a href="/login" className="demo-input__login-link">
            Already have an account? <span>Log in</span>
          </a>
        </div>
        <input
          type="email"
          placeholder="Email or mobile phone number"
          value={contactEmail}
          onChange={e => setContactEmail(e.target.value)}
          required
        />
        <label className="checkbox">
          <input
            type="checkbox"
            checked={keepUpdated}
            onChange={e => setKeepUpdated(e.target.checked)}
          />
          <span>Keep me up to date on news and exclusive offers</span>
        </label>
      </section>

      <section className="demo-input__section">
        <h2>Shipping address</h2>
        <div className="row">
          <input
            type="text"
            placeholder="First name (optional)"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </div>
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={e => setAddress(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Apartment, suite, etc. (optional)"
          value={apt}
          onChange={e => setApt(e.target.value)}
        />
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={e => setCity(e.target.value)}
          required
        />
        <div className="row">
          <select value={country} onChange={e => setCountry(e.target.value)}>
            <option>Bangladesh</option>
            <option>USA</option>
            <option>UK</option>
          </select>
          <input
            type="text"
            placeholder="Postal Code"
            value={postalCode}
            onChange={e => setPostalCode(e.target.value)}
            required
          />
        </div>
      </section>

      <button type="submit" className="btn-continue">
        Continue Shipping
      </button>
    </form>
  );
};

export default DemoInput;
