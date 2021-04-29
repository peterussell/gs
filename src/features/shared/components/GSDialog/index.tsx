import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText
} from "@material-ui/core";

interface Props {
  children?: React.ReactNode,
  onCancel: () => void
  onSave: () => void,
  open: boolean,
  saveText?: string,
  title: string
};

export const GSDialog = ({
  children,
  onCancel,
  onSave,
  open,
  saveText,
  title
}: Props) => {
  return (
    <Dialog open={open}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{children}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel}>
          Cancel
        </Button>
        <Button color="primary" variant="outlined" onClick={onSave}>
          { saveText ? saveText : "Save" }
        </Button>
      </DialogActions>
    </Dialog>
  )
};
