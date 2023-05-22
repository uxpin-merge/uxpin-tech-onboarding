import React from 'react';
import { Typography, TypographyProps } from '@mui/material';

/**
 * @uxpindocurl https://mui.com/api/typography/
 */
function TypographyTS(props: TypographyProps) {
  const { children, ...moreProps } = props;

  return (
    <Typography {...moreProps} style={{ whiteSpace: 'pre-wrap' }}>
      {children}
    </Typography>
  );
}

export default TypographyTS;
