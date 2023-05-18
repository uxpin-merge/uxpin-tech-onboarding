import React from 'react';
import PropTypes from 'prop-types';
import CardActionArea from '@mui/material/CardActionArea';

/**
 * @uxpindocurl https://mui.com/api/card-action-area/
 */
function CardActionAreaJS(props) {
  const { children, ...moreProps } = props;
  return <CardActionArea {...moreProps}>{children}</CardActionArea>;
}

CardActionAreaJS.propTypes = {
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
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object,
};

export default CardActionAreaJS;
