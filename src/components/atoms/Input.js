import React from "react";
import styled, { css } from "styled-components";
import { borderConfig } from "../../shares/styleUtils";

const sizeConfig = css`
  ${({ width = "100%", height = "auto", size = "1.2" }) => {
    return css`
      width: ${width};
      height: ${height};
      font-size: ${size}rem;
      &::placeholder {
        font-size: ${size}rem;
      }
    `;
  }}
`;

const StyledInput = styled.input`
  ${({ theme: { palette }, padding = "0.3rem 1rem" }) => {
    return css`
      color: ${palette.black};
      padding: ${padding};
    `;
  }}
  ${borderConfig}
  ${sizeConfig}
`;
const Input = ({ ...rest }) => {
  return <StyledInput {...rest} />;
};

export default Input;

Input.TextArea = styled.textarea`
  ${({ theme: { palette }}) => {
    return css`
      color: ${palette.black};
    `;
  }}
  resize: none;
  padding: 1rem;
  ${borderConfig}
  ${sizeConfig}
`;
Input.Inline = styled(Input)`
  padding: 0.3rem;
  & + & {
    margin-left: 0.5rem;
  }
`;
