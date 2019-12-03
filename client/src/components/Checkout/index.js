import React, { useState } from 'react';
import { connect } from 'react-redux';
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

const mapStateToProps = ({ cartReducer: { cart: { products } } }) => ({
  products: products.map(({
    cartQuantity: quantity,
    product: {
      name: title,
      imageUrls: [src],
      currentPrice: price,
      _id: key,
    },
  }) => ({
    key, src, title, price, quantity,
  })),
});

const CheckoutProcess = connect(mapStateToProps)(withRouter(withTheme((props) => {
  const classes = useStyles(props);
  const tablet = useMediaQuery(props.theme.breakpoints.down(1024));
  const mobile = useMediaQuery(props.theme.breakpoints.down(768));

  const [discount, setDiscount] = useState({
    value: '',
    variants: {
      KDT3X: 3,
      MFNM8: 5,
      B43T9: 10,
      BM2MB: 15,
      X4R9G: 20,
    },
    error: null,
  });

  const [discountApplied, setApplied] = useState(false);

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
      src: '/checkout/info',
    },
    {
      key: 'id-2',
      isActive: props.location.pathname === '/checkout/shipping' || props.location.pathname === '/checkout/payment',
      text: 'Shipping',
      src: props.location.pathname === '/checkout/payment' || '/checkout/shipping',
    },
    {
      key: 'id-3',
      isActive: props.location.pathname === '/checkout/payment',
      text: 'Payment',
      src: props.location.pathname === '/checkout/payment' || '/checkout/payment',
    },
  ];

  const calculatePrice = () => {
    const fullPrice = props.products
      .reduce((total, { price, quantity }) => Number(total) + (Number(price) * quantity), 0);
    const percent = discount.variants[discount.value] || 0;

    return {
      discountApplied,
      fullPrice: fullPrice.toFixed(2),
      percent,
      discountedPrice: discountApplied
        ? (fullPrice - (fullPrice * (percent / 100))).toFixed(2)
        : null,
    };
  };

  const calculated = calculatePrice();

  const changeDiscount = ({ target: { value } }) => {
    setDiscount({
      ...discount,
      value,
    });
    setApplied(false);
  };

  if (!props.products || !props.products.length) {
    return (
      <Redirect to="/" />
    );
  }

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
              <ShowOrderSummary
                products={props.products}
                calculatedPrice={calculated}
                applyDiscountHandler={() => setApplied(true)}
                DiscountProps={{
                  onChange: changeDiscount,
                  value: discount.value,
                }}
              />
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
            <Route>
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
            </Route>
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
                {props.products.map((item) => <CheckoutOrderProduct {...item} />)}
                <Divider className={classes.divider} />
                <InputField
                  id="discount"
                  type="text"
                  label="Discount code"
                  labelWidth={110}
                  value={discount.value}
                  onChange={changeDiscount}
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
                        onClick={() => {
                          setApplied(true);
                          localStorage.setItem('/checkout/discount', discount.value);
                        }}
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
                        calculated.fullPrice
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
                      $0.00
                    </Typography>
                  </Grid>
                  {
                    calculated.percent > 0 && discountApplied ? (
                      <Grid
                        container
                        direction="row"
                        alignItems="center"
                        justify="space-between"
                      >
                        <Typography className={classes.afterDiscount} style={museo}>
                          Discount
                        </Typography>
                        <Typography className={classes.afterDiscount} style={museo}>
                          {
                            calculated.percent
                          }
                          %
                        </Typography>
                      </Grid>
                    ) : null
                  }
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
                    {
                      discountApplied && calculated.percent > 0 ? (
                        <React.Fragment>
                          <Typography component="span" className={classes.total} style={{ textDecoration: 'line-through', color: '#888888', ...museo }}>
                            $
                            {
                              calculated.fullPrice
                            }
                          </Typography>
                          {' / '} {/* eslint-disable-line */}
                        </React.Fragment>
                      ) : null
                    }
                    $
                    {
                      discountApplied && calculated.percent > 0
                        ? calculated.discountedPrice
                        : calculated.fullPrice
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
})));

export {
  CheckoutProcess as Checkout,
  CheckoutOrderProduct,
};
