import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import Cookie from 'js-cookie';
import { composeWithDevTools } from 'redux-devtools-extension';

import authReducer from './auth/reducer';
import modalReducer from './modal/reducer';
import notificationReducer from './notification/reducer';
import searchReducer from './search/searchReducer';
import cartReducer from './cart/cartReducer';
import filterReducer from './filter/filterReducer';
import categoryReducer from './categories/categoryReducer';
import selectFilterReducer from "./selectedFilters/selectedFilterReducer";


export const initialStore = {
  auth: { user: null, token: Cookie.get('auth') },
  notification: { notifications: [] },
  modal: { opened: false, child: null },
  ...window.initialStore,
};

axios.defaults.headers.common.Authorization = Cookie.get('auth');

const rootReducer = combineReducers({
  auth: authReducer,
  modal: modalReducer,
  notification: notificationReducer,
  searchReducer,
  filterReducer,
  categoryReducer,
  selectFilterReducer,
  cartReducer,
});

export default createStore(
  rootReducer,
  initialStore,
  composeWithDevTools(applyMiddleware(thunk)),
);
