import React, { Fragment } from "react";
import { DetailCard } from "../organisms";
import CommentSubmitForm from "./CommentSubmitForm";

const DetailPostTemp = ({ postInfo, comments }) => {
  return (
    <Fragment>
      <DetailCard {...postInfo} />
      <CommentSubmitForm bg/>
      {comments.map(({ uid, ...rest }) => {
        // TODO: 댓글 상태 관리에서 아이디별 수정 상태 토글 관리
        if (uid === 1) {
          return <CommentSubmitForm key={uid} title="수정" />;
        }
        return <DetailCard key={uid} id={uid} type="comment" {...rest} />;
      })}
    </Fragment>
  );
};

export default DetailPostTemp;
