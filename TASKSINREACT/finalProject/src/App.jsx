import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Blog from './pages/home/homeComponents/blog/Blog';
import BlogDetail from './pages/home/homeComponents/blog/BlogDetails';
import Login from './pages/login/Login';
import SignUp from './pages/sign/SignUp';
import Contact from './pages/contact/Contact';
import Cart from './pages/cart/Cart';
import Shop from './pages/shop/Shop';
import Demo from './pages/demo/Demo';
import Checkout from './pages/checkout/Checkout';
import Wishlist from './pages/favorites/Wishlist';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} /> 
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/demo' element ={<Demo/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
    </Routes>
  );
}

export default App;
