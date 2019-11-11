export const SELECT_FILTERS = 'SELECT_FILTERS';

export const selectFilters = (event, value, type, selectedFilters) => (dispatch) => {
  dispatch({
    type: SELECT_FILTERS,
    selectedFilters: {
      ...selectedFilters,
      [type]: value,
    },
  });
};
