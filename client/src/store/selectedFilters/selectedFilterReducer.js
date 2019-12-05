import {
  SELECT_FILTERS,
  DELETE_SELECTED_FILTER,
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
    case DELETE_SELECTED_FILTER:
      return {
        ...state,
        selectedFilters: { ...action.selectedFilters },
      };

    default:
      return { ...state };
  }
}

export default selectFilterReducer;
