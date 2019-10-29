import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import React from 'react';

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
