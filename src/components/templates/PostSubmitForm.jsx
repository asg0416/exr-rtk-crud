import React from "react";
import { Button, Divider } from "../atoms";
import Div from "../atoms/Div";
import Input from "../atoms/Input";
import { UserInput } from "../molecules";

const PostSubmitForm = ({btnTitle='등록하기'}) => {
  const style = {
    border: true,
    bgColor: "white",
    bdColor: "white",
  };
  return (
    <Div border margin="1rem 0 0" radius={0.5}>
      <Input placeholder="글제목" {...style} size="1.4" padding="0.5rem 1rem" />
      <Divider />
      <Input.TextArea
        {...style}
        height="clamp(200px,50rem,calc(100vh - 19.5rem))"
        placeholder="내용을 입력해주세요."
      />
      <Divider />
      <Div flex direction="row" justify="space-between" padding="0.5rem 1rem">
        <UserInput />
        <Button size="small" color="orange">
          {btnTitle}
        </Button>
      </Div>
    </Div>
  );
};

export default PostSubmitForm;
