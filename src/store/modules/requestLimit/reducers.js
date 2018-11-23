import {
  REQUEST_COUNT_LIMIT_EXCEED,
  REQUEST_COUNT_LIMIT_NOT_EXCEED,
  REQUEST_SEARCH_COUNT_INCREASED,
  REQUEST_PROFILE_COUNT_INCREASED
} from "./types";

const initialState = {
  core: {},
  search: {},
  rate: {}
};

const requestLimitReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_COUNT_LIMIT_EXCEED:
      return Object.assign({}, state, {
        payload: action.payload
      });

    case REQUEST_COUNT_LIMIT_NOT_EXCEED:
      return Object.assign({}, state, action.payload, {
        core: action.payload.profile,
        search: action.payload.search,
        rate: action.payload.rate
      });

    case REQUEST_SEARCH_COUNT_INCREASED:
      return state;
    //TODO: profile, search count increased

    case REQUEST_PROFILE_COUNT_INCREASED:
      return state;

    default:
      return state;
  }
};

export default requestLimitReducer;
