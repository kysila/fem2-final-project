/* eslint-disable no-underscore-dangle */
import axios from 'axios';

import {
  CREATE_WISHLIST, UPDATE_WISHLIST, DELETE_WISHLIST,
  DELETE_PRODUCT_FROM_WISHLIST, ADD_PRODUCT_AND_CREATE_WISHLIST,
  GET_WISHLIST,
} from '../../axios/endpoints';

export const ACTIONS = Object.seal({
  CREATE_WISHLIST: 'CREATE_WISHLIST',
  UPDATE_WISHLIST: 'UPDATE_WISHLIST',
  GET_WISHLIST_REQUESTED: 'GET_WISHLIST_REQUESTED',
  GET_WISHLIST_SUCCEEDED: 'GET_WISHLIST_SUCCEEDED',
  GET_WISHLIST_FAILED: 'GET_WISHLIST_FAILED',
  DELETE_WISHLIST: 'DELETE_WISHLIST',
  ADD_PRODUCT_AND_CREATE_WISHLIST: 'ADD_PRODUCT_AND_CREATE_WISHLIST',
  ADD_PRODUCT_AND_CREATE_WISHLIST_FAILED: 'ADD_PRODUCT_AND_CREATE_WISHLIST_FAILED',
  DELETE_PRODUCT_FROM_WISHLIST: 'DELETE_PRODUCT_FROM_WISHLIST',
});

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

export const getWishlistFromDB = () => (dispatch) => {
  dispatch({
    type: ACTIONS.GET_WISHLIST_REQUESTED,
  });
  axios.get(GET_WISHLIST)
    .then(({ data }) => {
      const arr = data.products.map((el) => el._id);
      const wishlistProducts = data.products.map((el) => ({
        itemNo: el.itemNo,
        name: el.name,
        itemImg: el.imageUrls[0],
        price: el.currentPrice,
        url: `/products/${el.itemNo}`,
        rating: el.rating,
        id: el._id,
      }));
      dispatch({
        type: ACTIONS.GET_WISHLIST_SUCCEEDED,
        wishlistProducts,
        arr,
      });
    })
    .catch((err) => {
      dispatch({
        type: ACTIONS.GET_WISHLIST_FAILED,
        payload: err,
      });
      // TODO: and do notification of the user
    });
};

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

export const addProductAndCreateWishlistInDB = (id) => (dispatch) => {
  axios.put(`${ADD_PRODUCT_AND_CREATE_WISHLIST}${id}`)
    .then(({ data }) => {
      const arr = data.products.map((el) => el._id);
      const wishlistProducts = data.products.map((el) => ({
        itemNo: el.itemNo,
        name: el.name,
        itemImg: el.imageUrls[0],
        price: el.currentPrice,
        url: `/products/${el.itemNo}`,
        rating: el.rating,
        id: el._id,
      }));
      dispatch({
        type: ACTIONS.ADD_PRODUCT_AND_CREATE_WISHLIST,
        wishlistProducts,
        arr,
      });
    })
    .catch((err) => {
      dispatch({
        type: ACTIONS.ADD_PRODUCT_AND_CREATE_WISHLIST_FAILED,
        payload: err,
      });
    });
};

export function deleteProductFromWishlist(payload) {
  return {
    type: ACTIONS.DELETE_PRODUCT_FROM_WISHLIST,
    result: payload,
  };
}

export function dispatchDeleteProductFromWishlist(payload) {
  return (dispatch) => {
    axios
      .delete(`${DELETE_PRODUCT_FROM_WISHLIST}${payload}`)
      .then(({ data }) => {
        console.log('%c⧭data', 'color: #e50000', data);
        const { products } = data;
        const arr = data.products.map((el) => el._id);
        dispatch(deleteProductFromWishlist({ products, arr }));
        dispatch(getWishlistFromDB({ products, arr }));
        // TODO: notification of the event
      })
      .catch((err) => {
        // TODO: create notification of the user
      });
  };
}
