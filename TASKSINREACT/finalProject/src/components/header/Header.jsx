import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import vectorImage from './Imgs/Vector (15).png';
import loginIcon from './Imgs/carbon_user.png';
import cartIcon from './Imgs/cart.png';
import './Header.scss';

const Header = () => {
  const [value, setValue] = useState('');
  const cartCount = useSelector(state => state.cart.items.length);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div className="violet_header">
        <div className="violet_header_menu">
          <nav>
            <ul>
              <li>
                <Link to="/login">
                  Login <img src={loginIcon} alt="login" />
                </Link>
              </li>
              <li>
                <Link to="/wishlist">
                  Wishlist <img src={vectorImage} alt="wishlist" />
                </Link>
              </li>
              <li>
                <Link to="/cart" className="cart-link">
                  <img src={cartIcon} alt="cart" width={24} height={24} />
                  {cartCount > 0 && (
                    <span className="cart-count">{cartCount}</span>
                  )}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="header">
        <h2 className="header_title">Hekto</h2>
        <div className="header_menu">
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
        <div className="header_input">
         
        </div>
      </div>
    </>
  );
};

export default Header;
