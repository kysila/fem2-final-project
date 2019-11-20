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
export const categorySelect = (value) => (dispatch) => {
  dispatch({
    type: SELECT_FILTERS,
    selectedFilters: {
      categories: value,
    },
  });
};
export const priceSelectFilters = (event, minPrice, maxPrice, selectedFilters) => (dispatch) => {
  dispatch({
    type: SELECT_FILTERS,
    selectedFilters: {
      ...selectedFilters,
      minPrice,
      maxPrice,
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

export const deleteSelectedFilters = (event, type, selectedFilters) => (dispatch) => {
  delete selectedFilters[type];
  dispatch({
    type: DELETE_SELECTED_FILTER,
    selectedFilters: {
      ...selectedFilters,
    },
  });
};
