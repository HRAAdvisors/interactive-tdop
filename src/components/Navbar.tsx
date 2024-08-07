import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { setShowSideNav } from '@/stores/uiSlice';

export interface NavLink {
  link: string;
  text: string;
  hasChildren?: boolean;
}

export const navbarLinks: NavLink[] = [
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
    hasChildren: true,
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

export const Navbar = ({ shouldShowAllTime = false }: { shouldShowAllTime?: boolean }) => {
  const showSideNav = useAppSelector((store) => store.ui.showSideNav);
  const dispatch = useAppDispatch();
  const navRef = useRef<HTMLDivElement>(null);

  const handleNav = () => dispatch(setShowSideNav(!showSideNav));

  const lastScrollY = useRef(window.scrollY);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // Initialize showNav to true so that Navbar is visible initially
  const [showNav, setShowNav] = useState(true);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    // Determine if we're scrolling up
    const isScrollingUp = currentScrollY < lastScrollY.current;

    // Only toggle visibility if not shouldShowAllTime
    if (!shouldShowAllTime) {
      setShowNav(isScrollingUp || currentScrollY <= 0); // Reappear when scrolling up or at the top of the page
    }

    lastScrollY.current = currentScrollY; // Update lastScrollY for the next scroll event
  };

  useEffect(() => {
    if (!shouldShowAllTime && !showSideNav) {
      window.addEventListener('scroll', handleScroll);
    }
    return () => window.removeEventListener('scroll', handleScroll);
  }, [shouldShowAllTime, showSideNav]);

  const handleClickOutside: EventListener = (event) => {
    if (navRef.current && !navRef.current?.contains(event.target as any) && !shouldShowAllTime) {
      setShowNav(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [navRef]);

  const navbarStyle: React.CSSProperties = {
    transform: showNav ? 'translateY(0)' : 'translateY(-100%)',
    transition: 'transform 0.3s ease-in-out',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
  };

  return (
    <div style={navbarStyle} ref={navRef}>
      <div className='flex px-4 justify-between sticky items-center top-0 h-16 shadow-md text-[#111] bg-[#FFFDF6] inset-x-0'>
        <div className='w-full flex items-center justify-between'>
          <div className='flex'>
            <div className='hidden lg:flex w-contain pr-20 2xl:pr-32'>
              <Link
                to='https://comptroller.texas.gov/programs/broadband/'
                aria-label="A link to the Texas Comptroller's Website"
              >
                <Logo />
              </Link>
            </div>
            <Link to='/' className='flex items-center'>
              <h1
                onClick={scrollToTop}
                className='text-xs text-left w-full whitespace-nowrap uppercase font-bold text-[#111] tracking-widest '
              >
                Texas Digital Opportunity Hub
              </h1>
            </Link>
          </div>
          <div className='h-full'>
            <div className='navbar-content'>
              <ul className='hidden lg:flex items-center'>
                {navbarLinks.map((navLink, index) => (
                  <Link className='block' to={navLink.link} key={index}>
                    <ul>
                      <li className='md:px-2 lg:px-5 2xl:px-8 py-6 uppercase tracking-widest text-xs md:hover:text-[#fff] md:hover:bg-[#002768] transition-colors duration-300'>
                        {navLink.text}
                      </li>
                    </ul>
                  </Link>
                ))}
              </ul>
            </div>
            <div onClick={handleNav} className='z-20 lg:hidden cursor-pointer'>
              {showSideNav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
