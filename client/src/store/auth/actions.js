/* eslint-disable dot-notation */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import axios from 'axios';
import Cookie from 'js-cookie';
import CloseIcon from '@material-ui/icons/Close';
import { ACTIONS } from './reducer';
import { GET_CUSTOMER, LOGIN, REGISTER } from '../../axios/endpoints';
import { enqueueSnackbar, closeSnackbar } from '../notification/actions';
import { modalOpen, modalClose } from '../modal/actions';

export function logout() {
  return {
    type: ACTIONS.LOGOUT,
  };
}

export function dispatchLogout() {
  return (dispatch) => {
    dispatch(logout());
    Cookie.remove('auth');
    axios.defaults.headers.common.Authorization = null;
    window.history.pushState(null, null, '/');
  };
}

export function getCustomer(payload) {
  return {
    type: ACTIONS.GET_CUSTOMER_INFO,
    payload,
  };
}

export function dispatchGetCustomer() {
  return (dispatch) => {
    axios.get(GET_CUSTOMER)
      .then(({ data }) => {
        dispatch(getCustomer(data));
      })
      .catch((err) => {
        dispatch(dispatchLogout());
        console.log(err);
        // TODO: Show error notification
      });
  };
}

export function login(payload) {
  return {
    type: ACTIONS.LOGIN,
    payload,
  };
}

export function dispatchLogin(payload) {
  return (dispatch) => {
    axios.post(LOGIN, payload)
      .then(({ data }) => {
        Cookie.set('auth', data.token);
        axios.defaults.headers.common['Authorization'] = data.token;
        dispatch(login(data));
        dispatch(modalClose());
        dispatch(dispatchGetCustomer());
      })
      .catch((err) => {
        Object.keys(err.response.data).forEach((field) => {
          dispatch(enqueueSnackbar({
            message: err.response.data[field],
            options: {
              variant: 'error',
              action: (key) => (
                <CloseIcon style={{ cursor: 'pointer' }} onClick={() => dispatch(closeSnackbar(key))} />
              ),
            },
          }));
        });
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
      .then(({ data }) => {
        dispatch(register(data));
        dispatch(modalOpen('login'));
      })
      .catch((err) => {
        dispatch(enqueueSnackbar({
          message: err.response.data.message,
          options: {
            variant: 'error',
          },
        }));
      });
  };
}
