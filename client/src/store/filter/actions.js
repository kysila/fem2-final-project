import axios from 'axios';

// ACTIONS WITH CATEGORIES
export const GET_CATEGORIES_REQUESTED = 'GET_CATEGORIES_REQUESTED';
export const GET_CATEGORIES_SUCCEEDED = 'GET_CATEGORIES_SUCCEEDED';
export const GET_CATEGORIES_FAILED = 'GET_CATEGORIES_FAILED';

// ACTIONS WITH OTHER FILTERS
export const GET_FILTERS_REQUESTED = 'GET_FILTERS_REQUESTED';
export const GET_FILTERS_SUCCEEDED = 'GET_FILTERS_SUCCEEDED';
export const GET_FILTERS_FAILED = 'GET_FILTERS_FAILED';

// action:
export const getFilters = () => (dispatch) => {
  console.log('зашел в функцию getFilters');
  dispatch({
    type: GET_FILTERS_REQUESTED,
  });
  axios.all([axios.get('/colors'), axios.get('/filters')]).then(
    axios.spread((colorFilters, otherFilters) => {
      console.log('colorFilters', colorFilters);
      console.log('otherFilters', otherFilters);
      const colorOptions = colorFilters.data.map((color) => ({
        name: color.name,
        cssValue: color.cssValue,
      }));

      // colorOptions.unshift({
      //   value: "all sizes",
      //   label: "All sizes"
      // });

      dispatch({
        type: GET_FILTERS_SUCCEEDED,
        colors: colorOptions,
        otherFilters,
      });
    }),
  ).catch((err) => {
    dispatch({
      type: GET_FILTERS_FAILED,
      payload: err.response.data.message,
    });
  });
};
