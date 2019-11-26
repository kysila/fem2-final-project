import axios from 'axios';


// ACTIONS WITH OTHER FILTERS
export const GET_PRODUCTS_REQUESTED = 'GET_PRODUCTS_REQUESTED';
export const GET_PRODUCTS_SUCCEEDED = 'GET_PRODUCTS_SUCCEEDED';
export const GET_PRODUCTS_FAILED = 'GET_PRODUCTS_FAILED';


// action:
export const getProducts = (endpoint) => (dispatch) => {
  dispatch({
    type: GET_PRODUCTS_REQUESTED,
  });
  axios.get(endpoint)
    .then((data) => {
      const allProducts = data.data.products.map((el) => ({
        itemNo: el.itemNo,
        name: el.name,
        itemImg: el.imageUrls[0],
        imageUrls: el.imageUrls,
        price: el.currentPrice,
        url: `/products/${el.itemNo}`,
        rating: el.rating,
        id: el._id,
        distance: el.distance,
        maxSpeed: el.maxSpeed,
        chargingTime: el.chargingTime,
      }));
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
      // dispatch(enqueueSnackbar({
      //   message: err,
      //   options: {
      //     variant: 'error',
      //   },
      // }));
    });
};

export const getMoreProducts = (endpoint, existedProducts) => (dispatch) => {
  dispatch({
    type: GET_PRODUCTS_REQUESTED,
  });
  axios.get(endpoint)
    .then((data) => {
      const newProducts = data.data.products.map((el) => ({
        itemNo: el.itemNo,
        name: el.name,
        itemImg: el.imageUrls[0],
        imageUrls: el.imageUrls,
        price: el.currentPrice,
        url: `/products/${el.itemNo}`,
        rating: el.rating,
        id: el._id,
        distance: el.distance,
        maxSpeed: el.maxSpeed,
        chargingTime: el.chargingTime,
      }));
      const allProducts = [...existedProducts, ...newProducts];
      dispatch({
        type: GET_PRODUCTS_SUCCEEDED,
        allProducts,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_PRODUCTS_FAILED,
        payload: err.response.data,
      });
      // console.log('err', err);
      // dispatch(enqueueSnackbar({
      //   message: err,
      //   options: {
      //     variant: 'error',
      //   },
      // }));
    });
};
