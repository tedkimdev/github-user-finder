import { call, put, takeLatest } from "redux-saga/effects";
import {
  repositoryActions,
  repositoryTypes
} from "../store/modules/repository";

import GitHubAPI from "../api/GitHubAPIService";

export function* getRepositories(action) {
  const url = action.payload;
  const { response, error } = yield call(GitHubAPI.getDataFromURL, url, 8);

  if (response) {
    console.log(response);
    yield put(repositoryActions.repositorySuccess(response.data));
  } else {
    yield put(repositoryActions.repositoryFailure(error));
  }
}

function* watchRepositoryRequest() {
  yield takeLatest(repositoryTypes.REPOSITORY_REQUEST, getRepositories);
}

const repositorySaga = [watchRepositoryRequest()];
export default repositorySaga;
