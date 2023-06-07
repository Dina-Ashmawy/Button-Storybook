import { ButtonProps } from './button.props';

import styled, { css } from 'styled-components';

export const StyleButton = styled.button<ButtonProps>`
font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
font-weight: 700;
border: 0;
border-radius: 3em;
cursor: pointer;
display: inline-block;
line-height: 1;
background-color: ${(props) => (props.primary ? "#1ea7fd" : "lightgray")};
color: ${(props) => (props.primary ? "white" : "#333")};
${(props) => getSizeStyles(props)}
`

const getSizeStyles = ({ size = 'medium' }) => {
  switch (size) {
    case 'small': {
      return css`
          font-size: 12px;
          padding: 10px 16px;
        `;
    }
    case 'large': {
      return css`
          font-size: 16px;
          padding: 12px 24px;
        `;
    }
    default: {
      return css`
          font-size: 14px;
          padding: 11px 20px;
        `;
    }
  }
};