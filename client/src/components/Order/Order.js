import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Typography, Grid, Box, Divider,
} from '@material-ui/core';
import { Header } from '../../commons/Header/Header/Header';
import { Footer } from '../../commons/Footer/Footer/Footer';
import { CheckoutOrderProduct } from '../Checkout';
import { useStyles } from '../Checkout/styles';
import MuseoSans from '../../fonts/MuseoSans-500.woff';

const museo = {
  fontFamily: 'Museo Sans 500',
  fontStyle: 'normal',
  src: `
    local('Museo Sans 500'),
    url(${MuseoSans}) format('woff')
  `,
};

export const Order = connect(({ cartReducer: { cart: { products } } }) => ({
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
}))((props) => {
  const classes = useStyles();
  const { id, discountCode } = useParams();

  const discount = {
    value: discountCode,
    variants: {
      KDT3X: 3,
      MFNM8: 5,
      B43T9: 10,
      BM2MB: 15,
      X4R9G: 20,
    },
  };

  const calculatePrice = () => {
    const fullPrice = props.products
      .reduce((total, { price, quantity }) => Number(total) + (Number(price) * quantity), 0);
    const percent = discount.variants[discount.value] || 0;

    return {
      fullPrice: fullPrice.toFixed(2),
      percent,
      discountedPrice: (fullPrice - (fullPrice * (percent / 100))).toFixed(2),
    };
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Header hideCart callCenter="+33 333-333-333" />
      <Grid
        item
        lg={11}
        md={11}
        xs={11}
      >
        <Typography variant="h4" style={{ marginTop: '50px' }}>
          Thank you for your purchase. Order #
          {id}
        </Typography>
        <Typography variant="h6" style={{ marginTop: '30px' }}>
          Order information was sent to your email.
        </Typography>
        <Box style={{ marginTop: '50px', textAlign: 'center' }}>
          {props.products.map((item) => <CheckoutOrderProduct {...item} />)}
        </Box>
        <Divider />
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
                calculatePrice().fullPrice
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
            calculatePrice().percent > 0 ? (
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
                    calculatePrice().percent
                  }
                  %
                </Typography>
              </Grid>
            ) : null
          }
        </Grid>
        <Divider />
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
              calculatePrice().percent > 0 ? (
                <React.Fragment>
                  <Typography component="span" className={classes.total} style={{ textDecoration: 'line-through', color: '#888888', ...museo }}>
                    $
                    {
                      calculatePrice().fullPrice
                    }
                  </Typography>
                  {' / '} {/* eslint-disable-line */}
                </React.Fragment>
              ) : null
            }
            $
            {
              calculatePrice().percent > 0
                ? calculatePrice().discountedPrice
                : calculatePrice().fullPrice
            }
          </Typography>
        </Grid>
      </Grid>
      <Footer />
    </Grid>
  );
});
