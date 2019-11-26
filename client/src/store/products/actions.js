import axios from 'axios';

// ACTIONS WITH OTHER FILTERS
export const GET_PRODUCTS_REQUESTED = 'GET_PRODUCTS_REQUESTED';
export const GET_PRODUCTS_SUCCEEDED = 'GET_PRODUCTS_SUCCEEDED';
export const GET_PRODUCTS_FAILED = 'GET_PRODUCTS_FAILED';
export const GET_MORE_PRODUCTS_REQUESTED = 'GET_MORE_PRODUCTS_REQUESTED';
export const GET_MORE_PRODUCTS_SUCCEEDED = 'GET_MORE_PRODUCTS_SUCCEEDED';
export const GET_MORE_PRODUCTS_FAILED = 'GET_MORE_PRODUCTS_FAILED';
export const CLEAR_NEW_PRODUCTS = 'CLEAR_NEW_PRODUCTS';

// action:
export const getProducts = (endpoint) => (dispatch) => {
  console.log('ACTION запущен экшен getProducts');
  dispatch({
    type: GET_PRODUCTS_REQUESTED,
  });
  axios.get(endpoint)
    .then((data) => {
      console.log('ACTION запущен экшен getProducts - data в ответет сервера', data);
      const allProducts = data.data.products.map((el) => ({
        itemNo: el.itemNo,
        name: el.name,
        itemImg: el.imageUrls[0],
        price: el.currentPrice,
        url: `/products/${el.itemNo}`,
        rating: el.rating,
        id: el._id,
        distance: el.distance,
        maxSpeed: el.maxSpeed,
        chargingTime: el.chargingTime,
      }));
      console.log('ACTION allProducts', allProducts);
      dispatch({
        type: GET_PRODUCTS_SUCCEEDED,
        allProducts,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_PRODUCTS_FAILED,
        payload: err,
      });
    });
};

export const getMoreProducts = (endpoint) => (dispatch) => {
  dispatch({
    type: GET_MORE_PRODUCTS_REQUESTED,
  });
  axios.get(endpoint)
    .then((data) => {
      const newProducts = data.data.products.map((el) => ({
        itemNo: el.itemNo,
        name: el.name,
        itemImg: el.imageUrls[0],
        price: el.currentPrice,
        url: `/products/${el.itemNo}`,
        rating: el.rating,
        id: el._id,
        distance: el.distance,
        maxSpeed: el.maxSpeed,
        chargingTime: el.chargingTime,
      }));
      dispatch({
        type: GET_MORE_PRODUCTS_SUCCEEDED,
        newProducts,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_MORE_PRODUCTS_FAILED,
        payload: err,
      });
    });
};
export const clearNewProducts = () => (dispatch) => {
  dispatch({
    type: CLEAR_NEW_PRODUCTS,
    newProducts: [],
  });
}