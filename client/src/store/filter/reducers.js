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
function filters(state = initialState, action) {
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

export default filters;
//
// function filterReducer(store = {}, { type, payload }) {
//   switch (type) {
//     case FILTER_ACTIONS.GET_FILTERS:
//       return {
//         ...store,
//         filters: payload,
//
//       };
//     case FILTER_ACTIONS.SET_FILTERS:
//       return {
//         ...store,
//         selectedFilters: payload,
//       };
//     default:
//       return store;
//   }
// }

// export default filterReducer;
