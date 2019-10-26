import React from 'react';

export const ACTIONS = Object.seal({
  LOGIN: 'LOGIN',
  REGISTER: 'REGISTER',
  LOGOUT: 'LOGOUT',
  GET_CUSTOMER_INFO: 'GET_CUSTOMER_INFO',
});

export default function (state = {}, { type, payload }) {
  let newState = state;

  switch (type) {
    case ACTIONS.LOGIN:
      newState = { ...newState, token: payload.token };
      break;
    case ACTIONS.REGISTER:
      // TODO: do something
      break;
    case ACTIONS.LOGOUT:
      newState = { ...newState, user: null, token: null };
      break;
    case ACTIONS.GET_CUSTOMER_INFO:
      newState = { ...newState, user: payload };
      break;
    default:
      break;
  }

  return newState;
}
