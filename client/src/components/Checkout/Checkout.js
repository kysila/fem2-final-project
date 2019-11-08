import React, { useState } from 'react';
import {
  Grid, Typography, Checkbox, FormControlLabel, Button, Divider, Box, useMediaQuery, withTheme,
} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { connect } from 'react-redux';
import { Logo } from '../../commons/Logo/Logo';
import { Steps } from '../../commons/Steps/Steps';
import { InputField } from '../../commons/InputField/InputField';

import { useStyles } from './styles';


import MuseoSans from '../../fonts/MuseoSans-500.woff';
import { dispatchModalOpen } from '../../store/modal/actions';

const museo = {
  fontFamily: 'Museo Sans 500',
  fontStyle: 'normal',
  src: `
    local('Museo Sans 500'),
    url(${MuseoSans}) format('woff')
  `,
};

function CheckoutOrderProduct(props) {
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justify="space-between"
      style={{ marginBottom: '20px' }}
    >
      <Grid
        item
        lg={3}
        md={3}
        xs={3}
      >
        <img width={64} height={64} style={{ marginRight: '10px' }} src={props.src} alt={props.title} />
      </Grid>
      <Grid
        item
        lg={9}
        md={9}
        xs={9}
      >
        <Grid
          container
          direction="column"
          alignItems="flex-start"
          justify="space-between"
        >
          <Typography style={{ fontSize: '12px', lineHeight: '20px', ...museo }}>
            {props.title}
          </Typography>
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="space-between"
          >
            <Typography style={{
              color: '#888888', fontSize: '12px', lineHeight: '20px', ...museo,
            }}
            >
              { `Quantity: ${props.quantity}` }
            </Typography>
            <Typography style={{ fontSize: '12px', lineHeight: '20px', ...museo }}>
              $
              {props.price}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

let Checkout = withTheme((props) => {
  const classes = useStyles(props);
  const tablet = useMediaQuery(props.theme.breakpoints.down(1024));

  const [state, setState] = useState({
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    company: '',
    appartment: '',
    address: '',
    promote: true,
    discount: '',
  });

  const mockProducts = [
    {
      key: 'id-0',
      src: '/img/products/e-bikes/872426/001.jpg',
      title: 'Addmotor Hithot H1 Sport Mountain E-bike (green)',
      quantity: 1,
      price: '1699.99',
    },
    {
      key: 'id-1',
      src: '/img/products/e-bikes/872426/001.jpg',
      title: 'Civi Bikes Cheetah Vintage-Style Electric Fat Bike (Night Black)',
      quantity: 1,
      price: '2299.99',
    },
  ];

  const steps = [
    {
      key: 'id-0',
      isActive: true,
      text: 'Cart',
    },
    {
      key: 'id-1',
      isActive: true,
      text: 'Information',
    },
    {
      key: 'id-2',
      isActive: false,
      text: 'Shipping',
    },
    {
      key: 'id-3',
      isActive: false,
      text: 'Payment',
    },
  ];

  const onChange = (stateName) => (event) => {
    setState({ ...state, [stateName]: event.target.checked || event.target.value });
  };

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justify="center"
      className={classes.wrapper}
    >
      <Grid
        className={classes.container}
        container
        direction="column"
        alignItems="flex-start"
        justify="flex-start"
      >
        <Logo />
        <Steps className={classes.steps} items={steps} />
        <Grid
          className={classes.body}
          container
          direction={tablet ? 'column-reverse' : 'row'}
          alignItems={tablet ? 'center' : 'flex-start'}
          justify="center"
        >
          {
            tablet ? (
              <Grid />
            ) : null
          }
          <Grid
            item
            lg={tablet ? 12 : 7}
            md={tablet ? 12 : 7}
            xs={tablet ? 12 : 7}
          >
            <Grid
              className={classes.contact}
              container
              direction="row"
              alignItems="center"
              justify="center"
            >
              <Grid
                container
                direction="column"
                alignItems="center"
                justify="center"
              >
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  justify="space-between"
                >
                  <Typography style={{ lineHeight: '30px', fontSize: '20px', ...museo }}>
                    Contact information
                  </Typography>
                  <Typography style={{ fontSize: '14px', ...museo }}>
                    Already have an account?
                    <Typography component="span" style={{ color: '#8F8DE2', cursor: 'pointer' }} onClick={props.openLogin}> Log In</Typography>
                  </Typography>
                </Grid>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  justify="center"
                  spacing={2}
                >
                  <Grid
                    item
                    lg={6}
                    md={6}
                    xs={6}
                  >
                    <InputField
                      id="email"
                      type="email"
                      label="Email"
                      labelWidth={35}
                      onChange={onChange('email')}
                      value={state.email}
                    />
                  </Grid>
                  <Grid
                    item
                    lg={6}
                    md={6}
                    xs={6}
                  >
                    <InputField
                      id="phone"
                      type="tel"
                      label="Phone"
                      labelWidth={40}
                      onChange={onChange('phone')}
                      value={state.phone}
                    />
                  </Grid>
                  <Grid
                    item
                    lg={12}
                    md={12}
                    xs={12}
                  >
                    <FormControlLabel
                      control={<Checkbox color="default" checked={state.promote} onChange={onChange('promote')} value="" />}
                      label="Keep me up to date on news and exclusive offers"
                    />
                  </Grid>
                </Grid>
                <Grid
                  className={classes.shipping}
                  container
                  direction="row"
                  alignItems="center"
                  justify="space-between"
                >
                  <Typography style={{ lineHeight: '30px', fontSize: '20px', ...museo }}>
                    Shipping address
                  </Typography>
                </Grid>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  justify="center"
                  spacing={2}
                >
                  <Grid
                    item
                    lg={6}
                    md={6}
                    xs={6}
                  >
                    <InputField
                      id="firstName"
                      type="text"
                      label="First name"
                      labelWidth={65}
                      onChange={onChange('firstName')}
                      value={state.firstName}
                    />
                  </Grid>
                  <Grid
                    item
                    lg={6}
                    md={6}
                    xs={6}
                  >
                    <InputField
                      id="lastName"
                      type="text"
                      label="Last name"
                      labelWidth={65}
                      onChange={onChange('lastName')}
                      value={state.lastName}
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  justify="center"
                  spacing={2}
                >
                  <Grid
                    item
                    lg={6}
                    md={6}
                    xs={6}
                  >
                    <InputField
                      id="company"
                      type="text"
                      label="Company (optional)"
                      labelWidth={130}
                      onChange={onChange('company')}
                      value={state.company}
                    />
                  </Grid>
                  <Grid
                    item
                    lg={6}
                    md={6}
                    xs={6}
                  >
                    <InputField
                      id="appartment"
                      type="text"
                      label="Appartment, suite, etc (optional)"
                      labelWidth={210}
                      onChange={onChange('appartment')}
                      value={state.appartment}
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  justify="center"
                  spacing={2}
                >
                  <Grid
                    item
                    lg={12}
                    md={12}
                    xs={12}
                  >
                    <InputField
                      id="address"
                      type="text"
                      label="Address (start writing or select on the map)"
                      labelWidth={280}
                      onChange={onChange('company')}
                      value={state.address}
                      InputProps={{
                        endAdornment: (
                          <LocationOnIcon
                            style={{ color: '#888888' }}
                            onClick={() => props.openMap({ onChange: onChange('address'), className: classes.mapModal })}
                          />),
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid
                  className={classes.navigation}
                  container
                  direction="row"
                  alignItems="center"
                  justify="space-between"
                >
                  <Grid
                    item
                    lg={6}
                    md={6}
                    xs={6}
                  >
                    <Typography component="span" className={classes.editCart} style={museo}>
                      <ArrowBackIosIcon style={{ fontSize: '14px', lineHeight: '30px' }} />
                      Edit Cart
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    lg={6}
                    md={6}
                    xs={6}
                  >
                    <Grid
                      container
                      direction="row"
                      alignItems="center"
                      justify="flex-end"
                    >
                      <Button>Continue to Shipping</Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            lg={1}
            md={1}
            xs={1}
          />
          {
            !tablet ? (
              <Grid
                item
                lg={4}
                md={4}
                xs={4}
              >
                <Grid
                  container
                  direction="column"
                  alignItems="flex-start"
                  justify="flex-start"
                >
                  <Typography
                    style={{
                      fontSize: '16px',
                      lineHeight: '30px',
                      color: '#888888',
                      ...museo,
                    }}
                  >
                  Order Summary
                  </Typography>
                </Grid>
                {mockProducts.map((item) => <CheckoutOrderProduct {...item} />)}
                <Divider className={classes.divider} />
                <InputField
                  id="discount"
                  type="text"
                  label="Discount code"
                  labelWidth={110}
                  value={state.discount}
                  onChange={onChange('discount')}
                  FormControlProps={{
                    className: classes.dividerFormControl,
                  }}
                  LabelProps={{
                    classes: {
                      root: classes.discountLabel,
                    },
                  }}
                  InputProps={{
                    classes: {
                      input: classes.discountInput,
                      adornedEnd: classes.discountAdornedEnd,
                    },
                    endAdornment: (
                      <Button
                        style={museo}
                        className={classes.discountButton}
                        variant="text"
                      >
                      Apply
                      </Button>
                    ),
                  }}
                />
                <Divider className={classes.divider} />
                <Grid
                  container
                  direction="column"
                  alignItems="center"
                  justify="center"
                >
                  <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justify="space-between"
                  >
                    <Typography className={classes.afterDiscount} style={museo}>
                    Subtotal
                    </Typography>
                    <Typography className={classes.afterDiscount} style={museo}>
                    $3,999.98
                    </Typography>
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justify="space-between"
                  >
                    <Typography className={classes.afterDiscount} style={museo}>
                    Shipping
                    </Typography>
                    <Typography className={classes.afterDiscount} style={museo}>
                    Calculated at next step
                    </Typography>
                  </Grid>
                </Grid>
                <Divider className={classes.divider} />
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  justify="space-between"
                >
                  <Typography className={classes.total} style={museo}>
                  Total
                  </Typography>
                  <Typography className={classes.total} style={museo}>
                  $
                    {
                    mockProducts
                      .reduce((total, { price }) => (Number(total) + Number(price)).toFixed(2), 0)
                  }
                  </Typography>
                </Grid>
              </Grid>
            ) : null
          }
        </Grid>
      </Grid>
      <Box
        className={classes.footer}
      >
        <Typography style={{ color: '#888888', fontSize: '12px', ...museo }}>
          Copyright © 2019 Electra.
        </Typography>
      </Box>
    </Grid>
  );
});

Checkout = connect(null, {
  openMap: (inject) => dispatchModalOpen('map', inject),
})(Checkout);

export {
  Checkout,
  CheckoutOrderProduct,
};
