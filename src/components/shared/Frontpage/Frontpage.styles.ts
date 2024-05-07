import { styled } from 'styled-components';

import { styleVariables } from '../../../../public/styles/utils/styleVariables';
import { mediaQuery } from '../../../../public/styles/utils/mediaQuery';

const { colors, margins, paddings } = styleVariables;

const FrontpageStyled = styled.div`
  margin: ${margins.mobile};
  padding: ${paddings.mobile};

  ${mediaQuery['web']} {
    padding: ${paddings.web};
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
      text-align: left;
    }
  }

  .description {
    font-size: 14px;
    margin-bottom: 30px;
    font-weight: 200;
    line-height: 20px;
    text-align: center;

    ${mediaQuery['web']} {
      font-size: 18px;
      margin-bottom: 60px;
      text-align: left;
    }

    a {
      color: ${colors.nonPhotoBlue};
    }
  }

  .links {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;

    ${mediaQuery['web']} {
      flex-direction: row;
      align-items: flex-start;
    }

    a {
      width: 80px;
      text-align: center;
      padding: 10px 20px;
      background-color: ${colors.action};
      border: none;
      border-radius: 5px;
      transition: 0.2s;
      color: ${colors.white};
      text-decoration: none;
    }

    a:hover {
      background-color: ${colors.white};
      color: ${colors.gunmetalDark};
    }
  }
`;

export { FrontpageStyled };
