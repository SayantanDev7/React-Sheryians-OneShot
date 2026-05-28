import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-gray-900 border-b border-gray-800 text-white py-4 px-8 shadow-md sticky top-0 z-50">
      <div className="text-xl font-bold tracking-wider text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-500">
        ReactRouter<span className="text-white font-light">Rev</span>
      </div>
      <ul className="flex gap-4 items-center list-none m-0 p-0">
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `px-4 py-2 rounded-md text-sm font-semibold transition-all duration-200 cursor-pointer ${
                isActive 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' 
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `px-4 py-2 rounded-md text-sm font-semibold transition-all duration-200 cursor-pointer ${
                isActive 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' 
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `px-4 py-2 rounded-md text-sm font-semibold transition-all duration-200 cursor-pointer ${
                isActive 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' 
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
