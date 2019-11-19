export const SET_SEARCHVALUE = 'SET_SEARCHVALUE';
export const SET_SEARCHPRODUCTS = 'SET_SEARCHPRODUCTS';
export const GET_SEARCH_REQUESTED = 'GET_SEARCH_REQUESTED';
export const GET_SEARCH_SUCCEEDED = 'GET_SEARCH_SUCCEEDED';

// Initial state
const initialState = {
  isSearchFetching: false,
  searchValue: '',
  searchProducts: [],
};
// REDUCER
function searchReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_SEARCH_REQUESTED:
      return {
        ...state,
        isSearchFetching: true,
      };
    case SET_SEARCHVALUE:
      return {
        ...state,
        searchValue: payload,
      };
    case SET_SEARCHPRODUCTS:
      return {
        ...state,
        searchProducts: payload,
      };
    case GET_SEARCH_SUCCEEDED:
      return {
        ...state,
        isSearchFetching: false,
      };
    default:
      return state;
  }
}

export default searchReducer;
