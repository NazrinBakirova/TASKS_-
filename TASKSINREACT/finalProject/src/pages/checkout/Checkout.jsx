import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import CheckoutTable from './checkoutTable/CheckoutTable'
import CheckoutHeader from './header/CheckoutHeader'


const Checkout = () => {
  return (
    <div>
      <Header/>
     <CheckoutHeader/>
      <CheckoutTable/>
      <Footer/>
    </div>
  )
}

export default Checkout
