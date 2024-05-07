'use client';

import React from 'react';
import Link from 'next/link';

import { FrontpageStyled } from './Frontpage.styles';

const Frontpage: React.FC = () => {
  return (
    <FrontpageStyled>
      <div className="hero">Click on examples below</div>
      <div className="links">
        <Link href="/example1">Go to example 1</Link>
      </div>
    </FrontpageStyled>
  );
};

export { Frontpage };
