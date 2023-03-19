import React from 'react'
import Logo from '../Logo/Logo';
import Navbar from '../Navigation/Navbar';

function Header() {
  return (
    <div className='pt-5 pb-4 my-0 flex justify-between items-center sm:pt-10 sm:pb-14 sm:mx-44'>
      <Logo />
      <Navbar />
    </div>
  )
}

export default Header