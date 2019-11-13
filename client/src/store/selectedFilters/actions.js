export const SELECT_FILTERS = 'SELECT_FILTERS';
export const DELETE_SELECTED_FILTER = 'DELETE_SELECTED_FILTER';

export const selectFilters = (event, value, type, selectedFilters) => (dispatch) => {
  dispatch({
    type: SELECT_FILTERS,
    selectedFilters: {
      ...selectedFilters,
      [type]: value,
    },
  });
};

export const recentlySelectFilters = (selectedFilters) => (dispatch) => {
  dispatch({
    type: SELECT_FILTERS,
    selectedFilters: {
      ...selectedFilters,
    },
  });
};
