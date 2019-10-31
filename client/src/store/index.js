import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import Cookie from 'js-cookie';
import { composeWithDevTools } from 'redux-devtools-extension';

import authReducer from './auth/reducer';
import modalReducer from './modal/reducer';
import searchReducer from './search/searchReducer';

import filters from './filter/reducers';

export const initialStore = {
  auth: { user: null, token: Cookie.get('auth') },
  modal: { opened: false, child: null },
  filters: {
    isFilterFetching: false,
    colorFilters: [],
    otherFilters: [],
    errorMsg: '',
  },
  ...window.initialStore,
};

axios.defaults.headers.common.Authorization = Cookie.get('auth');

const rootReducer = combineReducers({
  auth: authReducer,
  modal: modalReducer,
  searchReducer,
  filters,

});

export default createStore(
  rootReducer,
  initialStore,
  composeWithDevTools(applyMiddleware(thunk)),
);
