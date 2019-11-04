export const SELECT_FILTERS = 'SELECT_FILTERS';

export const selectFilters = (event, value, type) => (dispatch) => {
  dispatch({
    type: SELECT_FILTERS,
    selectedFilters: [{
      selectedFilter: value,
      filterType: type,
    }],
  });
};
