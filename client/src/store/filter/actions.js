import axios from 'axios';
import { FILTER_ACTIONS } from './reducers';

// action:
export const getFilters = (payload) => ({
  type: FILTER_ACTIONS.GET_FILTERS,
  payload,
});
export const getFilers = (payload) => ({
  type: FILTER_ACTIONS.SET_FILTERS,
  payload,
});

function reducer(store = initialStore, { type, payload }) {
  switch (type) {
    case GET_FILTERS:
      return {
        ...store,
        filters: payload,

      };
    case SET_FILTERS:
      return {
        ...store,
        selectedFilters: payload,
      };
    default:
      return store;
  }
}
const store = createStore(
  reducer, applyMiddleware(thunk),
);
// store.dispatch(setAuth(true));

export default store;
