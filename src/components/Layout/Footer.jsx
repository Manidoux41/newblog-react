import React from 'react'
import logoFooter from '../../assets/logo-footer.png'

function Footer() {
  return (
    <footer className='w-full mt-10 mx-auto bottom-0 left-0 right-0 h-52 bg-black flex flex-col justify-between items-center gap-0.5 sm:gap-7'>
      <img src={logoFooter} alt="logo footer" className='w-[122px] pt-[70px] sm:pt-[60px] ' />
      <p className='text-xs text-white sm:text-2xl pb-[62px] sm:pb-[29px]'>
        2023 Kasa.All rights reserved
      </p>
    </footer>
  )
}

export default Footer