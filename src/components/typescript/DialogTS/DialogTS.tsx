import React from 'react';
import { Dialog, DialogProps } from '@mui/material';

type UXPinDialogProps = Omit<DialogProps, 'onClose' | 'TransitionProps' | 'disablePortal' | 'style'>;

/**
 * @uxpinuseportal
 * @uxpindocurl https://mui.com/api/dialog/#main-content
 */

function DialogTS(props: UXPinDialogProps) {
  const [open, setOpen] = React.useState(props.open);
  const { children } = props;

  React.useEffect(() => setOpen(props.open), [props]);

  return (
    <Dialog
      {...props}
      open={open}
      onClose={() => setOpen(false)}
      TransitionProps={{ tabIndex: undefined }}
      disablePortal={true}
      style={{ minWidth: '300px', minHeight: '300px', width: '100%', height: '100%' }}
    >
      {children}
    </Dialog>
  );
}

export default DialogTS;
