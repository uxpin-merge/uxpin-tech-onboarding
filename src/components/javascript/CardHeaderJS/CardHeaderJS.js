import React from 'react';
import PropTypes from 'prop-types';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButtonJS from '../IconButtonJS/IconButtonJS';

/**
 * @uxpindocurl https://mui.com/api/card-header/
 */
function CardHeaderJS(props) {
  const { action, avatar, color, children, iconOnClick, ...moreProps } = props;

  return (
    <CardHeader
      {...moreProps}
      avatar={avatar && <Avatar color={color}>{avatar}</Avatar>}
      action={action && <IconButtonJS onClick={iconOnClick}>{action}</IconButtonJS>}
    >
      {children}
    </CardHeader>
  );
}

CardHeaderJS.propTypes = {
  children: PropTypes.node,

  /**
   * The action to display in the card header.
   * @uxpinpropname Icon Action
   */
  action: PropTypes.oneOf(['add', 'camera', 'face', 'lock', 'photo']),

  /**
   * The Avatar element to display.
   */
  avatar: PropTypes.string,

  /**
   * Color of the Avatar text.
   * @uxpinpropname Avatar Bg Color
   */
  color: PropTypes.oneOf([
    'red',
    'pink',
    'purple',
    'indigo',
    'blue',
    'lightBlue',
    'cyan',
    'teal',
    'green',
    'lightGreen',
    'lime',
    'yellow',
    'orange',
    'brown',
    'grey',
  ]),

  /**
   * Override or extend the styles applied to the component.
   * @uxpinignoreprop
   */
  classes: PropTypes.object,

  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   */
  component: PropTypes.string,

  /**
   * If true, subheader and title won't be wrapped by a Typography component.
   * This can be useful to render an alternative Typography variant by wrapping the title text, and optional subheader text with the Typography component.
   */
  disableTypography: PropTypes.bool,

  /**
   * The content of the component.
   */
  subheader: PropTypes.node,

  /**
   * These props will be forwarded to the subheader (as long as disableTypography is not true).
   * @uxpinignoreprop
   */
  subheaderTypograhyProps: PropTypes.object,

  /**
   * The content of the component.
   */
  title: PropTypes.node,

  /**
   * Aria tag for accessibility
   */
  // ariaLabel: PropTypes.string,

  /**
   * These props will be forwarded to the title (as long as disableTypography is not true).
   * @uxpinignoreprop
   */
  titleTypographyProps: PropTypes.object,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object,

  /**
   * On click event to use with UXPin interactions.
   * This interferes with iconOnClick as it runs when clicking icon.
   */
  // onClick: PropTypes.func,

  /**
   * On click event to use with UXPin interactions.
   */
  iconOnClick: PropTypes.func,
};

export default CardHeaderJS;
