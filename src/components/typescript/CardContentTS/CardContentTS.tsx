import React from 'react';
import { CardContent, CardContentProps } from '@mui/material';

interface UXPinCardContentProps extends CardContentProps {
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
 * @uxpindocurl https://mui.com/api/card-content/
 */
function CardContentTS(props: UXPinCardContentProps) {
  const { children, ...moreProps } = props;

  return <CardContent {...moreProps}>{children}</CardContent>;
}

export default CardContentTS;
