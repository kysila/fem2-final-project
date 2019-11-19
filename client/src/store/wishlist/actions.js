// eslint-disable-next-line no-unused-vars
import React from 'react';
import axios from 'axios';
import { ACTIONS } from './reducer';
import {
  CREATE_WISHLIST, UPDATE_WISHLIST, DELETE_WISHLIST,
  DELETE_PRODUCT_FROM_WISHLIST,
  GET_WISHLIST,
} from '../../axios/endpoints';
// TODO: CREATE_WISHLIST, UPDATE_WISHLIST,
// TODO: ADD_PRODUCT_AND_CREATE_WISHLIST, DELETE_PRODUCT_FROM_WISHLIST,

export function deleteWishlist(payload) {
  return {
    type: ACTIONS.DELETE_WISHLIST,
    payload,
  };
}

export function dispatchDeleteWishlist() {
  return (dispatch) => {
    axios
      .delete(DELETE_WISHLIST)
      .then((result) => {
        dispatch(deleteWishlist(result));
      })
      .catch((err) => {
        console.log('%c⧭ err.response.data', 'color: #00a3cc', err.response.data);
        // TODO: delete console.log() and do notification of the user
      });
  };
}

export function getWishlist(payload) {
  return {
    type: ACTIONS.GET_WISHLIST,
    payload,
  };
}

export function dispatchGetWishlist() {
  return (dispatch) => {
    axios
      .get(GET_WISHLIST)
      .then(({ data }) => {
        console.log('%c⧭ data', 'color: #aa00ff', data);
        dispatch(getWishlist(data));
      })
      .catch((err) => {
        dispatch(dispatchDeleteWishlist());
        console.log('%c⧭ err.response.data', 'color: #00a3cc', err);
        // TODO: delete console.log() and do notification of the user
      });
    //
  };
}

export function createWishlist(payload) {
  return {
    type: ACTIONS.CREATE_WISHLIST,
    payload,
  };
}

export function dispatchCreateWishlist(payload) {
  return (dispatch) => {
    axios
      .post(CREATE_WISHLIST, payload)
      .then(({ data }) => {
        dispatch(createWishlist(data));
        dispatch(dispatchGetWishlist());
      })
      .catch((err) => {
        console.log('%c⧭ err.response.data', 'color: #00a3cc', err.response.data);
        // TODO: delete console.log() and do notification of the user
      });
  };
}

export function addProductAndCreateWishlist(payload) {
  return {
    type: ACTIONS.ADD_PRODUCT_AND_CREATE_WISHLIST,
    payload,
  };
}

export function dispatchAddProductAndCreateWishlist(payload) {
  return (dispatch) => {
    axios
      .put(payload)
      .then(({ data }) => {
        dispatch(addProductAndCreateWishlist(data));
        dispatch(dispatchGetWishlist());
      })
      .catch((err) => {
        console.log('%c⧭ err.response.data', 'color: #00a3cc', err.response.data);
      });
  };
}
