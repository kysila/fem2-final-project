import React from 'react';
import { SET_SEARCHPRODUCTS, SET_SEARCHVALUE } from './searchReducer';

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
