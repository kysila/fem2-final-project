import {
  GET_CATEGORIES_SUCCEEDED,
  GET_CATEGORIES_REQUESTED,
  GET_CATEGORIES_FAILED,
} from './actions';

const initialState = {
  isCatalogFetching: false,
  categories: [],
  errorMsg: '',
};
function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES_REQUESTED:
      return {
        ...state,
        isCatalogFetching: true,
      };
    case GET_CATEGORIES_SUCCEEDED:
      return {
        ...state,
        categories: action.categories,
        isCatalogFetching: false,
        errorMsg: '',
      };
    case GET_CATEGORIES_FAILED:
      return {
        ...state,
        sCatalogFetching: true,
        errorMsg: action.payload,
      };

    default:
      return { ...state };
  }
}

export default categoryReducer;