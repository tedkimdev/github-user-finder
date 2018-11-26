import types from "./types";

export const requestLimitRequest = () => ({
  type: types.REQUEST_LIMIT_REQUEST
});

export const requestCountLimitExceed = result => ({
  type: types.REQUEST_COUNT_LIMIT_EXCEED,
  payload: result
});

export const requestCountLimitNotExceed = result => {
  return {
    type: types.REQUEST_COUNT_LIMIT_NOT_EXCEED,
    payload: result
  };
};

export const requestSearchCountIncreased = () => ({
  type: types.REQUEST_SEARCH_COUNT_INCREASED
});

export const requestProfileCountIncreased = () => ({
  type: types.REQUEST_PROFILE_COUNT_INCREASED
});

export default {
  requestLimitRequest,
  requestCountLimitExceed,
  requestCountLimitNotExceed,
  requestSearchCountIncreased,
  requestProfileCountIncreased
};
