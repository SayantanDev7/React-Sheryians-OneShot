import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className='nav'>
        <ul className='nav-links'>
            <li key="home" className='nav-link'>Home</li>
            <li key= "about" className='nav-link'>About</li>
            <li key="contact" className='nav-link'>Contact</li>
        </ul>
    </nav>
  )
}

export default Navbar   