import React from "react";
import { Div, Input } from "../atoms";

const UserInput = ({
  wrapperStyle,
  inputStyle,
  userName,
  password,
  setValue,
}) => {
  const basicStyle = {
    width: "7rem",
    border: true,
    radius: 0.2,
    size: 0.8,
  };
  return (
    <Div {...wrapperStyle}>
      <Input.Inline
        required
        value={userName}
        maxLength={15}
        pattern="^[a-z]{1}[a-z0-9]{5,23}$"
        onChange={(e) =>
          setValue((_data) => ({ ..._data, userName: e.target.value }))
        }
        placeholder="닉네임"
        name="userName"
        {...basicStyle}
        {...inputStyle}
      />
      <Input.Inline
        required
        pattern="^[a-zA-Z0-9]+$"
        maxLength={15}
        value={password}
        onChange={(e) =>
          setValue((_data) => ({ ..._data, password: e.target.value }))
        }
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
