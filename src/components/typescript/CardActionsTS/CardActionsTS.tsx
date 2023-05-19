import React from 'react';
import { CardActions, CardActionsProps } from '@mui/material';

interface UXPinCardActionsprops extends CardActionsProps {
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
 * @uxpindocurl https://mui.com/api/card-actions/
 */
function CardActionsTS(props: UXPinCardActionsprops) {
  const { children, ...moreProps } = props;

  return <CardActions {...moreProps}>{children}</CardActions>;
}

export default CardActionsTS;
