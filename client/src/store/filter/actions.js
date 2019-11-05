import axios from 'axios';

// ACTIONS WITH OTHER FILTERS
export const GET_FILTERS_REQUESTED = 'GET_FILTERS_REQUESTED';
export const GET_FILTERS_SUCCEEDED = 'GET_FILTERS_SUCCEEDED';
export const GET_FILTERS_FAILED = 'GET_FILTERS_FAILED';

// action:
export const getFilters = () => (dispatch) => {
  dispatch({
    type: GET_FILTERS_REQUESTED,
  });
  axios.all(
    [axios.get('/colors'), axios.get('/filters')],
  )
    .then(
    // если через async то нужно оборачивать в try catch,
    // в ответ получаем респонс где есть свойство data
    // в then делаем dispatch и в аругументы payload
      axios.spread((colorFilters, otherFilters) => {
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
          otherFilters: otherFilters.data,
        });
      }),
    ).catch((err) => {
      dispatch({
        type: GET_FILTERS_FAILED,
        payload: err.response.data.message,
      });
    });
};
