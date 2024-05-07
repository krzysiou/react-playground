'use client';

import React from 'react';
import Link from 'next/link';

import { FrontpageStyled } from './Frontpage.styles';

const Frontpage: React.FC = () => {
  return (
    <FrontpageStyled>
      <p className="hero">Welcome to React Playground</p>
      <p className="description">
        Explore the possibilities of React in our playground. Whether
        you&apos;re a beginner or an experienced developer, dive into our
        collection of examples to experiment, learn, and create. Click on the
        examples below to get started. Official React documentation can be found{' '}
        <Link href=" https://react.dev/blog/2023/03/16/introducing-react-dev">
          here
        </Link>
        .
      </p>

      <div className="links">
        <Link href="/example1">Todo app</Link>
        <Link href="/example2">Shop</Link>
        <Link href="/example3">Tic Tac Toe</Link>
      </div>
    </FrontpageStyled>
  );
};

export { Frontpage };
