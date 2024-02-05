import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Logo from './Logo';
import { NavDropDown, NavLink, NavLinkList } from './NavDropdown';
import { Link } from 'react-router-dom';

const navbarLinks: NavLink[] = [
  {
    link: '/',
    text: 'The Big Picture',
  },
  {
    link: '/interactivetdop',
    text: 'Texas Digital Opportunity Plan',
  },
  {
    link: '/dataDashboards',
    text: 'Data Dashboards',
  },
];

const Navbar = ({ show }: { show: boolean }) => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navbarStyle: React.CSSProperties = {
    transform: show ? 'translateY(0)' : 'translateY(-100%)', // Hide navbar if not showing or nav is open
    transition: 'transform 0.3s ease-in-out',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50, // Ensure it's above other content
    // ...other styles
  };

  return (
    <div style={navbarStyle}>
      <div className='flex sticky items-center top-0 h-16 shadow-md text-[#111] bg-[#FFFDF6] w-screen'>
        <div className='hidden md:flex ml-10 top-8 w-contain'>
          <a href='https://comptroller.texas.gov/programs/broadband/'>
            <Logo />
          </a>
        </div>
        <Link to='/'>
          <h1
            onClick={scrollToTop}
            className='w-full text-xs whitespace-nowrap uppercase font-bold text-[#111] tracking-widest  pl-[3vw] sm:pl-[10vw] md:pl-[20vw] pr-[12vw] md:pr-[20vw] sm:px-[10vw]'
          >
            Texas Digital Opportunity Plan
          </h1>
        </Link>
        <ul className='hidden md:flex items-center'>
          <li className='p-8 uppercase tracking-widest text-xs'>
            <NavDropDown navLinks={navbarLinks} />
          </li>
          <Link to='/about'>
            <li className='p-8 uppercase tracking-widest text-xs'>About</li>
          </Link>
        </ul>
        <div onClick={handleNav} className='md:hidden sm:mx-[20vw]'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[63%] h-screen ease-in-out duration-500 shadow-2xl'
              : 'fixed left-[-100%] top-[0%] ease-in-out duration-500 shadow-2xl'
          }
        >
          <div className='h-screen bg-[#666]'>
            <h1 className='w-full text-sm uppercase font-bold p-10 text-[#fff] bg-[#111]'>
              Texas Digital Opportunity Plan
            </h1>
            <NavLinkList navLinks={navbarLinks} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
