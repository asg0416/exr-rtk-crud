import React, { Fragment } from "react";
import { useRtkMutation, useRtkQuery } from "../../shares/error/useQuery";
import { DetailCard } from "../organisms";
import CommentSubmitForm from "./CommentSubmitForm";

const DetailPostTemp = ({ postInfo, id }) => {
  const { data: comments, apiStatus: loadComments } = useRtkQuery(
    "GetAllComment",
    id
  );
  const commentCount = (num = 1) => ({ commentCount: comments.length + num });

  const [commentMutate, loadSubmitComments] = useRtkMutation({
    hook: "SetComment",
  });
  const [commentCountMutate, loadCommentCount] = useRtkMutation({
    hook: "EditPost",
  });
  const onCreateSubmit = ({ formData }) => {
    const comment = {
      ...formData,
      postId: id,
      createdTime: new Date(),
    };

    commentMutate(comment);
    commentCountMutate({ id: id, data: commentCount() });
  };

  return (
    <Fragment>
      <DetailCard {...postInfo} />
      <CommentSubmitForm bg onSubmit={onCreateSubmit} />
      {loadSubmitComments || loadCommentCount}
      {comments
        ? [...comments].reverse().map(({ id, ...rest }) => {
            // TODO: 댓글 상태 관리에서 아이디별 수정 상태 토글 관리
            // if (id === 1) {
            //   return <CommentSubmitForm key={id} title="수정" />;
            // }
            return (
              <DetailCard
                key={id}
                id={id}
                type="comment"
                commentCount={commentCount}
                {...rest}
              />
            );
          })
        : loadComments}
    </Fragment>
  );
};

export default DetailPostTemp;
