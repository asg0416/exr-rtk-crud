import React from "react";
import styled, { css } from "styled-components";
import { useHistory } from "../../hooks";
import { Text } from "../atoms";

const StyledWrapper = styled.div`
  ${({ theme: { palette } }) => {
    return css`
      width: 100%;
      height: 3rem;
      position: fixed;
      top: 0;
      left: 0;
      display: inline-flex;
      align-items: center;
      padding: 0.5rem 1rem;
      background-color: ${palette.black};
      & > p {
        cursor: pointer;
        letter-spacing: 1px;
      }
    `;
  }}
`;

const Header = () => {
  return (
    <StyledWrapper>
      <Text color="white" size={1.2} weight={600} onClick={useHistory("/")}>
        🥕 Talkki
      </Text>
    </StyledWrapper>
  );
};

export default Header;
