import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import Cookie from 'js-cookie';

import authReducer from './auth/reducer';
import modalReducer from './modal/reducer';

export const initialStore = {
  auth: { user: null, token: Cookie.get('auth') },
  modal: { opened: false, child: null },
  filters: [],
  selectedFilters: [],
  ...window.initialStore,
};

axios.defaults.headers.common.Authorization = Cookie.get('auth');

const rootReducer = combineReducers({
  auth: authReducer,
  modal: modalReducer,
});

export default createStore(rootReducer, initialStore, applyMiddleware(thunk));
