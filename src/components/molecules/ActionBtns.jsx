import { useDialogData, useHistory } from "../../hooks";
import { useDetailContext, useTypeContext } from "../../hooks/useCustomContext";
import { useRtkMutation } from "../../shares/error/useQuery";
import { Button, Div } from "../atoms";
import { Dialog, DialogType } from "./dialog";

const ActionBtns = () => {
  const type = useTypeContext();
  const { id, postId, password, commentCount } = useDetailContext();
  // const navigate = useHistory(`/update/${id}`);

  const [onDeleteCommentHandler, apiStatus] = useRtkMutation({
    hook: "DeleteComment",
    onSuccessHandler: () =>
      setDialogInfo(
        DialogType.SuccessAlert("삭제", () => setOpenDialog(false))
      ),
  });
  const [commentCountMutate, loadCommentCount] = useRtkMutation({
    hook: "EditPost",
  });

  const { dialogInfo, setDialogInfo, setOpenDialog } = useDialogData();

  // 수정 함수
  const onUpdateHandler = {
    post: () => {
      setDialogInfo(DialogType.UserCheck("수정"));
    },
    comment: (e) => {
      setDialogInfo(DialogType.UserCheck("수정"));
      console.log("댓글 수정", id);
    },
  };

  // 삭제 함수
  const onDeleteHandler = {
    post: (e) => {
      setDialogInfo(DialogType.UserCheck("삭제"));
      console.log("게시글 삭제", id);
    },
    comment: (e) => {
      const onDeleteHandler = (value) => {
        if (password === value) {
          console.log("댓글 삭제", id);
          onDeleteCommentHandler(id, postId);
          commentCountMutate({ id: postId, data: commentCount(-1) });
        } else {
          setDialog(true);
        }
      };
      const setDialog = (param = false) =>
        setDialogInfo(
          DialogType.UserCheck("삭제", onDeleteHandler, {
            helperText: param,
          })
        );
      setDialog();
    },
  };

  return (
    <Div flex direction="row">
      <Dialog {...dialogInfo} />
      {apiStatus || loadCommentCount}
      <Button.Action onClick={onUpdateHandler[`${type}`]}>수정</Button.Action>
      <Button.Action onClick={onDeleteHandler[`${type}`]}>삭제</Button.Action>
    </Div>
  );
};

export default ActionBtns;
