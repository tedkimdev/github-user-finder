import {
  REPOSITORY_REQUEST,
  REPOSITORY_SUCCESS,
  REPOSITORY_FAILURE
} from "./types";

const initialState = {
  error: null,
  isLoading: false,
  repositories: []
};

const repositoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case REPOSITORY_REQUEST:
      return Object.assign({}, state, {
        isLoading: true
      });

    case REPOSITORY_SUCCESS:
      return Object.assign({}, state, action.payload, {
        isLoading: false,
        error: null
      });

    case REPOSITORY_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.payload
      });

    default:
      return state;
  }
};

export default repositoryReducer;
