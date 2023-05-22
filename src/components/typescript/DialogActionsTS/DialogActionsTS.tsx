import React from 'react';
import { DialogActions, DialogActionsProps } from '@mui/material';

/**
 * @uxpindocurl https://mui.com/api/dialog-actions/
 */
function DialogActionsTS(props: DialogActionsProps) {
  const { children } = props;

  return <DialogActions {...props}>{children}</DialogActions>;
}

export default DialogActionsTS;
