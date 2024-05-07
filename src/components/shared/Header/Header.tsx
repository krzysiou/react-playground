'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import { MenuIcon } from '../Icons/MenuIcon';
import { HeaderStyled } from './Header.styles';
import { Dropdown } from './Dropdown';

const Header: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  const dropdownTrigger = (
    <button onClick={handleOpen}>
      <MenuIcon />
    </button>
  );

  const homeLink = (
    <Link href="/" className="headerLink" onClick={closeMenu}>
      Home
    </Link>
  );

  const example1Link = (
    <Link href="/example1" className="headerLink" onClick={closeMenu}>
      Example 1
    </Link>
  );

  return (
    <HeaderStyled open={open}>
      <Dropdown
        open={open}
        trigger={dropdownTrigger}
        menu={[homeLink, example1Link]}
      />
      <div className="headerLinks">
        {homeLink}
        {example1Link}
      </div>
    </HeaderStyled>
  );
};

export { Header };
