import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Button } from '@material-ui/core';
import { dispatchAddProductAndCreateWishlist, dispatchGetWishlist } from '../../../store/wishlist/actions';

import { ADD_PRODUCT_AND_CREATE_WISHLIST } from '../../../axios/endpoints';
import { useStyles } from './style';

const SaveForLtrBtn = (props) => {
  const isAddedToWishlist = { inWishlist: false };
  const [state, setState] = useState({ ...isAddedToWishlist });

  const {
    id, addProductToWishlist, getWishlist, wishlist, user,
  } = props;

  const checkExistence = () => {
    if (wishlist && wishlist.products && id) {
      const { products } = wishlist;

      // eslint-disable-next-line no-underscore-dangle
      const found = products.flat(Infinity).some((element) => element._id === id);
      setState({ ...state, inWishlist: found });
    }
  };

  const addedToWishlist = () => {
    if (user && id) {
      const url = `${ADD_PRODUCT_AND_CREATE_WISHLIST}${id}`;
      addProductToWishlist(url);
      checkExistence();
    }
  };

  useEffect(() => {
    if (user) {
      getWishlist();
      checkExistence();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const classes = useStyles();
  return (
    <Button onClick={addedToWishlist}>
      {state.inWishlist
        ? <span className={classes.buttonSaved}> Saved for later </span>
        : <span className={classes.button}> Save for later </span>}
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

export const SaveForLaterBtn = connect(putStateToProps, putActionsToProps)(SaveForLtrBtn);
