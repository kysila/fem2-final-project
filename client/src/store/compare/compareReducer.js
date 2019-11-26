import {
  ADD_PRODUCTS_TO_COMPARE,
  DELETE_PRODUCTS_FROM_COMPARE, SET_PRODUCT_MARKED,
} from './actions';

const initialState = {
  products: [],
};

const compareReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCTS_TO_COMPARE:
      return {
        ...state,
        products: state.products.concat(action.products),
      };
    case DELETE_PRODUCTS_FROM_COMPARE:
      return {
        ...state,
      };
    default:
      return { ...state };
  }
};

export default compareReducer;
