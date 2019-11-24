import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Button } from '@material-ui/core';
import { addProductAndCreateWishlistInDB, getWishlistFromDB } from '../../../store/wishlist/actions';
import { useStyles } from './style';

const SaveForLtrBtn = (props) => {
  const isAddedToWishlist = { inWishlist: false };
  const [state, setState] = useState({ ...isAddedToWishlist });

  const {
    id, addProductToWishlist, getWishlist, wishlist, user,
  } = props;

  const checkExistence = () => {
    if (wishlist && id) {
      // eslint-disable-next-line no-underscore-dangle
      const found = wishlist.some((element) => element === id);
      setState({ ...state, inWishlist: found });
    }
  };

  const addedToWishlist = () => {
    if (user && id) {
      addProductToWishlist(id);
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
    wishlist: state.wishlist.arr,
  };
}

export const SaveForLaterBtn = connect(putStateToProps, {
  addProductToWishlist: addProductAndCreateWishlistInDB,
  getWishlist: getWishlistFromDB,
})(SaveForLtrBtn);
