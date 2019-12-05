import { ACTIONS } from './reducer';

export function modalOpen(payload, inject = {}) {
  return {
    type: ACTIONS.MODAL_OPEN,
    payload,
    inject,
  };
}

export function dispatchModalOpen(payload = 'login', inject) {
  return (dispatch) => {
    dispatch(modalOpen(payload, inject));
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
