import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './auth/reducer';
import searchReducer from './search/searchReducer';

export const initialStore = { auth: { user: null }, ...window.initialStore };

const rootReducer = combineReducers({ auth: authReducer, searchReducer });

export default createStore(rootReducer, initialStore, applyMiddleware(thunk));
