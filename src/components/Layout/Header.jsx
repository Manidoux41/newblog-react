import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.jpg';
import Navbar from '../Navigation/Navbar';

function Header() {
  return (
    <div className='py-5 flex justify-between items-center sm:py-10 sm:mx-40'>
      <NavLink to='/' className='block w-36 sm:w-52'>
        <img src={logo} alt="logo kasa" />
      </NavLink>
      <Navbar />
    </div>
  )
}

export default Header