import { useHistory } from "../../hooks";
import { useIdContext, useTypeContext } from "../../hooks/useCustomContext";
import { Button, Div } from "../atoms";

const ActionBtns = () => {
  const type = useTypeContext();
  const id = useIdContext();

  const onUpdateHandler = {
    post: useHistory(`/update/${id}`),
    comment: (e) => {
      console.log("댓글 수정", id);
    },
  };
  const onDeleteHandler = {
    post: (e) => {
      console.log("게시글 삭제", id);

    },
    comment: (e) => {
      console.log("댓글 삭제", id);

    },
  };

  return (
    <Div flex direction="row">
      <Button.Action onClick={onUpdateHandler[`${type}`]}>
        수정
      </Button.Action>
      <Button.Action onClick={onDeleteHandler[`${type}`]}>
        삭제
      </Button.Action>
    </Div>
  );
};

export default ActionBtns;
