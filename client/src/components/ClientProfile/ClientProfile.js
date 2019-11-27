/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// Material UI
import {
  Container, Typography,
} from '@material-ui/core';
// Local imports
import { Footer, Header } from '../../commons';
import ProfileBreadcrumbs from './ProfileBreadcrumbs/ProfileBreadcrumbs';
import { Information } from './Information/Information';
import { Wishlist } from './Wishlist/Wishlist';
import { OrderList } from './OrderList/OrderList';
import { ViewedItems } from './ViewedItems/ViewedItems';
import { Reviews } from './Reviews/Reviews';

import { useStyles } from './style';
import { dispatchGetCustomer } from '../../store/auth/actions';

function ClientProfile(props) {
  const classes = useStyles();

  if (!props.user) {
    return <Redirect push to="/" />;
  }

  return (
    <React.Fragment>
      <Header
        callCenter="1-855-324-5387"
      />
      <Container
        maxWidth="md"
        className={classes.mainContainerTop}
      >
        <ProfileBreadcrumbs />
        <Typography
          variant="h2"
          className={classes.h2Name}
          align="left"
          style={{ fontFamily: 'Tungsten Book' }}
        >
          My Account
        </Typography>
      </Container>
      <Container
        maxWidth="md"
        className={classes.mainContainer}
      >
        <section
          className={classes.contentSection}
        >
          <Information
            user={props.user}
            getCustomerInfo={props.getCustomerInfo}
          />
          <OrderList />
          <Wishlist
            user={props.user}
          />
          <ViewedItems />
          <Reviews />
        </section>
      </Container>
      <Footer />
    </React.Fragment>
  );
}

function putStateToProps(state) {
  return {
    user: state.auth.user,
  };
}

function putActionsToProps(dispatch) {
  return {
    getCustomerInfo: () => dispatch(dispatchGetCustomer()),
  };
}

const Profile = connect(putStateToProps, putActionsToProps)(ClientProfile);
export { Profile as ClientProfile };
