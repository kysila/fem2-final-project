import React from 'react';
import Box from '@material-ui/core/Box';

import { Link } from 'react-router-dom';
import { useStyles } from './styles';

export function Logo() {
  const classes = useStyles();
  return (
    <Link to="/">
      <Box className={classes.logo}>
        <img src="/img/logo.svg" alt="Logo" />
      </Box>
    </Link>
  );
}
