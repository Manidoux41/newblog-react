import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.jpg';
import Navbar from '../Navigation/Navbar';

function Header() {
  return (
    <div className='pt-5 pb-4 my-0 flex justify-between items-center sm:pt-10 sm:pb-14 sm:mx-44'>
      <NavLink to='/' className='block w-36 sm:w-52'>
        <img src={logo} alt="logo kasa" />
      </NavLink>
      <Navbar />
    </div>
  )
}

export default Header