import { useState } from 'react'

export const useDialog = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const onDialogOpenHandler = () => {
    setOpenDialog(true)
  }

  const onDialogSubmitHandler = (callback) => {
    return () => {
      callback();
      setOpenDialog(false);
    }
  }


  return [openDialog, onDialogOpenHandler, onDialogSubmitHandler];
}
