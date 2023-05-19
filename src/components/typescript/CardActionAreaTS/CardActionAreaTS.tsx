import React from 'react';
import { CardActionArea, CardActionAreaProps } from '@mui/material';

interface UXPinCardActionProps extends CardActionAreaProps {
  /**
   * The content of the component.
   * @uxpinignoreprop
   */
  children: React.ReactNode;

  /**
   * Override or extend the styles applied to the component.
   * @uxpinignoreprop
   */
  classes: object;
}

/**
 * @uxpindocurl https://mui.com/api/card-action-area/
 */
function CardActionAreaTS(props: UXPinCardActionProps) {
  const { children, ...moreProps } = props;
  return <CardActionArea {...moreProps}>{children}</CardActionArea>;
}

export default CardActionAreaTS;
