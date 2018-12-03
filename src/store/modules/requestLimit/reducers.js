import {
  REQUEST_COUNT_LIMIT_EXCEED,
  REQUEST_COUNT_LIMIT_NOT_EXCEED
} from "./types";

const initialState = {
  remaining: 60,
  core: 60,
  search: 10
};

const requestLimitReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_COUNT_LIMIT_EXCEED:
      return Object.assign({}, state, {
        ...action.payload
      });

    case REQUEST_COUNT_LIMIT_NOT_EXCEED:
      return Object.assign({}, state, {
        ...action.payload
      });

    default:
      return state;
  }
};

export default requestLimitReducer;
