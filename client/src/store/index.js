import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import Cookie from 'js-cookie';
import { composeWithDevTools } from 'redux-devtools-extension';

import authReducer from './auth/reducer';
import modalReducer from './modal/reducer';
import filterReducer from './filter/reducers';

import { getProductsThunk } from '../components/Products/Filter';

export const initialStore = {
  auth: { user: null, token: Cookie.get('auth') },
  modal: { opened: false, child: null },
  filter: { filters: [], selectedFilters: [] },
  ...window.initialStore,
};

axios.defaults.headers.common.Authorization = Cookie.get('auth');

const rootReducer = combineReducers({
  auth: authReducer,
  modal: modalReducer,
  filter: filterReducer,

});

export default createStore(
  rootReducer,
  initialStore,
  composeWithDevTools(applyMiddleware(thunk)),
);
