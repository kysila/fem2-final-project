import axios from 'axios';

// ACTIONS WITH CART

export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const GET_PRODUCTS_FROM_DB = 'GET_PRODUCTS_FROM_DB ';
export const GET_PRODUCTS_FROM_LS = 'GET_PRODUCTS_FROM_LS ';
export const DELETE_PRODUCTSTOBUY = 'DELETE_PRODUCTSTOBUY';
export const SET_COUNTOFPRODUCTS = 'SET_COUNTOFPRODUCTS';
export const SET_TOTALPRICE = 'SET_TOTALPRICE';

// ACTIONS
export const setCountOfProducts = (payload) => ({
  type: SET_COUNTOFPRODUCTS,
  payload,
});

export const setTotalPrice = (payload) => ({
  type: SET_TOTALPRICE,
  payload,
});
export const getCartFromLS = (payload) => ({
  type: GET_PRODUCTS_FROM_LS,
  payload,
});

export const getCartFromDB = () => (dispatch) => {
  axios
    .get('/cart')
    .then((cart) => {
      dispatch({
        type: GET_PRODUCTS_FROM_DB,
        payload: cart.data,
      });
    })
    .catch((err) => {
      console.log('Axios request wqa failed', err.response.data);
    });
};

export const addProductToCart = (url) => (dispatch) => {
  axios.put(url)
    .then((cart) => {
      dispatch({
        type: ADD_PRODUCT_TO_CART,
        payload: cart.data.products,
      });
    });
};
