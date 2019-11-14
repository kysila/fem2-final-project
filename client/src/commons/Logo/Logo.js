import React from 'react';
import Box from '@material-ui/core/Box';

import { useStyles } from './styles';

export function Logo() {
  const classes = useStyles();
  return (
    <Box className={classes.logo}>
      <img src="/img/logo.svg" alt="Logo" />
    </Box>
  );
}
