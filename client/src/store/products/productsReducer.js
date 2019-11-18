import {
  GET_PRODUCTS_REQUESTED,
  GET_PRODUCTS_SUCCEEDED,
  GET_PRODUCTS_FAILED,
} from './actions';

const initialState = {
  isProductsFetching: false,
  allProducts: [],
  errorMsg: '',
};
function productsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS_REQUESTED:
      return {
        ...state,
        isProductsFetching: true,
      };
    case GET_PRODUCTS_SUCCEEDED:
      return {
        ...state,
        allProducts: action.allProducts,
        isProductsFetching: false,
        errorMsg: '',
      };
    case GET_PRODUCTS_FAILED:
      return {
        ...state,
        isProductsFetching: true,
        errorMsg: action.payload,
      };
    default:
      return { ...state };
  }
}

export default productsReducer;
