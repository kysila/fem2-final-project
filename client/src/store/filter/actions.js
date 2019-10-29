import { FILTER_ACTIONS } from './reducers';
// action:
export const getFilters = (payload) => ({
  type: FILTER_ACTIONS.GET_FILTERS,
  payload,
});
export const setFilers = (payload) => ({
  type: FILTER_ACTIONS.SET_FILTERS,
  payload,
});
