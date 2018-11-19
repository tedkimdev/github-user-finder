import types from "./types";

export const repositoryRequest = value => ({
  type: types.REPOSITORY_REQUEST,
  payload: value
});
export const repositorySuccess = result => ({
  type: types.REPOSITORY_SUCCESS,
  payload: result
});
export const repositoryFailure = error => ({
  type: types.REPOSITORY_FAILURE,
  payload: error
});

export default {
  repositoryRequest,
  repositorySuccess,
  repositoryFailure
};
