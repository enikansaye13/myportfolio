import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>
        <NavLink to="/" className="w-12 h-12 rounded-lg bg-white flex items-center justify-center font-bold shadow-md">
        <p className='blue-gradient_text'>EM</p>
        </NavLink>

        <nav className='flex text-lg gap-5 lg:gap-7 font-medium'>
            <NavLink to='/about' className={({isActive}) => isActive ? 'text-blue-500' : "text-black"} >
                About
            </NavLink>
            <NavLink to='/project' className={({isActive}) => isActive ? 'text-blue-500' : "text-black"} >
                Project
            </NavLink>
            <NavLink to='/contact' className={({isActive}) => isActive ? 'text-blue-500' : "text-black"} >
                Contact
            </NavLink>

        </nav>
    </header>
  )
}

export default Navbar