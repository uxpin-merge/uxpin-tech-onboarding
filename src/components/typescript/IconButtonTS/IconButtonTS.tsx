import React from 'react';
import { IconButton, IconButtonProps } from '@mui/material';
import IconTS from '@mui/material/Icon';

interface UXPinIconButtonProps extends IconButtonProps {
  /**
   * The icon element.
   * @uxpinpropname  Icon
   */
  children: 'add' | 'camera' | 'face' | 'lock' | 'photo';

  size: 'small' | 'medium' | 'large';
}

/**
 * @uxpindocurl https://mui.com/api/icon-button/#main-content
 */
function IconButtonTS(props: UXPinIconButtonProps) {
  const { children, size, ...moreProps } = props;
  return (
    <IconButton {...moreProps}>
      <IconTS fontSize={size}>{children}</IconTS>
    </IconButton>
  );
}

export default IconButtonTS;
