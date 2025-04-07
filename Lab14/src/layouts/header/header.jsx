import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <ul>
        <li><navLink to="/">Ana sehife</navLink></li>
        <li><navLink to="/about">About us</navLink></li>
        <li><navLink to="/contact">Contacts</navLink></li>
        
      </ul>
    </nav>
  )
}

export default Header
