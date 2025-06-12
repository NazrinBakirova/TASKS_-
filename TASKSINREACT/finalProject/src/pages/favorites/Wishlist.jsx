import React from 'react'
import WishlistHeader from './wishlistHeader/WishlistHeader'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import WishlistTable from './wishlistTable/WishlistTable'
const Wishlist = () => {
  return (
    <div>
      <Header/>
      <WishlistHeader/>
      <WishlistTable/>
      <Footer/>
    </div>
  )
}

export default Wishlist
