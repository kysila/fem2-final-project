import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { HeartIcon } from '../Icons/Icons';
import { dispatchAddProductAndCreateWishlist, dispatchGetWishlist } from '../../store/wishlist/actions';
import { ADD_PRODUCT_AND_CREATE_WISHLIST } from '../../axios/endpoints';

const AddToWishListBtn = ({
  obj, user, className, iconStyle, iconStyleChosen,
  addProductToWishlist, cart, getWishlist, wishlist,
}) => {
  const [state, setState] = useState({ inWishlist: true });

  const addedToWishlist = () => {
    if (user) {
      const { _id } = obj;
      const url = `${ADD_PRODUCT_AND_CREATE_WISHLIST}${_id}`;
      addProductToWishlist(url);
      setState({ ...state, inWishlist: true });
    }
  };

  // const { inWishlist } = state;
  let styleOfWishlistIcon;

  // useEffect(() => {
  //   if (inWishlist) {
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //     styleOfWishlistIcon = iconStyleChosen;
  //     console.log('%c⧭state', 'color: #00e600', state);
  //   } else {
  //     styleOfWishlistIcon = iconStyle;
  //     console.log('%c⧭state', 'color: #00e600', state);
  //   }
  // }, [inWishlist]);

  if (state.inWishlist) {
    styleOfWishlistIcon = iconStyleChosen;
  } else {
    styleOfWishlistIcon = iconStyle;
  }

  // useEffect(() => {
  //   if (user) {
  //     getWishlist();
  //   }
  //   // return () => {}
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [wishlist, user]);

  return (
    <Button
      className={className}
      onClick={addedToWishlist}
    >
      <HeartIcon
        color="action"
        className="icon"
        style={styleOfWishlistIcon}
      />
    </Button>
  );
};

function putStateToProps(state) {
  return {
    wishlist: state.wishlist.wishlist,
  };
}

function putActionsToProps(dispatch) {
  return {
    addProductToWishlist: (url) => dispatch(dispatchAddProductAndCreateWishlist(url)),
    getWishlist: () => dispatch(dispatchGetWishlist()),
  };
}

export const AddToWishListButton = connect(putStateToProps, putActionsToProps)(AddToWishListBtn);
