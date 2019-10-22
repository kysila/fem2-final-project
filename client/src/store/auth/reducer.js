import Cookie from 'js-cookie';

export const ACTIONS = Object.seal({
  LOGIN: 'LOGIN',
  REGISTER: 'REGISTER',
  LOGOUT: 'LOGOUT',
  GET_CUSTOMER_INFO: 'GET_CUSTOMER_INFO',
});

export default function(state = {}, { type, payload }) {
  let newState = state;

  switch(type) {
    case ACTIONS.LOGIN:
      Cookie.set('auth', payload.token);
      break;
    case ACTIONS.REGISTER:
      window.location.href = '/login';
      break;
    case ACTIONS.LOGOUT:
      Cookie.remove('auth');
      newState = Object.assign({}, newState, { user: null });
      window.location.href = '/';
      break;
    case ACTIONS.GET_CUSTOMER_INFO:
      newState = Object.assign({}, newState, { user: payload });
      break;
  }

  return newState;
}
