import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.jpg';


function Logo() {
  return (
    <NavLink to='/' className='block w-36 sm:w-52'>
        <img src={logo} alt="logo kasa" />
    </NavLink>
  )
}

export default Logo