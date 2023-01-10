import { useState } from "react";
import { useDialog } from "./useDialog";

const useDialogData = () => {
  const initialDialog = {
    title: "",
    children: "",
    onConfirm: () => {},
    onCancel: () => {},
  };

  const [_dialogInfo, _setDialogInfo] = useState(initialDialog);
  const {
    openDialog,
    onDialogOpenHandler,
    onDialogSubmitHandler,
    setOpenDialog,
  } = useDialog();

  const dialogInfo = {
    ..._dialogInfo,
    onConfirm: _dialogInfo.onConfirm,
    onCancel: onDialogSubmitHandler(() => {
      _dialogInfo.onCancel();
      _setDialogInfo(initialDialog);
    }),
    visible: openDialog,
  };

  const setDialogInfo = (info) => {
    _setDialogInfo({ ...initialDialog, ...info });
    onDialogOpenHandler();
  };

  return { dialogInfo, setDialogInfo, setOpenDialog };
};

export default useDialogData;
