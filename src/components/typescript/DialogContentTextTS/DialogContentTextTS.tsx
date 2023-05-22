import React from 'react';
import { DialogContentText, DialogContentTextProps } from '@mui/material';

/**
 * @uxpindocurl https://mui.com/api/dialog-content-text/
 */
function DialogContentTextTS(props: DialogContentTextProps) {
  const { children } = props;

  return <DialogContentText {...props}>{children}</DialogContentText>;
}

export default DialogContentTextTS;
