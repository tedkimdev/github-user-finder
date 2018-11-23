import types from "./types";

export const requestCountLimitExceed = keyword => ({
  type: types.REQUEST_COUNT_LIMIT_EXCEED,
  payload: keyword
});

export const requestCountLimitNotExceed = result => ({
  type: types.REQUEST_COUNT_LIMIT_NOT_EXCEED,
  payload: result
});

export const requestSearchCountIncreased = () => ({
  type: types.REQUEST_SEARCH_COUNT_INCREASED
});

export const requestProfileCountIncreased = () => ({
  type: types.REQUEST_PROFILE_COUNT_INCREASED
});

export default {
  requestCountLimitExceed,
  requestCountLimitNotExceed,
  requestSearchCountIncreased,
  requestProfileCountIncreased
};
