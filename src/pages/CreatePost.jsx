import React, { Fragment } from "react";
import { PostSubmitForm } from "../components/templates";
import { useHistory } from "../hooks";
import { useRtkMutation } from "../shares/error/useQuery";
import { setFormattedDate } from "../shares/utils/function";

const CreatePost = (props) => {
  const onSuccessHandler = useHistory('/')
  const [mutate, apiStatus] = useRtkMutation({
    hook: "SetPost",
    onSuccessHandler,
  });
  const onSubmitHandler = ({ e, formData }) => {
    const post = { ...formData, createdTime: setFormattedDate(), commentCount: 0 };
    mutate(post);
  };
  return (
    <Fragment>
      {apiStatus}
      <PostSubmitForm onSubmit={onSubmitHandler} />
    </Fragment>
  );
};

export default CreatePost;
