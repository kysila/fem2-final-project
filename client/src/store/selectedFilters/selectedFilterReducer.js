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

function selectFilterReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_FILTERS:
      return {
        ...state,
        colorSelectedFilters: action.colorSelectedFilters,
        maxSpeedSelectedFilters: action.maxSpeedSelectedFilters,
        distanceSelectedFilters: action.distanceSelectedFilters,
        chargingTimeSelectedFilters: action.chargingTimeSelectedFilters,
        categorySelectedFilters: action.categorySelectedFilters,
        priceSelectedFilters: action.priceSelectedFilters,
      };

    default:
      return { ...state };
  }
}

export default selectFilterReducer;
