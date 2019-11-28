import axios from 'axios';
// import {enqueueSnackbar} from "../notification/actions";

// ACTIONS WITH CATEGORIES
export const GET_CATEGORIES_REQUESTED = 'GET_CATEGORIES_REQUESTED';
export const GET_CATEGORIES_SUCCEEDED = 'GET_CATEGORIES_SUCCEEDED';
export const GET_CATEGORIES_FAILED = 'GET_CATEGORIES_FAILED';

export const getCategories = () => (dispatch) => {
  dispatch({
    type: GET_CATEGORIES_REQUESTED,
  });
  axios.get('/catalog')
    .then((categories) => {
      const categoriesOptions = categories.data.map((category) => ({
        id: category.id,
        name: category.name,
        imgUrl: category.imgUrl,
        cols: category.cols,
      }));
      dispatch({
        type: GET_CATEGORIES_SUCCEEDED,
        categories: categoriesOptions,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_CATEGORIES_FAILED,
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
