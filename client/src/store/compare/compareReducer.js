import {
  ADD_PRODUCTS_TO_COMPARE,
  DELETE_PRODUCTS_FROM_COMPARE,
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
        products: state.products.filter((el) => el.itemNo !== action.product.itemNo),
      };
    default:
      return { ...state };
  }
};

export default compareReducer;
