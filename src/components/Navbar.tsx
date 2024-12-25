import React from 'react'


const Navbar = () => {
  return (
    <div className="container pt-8">
        <div className="flex justify-between items-center"></div>
        <p className="align-text-bottom flex  animate-pulse">SADIA</p>
        <p className="text-primary animate-pulse">Siddique...</p>
        <ul className=' gap-20 lg:gap-18 hidden md:flex justify-end hover:underline-offset-1'>


        <li className="menuLink"><a href="#hero">Home </a></li>
        <li className="menuLink"><a href="#about">About Us</a></li>
        <li className="menuLink"><a href="#projects">Projects</a></li>
        <li  className="menuLink"><a href="#skills">Skills</a></li>
        <li className="menuLink"><a href="#contact">Contact Us</a></li>
        </ul>
        
      
      
    </div>
  )
}

export default Navbar
