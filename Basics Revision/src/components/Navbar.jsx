import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex gap-5 justify-center items-center bg-[#807b7b] p-2.5">
        <ul className="list-none flex gap-5">
            <li key="home" className="cursor-pointer bg-[#b3c4e0] text-black p-2.5 rounded-[5px] font-sans text-center hover:bg-[#96aad1] hover:text-white">Home</li>
            <li key="about" className="cursor-pointer bg-[#b3c4e0] text-black p-2.5 rounded-[5px] font-sans text-center hover:bg-[#96aad1] hover:text-white">About</li>
            <li key="contact" className="cursor-pointer bg-[#b3c4e0] text-black p-2.5 rounded-[5px] font-sans text-center hover:bg-[#96aad1] hover:text-white">Contact</li>
        </ul>
    </nav>
  )
}

export default Navbar
