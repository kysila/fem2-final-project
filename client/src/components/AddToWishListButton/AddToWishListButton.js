/* eslint-disable react/jsx-indent */
import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { HeartIcon, HeartIconFilled } from '../Icons/Icons';
import { ADD_PRODUCT_AND_CREATE_WISHLIST } from '../../axios/endpoints';

export const AddToWishListButton = ({
  obj, id, user, className, iconStyle, iconStyleChosen,
  addProductToWishlist, wishlist,
}) => {
  const isAddedToWishlist = { inWishlist: false };
  const [state, setState] = useState({ ...isAddedToWishlist });

  let idProduct;
  if (id) {
    idProduct = id;
  } else if (obj && obj.id) {
    idProduct = obj.id;
    // eslint-disable-next-line no-underscore-dangle
  } else if (obj && obj._id) {
    // eslint-disable-next-line no-underscore-dangle
    idProduct = obj._id;
  }

  const checkExistence = () => {
    if (wishlist && wishlist.products && idProduct) {
      const { products } = wishlist;
      // eslint-disable-next-line no-underscore-dangle
      const found = products.flat(Infinity).some((element) => element._id === idProduct);
      setState({ ...state, inWishlist: found });
    }
  };

  const addedToWishlist = () => {
    if (user && idProduct) {
      if (idProduct) {
        const url = `${ADD_PRODUCT_AND_CREATE_WISHLIST}${idProduct}`;
        addProductToWishlist(url);
        checkExistence();
      }
    }
  };

  useEffect(() => {
    if (user && idProduct) {
      checkExistence();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, obj, idProduct]);

  return (
    <Button
      className={className}
      onClick={addedToWishlist}
    >
      {state.inWishlist ? (
        <HeartIconFilled
          color="action"
          className="icon"
          style={iconStyleChosen}
        />
      ) : (
          <HeartIcon
            color="action"
            className="icon"
            style={iconStyle}
          />
        )}
    </Button>
  );
};
