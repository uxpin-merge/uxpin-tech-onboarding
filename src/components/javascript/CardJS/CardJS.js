import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';

/**
 * @uxpindocurl https://mui.com/api/card/
 */
function CardJS(props) {
  const { children, ...moreProps } = props;
  return <Card {...moreProps}>{children}</Card>;
}

CardJS.propTypes = {
  /**
   * The content of the component.
   * @uxpinignoreprop
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   * @uxpinignoreprop
   */
  classes: PropTypes.object,

  /**
   * If true, the card will use raised styling.
   * @uxpinignoreprop
   */
  raised: PropTypes.bool,
  /**
   * The shadow depth of paper surface. Accepts values between 0 and 16.
   */
  elevation: PropTypes.number,

  /**
   * the variant to use.
   */
  variant: PropTypes.oneOf(['elevation', 'outlined']),

  /**
   * If `true`, rounded corners are disabled.
   */
  square: PropTypes.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object,
};

export default CardJS;
