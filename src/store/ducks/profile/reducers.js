import { PROFILE_REQUEST, PROFILE_SUCCESS, PROFILE_FAILURE } from "./types";

const initialState = {
  error: null,
  isLoading: false,
  userProfile: {}
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_REQUEST:
      return Object.assign({}, state, {
        isLoading: true
      });
    case PROFILE_SUCCESS:
      return Object.assign({}, state, action.payload, {
        isLoading: false,
        userProfile: action.payload
      });
    case PROFILE_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.payload
      });
    default:
      return state;
  }
};

export default profileReducer;
