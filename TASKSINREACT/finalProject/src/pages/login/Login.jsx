import React from 'react'
import Header from '../../components/header/Header'
import LoginHeader from './loginComponents/loginHeader/LoginHeader'
import LoginInput from './loginComponents/loginInput/LoginInput'
import LastBan from './loginComponents/lastBanner/LastBan'
import Footer from '../../components/footer/Footer'
const Login = () => {
  return (
    <div>
       <Header/>
        <LoginHeader/>
        <LoginInput/>
        <LastBan/>
        <Footer/>
    </div>
  )
}

export default Login
