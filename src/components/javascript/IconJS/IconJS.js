import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@mui/material/Icon';

// let icons = document.createElement('link');
// icons.setAttribute('href', 'https://fonts.googleapis.com/icon?family=Material+Icons');
// icons.setAttribute('rel', 'stylesheet');
// document.head.appendChild(icons);

/**
 * @uxpindocurl https://mui.com/api/icon/
 */
function IconJS(props) {
  const { children, ...moreProps } = props;
  return <Icon {...moreProps}>{children}</Icon>;
}

IconJS.propTypes = {
  /**
   * The icon to display.
   * Use the name of the icon from https://material.io/tools/icons.
   * @uxpinpropname  Icon
   */
  children: PropTypes.oneOf(['add', 'camera', 'face', 'lock', 'photo']),

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf([
    'inherit',
    'action',
    'disabled',
    'primary',
    'secondary',
    'error',
    'info',
    'success',
    'warning',
  ]),

  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @uxpinpropname Size
   */
  fontSize: PropTypes.oneOf(['large', 'medium', 'small', 'inherit']),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object,
};

IconJS.defaultProps = {
  // fontSize: "large"
};

export default IconJS;
