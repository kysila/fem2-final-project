/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-indent */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { HeartIcon, HeartIconFilled } from '../Icons/Icons';

const AddToWishListBtn = ({
  obj, id, user, className, iconStyle, iconStyleChosen,
  addProductToWishlist, wishlist,
}) => {
  const [state, setState] = useState({ inWishlist: false });

  let idProduct;
  if (id) {
    idProduct = id;
  } else if (obj.id) {
    idProduct = obj.id;
    // eslint-disable-next-line no-underscore-dangle
  } else if (obj._id) {
    // eslint-disable-next-line no-underscore-dangle
    idProduct = obj._id;
  }

  const checkExistence = (idItem) => {
    const trueOrFalse = wishlist.some((element) => element === idItem);
    setState({ ...state, inWishlist: trueOrFalse });
  };

  const addedToWishlist = () => {
    if (user && wishlist && idProduct) {
      checkExistence(idProduct);
      if (!state.inWishlist) {
        addProductToWishlist(idProduct);
      }
    }
  };

  useEffect(() => {
    if (user && wishlist && idProduct) {
      checkExistence(idProduct);
    }
    // eslint-disable-next-line
  }, [user, obj, idProduct, wishlist]);

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

function putStateToProps(state) {
  return {
    wishlist: state.wishlist.arr,
  };
}

export const AddToWishListButton = connect(putStateToProps)(AddToWishListBtn);
