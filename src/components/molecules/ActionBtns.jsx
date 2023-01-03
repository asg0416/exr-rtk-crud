import { useDialogData, useHistory } from "../../hooks";
import { useIdContext, useTypeContext } from "../../hooks/useCustomContext";
import { Button, Div } from "../atoms";
import { Dialog, DialogType } from "./dialog";

const ActionBtns = () => {
  const type = useTypeContext();
  const id = useIdContext();
  const navigate = useHistory(`/update/${id}`);

  const { dialogInfo, setDialogInfo } = useDialogData();

  const onUpdateHandler = {
    post: () => {
      setDialogInfo(DialogType.UserCheck('수정'));
    },
    comment: (e) => {
      setDialogInfo(DialogType.UserCheck("수정"));
      console.log("댓글 수정", id);
    },
  };
  const onDeleteHandler = {
    post: (e) => {
      setDialogInfo(DialogType.UserCheck('삭제'));
      console.log("게시글 삭제", id);
    },
    comment: (e) => {
      setDialogInfo(DialogType.UserCheck("삭제"));
      console.log("댓글 삭제", id);
    },
  };

  return (
    <Div flex direction="row">
      <Dialog {...dialogInfo} />
      <Button.Action onClick={onUpdateHandler[`${type}`]}>수정</Button.Action>
      <Button.Action onClick={onDeleteHandler[`${type}`]}>삭제</Button.Action>
    </Div>
  );
};

export default ActionBtns;
