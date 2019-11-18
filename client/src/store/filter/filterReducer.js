import {
  GET_FILTERS_REQUESTED,
  GET_FILTERS_SUCCEEDED,
  GET_FILTERS_FAILED,
} from './actions';

const initialState = {
  isFilterFetching: false,
  colorFilters: [],
  distanceFilters: [],
  maxSpeedFilters: [],
  chargingTimeFilters: [],
  errorMsg: '',
};
function filterReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FILTERS_REQUESTED:
      return {
        ...state,
        isFilterFetching: true,
      };
    case GET_FILTERS_SUCCEEDED:
      return {
        ...state,
        colorFilters: action.colors,
        distanceFilters: action.distances,
        maxSpeedFilters: action.maxSpeeds,
        chargingTimeFilters: action.chargingTimes,
        isFilterFetching: false,
        errorMsg: '',
      };
    case GET_FILTERS_FAILED:
      return {
        ...state,
        isFilterFetching: true,
        errorMsg: action.payload,
      };
    default:
      return { ...state };
  }
}

export default filterReducer;
