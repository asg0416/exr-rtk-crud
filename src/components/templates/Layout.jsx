import React from "react";
import styled from "styled-components";
import { media } from "../../shares/styleUtils";
import { Div } from "../atoms";

const StyledWrapper = styled.div`
  margin-top: 3rem;
  height: calc(100% - 3rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden overlay;
  padding: 2rem 15rem 0;
  transition: all 0.3s;

  ${media.desktop`
    padding: 2rem 10rem 0;
  `}
  ${media.tablet`
    padding: 2rem 5rem 0;
  `}
  ${media.mobile`
    padding: 2rem 2rem 0;
  `}
`;

const Layout = ({ children }) => {
  return (
    <StyledWrapper>
      <Div width="min(60rem, 100%)">{children}</Div>
    </StyledWrapper>
  );
};

export default Layout;

Layout.PageHeader = styled.div`
  width: 100%;
  height: 4rem;
  min-height: 65px;
  border: 2px solid orange;
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

Layout.PageContents = styled.div`
  width: 100%;
  height: fit-content;
  margin-bottom: 3rem;
`;
