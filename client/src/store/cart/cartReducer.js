import React from 'react';

import {
  ADD_PRODUCT_TO_CART,
  SET_COUNTOFPRODUCTS,
  SET_TOTALPRICE,
  GET_PRODUCTS_FROM_DB, 
  GET_PRODUCTS_FROM_LS
}
  from './actions';


const initialState = {
  subTotal: 0,
  countOfProducts: 0,
  cart: {
    products: [],
  },
};


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
    case GET_PRODUCTS_FROM_DB:
      return {
        ...state,
        cart: {
          ... payload,
        },
      };
    case GET_PRODUCTS_FROM_LS:
      return {
        ...state,
        cart: {
          ... payload,
        },
      };
    default:
      return state;
  }
}

export default cartReducer;
