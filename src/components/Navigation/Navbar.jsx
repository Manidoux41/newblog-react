import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <ul className='flex text-sm uppercase text-red-500 justify-between gap-2.5 lg:gap-14 lg:normal-case lg:text-2xl'>
            <li>
                <NavLink to='/home' className={({isActive}) => (isActive ? "underline" : undefined)}>Accueil</NavLink>
            </li>
            <li>
                <NavLink to='/about' className={({isActive}) => (isActive ? "underline" : undefined)}>A Propos</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar