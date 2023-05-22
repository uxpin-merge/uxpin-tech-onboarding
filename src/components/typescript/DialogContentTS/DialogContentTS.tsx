import React from 'react';
import { DialogContent, DialogContentProps } from '@mui/material';

/**
 * @uxpindocurl https://mui.com/api/dialog-content/
 */
function DialogContentTS(props: DialogContentProps) {
  const { children } = props;

  return <DialogContent {...props}>{children}</DialogContent>;
}

export default DialogContentTS;
