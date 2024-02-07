import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

export interface NavLink {
  link: string;
  text: string;
}

const navbarLinks: NavLink[] = [
  {
    link: '/',
    text: 'Home',
  },
  {
    link: '/interactivetdop',
    text: 'The Plan',
  },
  {
    link: '/data-dashboards',
    text: 'The Data',
  },
  {
    link: '/assetinventory',
    text: 'The Resources',
  },
  {
    link: '/about',
    text: 'About',
  },
];

export const NavLinkList = ({ navLinks }: { navLinks: NavLink[] }) => {
  return (
    <ul className='uppercase p-4'>
      {navLinks.map((navLink, index) => (
        <li className='p-4 text-white border-b' key={index}>
          <Link to={navLink.link}>{navLink.text}</Link>
        </li>
      ))}
    </ul>
  );
};

export const Navbar = ({ show }: { show: boolean }) => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const navbarStyle: React.CSSProperties = {
    transform: show ? 'translateY(0)' : 'translateY(-100%)',
    transition: 'transform 0.3s ease-in-out',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
  };

  // Use visibility and opacity for transition
  const overlayStyle: React.CSSProperties = {
    transition: 'opacity 1s ease-in-out, visibility 1s ease-in-out',
    position: 'fixed',
    height: '100vh',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 253, 246, 0.5)',
    zIndex: 0, // Below the navbar but above page content
    opacity: nav ? 1 : 0,
    visibility: nav ? 'visible' : 'hidden',
  };

  const closeNav = () => setNav(false);

  return (
    <div style={navbarStyle}>
      <div className='flex sticky items-center top-0 h-16 shadow-md text-[#111] bg-[#FFFDF6] w-screen'>
        <div className='hidden lg:flex ml-10 top-8 w-contain'>
          <Logo />
        </div>
        <div className=''>
          <Link to='/'>
            <h1
              onClick={scrollToTop}
              className='text-xs whitespace-nowrap uppercase font-bold text-[#111] tracking-widest pl-[3vw] sm:pl-[10vw] md:pl-[7.5vw] pr-[12vw] md:pr-[30vw] lg:pr-[30vw] 2xl:pr-[35vw] sm:px-[10vw]'
            >
              Texas Digital Opportunity Hub
            </h1>
          </Link>
        </div>
        <div>
          <ul className='hidden lg:flex items-center'>
            {navbarLinks.map((navLink, index) => (
              <li
                key={index}
                className='md:p-2 lg:p-5 2xl:p-8 uppercase tracking-widest text-xs md:hover:text-[#ececec] transition-colors duration-300'
              >
                <Link to={navLink.link}>{navLink.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        {nav && <div style={overlayStyle} onClick={closeNav}></div>}
        <div onClick={handleNav} className='z-20 lg:hidden sm:mx-[20vw] md:mx-[5vw]'>
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
            <h1 className='w-full text-sm shadow-lg uppercase font-bold p-10 text-[#111] bg-[#FFFDF6]'>
              Texas Digital Opportunity Hub
            </h1>
            <NavLinkList navLinks={navbarLinks} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
