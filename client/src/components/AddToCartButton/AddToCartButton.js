import React from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import { BagIcon } from '../Icons/Icons';

import { cartSnackbar } from '../../store/cart/actions';
import { handlerLocalStorage } from './script';

const mapStateToProps = (store) => ({
  cart: store.cartReducer.cart,
});


const AddToCartButton = ({
  // eslint-disable-next-line no-shadow
  disabled, text, obj, user, addToCartFunc, actions, checkProduct, cartSnackbar, style, iconStyle,
}) => {
  const productItem = {
    cartQuantity: 1,
    product: obj,
  };

  const productsCart = {
    products: [
      productItem,
    ],
  };

  return (
    <Button
      disabled={disabled}
      className="addToCardBtn"
      style={style}
      onClick={(e) => {
        e.preventDefault();
        if (obj.quantity >= 1) {
          if (user) {
            addToCartFunc(`/cart/${obj._id}`);
          } else {
            handlerLocalStorage('cart', productsCart, obj.itemNo, productItem, actions, obj.quantity, checkProduct);
            cartSnackbar();
          }
        }
      }}
    >
      <BagIcon
        style={iconStyle}
      />
      {text}
    </Button>
  );
};

export default connect(mapStateToProps, { cartSnackbar })(AddToCartButton);