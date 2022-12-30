import React from "react";
import styled, { css } from "styled-components";

const StyledText = styled.p`
  ${({
    theme: { palette },
    color = "black",
    weight = "400",
    size = 1.1,
    width = "auto",
    padding = "0",
  }) => {
    return css`
      font-size: ${size}rem;
      color: ${palette[color]};
      font-weight: ${weight};
      width: ${width};
      padding: ${padding};
    `;
  }}
`;

const Text = ({ children, ...rest }) => {
  return <StyledText {...rest}>{children}</StyledText>;
};

export default Text;

Text.PageTitle = styled(Text)`
  font-size: 2rem;
  font-weight: 700;
  color: orange;
`;
Text.PostTitle = styled(Text)`
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3436;
  margin: 1.8rem 0 1.5rem;
`;
Text.PostContent = styled(Text)`
  ${({ isPost }) => {
  return css`
    font-size: ${isPost ? 1.1 : 0.95}rem;
    margin-top: ${isPost ? 0 : 0.5}rem;
  `;
  }}
  white-space: pre-line;
  line-height: 1.8;
`;
Text.PostContentsEllipsis = styled(Text)`
  word-break: break-word;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;
