import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';

/**
 * @uxpindocurl https://mui.com/components/buttons/#main-content
 * @uxpinwrappers
 * SkipContainerWrapper, nonResizableWrapper
 */
function ButtonJS(props) {
  const { uxpinRef, children, ...moreProps } = props;
  return (
    <Button {...moreProps} ref={uxpinRef}>
      {children}
    </Button>
  );
}

ButtonJS.propTypes = {
  /**
   * The label of the button.
   * @uxpinpropname Label
   * */
  children: PropTypes.node,

  /**
   * The color of the button.
   */
  color: PropTypes.oneOf(['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning']),

  /**
   * If `true`, the button will be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * If `true`, the button will have no elevation.
   */
  disableElevation: PropTypes.bool,

  /**
   * If `true`, the button will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,

  /**
   * The size of the button.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  /**
   * The type of button.
   */
  variant: PropTypes.oneOf(['text', 'outlined', 'contained']),

  /**
   * The HREF of the button.
   */
  href: PropTypes.string,

  /**
   * On click event to use with UXPin interactions.
   */
  onClick: PropTypes.func,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object,

  /**
   * @uxpinignoreprop
   */
  uxpinRef: PropTypes.any,
};

export default ButtonJS;
