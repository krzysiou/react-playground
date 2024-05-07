'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { HeaderStyled } from './Header.styles';
import { GitHubIcon } from '../Icons/GitHubIcon';
import { ArrowIcon } from '../Icons/ArrowIcon';

const Header: React.FC = () => {
  const pathname = usePathname();

  const isFrontpage = pathname === '/';

  const backLink = !isFrontpage && (
    <Link href="/" className="headerLink">
      <ArrowIcon />
      <p>Back</p>
    </Link>
  );

  return (
    <HeaderStyled isfrontpage={isFrontpage ? 'true' : 'false'}>
      {backLink}
      <Link href="https://github.com/krzysiou">
        <GitHubIcon />
      </Link>
    </HeaderStyled>
  );
};

export { Header };
