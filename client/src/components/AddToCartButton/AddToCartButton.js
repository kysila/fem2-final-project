import React from 'react';

import Button from '@material-ui/core/Button';
import { BagIcon } from '../Icons/Icons';

import { handlerLocalStorage } from './script';


export const AddToCartButton = ({
  disabled, text, obj, user, addToCartFunc, actions, checkProduct, style, iconStyle,
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
        if (obj.quantity >= 1) {
          user
            ? addToCartFunc(`/cart/${obj._id}`)
            : handlerLocalStorage('cart', productsCart, obj.itemNo, productItem, actions, obj.quantity, checkProduct);
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
