import React from 'react';
import { Button, ButtonProps } from '@mui/material';

interface UXPinButtonProps extends ButtonProps {
  uxpinRef: any;
}

/**
 * @uxpindocurl https://mui.com/components/buttons/#main-content
 * @uxpinwrappers
 * SkipContainerWrapper, nonResizableWrapper
 */
function ButtonTS(props: UXPinButtonProps) {
  const { uxpinRef, children, ...moreProps } = props;
  return (
    <Button {...moreProps} ref={uxpinRef}>
      {children}
    </Button>
  );
}

export default ButtonTS;
