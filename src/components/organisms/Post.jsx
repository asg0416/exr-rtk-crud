import React from "react";
import { useHistory } from "../../hooks";
import { Text } from "../atoms";
import Div from "../atoms/Div";
import RelativeTime from "../molecules/RelativeTime";

const Post = ({ id, title, contents, date, commentCount }) => {

  return (
    <Div.PostWrapper
      border
      bgColor="gray"
      onClick={useHistory(`/detail/${id}`)}
    >
      <Text size={1.2} weight="bold">
        {title}
      </Text>
      <Text.PostContentsEllipsis size={1}>{contents}</Text.PostContentsEllipsis>
      <Div flex direction="row" justify="space-between">
        <RelativeTime time={date} />
        <Text size={0.8} color="gray">
          💬 {commentCount}
        </Text>
      </Div>
    </Div.PostWrapper>
  );
};

export default Post;
