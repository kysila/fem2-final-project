import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Container from '@material-ui/core/Container';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { setTotalPrice } from '../../../store/cart/cartReducer';
import CartItem from './CartItem';
import SubsectionTitle from '../../../components/Mainpage/SubsectionTitle/SubsectionTitle';
// eslint-disable-next-line import/named
import { useStyles } from './style';

const mapStateToProps = (state) => ({
  subTotal: state.cartReducer.subTotal,
  user: state.auth.user,
});

// try to get cart from LS


// const serialCart = JSON.stringify(cart);
// localStorage.setItem('cart', serialCart);
// / End
const cart = [
  {
    enabled: true,
    imageUrls: [
      '/img/products/e-bikes/2/001.jpg',
      '/img/products/e-bikes/2/002.jpg',
      '/img/products/e-bikes/2/003.jpg',
      '/img/products/e-bikes/2/004.jpg',
      '/img/products/e-bikes/2/005.jpg',
    ],
    cartQuantity: 1,
    quantity: 20,
    rating: 4.6,
    _id: '5db6fc32bfb42a414c724e7b',
    itemNo: '2',
    name: 'addmotor hithot h1 sport mountain e-bike',
    currentPrice: 1699.99,
    categories: 'e-bikes',
    maxSpeed: '25mph',
    chargingTime: '3-4 hrs',
    features: {
      motor: '500W',
      battery: '48V*10.4AH Samsung lithium cell batteries',
      brand: 'AddMotoR',
    },
    distance: '60 miles',
    description: '<p>The Addmotor Hithot H1 is a fun sporty electric mountain bike with exciting colors and an affordable price tag drawing its design inspiration from the classic German models. The massive 500-watt direct-drive brushless motor directly drives the rear wheel for plenty of torque and speed to power to easily power you over those steep hills. </p><p>Double suspension and stiff and durable alloy frame absorb bumps and provide a smooth, comfortable ride.</p><p>The large 5-inch lcd screen clearly displays vital information like battery charge level, speed, and trip distance and is equipped with a handy usb charging port for your phone and other devices. </p><p>The removable 48V 10.4Ah lithium battery can take you up to 60 miles on a single charge using level 1 assist.</p><p>The Hithot H1 is designed to fit riders with a height of 5’5”-6’6” and weighing close to 300 lbs, making it an ideal option for larger riders. </p>',
    color: 'green',
    shipping: '<div><ul><li>Free US shipping</li><li>Estimated Delivery Time:4-7 business days</li></ul><p>Addmotor takes pride in providing goods in perfect shape and functionality. In case of quality issues, contact us to receive replacement parts and assistance in getting the repair resolved. Addmotor does not allow to return the item because of the customer doesn’t like the product or if the customer’s body height is not appropriate for using the product. Please be sure to check the body height specifications in the description or contact us for more info.</p></div>',
    warranty: '<div><p>Addmotor provides the following warranty coverage on all their electric bikes:</p><ul><li class=\\bold-text\\>Technologies:2 Year Warranty </li><li class=\\bold-text\\>Motor and Battery:1 Year</li></ul><p>Addmotor’s goal is 100% customer satisfaction and treasures every relationship with every customer. So no matter what type of problems you have please do not hesitate to contact the Addmotor customer service team.</p><p>If your bike arrived damaged please take clear pictures and/or photos showing the damage and send to Addmotor at support@addmotor.com</p><p>If you experience any after-sale issues with your electric bike such as technology issues malfunctions damage etc or if you need help understanding how to use a feature please contact the Addmotor support team via email at support@addmotor.com</p></div>',
    date: '2019-10-28T14:33:22.372Z',
    __v: 0,
    '"battery"': ' "48V*10.4AH Samsung lithium cell batteries",',
    '"brand"': ' "AddMotoR"',
    '"motor"': ' "500W",',
  },
  {
    enabled: true,
    imageUrls: [
      '/img/products/e-bikes/773969/001.jpg',
      '/img/products/e-bikes/773969/002.jpg',
      '/img/products/e-bikes/773969/003.jpg',
      '/img/products/e-bikes/773969/004.jpg',
      '/img/products/e-bikes/773969/005.jpg',
      '/img/products/e-bikes/773969/006.jpg',
    ],
    cartQuantity: 2,
    quantity: 20,
    rating: 4.8,
    _id: '5db6fc84bfb42a414c724e7c',
    name: 'enzo 7-speed folding e-bike',
    currentPrice: 1849.99,
    maxSpeed: '20mph',
    chargingTime: '2-5 hrs',
    features: {
      Motor: '500-Watt',
      Battery: 'Panasonic 48V 11.6AH',
      Brand: 'Micargi',
      'Front Rear Lights': 'LED',
      Frame: 'Micargi oversized hi-ten steel',
      'Seat Post': 'Steel Chrome cruiser seat with springer',
      'Power Type': 'Pedal Assist with 5 levels of speed',
      Display: 'Bafang LCD',
      Brakes: 'Disc brake (Radius) Single Speed disk brake',
    },
    distance: '30 – 50 miles',
    description: '<div><p>This sleek glow-in-the-dark Italian ebike by Enzo is a breeze to use. When finished, fold and store it in its convenient carrying bag.</p><p>The controller displays speed, battery life and can operate at either full throttle or pedal-assist.</p><p>Powered by a state-of-the-art 36V10.4AH Lithium-Ion battery capable of cruising distances of 30-50 miles with speeds up to 20MPH, the Enzo effortlessly gets you where you want to go in style </p><p>The seat post doubles tire pump and the Shimano 7-speed derailleur enables you to pedal just like a standard bike.</p><p>The custom-designed mag rims are rust-resistant to keep your ebike working properly and looking great for years.</p><p>All Enzo ebikes come with a storage rack, storage bag, internal battery, titanium screws, glow in the dark paint, front and rear LED lights, disc brakes, and an alert bell all to keep you safe and in style.</p></div>,',
    categories: 'e-bikes',
    color: 'green',
    itemNo: '773969',
    shipping: '<div><ul><li>Free US shipping</li><li>Estimated Delivery Time:4-7 business days</li></ul><p>Enzo eBikes offers a 30-day satisfaction guarantee. If you are not completely satisfied with your order simply return the unused/unworn item(s) including all original tags and packaging at your expense within 30 days of purchase for a full refund.</p></div>',
    warranty: '<div><p>Every new Enzo eBike comes with a 2-year limited warranty. </p><p>Once your Enzo eBike is registered (http://www.enzoebike.com)with Enzo eBike LLC we provide each original retail purchaser a warranty against defects in materials and workmanship. </p></div>',
    date: '2019-10-28T14:34:44.896Z',
    __v: 0,
  },
];
const Cart = (props) => {
  const classes = useStyles();
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [cartStatus, setCartStatus] = useState(['No products are added in your cart']);

  let cartArrayFromLS = [];
  let cartArrayFromDB = [];

  let getCartFromDB;
  let getCartFromLS;
  let totalPrice;
  let subTotalArray;

  const cartRenderLS = (array) => {
    if (array) {
      return (
        array.map((el) => (
          <CartItem
            key={el.itemNo}
            name={el.name}
            currentPrice={el.currentPrice}
            imgUrl={el.imageUrls[0]}
            count={el.cartQuantity}
            itemNo={el.itemNo}
            id={el._id}
            quantity={el.quantity}
          />
        ))
      );
    }
    return 'No products are added in your cart';
  };

  const cartRenderDB = (array) => {
    if (array) {
      return (
        array.map((el) => (
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
        ))
      );
    }
    return 'No products are added in your cart';
  };

  const setSubTotal = (array) => {
    subTotalArray = array.map((el) => el.product.currentPrice * el.cartQuantity);
    totalPrice = subTotalArray.reduce((sum, current) => sum + current, 0);
    props.setTotalPrice(totalPrice);
  };

  const getCartAxios = () => {
    setCartIsOpen(true);
    if (props.user) {
      axios
        .get('/cart')
        .then((result) => {
          getCartFromDB = result.data.products;
        }).then(() => {
          cartArrayFromDB = cartRenderDB(getCartFromDB);
        })
        .then(() => {
          setCartStatus(cartArrayFromDB);
          setSubTotal(getCartFromDB);
        })
        .catch((err) => {
          console.log('Axios Cart Get error', err);
        });
    } else {
      getCartFromLS = JSON.parse(localStorage.getItem('cart'));

      if (getCartFromLS) {
        cartArrayFromLS = cartRenderLS(getCartFromLS);
        subTotalArray = getCartFromLS.map((el) => el.currentPrice * el.cartQuantity);
        setCartStatus(cartArrayFromLS);
        totalPrice = subTotalArray.reduce((sum, current) => sum + current, 0);
        props.setTotalPrice(totalPrice);
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
              <span className={classes.subtotal_text}> Subtotal: $ </span>
              <span className={classes.subtotal_price}>
                {' '}
                { props.subTotal.toFixed(2) }
                {' '}
              </span>
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
export default connect(mapStateToProps, { setTotalPrice })(Cart);
