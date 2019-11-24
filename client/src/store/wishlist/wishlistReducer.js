import { ACTIONS } from './actions';

const initialState = {
  products: [],
  arr: [],
  isWishlistFetching: false,
  errorMsg: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ACTIONS.CREATE_WISHLIST:
      return {
        ...state,
        products: action.wishlistProducts,
        arr: action.payload.arr,
      };
    case ACTIONS.UPDATE_WISHLIST:
      return {
        ...state,
        products: action.wishlistProducts,
        arr: action.payload.arr,
      };
    case ACTIONS.GET_WISHLIST_REQUESTED:
      return {
        ...state,
        isWishlistFetching: true,
      };
    case ACTIONS.GET_WISHLIST_SUCCEEDED:
      return {
        ...state,
        products: action.wishlistProducts,
        arr: action.arr,
        isWishlistFetching: false,
        errorMsg: null,
      };
    case ACTIONS.GET_WISHLIST_FAILED:
      return {
        ...state,
        isWishlistFetching: true,
        errorMsg: action.payload,
      };
    case ACTIONS.DELETE_WISHLIST:
      return {
        ...state,
        products: null,
        arr: null,
      };
    case ACTIONS.ADD_PRODUCT_AND_CREATE_WISHLIST:
      return {
        ...state,
        products: action.wishlistProducts,
        arr: action.arr,
      };
    case ACTIONS.ADD_PRODUCT_AND_CREATE_WISHLIST_FAILED:
      return {
        ...state,
        isWishlistFetching: true,
        errorMsg: action.payload,
      };
    case ACTIONS.DELETE_PRODUCT_FROM_WISHLIST:
      return {
        ...state,
        products: action.wishlistProducts,
        arr: action.payload.arr,
      };
    default:
      return { ...state };
  }
}
