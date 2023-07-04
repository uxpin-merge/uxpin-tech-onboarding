import * as React from 'react';
import ToggleButtonM, { ToggleButtonProps } from '@mui/material/ToggleButton';
import { ToggleButtonGroup } from '@mui/material';
import Icon from '@mui/material/Icon';

interface UXPinToggleButtonProps extends ToggleButtonProps {
  /**
   * @uxpinbind onChange 1
   */
  selected: boolean;

  onChange?: (event: React.MouseEvent<HTMLElement>, value: any) => void;
}

/**
 * @uxpindocurl https://mui.com/api/toggle-button/
 */
function ToggleButtonTS(props: UXPinToggleButtonProps) {
  return (
    <ToggleButtonGroup>
      <ToggleButtonM {...props}>
        <Icon>format_align_left</Icon>
      </ToggleButtonM>
      <ToggleButtonM {...props}>
        <Icon>format_align_center</Icon>
      </ToggleButtonM>
      <ToggleButtonM {...props}>
        <Icon>format_align_right</Icon>
      </ToggleButtonM>
    </ToggleButtonGroup>
  );
}

export default ToggleButtonTS;
