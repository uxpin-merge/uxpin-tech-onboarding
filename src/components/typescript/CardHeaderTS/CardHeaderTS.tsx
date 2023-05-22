import React from 'react';
import { CardHeader, CardHeaderProps } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import IconButtonTS from '@mui/material/IconButton';

interface UXPinCardHeaderProps extends CardHeaderProps {
  /**
   * @uxpinpropname Icon Action
   */
  action: 'add' | 'camera' | 'face' | 'lock' | 'photo';

  /**
   * Override or extend the styles applied to the component.
   * @uxpinignoreprop
   */
  classes: object;

  /**
   * These props will be forwarded to the title (as long as disableTypography is not true).
   * @uxpinignoreprop
   */
  titleTypographyProps: object;

  /**
   * These props will be forwarded to the subheader (as long as disableTypography is not true).
   * @uxpinignoreprop
   */
  subheaderTypograhyProps: object;

  iconOnClick(): any;
}

/**
 * @uxpindocurl https://mui.com/api/card-header/
 */
function CardHeaderTS(props: UXPinCardHeaderProps) {
  const { action, avatar, color, children, iconOnClick, ...moreProps } = props;

  return (
    <CardHeader
      {...moreProps}
      avatar={avatar && <Avatar color={color}>{avatar}</Avatar>}
      action={action && <IconButtonTS onClick={iconOnClick}>{action}</IconButtonTS>}
    >
      {children}
    </CardHeader>
  );
}

export default CardHeaderTS;
