'use client';

import React from 'react';

import { StyledComponentsRegistry } from './registry';
import { Reset } from '../public/styles/Reset.styles';
import { Globals } from '../public/styles/Globals.styles';
import { Header } from '../src/components/shared/Header/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <head>
        <title>react-playground</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <html lang="en">
        <StyledComponentsRegistry>
          <Reset />
          <Globals />
          <body>
            <Header />
            {children}
          </body>
        </StyledComponentsRegistry>
      </html>
    </>
  );
}
