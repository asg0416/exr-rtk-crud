import React, { forwardRef } from "react";
import styled, { css } from "styled-components";
import { darken, lighten } from "polished";
import PropTypes from "prop-types";
import { flexConfig } from "../../shares/styleUtils";
import { useTypeContext } from "../../hooks/useCustomContext";

const colorStyles = css`
  ${({ theme, color, fontColor = "white" }) => {
    const selected = theme.palette[color];
    return css`
      color: ${fontColor};
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
      ${(props) =>
        props.outline &&
        css`
          color: ${selected};
          background: ${lighten(0.45, selected)};
          border: 1px solid ${selected};
          &:hover {
            background: ${lighten(0.42, selected)};
          }
          &:active {
            background: ${lighten(0.4, selected)};
          }
        `}
    `;
  }}
`;

const sizes = {
  large: {
    height: "2.5rem",
    fontSize: "1.25rem",
  },
  medium: {
    height: "2rem",
    fontSize: "1rem",
  },
  small: {
    height: "1.7rem",
    fontSize: "0.875rem",
  },
};

const sizeStyles = css`
  ${({ size, width = "auto", height = null }) => css`
    width: ${width};
    height: ${height !== null ? height : sizes[size].height};
    font-size: ${sizes[size].fontSize};
  `}
`;

const fullWidthStyle = css`
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
      justify-content: center;
      & + & {
        margin-left: 0;
        margin-top: 1rem;
      }
    `}
`;

const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;

  ${({ padding = "0 1.5rem" }) => {
    return css`
      padding: ${padding};
    `;
  }}

  /* 크기 */
  ${sizeStyles}

  /* 색상 */
  ${colorStyles}

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }

  ${fullWidthStyle}
`;

const Button = forwardRef(({
  children,
  type = "button",
  color = "blue",
  size = "medium",
  outline,
  fullWidth,
  ...rest
}, ref) => {
  return (
    <StyledButton
      ref={ref}
      type={type}
      color={color}
      size={size}
      outline={outline}
      fullWidth={fullWidth}
      {...rest}
    >
      {children}
    </StyledButton>
  );
});

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;

Button.FloatCircle = styled(Button)`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  position: fixed;
  z-index: 100;
  bottom: 3rem;
  right: 3rem;
  ${flexConfig}
  & > p {
    height: 100%;
  }
`;

const ActionStyled = styled(Button)`
  ${() => {
    const type = useTypeContext();

    if (type === "comment") {
      return css`
        font-size: 0.75rem;
      `;
    }
  }}
`;
  
Button.Action = ({ children, ...rest }) => {
  const btnStyle = {
    color: "white",
    fontColor: "gray",
    size: "small",
    padding: "0",
  };
  return <ActionStyled {...btnStyle} {...rest}>{children}</ActionStyled>;
}