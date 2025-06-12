import React from 'react'
import Header from '../../components/header/Header'
import DemoInput from './demoInput/DemoInput'
import Footer from '../../components/footer/Footer'
import DemoHeader from './header/DemoHeader'
import OrderList from './cartList/OrderList'
import './style.scss'
const Demo = () => {
  return (
    <div>
      <Header/>
      <DemoHeader/>
      <div className='table'>
      <DemoInput/>
      <OrderList/>
      </div>
      <Footer/>
    </div>
  )
}

export default Demo
