import DialogActionsM from '@mui/material/DialogActions';
import PropTypes from 'prop-types';
import React from 'react';

/**
 * @uxpindocurl https://mui.com/api/dialog-actions/
 */
function DialogActionsJS(props) {
  return <DialogActionsM {...props}>{props.children}</DialogActionsM>;
}

DialogActionsJS.propTypes = {
  /**
   * The content of the component.
   * @uxpinignoreprop
   */
  children: PropTypes.node,
  /**
   * If true, the dialog actions do not have additional margin.
   */
  disableSpacing: PropTypes.bool,
  /**
   * Override or extend the styles applied to the component. See CSS API below for more details.
   */
  classes: PropTypes.object,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   * See the `sx` page for more details.
   */
  /** */
  sx: PropTypes.object,
};

export default DialogActionsJS;
