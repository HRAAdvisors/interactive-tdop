import { Menu, Button } from '@mantine/core';
import _ from 'lodash';
import { Link } from 'react-router-dom';

export interface NavLink {
  link: string;
  text: string;
}

export const NavDropDown = ({ navLinks }: { navLinks: NavLink[] }) => {
  return (
    <Menu shadow='md' radius='0' width={200} position='bottom-start'>
      <Menu.Target>
        <Button
          color='#FFFDF6'
          radius={0}
          className='uppercase text-xs tracking-widest font-light'
          styles={{ label: { color: 'black' } }}
        >
          Navigate
        </Button>
      </Menu.Target>
      <Menu.Dropdown className='bg-[#666] border-b-2 border-[#666]'>
        {_.map(navLinks, (navLink) => (
          <Menu.Item color='#dedede' className='uppercase text-xs py-10 text-white'>
            <Link to={navLink.link}>{navLink.text}</Link>
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
};

export const NavLinkList = ({ navLinks }: { navLinks: NavLink[] }) => {
  return (
    <ul className='uppercase p-4'>
      {_.map(navLinks, (navLink) => (
        <li className='p-4  text-white border-b'>
          <Link to={navLink.link}> {navLink.text} </Link>
        </li>
      ))}
    </ul>
  );
};
