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
      axios.spread((colorFilters, otherFilters) => {
        const colorOptions = colorFilters.data.map((color) => ({
          name: color.name,
          cssValue: color.cssValue,
        }));
        const distanceOptions = otherFilters.data.filter((el) => (el.type === 'distance'));
        const chargingTimeOptions = otherFilters.data.filter((el) => (el.type === 'chargingTime'));
        const maxSpeedOptions = otherFilters.data.filter((el) => (el.type === 'maxSpeed'));
        dispatch({
          type: GET_FILTERS_SUCCEEDED,
          colors: colorOptions,
          distances: distanceOptions,
          chargingTimes: chargingTimeOptions,
          maxSpeeds: maxSpeedOptions,
        });
      }),
    ).catch((err) => {
      dispatch({
        type: GET_FILTERS_FAILED,
        payload: err.response.data.message,
      });
    });
};


