import types from "./types";

export const repositoryRequest = url => ({
  type: types.REPOSITORY_REQUEST,
  payload: url
});
export const repositorySuccess = repositories => ({
  type: types.REPOSITORY_SUCCESS,
  payload: repositories
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
