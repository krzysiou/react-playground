import { styled } from 'styled-components';

import { styleVariables } from '../../../../public/styles/utils/styleVariables';
import { mediaQuery } from '../../../../public/styles/utils/mediaQuery';

const { colors, margins } = styleVariables;

const Example2Styled = styled.div`
  margin: ${margins.mobile};

  ${mediaQuery['web']} {
    margin: ${margins.web};
  }

  .hero {
    font-size: 24px;
    margin-bottom: 30px;
    font-weight: 800;
    line-height: 24px;
    text-align: center;

    ${mediaQuery['web']} {
      font-size: 32px;
      line-height: 32px;
    }
  }

  .cards {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const CardStyled = styled.div`
  width: 220px;
  height: 330px;
  margin: 10px 8px;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  overflow: hidden;
  background-color: ${colors.white};

  img {
    width: 100%;
    height: 80%;
    object-fit: cover;
  }

  .info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    height: 20%;
    color: ${colors.gunmetalDark};
  }
`;

export { Example2Styled, CardStyled };
