import { styled } from 'styled-components';

import { styleVariables } from '../../../../public/styles/utils/styleVariables';
import { mediaQuery } from '../../../../public/styles/utils/mediaQuery';

const { colors } = styleVariables;

type HeaderStyledProps = {
  isfrontpage: 'true' | 'false';
};

const HeaderStyled = styled.div<HeaderStyledProps>`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.isfrontpage === 'true' ? 'flex-end' : 'space-between'};
  width: calc(100% - 20px);
  margin: 10px 10px 0;

  ${mediaQuery['web']} {
    width: calc(100% - 140px);
    margin: 30px 70px 0;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;

    p {
      color: ${colors.white};
    }
  }

  a:hoover {
    p {
      color: ${colors.indianRed};
    }
  }
`;

export { HeaderStyled };
