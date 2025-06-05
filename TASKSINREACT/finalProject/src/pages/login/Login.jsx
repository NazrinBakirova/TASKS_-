import React from 'react'
import Header from '../../components/header/Header'
import LoginHeader from './loginComponents/loginHeader/LoginHeader'
import LoginInput from './loginComponents/loginInput/LoginInput'
const Login = () => {
  return (
    <div>
       <Header/>
        <LoginHeader/>
        <LoginInput/>
    </div>
  )
}

export default Login
