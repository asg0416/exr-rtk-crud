import React from "react";
import { Div, Input } from "../atoms";

const UserInput = ({ wrapperStyle, inputStyle }) => {
  const basicStyle = {
    width: "7rem",
    border: true,
    radius: 0.2,
    size: 0.8,
  };
  return (
    <Div {...wrapperStyle}>
      <Input.Inline
        defaultValue="sujin"
        placeholder="닉네임"
        name="userName"
        {...basicStyle}
        {...inputStyle}
      />
      <Input.Inline
        defaultValue="1234"
        name="password"
        placeholder="비밀번호"
        {...basicStyle}
        {...inputStyle}
        type="password"
      />
    </Div>
  );
};

export default UserInput;
