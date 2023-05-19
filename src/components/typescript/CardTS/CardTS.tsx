import React from 'react';
import { Card, CardProps } from '@mui/material';

interface UXPinCardProps extends CardProps {
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

  /**
   * If true, the card will use raised styling.
   * @uxpinignoreprop
   */
  raised: boolean;
}

/**
 * @uxpindocurl https://mui.com/api/card/
 */
function CardJS(props: UXPinCardProps) {
  const { children, ...moreProps } = props;
  return <Card {...moreProps}>{children}</Card>;
}

export default CardJS;
