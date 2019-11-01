import React from 'react';
import axios from 'axios';

import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(() => ({
  productGallery: {
    border: '1px solid red',
    width: 100,
    height: 100,
  },
  test: {
    display: 'block',
    width: 100,
    height: 100,
  },
}));

export const ProductGallery = (props) => {
  const classes = useStyles();


  return (
    <Box className={classes.productGallery}>
      <img src="img/products/e-bikes/1/001.jpg" alt="" className={classes.test} />
    </Box>
  );
};
