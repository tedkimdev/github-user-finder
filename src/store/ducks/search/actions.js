import types from "./types";

export const searchRequest = keyword => ({
  type: types.SEARCH_REQUEST,
  payload: keyword
});

export const searchSuccess = (result) => ({
  type: types.SEARCH_SUCCESS,
  payload: result
});
export const searchFailure = (error) => ({
  type: types.SEARCH_FAILURE,
  payload: error
});

export default {
  searchRequest,
  searchSuccess,
  searchFailure
};
