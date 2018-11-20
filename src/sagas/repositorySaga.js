import { call, put, select, takeLatest } from "redux-saga/effects";
import { repositoryActions, repositoryTypes } from "../store/ducks/repository";

import GitHubAPI from "../api/GitHubAPIService";

export function* getRepositories(action) {
  console.log("getRepositories", action);
  const url = action.payload;
  const { response, error } = yield call(GitHubAPI.getDataFromURL, url, 8);

  if (response) {
    console.log(response);
  } else {
    console.log(error);
  }
}

function* watchRepositoryRequest() {
  yield takeLatest(repositoryTypes.REPOSITORY_REQUEST, getRepositories);
}

const repositorySaga = [watchRepositoryRequest()];
export default repositorySaga;
