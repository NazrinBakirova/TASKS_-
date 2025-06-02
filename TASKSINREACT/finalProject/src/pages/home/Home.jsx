import React from 'react'
import Header from '../../components/header/Header'
import HomeHeader from './homeComponents/header/HomeHeader';
import Featured from './homeComponents/featured/Featured';
import Leatest from './homeComponents/leatest/Leatest';
import Offer from './homeComponents/offers/Offer';
import Banner from './homeComponents/midBanner/Banner';
import Trending from './homeComponents/trending/Trending';
import Discount from './homeComponents/discount/Discount';

const Home = () => {
  return (
    <div>
     <Header/>
      <HomeHeader/>
      <Featured/>
      <Leatest/>
      <Offer/>
      <Banner/>
      <Trending/>
      <Discount/>
    </div>
  )
}

export default Home

