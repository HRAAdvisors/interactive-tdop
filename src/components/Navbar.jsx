import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import Logo from './Logo'
import { Menu, Button } from '@mantine/core'
import NavDropDown from './NavDropdown'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [nav, setNav] =useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth'});
    };

  return (
    <div className='z-40 flex sticky items-center top-0 h-16 shadow-md text-[#111] bg-[#FFFDF6] w-screen'>
      <div className='hidden md:flex ml-10 top-8 w-contain'>
        <a href="https://comptroller.texas.gov/programs/broadband/"><Logo /></a>
      </div>
      <Link to='/'><h1 onClick={scrollToTop} className='w-full text-xs whitespace-nowrap uppercase font-bold text-[#111] tracking-widest  px-[5vw] md:px-[20vw]'>The Texas Digital Opportunity Plan</h1></Link>
      <ul className='hidden md:flex items-center'>
        <li className='p-8 uppercase tracking-widest text-xs'><NavDropDown /></li>
        <Link to='/about'><li className='p-8 uppercase tracking-widest text-xs'>About</li></Link>
      </ul>
      <div onClick={handleNav} className='block md:hidden xs:mx-[2vw] sm:mx-[40vw]'>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[75%] h-full bg-[#666] ease-in-out duration-500 shadow-2xl' : 'fixed left-[-100%] ease-in-out duration-500 shadow-2xl'}>
        <div>
         <h1 className='w-full text-sm uppercase font-bold p-10 text-[#fff] bg-[#111]'>Texas Digital Opportunity Plan</h1>
        </div>
        <ul className='uppercase p-4'>
            <li className='p-4  text-white border-b'>Geographic Introduction</li>
            <li className='p-4  text-white border-b'>Interactive TDOP</li>
            <li className='p-4  text-white border-b'>Data Dashboards</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
