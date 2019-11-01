import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  paper: {
    padding: theme.spacing(1, 2),
  },
  breadCrumbLink: {
    cursor: 'pointer',
  },
}));
export default function ProductsBreadcrumbs({ link }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={0} className={classes.paper}>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Link href="/" className={classes.breadCrumbLink}>
          Homepage
          </Link>
          <Link href="/products" className={classes.breadCrumbLink}>
            All products
          </Link>
          <Typography color="textPrimary">{link}</Typography>
        </Breadcrumbs>
      </Paper>

    </div>
  );
}
