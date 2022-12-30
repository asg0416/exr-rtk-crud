import React from "react";
import styled, { css } from "styled-components";

const StyledDivider = styled.hr`
  border: none;
  ${({
    theme: { palette },
    margin = "0",
    color = "lightGray",
    height = "1px",
  }) => {
    return css`
      background-color: ${palette[color]};
      margin: ${margin};
      height: ${height};
    `;
  }}
`;

const Divider = ({ ...rest }) => {
  return <StyledDivider {...rest} />;
};

export default Divider;
