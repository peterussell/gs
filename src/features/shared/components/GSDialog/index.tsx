import React from "react";
import {
  Button,
  Dialog,
  DialogProps,
  DialogActions,
  DialogTitle,
  DialogContent
} from "@material-ui/core";

import useStyles from "./gsDialogStyle";

interface CustomProps {
  children?: React.ReactNode,
  onCancel?: () => void
  onSave?: () => void,
  open: boolean,
  saveText?: string,
  title: string
};

type Props = CustomProps & DialogProps;

export const GSDialog = ({
  children,
  onCancel,
  onSave,
  open,
  saveText,
  title,
  ...props
}: Props) => {
  const classes = useStyles();

  return (
    <Dialog open={open} {...props}>
      <DialogTitle className={classes.titleBar}>{title}</DialogTitle>
      <DialogContent className={classes.contentContainer}>{children}</DialogContent>
      {(onCancel || onSave) && (
        <DialogActions>
          {onCancel && (
            <Button onClick={onCancel}>
              Cancel
            </Button>
          )}

          {onSave && (
            <Button color="primary" variant="outlined" onClick={onSave}>
              { saveText ? saveText : "Save" }
            </Button>
          )}
        </DialogActions>
      )}
    </Dialog>
  )
};
