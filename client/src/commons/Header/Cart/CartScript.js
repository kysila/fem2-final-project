import React from 'react';
import { connect } from 'react-redux';
import { replaceCart } from '../../../store/cart/actions';

const mapStateToProps = (state) => ({
  user: state.auth.user,
  cart: state.cartReducer.cart.products,
});

const replaceCartFunction = (props) => {
  const newCart = {};
  newCart.products = props.cart.map((el) => (
    {
      cartQuantity: el.cartQuantity,
      product: el.product._id,
    }
  ));
  localStorage.removeItem('cart');
  props.replaceCart(newCart);
};

export default connect(mapStateToProps, { replaceCart })(replaceCartFunction);
