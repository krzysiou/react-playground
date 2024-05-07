'use client';

import React from 'react';
import Link from 'next/link';

import { NotFoundStyled } from './NotFound.styles';
import { Error404Icon } from '../Icons/Error404Icon';

const NotFound: React.FC = () => {
  return (
    <NotFoundStyled>
      <Error404Icon />
      <p className="hero">404 Page not found . . .</p>
      <Link href="/">Home</Link>
    </NotFoundStyled>
  );
};

export { NotFound };
