export const ADD_PRODUCTS_TO_COMPARE = 'ADD_PRODUCTS_TO_COMPARE';
export const DELETE_PRODUCTS_FROM_COMPARE = 'DELETE_PRODUCTS_FROM_COMPARE';

export const addProductsToCompare = (product) => (dispatch) => {
  console.log(product);
  dispatch({
    type: ADD_PRODUCTS_TO_COMPARE,
    products: product,
  });
};
