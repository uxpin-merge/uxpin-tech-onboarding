import React from 'react';
import { DialogTitle, DialogTitleProps } from '@mui/material';
import { IconButton } from '@mui/material';

interface UXPinDialogTitleProps extends DialogTitleProps {
  hasClose: boolean;
}

/**
 * @uxpindocurl https://mui.com/api/dialog-title/
 */
function DialogTitleTS(props: UXPinDialogTitleProps) {
  const { children, hasClose, onClick } = props;

  return (
    <DialogTitle {...props}>
      {children}
      {hasClose ? (
        <IconButton
          aria-label="close"
          onClick={onClick}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
          }}
        >
          close
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

export default DialogTitleTS;
