import React from 'react';
import { Icon, IconProps } from '@mui/material';

enum iconOptions {
  ADD = 'add',
  CAMERA = 'camera',
  FACE = 'face',
  LOCK = 'lock',
  PHOTO = 'photo',
}

interface UXPinIconProps extends IconProps {
  /**
   * The icon to display.
   * Use the name of the icon from https://material.io/tools/icons.
   * @uxpinpropname  Icon
   **/
  children: iconOptions;

  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @uxpinpropname Size
   */
  fontSize?: 'large' | 'medium' | 'small' | 'inherit';
}

/**
 * @uxpindocurl https://mui.com/api/icon/
 */
function IconTS(props: UXPinIconProps) {
  const { children, ...moreProps } = props;
  return <Icon {...moreProps}>{children}</Icon>;
}

export default IconTS;
