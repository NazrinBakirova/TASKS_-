import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column logo-column">
          <h2 className="footer-logo">Hekto</h2>
          <div className="footer-subscribe">
            <input type="email" placeholder="Enter Email Address" />
            <button>Sign Up</button>
          </div>
          <p className="footer-contact">
            Contact Info <br />
            17 Princess Road, London, Greater London NW1 8JR, UK
          </p>
        </div>

        <div className="footer-column">
          <h4>Categories</h4>
          <ul>
            <li>Laptops & Computers</li>
            <li>Cameras & Photography</li>
            <li>Smart Phones & Tablets</li>
            <li>Video Games & Consoles</li>
            <li>Waterproof Headphones</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Customer Care</h4>
          <ul>
            <li>My Account</li>
            <li>Discount</li>
            <li>Returns</li>
            <li>Orders History</li>
            <li>Order Tracking</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Pages</h4>
          <ul>
            <li>Blog</li>
            <li>Browse the Shop</li>
            <li>Category</li>
            <li>Pre-Built Pages</li>
            <li>Visual Composer Elements</li>
            <li>WooCommerce Pages</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
