import React, { useState } from "react";
import { Button, Div, Input } from "../atoms";
import { UserInput } from "../molecules";
import Detail from "../molecules/Detail";

const CommentSubmitForm = ({
  title = "등록",
  onSubmit = () => {},
  ...rest
}) => {
  const isUpdate = Boolean(title === "수정");
  const btnStyle = {
    outline: true,
    width: "3rem",
  };

  const initialState = {
    contents: "",
    userName: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialState);
  const { contents, ...formRest } = formData;

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmit({ e, formData });
    setFormData(initialState);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <Detail.Wrapper
        bg={rest.bg}
        type="comment"
        align="flex-start"
        gap="1rem 0"
      >
        <Div width="100%" flex direction="row" justify="space-between">
          <UserInput
            inputStyle={{ width: "10rem" }}
            {...formRest}
            setValue={setFormData}
          />
          {/* TODO: 댓글 수정 초기화 및 수정 토글 상태 변경 */}
          <div>
            <Button.Action type="submit" color="orange" {...btnStyle}>
              {title}
            </Button.Action>
            {isUpdate && (
              <Button.Action color="black20" {...btnStyle}>
                취소
              </Button.Action>
            )}
          </div>
        </Div>
        <Div flex direction="row" width="100%" height="8rem" gap="0 1rem">
          <Input.TextArea
            required
            maxLength={400}
            value={contents}
            onChange={(e) =>
              setFormData((_data) => ({ ..._data, contents: e.target.value }))
            }
            border
            radius={0}
            size="0.9"
            height="100%"
            placeholder="댓글을 입력해주세요"
          />
        </Div>
      </Detail.Wrapper>
    </form>
  );
};

export default CommentSubmitForm;
