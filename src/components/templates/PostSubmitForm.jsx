import React, { useState } from "react";
import { Button, Divider } from "../atoms";
import Div from "../atoms/Div";
import Input from "../atoms/Input";
import { UserInput } from "../molecules";

const style = {
  border: true,
  bgColor: "white",
  bdColor: "white",
};
const _initialState = {
  title: "",
  contents: "",
  userName: "",
  password: "",
};

const PostSubmitForm = ({
  btnTitle = "등록하기",
  onSubmit = () => {},
  initialState = _initialState,
}) => {
  const [formData, setFormData] = useState(initialState);
  const { title, contents, ...rest } = formData;

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmit({e, formData});
    setFormData(initialState);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <Div border margin="1rem 0 0" radius={0.5}>
        <Input
          required
          maxLength={40}
          {...style}
          value={title}
          onChange={(e) =>
            setFormData((_data) => ({ ..._data, title: e.target.value }))
          }
          placeholder="글제목"
          size="1.4"
          padding="0.5rem 1rem"
        />
        <Divider />
        <Input.TextArea
          required
          maxLength={400}
          {...style}
          value={contents}
          onChange={(e) =>
            setFormData((_data) => ({ ..._data, contents: e.target.value }))
          }
          height="clamp(200px,50rem,calc(100vh - 19.5rem))"
          placeholder="내용을 입력해주세요."
        />
        <Divider />
        <Div flex direction="row" justify="space-between" padding="0.5rem 1rem">
          <UserInput {...rest} setValue={setFormData} />
          <Button type="submit" size="small" color="orange">
            {btnTitle}
          </Button>
        </Div>
      </Div>
    </form>
  );
};

export default PostSubmitForm;
