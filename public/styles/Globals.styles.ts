'use client';

import { createGlobalStyle } from 'styled-components';

import { styleVariables } from './utils/styleVariables';

const { fontFamily, colors } = styleVariables;

const Globals = createGlobalStyle`
  body {
    width: 100%;
    font-family: ${fontFamily};
    color: ${colors.white};
    background-color: ${colors.gunmetalDark};
  }
`;

export { Globals };
