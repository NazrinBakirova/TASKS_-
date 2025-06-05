import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Blog from './pages/home/homeComponents/blog/Blog';
import BlogDetail from './pages/home/homeComponents/blog/BlogDetails';
import Login from './pages/login/Login'; 
//import SignUp from './pages/singUp/SingUp'; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogDetail />} />
      <Route path="/login" element={<Login />} />          
          
    </Routes>
  );
}

export default App;
