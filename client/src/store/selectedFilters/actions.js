export const SELECT_FILTERS = 'SELECT_FILTERS';

export const selectFilters = (event, value, type) => (dispatch) => {
  // dispatch({
  //   type: SELECT_FILTERS,
  //   currentSelectedFilters: currentSelectedFilters.value,
  // })
  switch (type) {
    case 'color':
      return dispatch({
        type: SELECT_FILTERS,
        colorSelectedFilters: value,
      });
    case 'maxSpeed':
      return dispatch({
        type: SELECT_FILTERS,
        maxSpeedSelectedFilters: value,
      });
    case 'distance':
      return dispatch({
        type: SELECT_FILTERS,
        distanceSelectedFilters: value,
      });
    case 'chargingTime':
      return dispatch({
        type: SELECT_FILTERS,
        chargingTimeSelectedFilters: value,
      });
    case 'category':
      return dispatch({
        type: SELECT_FILTERS,
        categorySelectedFilters: value,
      });
    case 'price':
      return dispatch({
        type: SELECT_FILTERS,
        priceSelectedFilters: value,
      });
  }
};
