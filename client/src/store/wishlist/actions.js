/* eslint-disable no-underscore-dangle */
import axios from 'axios';

import {
  DELETE_WISHLIST,
  DELETE_PRODUCT_FROM_WISHLIST, ADD_PRODUCT_AND_CREATE_WISHLIST,
  GET_WISHLIST,
} from '../../axios/endpoints';

export const ACTIONS = Object.seal({
  GET_WISHLIST_REQUESTED: 'GET_WISHLIST_REQUESTED',
  GET_WISHLIST_SUCCEEDED: 'GET_WISHLIST_SUCCEEDED',
  GET_WISHLIST_FAILED: 'GET_WISHLIST_FAILED',
  ADD_PRODUCT_AND_CREATE_WISHLIST_REQUESTED: 'ADD_PRODUCT_AND_CREATE_WISHLIST_REQUESTED',
  ADD_PRODUCT_AND_CREATE_WISHLIST_SUCCEEDED: 'ADD_PRODUCT_AND_CREATE_WISHLIST_SUCCEEDED',
  ADD_PRODUCT_AND_CREATE_WISHLIST_FAILED: 'ADD_PRODUCT_AND_CREATE_WISHLIST_FAILED',
  DELETE_PRODUCT_FROM_WISHLIST_REQUESTED: 'DELETE_PRODUCT_FROM_WISHLIST_REQUESTED',
  DELETE_PRODUCT_FROM_WISHLIST_SUCCEEDED: 'DELETE_PRODUCT_FROM_WISHLIST_SUCCEEDED',
  DELETE_PRODUCT_FROM_WISHLIST_FAILED: 'DELETE_PRODUCT_FROM_WISHLIST_FAILED',
  DELETE_WISHLIST_REQUESTED: 'DELETE_WISHLIST_REQUESTED',
  DELETE_WISHLIST_SUCCEEDED: 'DELETE_WISHLIST_SUCCEEDED',
  DELETE_WISHLIST_FAILED: 'DELETE_WISHLIST_FAILED',
});

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

export const addProductAndCreateWishlistInDB = (id) => (dispatch) => {
  dispatch({
    type: ACTIONS.ADD_PRODUCT_AND_CREATE_WISHLIST_REQUESTED,
  });
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
        type: ACTIONS.ADD_PRODUCT_AND_CREATE_WISHLIST_SUCCEEDED,
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

export const deleteProductFromWishlistDB = (id) => (dispatch) => {
  dispatch({
    type: ACTIONS.DELETE_PRODUCT_FROM_WISHLIST_REQUESTED,
  });
  axios.delete(`${DELETE_PRODUCT_FROM_WISHLIST}${id}`)
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
        type: ACTIONS.DELETE_PRODUCT_FROM_WISHLIST_SUCCEEDED,
        wishlistProducts,
        arr,
      });
    })
    .catch((err) => {
      dispatch({
        type: ACTIONS.GET_WISHLIST_FAILED,
        payload: err,
      });
    });
};

export const deleteWishlistFromDB = () => (dispatch) => {
  dispatch({
    type: ACTIONS.DELETE_WISHLIST_REQUESTED,
  });
  axios.delete(DELETE_WISHLIST)
    .then(({ data }) => {
      dispatch({
        type: ACTIONS.DELETE_WISHLIST_SUCCEEDED,
      });
    })
    .catch((err) => {
      dispatch({
        type: ACTIONS.DELETE_WISHLIST_FAILED,
        payload: err,
      });
    });
};
