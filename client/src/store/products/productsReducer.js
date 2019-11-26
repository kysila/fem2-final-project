import {
  GET_PRODUCTS_REQUESTED,
  GET_PRODUCTS_SUCCEEDED,
  GET_PRODUCTS_FAILED,
  GET_MORE_PRODUCTS_FAILED,
  GET_MORE_PRODUCTS_SUCCEEDED,
  GET_MORE_PRODUCTS_REQUESTED,
} from './actions';

const initialState = {
  isProductsFetching: false,
  allProducts: [],
  newProducts: [],
  errorMsg: '',
};
function productsReducer(state = initialState, action) {
  console.log('PRODUCTS REDUCER action в аргументах ', action);
  switch (action.type) {
    case GET_PRODUCTS_REQUESTED:
      return {
        ...state,
        isProductsFetching: true,
      };
    case GET_MORE_PRODUCTS_REQUESTED:
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
    case GET_MORE_PRODUCTS_SUCCEEDED:
      return {
        ...state,
        newProducts: action.newProducts,
        isProductsFetching: false,
        errorMsg: '',
      };
    case GET_PRODUCTS_FAILED:
      return {
        ...state,
        isProductsFetching: true,
        errorMsg: action.payload,
      };
    case GET_MORE_PRODUCTS_FAILED:
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
