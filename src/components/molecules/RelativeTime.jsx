import React from "react";
import TimeAgo from "timeago-react";
import * as timeago from "timeago.js";
import ko from "timeago.js/lib/lang/ko";
import { Text } from "../atoms";

timeago.register("ko", ko);

const RelativeTime = ({ time, ...style }) => {
  return (
    <Text size={0.8} color="gray" {...style}>
      <TimeAgo datetime={time} locale="ko" />
    </Text>
  );
};

export default RelativeTime;
