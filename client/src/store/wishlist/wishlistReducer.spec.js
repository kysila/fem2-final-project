import wishlistReducer, { initialState } from './wishlistReducer';
import { ACTIONS } from './actions';

describe('The test of wishlist reducers', () => {
  // GET_WISHLIST
  it('GET_WISHLIST_REQUESTED', () => {
    const action = {
      type: ACTIONS.GET_WISHLIST_REQUESTED,
    };
    expect(wishlistReducer(initialState, action)).toEqual({
      ...initialState,
      isWishlistFetching: true,
      errorMsg: null,
    });
  });
  it('GET_WISHLIST_REQUESTED after an error', () => {
    const initialStateWithError = {
      ...initialState,
      errorMsg: 'An Error #400 occurred',
    };
    const action = {
      type: ACTIONS.GET_WISHLIST_REQUESTED,
      errorMsg: null,
    };
    expect(wishlistReducer(initialStateWithError, action)).toEqual({
      ...initialStateWithError,
      isWishlistFetching: true,
      errorMsg: null,
    });
  });

  it('GET_WISHLIST_SUCCEEDED', () => {
    const stateBefore = {
      ...initialState,
      isWishlistFetching: true,
      errorMsg: null,
    };
    const action = {
      type: ACTIONS.GET_WISHLIST_SUCCEEDED,
      wishlistProducts: [{ name: 'dsf' }],
      arr: [1, 2, 3],
    };
    expect(wishlistReducer(stateBefore, action)).toEqual({
      ...stateBefore,
      isWishlistFetching: false,
      products: action.wishlistProducts,
      arr: action.arr,
    });
  });

  it('GET_WISHLIST_FAILED', () => {
    const stateBefore = {
      ...initialState,
      isWishlistFetching: true,
      errorMsg: null,
    };
    const action = {
      type: ACTIONS.GET_WISHLIST_FAILED,
      payload: 'The error',
    };
    expect(wishlistReducer(stateBefore, action)).toEqual({
      ...stateBefore,
      isWishlistFetching: false,
      errorMsg: action.payload,
    });
  });

  // ADD_PRODUCT_AND_CREATE_WISHLIST
  it('ADD_PRODUCT_AND_CREATE_WISHLIST_REQUESTED', () => {
    const action = {
      type: ACTIONS.ADD_PRODUCT_AND_CREATE_WISHLIST_REQUESTED,
    };
    expect(wishlistReducer(initialState, action)).toEqual({
      ...initialState,
      isWishlistFetching: true,
      errorMsg: null,
    });
  });
  it('ADD_PRODUCT_AND_CREATE_WISHLIST_REQUESTED after an error', () => {
    const initialStateWithError = {
      ...initialState,
      errorMsg: 'An Error #400 occurred',
    };
    const action = {
      type: ACTIONS.ADD_PRODUCT_AND_CREATE_WISHLIST_REQUESTED,
    };
    expect(wishlistReducer(initialStateWithError, action)).toEqual({
      ...initialStateWithError,
      isWishlistFetching: true,
      errorMsg: null,
    });
  });

  it('ADD_PRODUCT_AND_CREATE_WISHLIST_SUCCEEDED', () => {
    const stateBefore = {
      ...initialState,
      isWishlistFetching: true,
      errorMsg: null,
    };
    const action = {
      type: ACTIONS.ADD_PRODUCT_AND_CREATE_WISHLIST_SUCCEEDED,
      wishlistProducts: [{ name: 'dsf' }],
      arr: [1, 2, 3],
    };
    expect(wishlistReducer(stateBefore, action)).toEqual({
      ...stateBefore,
      isWishlistFetching: false,
      products: action.wishlistProducts,
      arr: action.arr,
    });
  });

  it('ADD_PRODUCT_AND_CREATE_WISHLIST_FAILED', () => {
    const stateBefore = {
      ...initialState,
      isWishlistFetching: true,
      errorMsg: null,
    };
    const action = {
      type: ACTIONS.ADD_PRODUCT_AND_CREATE_WISHLIST_FAILED,
      payload: 'The error',
    };
    expect(wishlistReducer(stateBefore, action)).toEqual({
      ...stateBefore,
      isWishlistFetching: false,
      errorMsg: action.payload,
    });
  });

  // DELETE_PRODUCT_FROM_WISHLIST
  it('DELETE_PRODUCT_FROM_WISHLIST_REQUESTED', () => {
    const action = {
      type: ACTIONS.DELETE_PRODUCT_FROM_WISHLIST_REQUESTED,
    };
    expect(wishlistReducer(initialState, action)).toEqual({
      ...initialState,
      isWishlistFetching: true,
      errorMsg: null,
    });
  });
  it('DELETE_PRODUCT_FROM_WISHLIST_REQUESTED after an error', () => {
    const initialStateWithError = {
      ...initialState,
      errorMsg: 'An Error #400 occurred',
    };
    const action = {
      type: ACTIONS.DELETE_PRODUCT_FROM_WISHLIST_REQUESTED,
    };
    expect(wishlistReducer(initialStateWithError, action)).toEqual({
      ...initialStateWithError,
      isWishlistFetching: true,
      errorMsg: null,
    });
  });

  it('DELETE_PRODUCT_FROM_WISHLIST_SUCCEEDED', () => {
    const stateBefore = {
      ...initialState,
      isWishlistFetching: true,
      errorMsg: null,
    };
    const action = {
      type: ACTIONS.DELETE_PRODUCT_FROM_WISHLIST_SUCCEEDED,
      wishlistProducts: [{ name: 'dsf' }],
      arr: [1, 2, 3],
    };
    expect(wishlistReducer(stateBefore, action)).toEqual({
      ...stateBefore,
      isWishlistFetching: false,
      products: action.wishlistProducts,
      arr: action.arr,
    });
  });

  it('DELETE_PRODUCT_FROM_WISHLIST_FAILED', () => {
    const stateBefore = {
      ...initialState,
      isWishlistFetching: true,
      errorMsg: null,
    };
    const action = {
      type: ACTIONS.DELETE_PRODUCT_FROM_WISHLIST_FAILED,
      payload: 'The error',
    };
    expect(wishlistReducer(stateBefore, action)).toEqual({
      ...stateBefore,
      isWishlistFetching: false,
      errorMsg: action.payload,
    });
  });
  // DELETE_WISHLIST
  it('DELETE_WISHLIST_REQUESTED', () => {
    const action = {
      type: ACTIONS.DELETE_WISHLIST_REQUESTED,
    };
    expect(wishlistReducer(initialState, action)).toEqual({
      ...initialState,
      isWishlistFetching: true,
      errorMsg: null,
    });
  });
  it('DELETE_WISHLIST_REQUESTED after an error', () => {
    const initialStateWithError = {
      ...initialState,
      errorMsg: 'An Error #400 occurred',
    };
    const action = {
      type: ACTIONS.DELETE_WISHLIST_REQUESTED,
    };
    expect(wishlistReducer(initialStateWithError, action)).toEqual({
      ...initialStateWithError,
      isWishlistFetching: true,
      errorMsg: null,
    });
  });

  it('DELETE_WISHLIST_SUCCEEDED', () => {
    const stateBefore = {
      ...initialState,
      isWishlistFetching: true,
      errorMsg: null,
    };
    const action = {
      type: ACTIONS.DELETE_WISHLIST_SUCCEEDED,
      wishlistProducts: [],
      arr: [],
    };
    expect(wishlistReducer(stateBefore, action)).toEqual({
      ...stateBefore,
      isWishlistFetching: false,
      products: action.wishlistProducts,
      arr: action.arr,
    });
  });

  it('DELETE_WISHLIST_FAILED', () => {
    const stateBefore = {
      ...initialState,
      isWishlistFetching: true,
      errorMsg: null,
    };
    const action = {
      type: ACTIONS.DELETE_WISHLIST_FAILED,
      payload: 'The error',
    };
    expect(wishlistReducer(stateBefore, action)).toEqual({
      ...stateBefore,
      isWishlistFetching: false,
      errorMsg: action.payload,
    });
  });
});
