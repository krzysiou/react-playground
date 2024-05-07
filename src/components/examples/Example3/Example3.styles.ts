import { styled } from 'styled-components';

import { styleVariables } from '../../../../public/styles/utils/styleVariables';
import { mediaQuery } from '../../../../public/styles/utils/mediaQuery';

const { margins, paddings } = styleVariables;

const Example3Styled = styled.div`
  margin: ${margins.mobile};

  ${mediaQuery['web']} {
    padding: ${paddings.web};
    margin: ${margins.web};
  }

  .game-board {
    width: 220px;
    margin: 0 auto;

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

    .board-row {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      margin-bottom: 5px;
      height: 50px;

      button {
        width: 50px;
        height: 50px;
        border: none;
        font-size: 20px;
      }
    }
  }
`;

export { Example3Styled };
