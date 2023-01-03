import { useState } from 'react'

export const useDialog = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const onDialogOpenHandler = () => {
    setOpenDialog(true)
  }

  const onDialogSubmitHandler = (callback) => {
    return (param) => {
      callback(param);
      setOpenDialog(false);
    }
  }


  return { openDialog, onDialogOpenHandler, onDialogSubmitHandler };
}

