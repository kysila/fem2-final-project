import React from 'react';
// import material
import Paper from '@material-ui/core/Paper';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
// local import
import { useStyles } from './style';


export default function AllBreadcrumbs() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={0} className={classes.paper}>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Link href="/" className={classes.breadCrumbLink}>
            Homepage
          </Link>
          <Typography color="textPrimary">Profile</Typography>
        </Breadcrumbs>
      </Paper>
    </div>
  );
}

export const SideBreadcrumbs = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={0} className={classes.paper}>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Link href="/" className={classes.breadCrumbLink}>
            Homepage
          </Link>
          <Typography color="textPrimary">Profile</Typography>
        </Breadcrumbs>
      </Paper>
    </div>
  )
}
