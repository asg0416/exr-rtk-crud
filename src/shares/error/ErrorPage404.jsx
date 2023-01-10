import React from "react";
import { Button, Div } from "../../components/atoms";
import { useHistory } from "../../hooks";

export const ErrorPage404 = ({ message = "ErrorPage404" }) => {
  const history = useHistory();
  return (
    <div>
      {message}
      <Div>
        <Button
          color="orange"
          onClick={() => {
            history("/");
          }}
        >
          홈
        </Button>
        <Button
          color="gray40"
          onClick={() => {
            history(0);
          }}
        >
          새로고침
        </Button>
      </Div>
    </div>
  );
};
