import React, { useState, useEffect } from 'react';

import { Button } from '@material-ui/core';

import { useStyles } from './style';

export const SaveForLaterBtn = (props) => {
  const isAddedToWishlist = { inWishlist: false };
  const [state, setState] = useState({ ...isAddedToWishlist });

  const {
    id, addProductToWishlist, wishlist, user,
  } = props;

  const checkExistence = (idItem) => {
    const trueOrFalse = wishlist.some((element) => element === idItem);
    setState({ ...state, inWishlist: trueOrFalse });
  };

  const addedToWishlist = () => {
    if (user && wishlist && id) {
      checkExistence(id);
      addProductToWishlist(id);
    }
  };

  useEffect(() => {
    if (user && wishlist && id) {
      checkExistence(id);
    }
    // eslint-disable-next-line
  }, [user, wishlist]);

  const classes = useStyles();
  return (
    <Button onClick={addedToWishlist}>
      {state.inWishlist
        ? <span className={classes.buttonSaved}> Saved for later </span>
        : <span className={classes.button}> Save for later </span>}
    </Button>
  );
};
