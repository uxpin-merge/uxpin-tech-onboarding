import React from 'react';
import { CardMedia, CardMediaProps } from '@mui/material';

interface UXPinCardMediaProps extends CardMediaProps {
  /**
   * Override or extend the styles applied to the component.
   * @uxpinignoreprop
   */
  classes: object;

  /**
   * Image to be displayed as a background image.
   * Either `image` or `src` prop must be specified. Specifying both may causes the media not to load.
   * Note that caller must specify height otherwise the image will not be visible.
   * @uxpinpropname Img src
   */
  image: string;

  /**
   * An alias for `image` property.
   * Available only with media components.
   * Media components: `video`, `audio`, `picture`, `iframe`, `img`.
   * @uxpinpropname Video/ Audio src
   */
  src: string;
}

/**
 * @uxpindocurl https://mui.com/api/card-media/
 */
function CardMediaTS(props: UXPinCardMediaProps) {
  return <CardMedia {...props} />;
}

export default CardMediaTS;
