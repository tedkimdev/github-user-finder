import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE } from "./types";

const initialState = {
  error: null,
  isLoading: false,
  users: [],
  pagination: null,
  totalResults: 0
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return Object.assign({}, state, {
        isLoading: true
      });

    case SEARCH_SUCCESS:
      return Object.assign({}, state, action.payload, {
        isLoading: false,
        error: null
      });

    case SEARCH_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.payload
      });

    default:
      return state;
  }
};

export default searchReducer;
