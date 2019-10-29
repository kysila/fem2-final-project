import axios from 'axios';
import Cookie from 'js-cookie';
import { ACTIONS } from './reducer';
import { GET_CUSTOMER, LOGIN, REGISTER } from '../../axios/endpoints';

export function logout() {
    return {
        type: ACTIONS.GET_CUSTOMER_INFO,
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
                axios.defaults.headers.common.Authorization = data.token;
                dispatch(login(data));
                dispatch(dispatchGetCustomer());
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
            .then(({ data }) => {
                dispatch(register(data));
            })
            .catch((err) => {
                console.log(err);
                // TODO: Show error notification
            });
    };
}