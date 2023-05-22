import React from 'react';
import DialogContentTextM from '@mui/material/DialogContentText';
import PropTypes from 'prop-types';

/**
 * @uxpindocurl https://mui.com/api/dialog-content-text/
 */
function DialogContentTextJS(props) {
  const { children } = props;

  return <DialogContentTextM {...props}>{children}</DialogContentTextM>;
}

DialogContentTextJS.propTypes = {
  /**
   * The Dialog Content Text
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   * See CSS API https://mui.com/api/dialog-content-text/#css for more details.
   */
  classes: PropTypes.object,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   * See the `sx` page for more details https://mui.com/system/the-sx-prop/.
   */
  sx: PropTypes.object,
};

export default DialogContentTextJS;
