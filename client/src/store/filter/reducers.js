import React from 'react';

export const FILTER_ACTIONS = Object.seal({
  GET_FILTERS: 'GET_FILTERS',
  SET_FILTERS: 'SET_FILTERS',
});
function filterReducer(store = {}, { type, payload }) {
  switch (type) {
    case FILTER_ACTIONS.GET_FILTERS:
      return {
        ...store,
        filters: payload,

      };
    case FILTER_ACTIONS.SET_FILTERS:
      return {
        ...store,
        selectedFilters: payload,
      };
    default:
      return store;
  }
}

export default filterReducer;
