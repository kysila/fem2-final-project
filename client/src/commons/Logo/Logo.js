import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';

import { useStyles } from './styles';

export function Logo() {
  const classes = useStyles();
  return (
    <Box className={classes.logo}>
      <Link to="/">
        <img src="/img/logo.svg" alt="Logo" />
      </Link>
    </Box>
  );
}
