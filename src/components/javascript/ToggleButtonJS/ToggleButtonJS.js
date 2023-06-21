import * as React from 'react';
import PropTypes from 'prop-types';
import ToggleButtonM from '@mui/material/ToggleButton';
import { ToggleButtonGroup } from '@mui/material';
import IconJS from '../IconJS/IconJS';

/**
 * @uxpindocurl https://mui.com/api/toggle-button/
 */
function ToggleButtonJS(props) {
  return (
    <ToggleButtonGroup>
      <ToggleButtonM {...props}>{<IconJS>format_align_left</IconJS>}</ToggleButtonM>
      <ToggleButtonM {...props}>{<IconJS>format_align_center</IconJS>}</ToggleButtonM>
      <ToggleButtonM {...props}>{<IconJS>format_align_right</IconJS>}</ToggleButtonM>
    </ToggleButtonGroup>
  );
}

ToggleButtonJS.propTypes = {
  /**
   * The content of the component.
   * @uxpinignoreprop
   * */
  children: PropTypes.string,

  /**
   * The color of the button when it is in an active state.
   */
  color: PropTypes.oneOf(['standard', 'primary', 'secondary', 'success', 'error', 'info', 'warning']),

  /**
   * The size of the button.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  /**
   * The value to associate with the button when selected in a ToggleButtonGroup.
   */
  value: PropTypes.string,

  /**
   * If true, the component is disabled.
   */
  disabled: PropTypes.bool,

  /**
   * If true, the button is rendered in an active state.
   * @uxpinbind onChange 1
   */
  selected: PropTypes.bool,

  onChange: PropTypes.func,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object,
};

export default ToggleButtonJS;
