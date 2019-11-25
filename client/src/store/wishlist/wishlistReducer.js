import { ACTIONS } from './actions';

const initialState = {
  products: [],
  arr: [],
  isWishlistFetching: false,
  errorMsg: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ACTIONS.GET_WISHLIST_REQUESTED:
      return {
        ...state,
        isWishlistFetching: true,
        errorMsg: null,
      };
    case ACTIONS.GET_WISHLIST_SUCCEEDED:
      return {
        ...state,
        isWishlistFetching: false,
        products: action.wishlistProducts,
        arr: action.arr,
      };
    case ACTIONS.GET_WISHLIST_FAILED:
      return {
        ...state,
        isWishlistFetching: true,
        errorMsg: action.payload,
      };
    case ACTIONS.ADD_PRODUCT_AND_CREATE_WISHLIST_REQUESTED:
      return {
        ...state,
        isWishlistFetching: true,
        errorMsg: null,
      };
    case ACTIONS.ADD_PRODUCT_AND_CREATE_WISHLIST_SUCCEEDED:
      return {
        ...state,
        isWishlistFetching: false,
        products: action.wishlistProducts,
        arr: action.arr,
      };
    case ACTIONS.ADD_PRODUCT_AND_CREATE_WISHLIST_FAILED:
      return {
        ...state,
        isWishlistFetching: true,
        errorMsg: action.payload,
      };
    case ACTIONS.DELETE_PRODUCT_FROM_WISHLIST_REQUESTED:
      return {
        ...state,
        isWishlistFetching: true,
        errorMsg: null,
      };
    case ACTIONS.DELETE_PRODUCT_FROM_WISHLIST_SUCCEEDED:
      return {
        ...state,
        isWishlistFetching: false,
        products: action.wishlistProducts,
        arr: action.arr,
      };
    case ACTIONS.DELETE_PRODUCT_FROM_WISHLIST_FAILED:
      return {
        ...state,
        isWishlistFetching: true,
        errorMsg: action.payload,
      };
    case ACTIONS.DELETE_WISHLIST_REQUESTED:
      return {
        ...state,
        isWishlistFetching: true,
        errorMsg: null,
      };
    case ACTIONS.DELETE_WISHLIST_SUCCEEDED:
      return {
        ...state,
        isWishlistFetching: false,
        products: [],
        arr: [],
      };
    case ACTIONS.DELETE_WISHLIST_FAILED:
      return {
        ...state,
        isWishlistFetching: true,
        errorMsg: action.payload,
      };
    default:
      return { ...state };
  }
}
