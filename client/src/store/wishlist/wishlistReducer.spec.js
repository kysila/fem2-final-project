import wishlistReducer, { initialState } from './wishlistReducer';
import { ACTIONS } from './actions';

describe('The test of wishlist reducers', () => {
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
});
