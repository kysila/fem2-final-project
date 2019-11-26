export const ADD_PRODUCTS_TO_COMPARE = 'ADD_PRODUCTS_TO_COMPARE';
export const SET_PRODUCT_MARKED = 'SET_PRODUCT_MARKED';
export const DELETE_PRODUCTS_FROM_COMPARE = 'DELETE_PRODUCTS_FROM_COMPARE';

export const addProductsToCompare = (product) => (dispatch) => {
  dispatch({
    type: ADD_PRODUCTS_TO_COMPARE,
    products: {
      ...product,
    },
  });
};

export const deleteProductsFromCompare = (product) => (dispatch) => {
  console.log('delete', product);
};
