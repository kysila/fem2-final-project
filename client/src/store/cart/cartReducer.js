import {
  ADD_PRODUCT_TO_CART,
  SET_COUNT_OF_PRODUCTS,
  GET_PRODUCTS_FROM_DB,
  GET_PRODUCTS_FROM_LS,
  DECREASE_QUANTITY_OF_PRODUCTS,
  DELETE_PRODUCT_OF_CART,
  REPLACE_CART,
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
    case SET_COUNT_OF_PRODUCTS:
      return {
        ...state,
        countOfProduct: payload,
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
          ...payload,
        },
      };
    case GET_PRODUCTS_FROM_LS:
      return {
        ...state,
        cart: {
          ...payload,
        },
      };
    case DECREASE_QUANTITY_OF_PRODUCTS:
      return {
        ...state,
        cart: {
          products: payload,
        },
      };
    case DELETE_PRODUCT_OF_CART:
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
