import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from '../pages/home/home'
import ContactPage from '../pages/contactPage/contact'
import AboutPage from '../pages/aboutPage/about'





const AppRoutes = () => {





  return (
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contact" element={<ContactPage />} />
       
     </Routes>
    
     

  )
}

export default AppRoutes
