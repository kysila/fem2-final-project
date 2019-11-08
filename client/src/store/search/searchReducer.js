import { setSearchProducts, setSearchValue } from './action';


export const SET_SEARCHVALUE = 'SET_SEARCHVALUE';
export const SET_SEARCHPRODUCTS = 'SET_SEARCHPRODUCTS';

// Initial state
const initialState = {
  searchValue: '',
  searchProducts: [],
};
// REDUCER
function searchReducer(state = initialState, { type, payload }) {
  switch (type) {
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
    default:
      return state;
  }
}

export default searchReducer;
