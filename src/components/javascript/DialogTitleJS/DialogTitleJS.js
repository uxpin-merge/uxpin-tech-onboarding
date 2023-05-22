import React from 'react';
import DialogTitleM from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';
import IconButtonJS from '../IconButtonJS/IconButtonJS';

/**
 * @uxpindocurl https://mui.com/api/dialog-title/
 */
function DialogTitleJS(props) {
  const { children, hasClose, onClick } = props;

  return (
    <DialogTitleM {...props}>
      {children}
      {hasClose ? (
        <IconButtonJS
          aria-label="close"
          onClick={onClick}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
          }}
        >
          close
        </IconButtonJS>
      ) : null}
    </DialogTitleM>
  );
}

DialogTitleJS.propTypes = {
  /**
   * The text of the Dialog Title.
   */
  children: PropTypes.node,

  /**
   * If true, the close icon will be shown.
   */
  hasClose: PropTypes.bool,

  /**
   * on click event to use with UXPin interactions.
   */
  onClick: PropTypes.func,

  /**
   * Override or extend the styles applied to the component.
   * See CSS API below for more details. https://mui.com/api/dialog-title/#css
   * @uxpinignoreprop
   */
  classes: PropTypes.object,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   * See the `sx` page for more details. https://mui.com/system/the-sx-prop/
   */
  sx: PropTypes.object,
};

export default DialogTitleJS;
