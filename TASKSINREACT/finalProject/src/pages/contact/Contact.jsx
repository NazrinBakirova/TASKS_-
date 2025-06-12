import React from 'react'
import Header from '../../components/header/Header'
import Info from './contactComponents/contactInfo/Info'
import ContactHeader from './contactComponents/header/ContactHeader'
import GetInTouch from './contactComponents/getInTouch/GetInTouch'
import Footer from '../../components/footer/Footer'
const Contact = () => {
  return (
    <div>
      <Header/>
      <ContactHeader/>
      <Info/>
  <GetInTouch/>
  <Footer/>
    </div>
  )
}

export default Contact
