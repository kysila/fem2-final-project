import {
  ADD_COMMENT,
  GET_COMMENTS,
} from './actions';

const initialState = {
  comments: [],
};

// REDUCER
function commentsReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_COMMENT:
      return {
        ...state,
      };
    case GET_COMMENTS:
      return {
        ...state,
        comments: payload,
      };
    default:
      return state;
  }
}

export default commentsReducer;
