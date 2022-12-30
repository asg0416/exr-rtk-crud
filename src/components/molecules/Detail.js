import styled, { css } from "styled-components";
import { TypeContext, useTypeContext } from "../../hooks/useCustomContext";
import { Div, Text } from "../atoms";
import ActionBtns from "./ActionBtns";
import RelativeTime from "./RelativeTime";
import UserInfo from "./UserInfo";

const StyledWrapper = styled(Div)`
  ${({ type, bg=null }) => {
    if (type === "comment") {
      return css`
        background-color: ${bg ? 'aliceblue' : 'none'};
        border-top: none;
      `;
    }
  }}
`;

const Detail = {
  Wrapper: ({ children, type, ...rest }) => {
    return (
      <TypeContext.Provider value={type}>
        <StyledWrapper
          {...rest}
          type={type}
          flex
          border
          radius={0}
          padding="2rem 2.5rem"
        >
          {children}
        </StyledWrapper>
      </TypeContext.Provider>
    );
  },
  Header: () => {
    return (
      <Div flex direction="row" justify="space-between" width="100%">
        <UserInfo />
        <ActionBtns />
      </Div>
    );
  },
  Contents: ({ title, content }) => {
    const isPost = Boolean(title);
    return (
      <Div width="100%">
        {isPost && <Text.PostTitle>{title}</Text.PostTitle>}
        <Text.PostContent isPost={isPost}>{content}</Text.PostContent>
      </Div>
    );
  },
  Footer: ({ commentCount = 0, date }) => {
    const type = useTypeContext();

    const footerStyle = {
      width: "100%",
      padding: "1rem 0 0",
    };
    if (type === "post") {
      return (
        <Text color="gray" {...footerStyle} size="1">
          💬 {commentCount}
        </Text>
      );
    }
    return <RelativeTime time={date} {...footerStyle} />;
  },
};

export default Detail;
