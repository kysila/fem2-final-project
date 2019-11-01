import React from 'react';

const GET_PRODUCTSTOBUY = 'GET_PRODUCTSTOBUY';
const DELETE_PRODUCTSTOBUY = 'DELETE_PRODUCTSTOBUY';
const SET_COUNTOFPRODUCTS = 'SET_COUNTOFPRODUCTS';

const initialState = {
  productsToBuy: [],
  countOfProducts: 0,
};

// ACTIONS
export const getProductsToBuy = (payload) => ({
  type: GET_PRODUCTSTOBUY,
  payload,
});

export const deleteProductsToBuy = (payload) => ({
  type: DELETE_PRODUCTSTOBUY,
  payload,
});

export const setCountOfProducts = (payload) => ({
  type: DELETE_PRODUCTSTOBUY,
  payload,
});

// REDUCER
function cartReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_PRODUCTSTOBUY:
      return {
        ...state,
        productsToBuy: payload,
      };
    case DELETE_PRODUCTSTOBUY:
      return {
        ...state,
        productsToBuy: payload,
      };
    case SET_COUNTOFPRODUCTS:
      return {
        ...state,
        countOfProduct: payload,
      };
    default:
      return state;
  }
}

export default cartReducer;
