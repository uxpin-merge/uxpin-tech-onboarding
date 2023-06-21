import * as React from 'react';
import ToggleButtonM, { ToggleButtonProps } from '@mui/material/ToggleButton';
import { ToggleButtonGroup } from '@mui/material';
import IconTS from '../IconTS/IconTS';

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
        <IconTS>format_align_left</IconTS>
      </ToggleButtonM>
      <ToggleButtonM {...props}>
        <IconTS>format_align_center</IconTS>
      </ToggleButtonM>
      <ToggleButtonM {...props}>
        <IconTS>format_align_right</IconTS>
      </ToggleButtonM>
    </ToggleButtonGroup>
  );
}

export default ToggleButtonTS;
