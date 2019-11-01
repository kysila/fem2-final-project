import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import { makeStyles, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Container from '@material-ui/core/Container';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { getProductsToBuy, deleteProductsToBuy } from '../../../store/cart/cartReducer';
import CartItem from './CartItem';
import SubsectionTitle from '../../../components/Mainpage/SubsectionTitle';


const mapStateToProps = (state) => ({
  productsToBuy: state.cartReducer.productsToBuy,
  countOfProducts: state.cartReducer.countOfProducts,
  user: state.auth.user,
});

// try to get cart from LS
const cart = [
  {
    imageUrls: ['img/products/e-bikes/872426/003.jpg', 'img/products/e-bikes/773969/002.jpg'],
    name: 'addmotor hithot h1 sport mountain e-bike',
    itemNo: 773969,
    currentPrice: 1899,
    count: 1,
  },
  {
    imageUrls: ['img/products/e-bikes/773969/006.jpg', 'img/products/e-bikes/773969/002.jpg'],
    name: 'sport mountain e-bike',
    itemNo: 872426,
    currentPrice: 3299,
    count: 2,
  },
];

const serialCart = JSON.stringify(cart);
localStorage.setItem('cart', serialCart);
// / End

const useStyles = makeStyles(() => createStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  drawer: {
   },
  paper: {
    width: '60%',
    background: '#f4efff',
    fontSize: '20px',
    color: '#9c80ff',
  },
  basket: {
    position: 'relative',
    borderRadius: '50%',
    border: '1px solid #6A86E8',
    width: '50px',
    height: '50px',
    textAlign: 'center',
    paddingTop: '14px',
  },
  circle: {
    backgroundColor: ' #6A86E8 ',
    borderRadius: '50%',
    height: '15px',
    width: '15px',
    position: 'absolute',
    top: '0px',
    right: '0px',
    fontSize: '11px',
    color: ' #FFFFFF ',
  },
  cart_container: {
    paddingTop: '3%',
    paddingRight: '6%',
    padding: '3%',
    background: '#FFFFFF',
    margin: '2%',
    borderRadius: '10px',
    boxShadow: '3px 6px 5px -1px rgba(185,163,196,0.72)',
    overflowX: 'hidden',
  },
  ship_text: {
    fontSize: '12px',
    color: '#888888',
    lineHeight: '20px',
    letterSpacing: '-0.02em',
  },
  subtotal_text: {
    fontSize: '20px',
    lineHeight: '20px',
    textTransform: ' capitalize',
    color: '#444444',
  },
  subtotal_price: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#444444',
  },
  price_block: {
    justify: 'space-between',
    paddingTop: '2%',
  },
  btn_grey: {
    background: '#F8F8F8 !important',
    color: '#6A86E8 !important',
    borderRadius: '4px',
    textAlign: 'center',
    width: '200px',
  },
  btn_main: {
    width: '200px',
  },

}));

const Cart = (props) => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const classes = useStyles();
  let cartArray = [];

  if (props.user === null) {
    const getCart = JSON.parse(localStorage.getItem('cart'));
    cartArray = getCart.map((el) => (
      <CartItem
        name={el.name}
        currentPrice={el.currentPrice}
        imgUrl={el.imageUrls[0]}
        count={el.count}
        id={el.itemNo}
      />
    ));
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        className={classes.basket}
        onClick={() => {
          setCartIsOpen(true);
        }}
      >
        <Box>
          <img src="/img/basket.svg" alt="Logo" />
          <div className={classes.circle}>{props.countOfProducts}</div>
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
          {cartArray}

          <Grid className={classes.price_block} container justify="space-between">
            <Grid item>
              {/* eslint-disable-next-line max-len */}
              <span className={classes.ship_text}>FREE SHIPPING! Taxes calculated on next page.</span>
            </Grid>
            <Grid item>
              <span className={classes.subtotal_text}> Subtotal:</span>
              <span className={classes.subtotal_price}> $3,999.98 </span>
            </Grid>
          </Grid>
          <Grid className={classes.price_block} container justify="space-between">
            <Grid item classes={{ root: classes.btn_grey }}>

              <Button fullWidth classes={{ root: classes.btn_grey }}>
                Continue Shopping
              </Button>
            </Grid>
            <Grid item>
              <Button fullWidth classes={{ root: classes.btn_main }}>
                CheCkout now
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Drawer>
    </React.Fragment>
  );
};
// eslint-disable-next-line max-len
export default connect(mapStateToProps, { getProductsToBuy, deleteProductsToBuy })(Cart);
