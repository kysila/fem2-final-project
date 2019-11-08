import React from 'react';
import {
  GET_FILTERS_REQUESTED,
  GET_FILTERS_SUCCEEDED,
  GET_FILTERS_FAILED,
} from './actions';

const initialState = {
  isFilterFetching: false,
  colorFilters: [],
  otherFilters: [],
  errorMsg: '',
};
function filterReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FILTERS_REQUESTED:
      return {
        ...state,
        isFilterFetching: true,
      };
    case GET_FILTERS_SUCCEEDED:
      return {
        ...state,
        colorFilters: action.colors,
        otherFilters: action.otherFilters,
        isFilterFetching: false,
        errorMsg: '',
      };
    case GET_FILTERS_FAILED:
      return {
        ...state,
        isFilterFetching: true,
        errorMsg: action.payload,
      };

    default:
      return { ...state };
  }
}

export default filterReducer;
