import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import { makeStyles, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Container from '@material-ui/core/Container';

import { getProductsToBuy, deleteProductsToBuy } from '../../store/cart/cartReducer';
import CartItem from './CartItem';
import SubsectionTitle from '../../components/Mainpage/SubsectionTitle';

const mapStateToProps = (state) => ({
  productsToBuy: state.cartReducer.productsToBuy,
  countOfProducts: state.cartReducer.countOfProducts,
});

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
    // paddingRight: '2%',
    // paddingTop: '2%',
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
}));

const Cart = (props) => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Box className={classes.basket} onClick={() => { setCartIsOpen(true); }}>
        <Link to="#">
          <img src="img/basket.svg" alt="Logo" />
          <div className={classes.circle}>{props.countOfProducts}</div>
        </Link>
      </Box>
      <Drawer
        anchor="right"
        className={classes.drawer}
        classes={{
          paper: classes.paper,
        }}
        open={cartIsOpen}
        onClose={() => {
          setCartIsOpen(false);
        }}
      >
        <Container>
          <SubsectionTitle title={'Your Cart'}/>
          <CartItem />
        </Container>
      </Drawer>

    </React.Fragment>
  );
};
// eslint-disable-next-line max-len
export default connect(mapStateToProps, { getProductsToBuy, deleteProductsToBuy })(Cart);
