import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { HeartIcon } from '../Icons/Icons';
import { dispatchAddProductAndCreateWishlist, dispatchGetWishlist } from '../../store/wishlist/actions';
import { ADD_PRODUCT_AND_CREATE_WISHLIST } from '../../axios/endpoints';

const AddToWishListBtn = ({
  obj, user, className, iconStyle, iconStyleChosen,
  addProductToWishlist, getWishlist, wishlist,
}) => {
  const isAddedToWishlist = { inWishlist: false };
  const [state, setState] = useState({ ...isAddedToWishlist });

  const checkExistence = () => {
    if (wishlist && wishlist.products && obj) {
      const { products } = wishlist;
      if (obj._id) {
        const { _id } = obj;
        const found = products.flat(Infinity).some((element) => element._id === _id);
        setState({ ...state, inWishlist: found });
      }
      if (obj.id) {
        const { id } = obj;
        // eslint-disable-next-line no-underscore-dangle
        const found = products.flat(Infinity).some((element) => element._id === id);
        setState({ ...state, inWishlist: found });
      }
    }
  };

  const addedToWishlist = () => {
    if (user && obj) {
      if (obj._id) {
        const { _id } = obj;
        const url = `${ADD_PRODUCT_AND_CREATE_WISHLIST}${_id}`;
        addProductToWishlist(url);
        checkExistence();
      }
      if (obj.id) {
        const { id } = obj;
        const url = `${ADD_PRODUCT_AND_CREATE_WISHLIST}${id}`;
        addProductToWishlist(url);
        checkExistence();
      }
    }
  };

  useEffect(() => {
    if (user) {
      getWishlist();
      checkExistence();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, obj]);

  return (
    <Button
      className={className}
      onClick={addedToWishlist}
    >
      <HeartIcon
        color="action"
        className="icon"
        style={state.inWishlist ? iconStyleChosen : iconStyle}
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
