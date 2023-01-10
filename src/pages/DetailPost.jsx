import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { DetailPostTemp } from "../components/templates";
import { useRtkQuery } from "../shares/error/useQuery";

const DetailPost = (props) => {
  const { id } = useParams();
  const { data: postInfo, apiStatus } = useRtkQuery("GetOnePost", id);

  return (
    <Fragment>
      {postInfo ? <DetailPostTemp {...{ postInfo, id }} /> : apiStatus}
    </Fragment>
  );
};

export default DetailPost;
