'use client';

import React from 'react';
import Link from 'next/link';

import { NotFoundStyled } from './NotFound.styles';
import { Error404Icon } from '../Icons/Error404Icon';

const NotFound: React.FC = () => {
  return (
    <NotFoundStyled>
      <Error404Icon />
      <div>Oops you might be lost . . .</div>
      <Link href="/">Go to main page</Link>
    </NotFoundStyled>
  );
};

export { NotFound };
