import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import Cookie from 'js-cookie';

import authReducer from './auth/reducer';
import modalReducer from './modal/reducer';
import searchReducer from './search/searchReducer';
import cartReducer from './cart/cartReducer';


export const initialStore = {
  auth: { user: null, token: Cookie.get('auth') },
  modal: { opened: false, child: null },
  ...window.initialStore,
};

axios.defaults.headers.common.Authorization = Cookie.get('auth');

const rootReducer = combineReducers({
  auth: authReducer,
  modal: modalReducer,
  searchReducer,
  cartReducer,
});

export default createStore(rootReducer, initialStore, applyMiddleware(thunk));
