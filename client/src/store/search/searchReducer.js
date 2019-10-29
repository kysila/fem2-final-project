import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import React from 'react';

const SET_SEARCHVALUE = 'SET_SEARCHVALUE';
const SET_SEARCHPRODUCTS = 'SET_SEARCHPRODUCTS';

// Initial state
const initialState = {
  searchValue: '',
  searchProducts: [<Grid item xs={12} sm={12} md={12} justify="center">
    <Typography variant="h6" align="center" paragraph="true">No products were found based on search results</Typography>
  </Grid>],
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
