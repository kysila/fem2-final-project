import React, { useState } from 'react';
import {
  Grid, Typography, Button, Divider, Box, useMediaQuery, withTheme,
} from '@material-ui/core';
import {
  Route, Switch, Redirect, withRouter,
} from 'react-router-dom';
import { Logo } from '../../commons/Logo/Logo';
import { Steps } from '../../commons/Steps/Steps';
import { InputField } from '../../commons/InputField/InputField';
import { Checkout } from './Checkout';
import { Shipping } from './Shipping';
import { Payment } from './Payment';
import { CheckoutOrderProduct } from './CheckoutOrderProduct';
import { ShowOrderSummary } from './ShowOrderSummary';
import { useStyles } from './styles';


import MuseoSans from '../../fonts/MuseoSans-500.woff';

const museo = {
  fontFamily: 'Museo Sans 500',
  fontStyle: 'normal',
  src: `
    local('Museo Sans 500'),
    url(${MuseoSans}) format('woff')
  `,
};

const CheckoutProcess = withRouter(withTheme((props) => {
  const classes = useStyles(props);
  const tablet = useMediaQuery(props.theme.breakpoints.down(1024));
  const mobile = useMediaQuery(props.theme.breakpoints.down(768));

  const [state, setState] = useState({
    discount: {
      value: '',
      error: null,
    },
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
      isActive: props.location.pathname === '/checkout/shipping' || props.location.pathname === '/checkout/payment',
      text: 'Shipping',
    },
    {
      key: 'id-3',
      isActive: props.location.pathname === '/checkout/payment',
      text: 'Payment',
    },
  ];

  const onChange = (stateName) => (event) => {
    setState({
      ...state,
      [stateName]: {
        value: event.target.checked || event.target.value,
        error: null,
      },
    });
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
          direction={tablet ? 'column' : 'row'}
          alignItems={tablet && !mobile ? 'center' : mobile ? null : 'flex-start'}
          justify="center"
        >
          {
            tablet ? (
              <ShowOrderSummary products={mockProducts} DiscountProps={{ onChange: onChange('discount'), ...state.discount }} />
            ) : null
          }
          <Grid
            item
            lg={tablet ? 12 : 7}
            md={tablet ? 12 : 7}
            xs={tablet ? 12 : 7}
          >
            { /* https://reacttraining.com/react-router/web/api/Switch */ }
            { /* https://tylermcginnis.com/react-router-nested-routes/ */ }
            <Route component={() => (
              <Switch>
                <Route exact path="/checkout/info">
                  <Checkout />
                </Route>
                <Route exact path="/checkout/shipping">
                  <Shipping />
                </Route>
                <Route exact path="/checkout/payment">
                  <Payment />
                </Route>
                <Redirect to="/checkout/info" />
              </Switch>
            )}
            />
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
                  value={state.discount.value}
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
                      $
                      {
                        mockProducts
                          .reduce((total, { price }) => (Number(total) + Number(price))
                            .toFixed(2), 0)
                      }
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
}));

export {
  CheckoutProcess as Checkout,
  CheckoutOrderProduct,
};
