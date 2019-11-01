import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import Cookie from 'js-cookie';

import modalReducer from './modal/reducer';
import authReducer from './auth/reducer';
import notificationReducer from './notification/reducer';
import searchReducer from './search/searchReducer';
import cartReducer from './cart/cartReducer';

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
  cartReducer,
});

export default createStore(rootReducer, initialStore, applyMiddleware(thunk));
