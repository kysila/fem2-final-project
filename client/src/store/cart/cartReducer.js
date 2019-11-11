import React from 'react';

import { ADD_PRODUCT_TO_CART } from './actions';

const GET_PRODUCTSTOBUY = 'GET_PRODUCTSTOBUY';
const DELETE_PRODUCTSTOBUY = 'DELETE_PRODUCTSTOBUY';
const SET_COUNTOFPRODUCTS = 'SET_COUNTOFPRODUCTS';
const SET_TOTALPRICE = 'SET_TOTALPRICE';

const initialState = {
  subTotal: 0,
  countOfProducts: 0,
  cart: {
    products: [],
  },
};

// ACTIONS
export const setCountOfProducts = (payload) => ({
  type: SET_COUNTOFPRODUCTS,
  payload,
});
export const setTotalPrice = (payload) => ({
  type: SET_TOTALPRICE,
  payload,
});

// REDUCER
function cartReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_COUNTOFPRODUCTS:
      return {
        ...state,
        countOfProduct: payload,
      };
    case SET_TOTALPRICE:
      return {
        ...state,
        subTotal: state.subTotal + payload,
      };
    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        cart: {
          products: payload,
        },
      };
    default:
      return state;
  }
}

export default cartReducer;
