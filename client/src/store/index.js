import { createStore, applyMiddleware, combineReducers } from 'redux';
import authReducer from './auth/reducer';
import thunk from 'redux-thunk';

export const initialStore = Object.assign({ auth: { user: null } }, window.initialStore);

const rootReducer = combineReducers({
  auth: authReducer,
});

export default createStore(rootReducer, initialStore, applyMiddleware(thunk));