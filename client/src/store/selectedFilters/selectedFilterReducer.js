import React from 'react';
import {
  SELECT_FILTERS,
} from './actions';

const initialState = {
  selectedFilters: {},
};

function selectFilterReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_FILTERS:
      return {
        ...state,
        selectedFilters: { ...action.selectedFilters },

      };

    default:
      return { ...state };
  }
}

export default selectFilterReducer;
