import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './auth/reducer';

export const initialStore = { auth: { user: null }, ...window.initialStore };

const rootReducer = combineReducers({
  auth: authReducer,
});

export default createStore(rootReducer, initialStore, applyMiddleware(thunk));
