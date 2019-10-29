import React from 'react';

import { ACTIONS } from './reducer';

export function modalOpen(payload) {
  return {
    type: ACTIONS.MODAL_OPEN,
    payload,
  };
}

export function dispatchModalOpen(payload = 'login') {
  return (dispatch) => {
    dispatch(modalOpen(payload));
  };
}

export function modalClose(payload) {
  return {
    type: ACTIONS.MODAL_CLOSE,
    payload,
  };
}

export function dispatchModalClose(payload) {
  return (dispatch) => {
    dispatch(modalClose(payload));
  };
}
