import React from 'react';
import {
  SELECT_FILTERS,
} from './actions';

const initialState = {
  colorSelectedFilters: [],
  maxSpeedSelectedFilters: [],
  distanceSelectedFilters: [],
  chargingTimeSelectedFilters: [],
  categorySelectedFilters: [],
  priceSelectedFilters: [],
};

function selectFilterReducer(state = initialState, action, payload) {
  switch (action.type) {
    case SELECT_FILTERS:
      return {
        ...state,
        selectedFilters: action.payload
        ,

      };

    default:
      return { ...state };
  }
}

export default selectFilterReducer;
