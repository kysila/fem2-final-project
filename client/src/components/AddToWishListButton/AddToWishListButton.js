/* eslint-disable react/jsx-indent */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { HeartIcon, HeartIconFilled } from '../Icons/Icons';
import { dispatchAddProductAndCreateWishlist, dispatchGetWishlist } from '../../store/wishlist/actions';
import { ADD_PRODUCT_AND_CREATE_WISHLIST } from '../../axios/endpoints';

export const AddToWishListButton = ({
  obj, user, className, iconStyle, iconStyleChosen,
  addProductToWishlist, wishlist,
}) => {
  const isAddedToWishlist = { inWishlist: false };
  const [state, setState] = useState({ ...isAddedToWishlist });

  let id;
  if (obj && obj.id) {
    id = obj.id;
  }
  // eslint-disable-next-line no-underscore-dangle
  if (obj && obj._id) {
    // eslint-disable-next-line no-underscore-dangle
    id = obj._id;
  }

  const checkExistence = () => {
    if (wishlist && wishlist.products && obj) {
      const { products } = wishlist;
      // eslint-disable-next-line no-underscore-dangle
      const found = products.flat(Infinity).some((element) => element._id === id);
      setState({ ...state, inWishlist: found });
    }
  };

  const addedToWishlist = () => {
    if (user && obj) {
      if (id) {
        const url = `${ADD_PRODUCT_AND_CREATE_WISHLIST}${id}`;
        addProductToWishlist(url);
        checkExistence();
      }
    }
  };

  useEffect(() => {
    if (user) {
      // getWishlist();
      checkExistence();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, obj]);

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

// function putStateToProps(state) {
//   return {
//     wishlist: state.wishlist.wishlist,
//   };
// }

// function putActionsToProps(dispatch) {
//   return {
//     addProductToWishlist: (url) => dispatch(dispatchAddProductAndCreateWishlist(url)),
//     // getWishlist: () => dispatch(dispatchGetWishlist()),
//   };
// }

// export const AddToWishListButton = connect(null, putActionsToProps)(AddToWishListBtn);
