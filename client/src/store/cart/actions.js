import axios from 'axios';

// ACTIONS WITH CART
export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const GET_PRODUCTS_FROM_DB = 'GET_PRODUCTS_FROM_DB ';
export const GET_PRODUCTS_FROM_LS = 'GET_PRODUCTS_FROM_LS ';
export const DECREASE_QUANTITY_OF_PRODUCTS = 'DECREASE_QUANTITY_OF_PRODUCTS';
export const DELETE_PRODUCT_OF_CART = 'DELETE_PRODUCT_OF_CART';
export const SET_COUNT_OF_PRODUCTS = 'SET_COUNT_OF_PRODUCTS';
export const REPLACE_CART = 'REPLACE_CART';


// ACTIONS
export const getCartFromLS = (payload) => ({
  type: GET_PRODUCTS_FROM_LS,
  payload,
});

export const getCartFromDB = () => (dispatch) => {
  axios
    .get('/cart')
    .then((cart) => {
      if (cart.data) {
        dispatch({
          type: GET_PRODUCTS_FROM_DB,
          payload: cart.data,
        });
      } else {
        dispatch({
          type: GET_PRODUCTS_FROM_DB,
          payload: { products: [] },
        });
      }
    }).catch((err) => {
      console.log('Axios request was failed', err.response.data.message);
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
export const decreaseQuantityOfProducts = (url) => (dispatch) => {
  axios.delete(url)
    .then((cart) => {
      dispatch({
        type: DECREASE_QUANTITY_OF_PRODUCTS,
        payload: cart.data.products,
      });
    });
};

export const deleteProductOfCart = (url) => (dispatch) => {
  axios.delete(url)
    .then((cart) => {
      dispatch({
        type: DELETE_PRODUCT_OF_CART,
        payload: cart.data.products,
      });
    });
};


export const replaceCart = (newCart) => (dispatch) => {
  axios
    .post('/cart', newCart)
    .then((cart) => {
      dispatch({
        type: GET_PRODUCTS_FROM_DB,
        payload: cart.data,
      });
    }).catch((err) => {
      console.log('Axios request was failed', err.response.data.message);
    });
};
