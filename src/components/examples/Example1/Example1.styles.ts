import { styled } from 'styled-components';

import { styleVariables } from '../../../../public/styles/utils/styleVariables';
import { mediaQuery } from '../../../../public/styles/utils/mediaQuery';

const { colors, margins, paddings } = styleVariables;

const Example1Styled = styled.div`
  margin: ${margins.mobile};

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

  .input-container {
    display: flex;
    margin-bottom: 20px;
    width: 100%;
  }

  .input-container input {
    flex: 1;
    padding: 10px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    overflow-x: hidden;
  }

  .input-container button {
    padding: 10px 20px;
    font-size: 16px;
    margin-left: 10px;
    background-color: ${colors.action};
    color: ${colors.white};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.2s;
  }

  .input-container button:hover {
    background-color: ${colors.white};
    color: ${colors.gunmetalDark};
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin-bottom: 10px;
    background-color: ${colors.white};
    border-radius: 4px;
    color: ${colors.gunmetalDark};
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    line-height: 34px;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  li button {
    position: absolute;
    top: 15px;
    right: 10px;
    padding: 5px 10px;
    font-size: 14px;
    color: ${colors.white};
    background-color: ${colors.indianRed};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.2s;
  }

  li button:hover {
    background-color: ${colors.persianRed};
  }
`;

export { Example1Styled };
