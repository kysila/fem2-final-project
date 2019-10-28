const SET_SEARCHVALUE = 'SET_SEARCHVALUE';
const SET_SEARCHPRODUCTS = 'SET_SEARCHPRODUCTS';

// Initial state
const initialState = {
  searchValue: '',
  searchProducts: [],
};

// ACTIONS
export const setSearchValue = (payload) => ({
  type: SET_SEARCHVALUE,
  payload,
});

export const setSearchProducts = (payload) => ({
  type: SET_SEARCHPRODUCTS,
  payload,
});

// REDUCER
function searchReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_SEARCHVALUE:
      console.log('DISPATCH');
      return {
        ...state,
        searchValue: payload,
      };
    case SET_SEARCHPRODUCTS:
      console.log('DISPATCH to Products');
      return {
        ...state,
        // eslint-disable-next-line array-callback-return
        searchProducts: [...payload],
      };
    default:
      return state;
  }
}

export default searchReducer;
