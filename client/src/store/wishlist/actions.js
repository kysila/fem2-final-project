// eslint-disable-next-line no-unused-vars
import React from 'react';
import axios from 'axios';
import { ACTIONS } from './reducer';
import {
  CREATE_WISHLIST, UPDATE_WISHLIST, DELETE_WISHLIST,
  DELETE_PRODUCT_FROM_WISHLIST,
  GET_WISHLIST,
} from '../../axios/endpoints';

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
      .then(({ data }) => {
        dispatch(deleteWishlist(data));
      })
      .catch((err) => {
        // TODO: create notification of the user
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
        dispatch(getWishlist(data));
        // TODO: notification of the event
      })
      .catch((err) => {
        dispatch(dispatchDeleteWishlist());
        // TODO: and do notification of the user
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
        // TODO: notification of the event
      })
      .catch((err) => {
        // TODO: create notification of the user
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
        // TODO: notification of the event
      })
      .catch((err) => {
        // TODO: create notification of the user
      });
  };
}
