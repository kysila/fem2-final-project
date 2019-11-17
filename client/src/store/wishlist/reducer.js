export const ACTIONS = Object.seal({
  CREATE_WISHLIST: 'CREATE_WISHLIST',
  UPDATE_WISHLIST: 'UPDATE_WISHLIST',
  GET_WISHLIST: 'GET_WISHLIST',
  DELETE_WISHLIST: 'DELETE_WISHLIST',
  ADD_PRODUCT_AND_CREATE_WISHLIST: 'ADD_PRODUCT_AND_CREATE_WISHLIST',
  DELETE_PRODUCT_FROM_WISHLIST: 'DELETE_PRODUCT_FROM_WISHLIST',
});

export default function (state = { wishlist: null }, { type, payload }) {
  let newState = state;

  switch (type) {
    case ACTIONS.CREATE_WISHLIST:
      newState = { ...newState, wishlist: payload };
      break;
    case ACTIONS.UPDATE_WISHLIST:
      newState = { ...newState, wishlist: payload };
      break;
    case ACTIONS.GET_WISHLIST:
      newState = { ...newState, wishlist: payload };
      break;
    case ACTIONS.ADD_PRODUCT_AND_CREATE_WISHLIST:
      newState = { ...newState, wishlist: payload };
      break;
    case ACTIONS.DELETE_WISHLIST:
      newState = { ...newState, wishlist: null };
      break;
    // TODO: add DELETE_PRODUCT_FROM_WISHLIST
    default:
      break;
  }
  return newState;
}
