import React from 'react';

import Paper from '@material-ui/core/Paper';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

import { useStyles } from './style';

const ProductsBreadcrumbs = ({link}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={0} className={classes.paper}>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Link to="/" className={classes.breadCrumbLink}>
            Homepage
          </Link>

          <Link to="/products/filter?perPage=8&startPage=1" className={classes.breadCrumbLink}>
              All products
          </Link>

          <Typography color="textPrimary">{link}</Typography>
        </Breadcrumbs>
      </Paper>
    </div>
  );
};


export default ProductsBreadcrumbs;
