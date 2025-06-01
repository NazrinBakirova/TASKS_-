import React from 'react'
import Header from '../../components/header/Header'
import HomeHeader from './homeComponents/header/HomeHeader';
import Featured from './homeComponents/featured/Featured';
import Leatest from './homeComponents/leatest/Leatest';
import Offer from './homeComponents/offers/Offer';
import Banner from './homeComponents/midBanner/Banner';

const Home = () => {
  return (
    <div>
     <Header/>
      <HomeHeader/>
      <Featured/>
      <Leatest/>
      <Offer/>
      <Banner/>
    </div>
  )
}

export default Home

