import axios from 'axios';
import React from 'react';

// ACTIONS WITH OTHER FILTERS
export const GET_PRODUCTS_REQUESTED = 'GET_PRODUCTS_REQUESTED';
export const GET_PRODUCTS_SUCCEEDED = 'GET_PRODUCTS_SUCCEEDED';
export const GET_PRODUCTS_FAILED = 'GET_PRODUCTS_FAILED';


// action:
export const getProducts = (endpoint) => (dispatch) => {

  dispatch({
    type: GET_PRODUCTS_REQUESTED,
  });
  axios.get(endpoint)
    .then((data) => {
      const allProducts = data.data.products.map((el) => ({
        itemNo: el.itemNo,
        name: el.name,
        itemImg: el.imageUrls[0],
        price: el.currentPrice,
        url: `/products/${el.itemNo}`,
        rating: el.rating,
      }));
      dispatch({
        type: GET_PRODUCTS_SUCCEEDED,
        allProducts,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_PRODUCTS_FAILED,
        payload: err,
      });
    });
};
