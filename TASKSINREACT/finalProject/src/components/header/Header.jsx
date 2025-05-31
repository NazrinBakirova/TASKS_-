import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import vectorImage from './Imgs/Vector (15).png';
import loginIcon from './Imgs/carbon_user.png';
import cartIcon from './Imgs/cart.png';
import './Header.css'

const Header = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <div className='violet_header'>
      <div className='violet_header_menu'>
          <nav> 
            <ul>
            <li className='violet_header_menu_item'><Link to="/login">Login<img src={loginIcon} alt='loginIcon'></img></Link></li>
       <li className='violet_header_menu_item'><Link to="/wishlist">Wishlist<img src={vectorImage} alt='wishlistIcon'></img></Link></li>
       <li className='violet_header_menu_item'><Link to="/cart">  <img src={cartIcon} alt="cartIcon" width={24} height={24} /></Link></li>
            </ul>
          </nav>
        </div>
     
      
      </div>
      <div className='header'>
        <h2 className='header_title'>Hekto</h2>
        <div className='header_menu'>
          <nav> 
            <ul>
              <li className='header_menu_item'><Link to="/">Home</Link></li>
              <li className='header_menu_item'><Link to="/pages">Pages</Link></li>
              <li className='header_menu_item'><Link to="/products">Products</Link></li>
              <li className='header_menu_item'><Link to="/blog">Blog</Link></li>
              <li className='header_menu_item'><Link to="/shop">Shop</Link></li>
              <li className='header_menu_item'><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
        
        <div className='header_input'>
        <input
        className='header_input_place'
          type="text"
          value={value}
          onChange={handleChange}



        />
       <div className='header_input_icon'><FontAwesomeIcon icon={faMagnifyingGlass} /></div> 
       </div>
      </div>
    </div>
  );
};

export default Header;
