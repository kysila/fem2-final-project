import axios from 'axios';
import { enqueueSnackbar } from '../notification/actions';
import {
  GET_SEARCH_REQUESTED,
  GET_SEARCH_SUCCEEDED,
  SET_SEARCHPRODUCTS,
  SET_SEARCHVALUE,
} from './searchReducer';

// ACTIONS
export const setSearchValue = (payload) => ({
  type: SET_SEARCHVALUE,
  payload,
});

export const setSearchProducts = (payload) => (dispatch) => {
  const searchPhrases = {
    query: payload,
  };
  dispatch({
    type: GET_SEARCH_REQUESTED,
  });
  axios.post('/products/search', searchPhrases)
    .then((result) => {
      dispatch({
        type: SET_SEARCHPRODUCTS,
        payload: result.data,
      });
    }).then(() => dispatch({
      type: GET_SEARCH_SUCCEEDED,
    })).catch((err) => {
      dispatch(enqueueSnackbar({
        message: err.response.data.message,
        options: {
          variant: 'error',
        },
      }));
    });
};
