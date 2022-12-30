import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { borderConfig, flexConfig } from "../../shares/styleUtils";

const StyledDiv = styled.div`
  ${({ margin = "0", padding = "0", width = "auto", height = "auto" }) => {
    return css`
      margin: ${margin};
      padding: ${padding};
      width: ${width};
      height: ${height};
    `;
  }}
  ${borderConfig}
  ${flexConfig}
`;

const Div = ({ children, ...rest }) => {
  return <StyledDiv {...rest}>{children}</StyledDiv>;
};

Div.propTypes = {
  bgColor: PropTypes.string,
  bdColor: PropTypes.string,
  radius: PropTypes.number,
};

export default Div;

Div.PostWrapper = styled(Div)`
  cursor: pointer;
  padding: 2rem;
  transition: all 0.3s;
  & > p {
    margin-bottom: 1rem;
  }
  &:hover {
    transform: scale(1.03);
  }
  & + & {
    margin-top: 2rem;
  }
`;
