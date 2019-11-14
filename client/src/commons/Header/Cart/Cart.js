import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Container from '@material-ui/core/Container';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import {
  getCartFromDB,
  addProductToCart,
  getCartFromLS,
}
  from '../../../store/cart/actions';
import CartItem from './CartItem';
import SubsectionTitle from '../../../components/Mainpage/SubsectionTitle/SubsectionTitle';

import { useStyles } from './style';

const mapStateToProps = (state) => ({
  user: state.auth.user,
  cart: state.cartReducer.cart.products,
});

const Cart = (props) => {
  const classes = useStyles();
  const [cartIsOpen, setCartIsOpen] = useState(false);
  let cartStatus = ['No products are added in your cart'];
  let countOfProducts;
  let totalPrice = 0;
  let subTotalArray;

  useEffect(() => {
    if (props.user) {
      props.getCartFromDB();
    } else {
      const data = localStorage.getItem('cart');
      if (data) {
        const cartFromLS = JSON.parse(data);
        props.getCartFromLS(cartFromLS);
      }
    }
  }, [props.user]);

  if (props.cart.length) {
    cartStatus = props.cart.map((el) =>
      <CartItem
        key={el.product.itemNo}
        name={el.product.name}
        currentPrice={el.product.currentPrice}
        imgUrl={el.product.imageUrls[0]}
        count={el.cartQuantity}
        itemNo={el.product.itemNo}
        id={el.product._id}
        quantity={el.product.quantity}
      />
    )
    subTotalArray = props.cart.map((el) => el.product.currentPrice * el.cartQuantity);
    totalPrice = subTotalArray.reduce((sum, current) => sum + current, 0);
    countOfProducts = props.cart.length;
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        className={classes.basket}
        onClick={() => setCartIsOpen(true)}
      >
        <Box>
          <img src="/img/basket.svg" alt="Logo" />
          <div className={countOfProducts ? classes.circle : classes.not_circle}>
            {' '}
            {countOfProducts}
            {' '}
          </div>
        </Box>
      </Box>
      <Drawer
        anchor="right"
        className={classes.drawer}
        BackdropProps={{
          style: {
            background: 'linear-gradient(180deg, #6686FF 0%, #8F8DE2 100%)',
            opacity: '0.5',
          },
        }}
        classes={{
          paper: classes.paper,
        }}
        open={cartIsOpen}
        onClose={() => {
          setCartIsOpen(false);
        }}
      >
        <Container className={classes.cart_container}>
          <SubsectionTitle title="Your Cart" />
          { cartStatus }
          <Grid className={classes.price_block} container justify="space-between">
            <Grid item>
              <span className={classes.ship_text}>
                 FREE SHIPPING! Taxes calculated on next page.
              </span>
            </Grid>
            <Grid item>
              <span className={classes.subtotal_text}> Subtotal: $ </span>
              <span className={classes.subtotal_price}>
                {' '}
                {totalPrice.toFixed(2) }
                {' '}
              </span>
            </Grid>
          </Grid>
          <Grid className={classes.price_block} container justify="space-between">
            <Grid item classes={{ root: classes.btn_grey }}>
              <Button
                onClick={() => {
                  setCartIsOpen(false);
                }}
                fullWidth
                classes={{ root: classes.btn_grey }}>
                Continue Shopping
              </Button>
            </Grid>
            <Grid item>
              <Link to="/checkout">
                <Button fullWidth classes={{ root: classes.btn_main }}>
                  Checkout now
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Drawer>
    </React.Fragment>
  );
};

export default connect(mapStateToProps, {
  addProductToCart,
  getCartFromDB,
  getCartFromLS,
})(Cart);
