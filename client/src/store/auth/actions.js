import axios from 'axios';
import { ACTIONS } from './reducer';
import { GET_CUSTOMER, LOGIN, REGISTER } from '../../axios/endpoints';

export function login(payload) {
  return {
    type: ACTIONS.LOGIN,
    payload,
  };
}

export function dispatchLogin(payload) {
  return (dispatch) => {
    axios.post(LOGIN, payload)
      .then((data) => {
        dispatch(login(data));
      })
      .catch((err) => {
        console.log(err);
        // TODO: Show error notification
      });
  };
}

export function register(payload) {
  return {
    type: ACTIONS.REGISTER,
    payload,
  };
}

export function dispatchRegister(payload) {
  return (dispatch) => {
    axios.post(REGISTER, payload, { withCredentials: true, headers: { 'Access-Control-Allow-Origin': '*' } })
      .then((data) => {
        dispatch(register(data));
      })
      .catch((err) => {
        console.log(err);
        // TODO: Show error notification
      });
  };
}

export function getCustomer(payload) {
  return {
    type: ACTIONS.GET_CUSTOMER_INFO,
    payload,
  };
}

export function dispatchGetCustomer(data) {
  return (dispatch) => {
    axios.post(GET_CUSTOMER, data)
      .then((data) => {
        dispatch(getCustomer(data));
      })
      .catch((err) => {
        console.log(err);
        // TODO: Show error notification
      });
  };
}

export function logout() {
  return {
    type: ACTIONS.GET_CUSTOMER_INFO,
  };
}

export function dispatchLogout() {
  return (dispatch) => {
    dispatch(logout());
  };
}
