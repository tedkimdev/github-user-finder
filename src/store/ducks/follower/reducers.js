import { FOLLOWER_REQUEST, FOLLOWER_SUCCESS, FOLLOWER_FAILURE } from "./types";

const initialState = {
  error: null,
  isLoading: false,
  followers: []
};

const followerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOWER_REQUEST:
      return Object.assign({}, state, {
        isLoading: true
      });
    case FOLLOWER_SUCCESS:
      return Object.assign({}, state, action.payload, {
        isLoading: false,
        followers: action.payload
      });
    case FOLLOWER_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.payload
      });
    default:
      return state;
  }
};

export default followerReducer;
