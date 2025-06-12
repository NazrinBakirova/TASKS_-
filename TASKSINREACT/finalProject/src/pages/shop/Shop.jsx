import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import ShopList from './shopList/ShopList'
import ShopHeader from './shopHeader/ShopHeader'

const Shop = () => {
  return (
    <div>
      <Header/>
      <ShopHeader/>
      <ShopList/>
      <Footer/>
    </div>
  )
}

export default Shop
