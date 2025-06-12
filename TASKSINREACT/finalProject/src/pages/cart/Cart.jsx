import React from 'react'
import CartHeader from './cartComponents/header/CartHeader'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import CartList from './cartComponents/productList/CartList'
import CartTotals from './cartComponents/totals/CartTotals'
import './style.scss'
const Cart = () => {
  return (
    <div>
        <Header/>
      <CartHeader/>
      <div className='right_part'>
      <CartList/>
      <CartTotals/>
      </div>
      <Footer/>
    </div>
  )
}

export default Cart
