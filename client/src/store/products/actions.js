import axios from 'axios';
import React from 'react';

// ACTIONS WITH OTHER FILTERS
export const GET_PRODUCTS_REQUESTED = 'GET_PRODUCTS_REQUESTED';
export const GET_PRODUCTS_SUCCEEDED = 'GET_PRODUCTS_SUCCEEDED';
export const GET_PRODUCTS_FAILED = 'GET_PRODUCTS_FAILED';


// action:
export const getProducts = () => (dispatch) => {

  dispatch({
    type: GET_PRODUCTS_REQUESTED,
  });
  axios.get('/products')
    .then((data) => {
      console.log('data in axios get in products actions.js', data);
      const allProducts = data.data.map((el) => ({
        itemNo: el.itemNo,
        name: el.name,
        itemImg: el.imageUrls[0],
        price: el.currentPrice,
        url: `/products/${el.itemNo}`,
        rating: el.rating,
      }));
      console.log('allProducts',allProducts);
      const loadMoreArrays = () => {
        const size = 8;
        const productLoadMoreArraysQuantity = Math.ceil(allProducts.length / size);
        console.log('productLoadMoreArraysQuantity', productLoadMoreArraysQuantity);
        const loadMoreArray = [];
        for (let i = 0; i < productLoadMoreArraysQuantity; i++) {
          loadMoreArray[i] = allProducts.slice((i * size), (i * size) + size);
        }
        return loadMoreArray;
      };
      const allProductsArrays = loadMoreArrays();
      dispatch({
        type: GET_PRODUCTS_SUCCEEDED,
        allProducts,
        allProductsArrays,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_PRODUCTS_FAILED,
        // payload: err.response.data.message,
      });
    });
};
