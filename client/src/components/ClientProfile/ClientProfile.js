import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// Material UI
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// Local imports
import { Footer, Header } from '../../commons';
import ProfileBreadcrumbs from './ProfileBreadcrumbs/ProfileBreadcrumbs';
import { Information } from './Information/Information';

// import '../../index.css';

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
  },
  h2Name: {
    marginBottom: '50px',
    fontStyle: 'normal',
    fontHeight: '326',
    fontSize: '56px',
    textTransform: 'capitalize',
  },
  leftNavBar: {
    margin: '0 150px 25px 230px',
    cursor: 'pointer',
  },
}));

export const ClientProfile = () => {

  const [customerInfo, setCustomerInfo] = useState('customer');
  const [loading, setLoading] = useState(true);

  const leftMenu = [
    'Information',
    'My Order List',
    'My Favorite Items',
    'My Viewed Items',
    'My Reviews',
    'My Bonuses',
  ];
  const classes = useStyles();

  const sideBarLeft = leftMenu.map((name) => {
    return (
      <React.Fragment>
        <Typography
          variant="body1"
          key={name.toString()}
          className={classes.leftNavBar}
        >
          {name}
        </Typography>
      </React.Fragment>
    )
  });

  // useEffect(() => {
  //   axios.get('/customers/customer')
  //     .then((loggedInCustomer) => {
  //       console.log(loggedInCustomer.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // });


  return (
    <React.Fragment>
      <Header callCenter="1-855-324-5387" />
      <ProfileBreadcrumbs />

      <Grid
        className={classes.root}
        container
        spacing={3}

      >
        <Grid
          item
          xs={5}
          sm={5}
        >
          <Typography
            variant="h2"
            className={classes.h2Name}
            align="center"
            style={{ fontFamily: 'Tungsten' }}
          >
            My Account
          </Typography>
          {sideBarLeft}
        </Grid>
        <Grid
          item
          xs={7}
          sm={7}
        >
          <Information />
        </Grid>
      </Grid>
      <Footer />
    </React.Fragment>
  );
};
