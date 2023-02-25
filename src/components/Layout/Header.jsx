import React from 'react'
import logo from '../../assets/logo.jpg';

function Header() {
  return (
    <div className='py-5 flex justify-between items-center sm:py-10 sm:mx-40'>
      <a href="#" className='block w-36 sm:w-52'>
        <img src={logo} alt="logo kasa" />
      </a>
    </div>
  )
}

export default Header