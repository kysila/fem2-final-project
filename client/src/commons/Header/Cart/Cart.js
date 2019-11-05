import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Container from '@material-ui/core/Container';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { getProductsToBuy, deleteProductsToBuy } from '../../../store/cart/cartReducer';
import CartItem from './CartItem';
import SubsectionTitle from '../../../components/Mainpage/SubsectionTitle';
// eslint-disable-next-line import/named
import { useStyles } from './style';

const mapStateToProps = (state) => ({
  productsToBuy: state.cartReducer.productsToBuy,
  countOfProducts: state.cartReducer.countOfProducts,
  user: state.auth.user,
});

// try to get cart from LS
const cart = [
  {
    imageUrls: ['img/products/e-bikes/872426/001.jpg', 'img/products/e-bikes/773969/002.jpg'],
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

const Cart = (props) => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [cartStatus, setCartStatus] = useState(['No products are added in your cart']);
  const classes = useStyles();

  let cartArrayFromLS = [];
  let cartArrayFromDB = [];

  let getCartFromDB;
  let getCartFromLS;
  const cartRender = (array) => {
    if (array) {
      return (
        array.map((el) => (
          <CartItem
            key={el.itemNo}
            name={el.name}
            currentPrice={el.currentPrice}
            imgUrl={el.imageUrls[0]}
            count={el.count}
            id={el.itemNo}
          />
        ))
      );
    }
    return 'No products are added in your cart';
  };

  const getCartAxios = () => {
    setCartIsOpen(true);
    if (props.user) {
      axios
        .get('/cart')
        .then((result) => {
          getCartFromDB = result.data.products;
        }).then(() => {
          cartArrayFromDB = cartRender(getCartFromDB);
        })
        .then(() => {
          setCartStatus(cartArrayFromDB);
        })
        .catch((err) => {
          console.log('Axios Cart Get error', err);
        });
    } else {
      getCartFromLS = JSON.parse(localStorage.getItem('cart'));

      if (getCartFromLS) {
        cartArrayFromLS = cartRender(getCartFromLS);
        setCartStatus(cartArrayFromLS);
      }
    }
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        className={classes.basket}
        onClick={getCartAxios}
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
          { cartStatus }
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
                Checkout now
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
