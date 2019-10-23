import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './auth/reducer';
import modalReducer from './modal/reducer';

export const initialStore = {
  auth: { user: null },
  modal: { opened: false, child: null },
  ...window.initialStore,
};

const rootReducer = combineReducers({
  auth: authReducer,
  modal: modalReducer,
});

export default createStore(rootReducer, initialStore, applyMiddleware(thunk));
