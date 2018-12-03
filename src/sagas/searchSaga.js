import { takeLatest, call, put } from "redux-saga/effects";
import { searchActions, searchTypes } from "../store/modules/search";
import { requestLimitActions } from "../store/modules/requestLimit";

import GitHubAPI from "../api/GitHubAPIService";

export function* searchUsersCallBack(action) {
  console.log(action);
  const { keyword } = action;

  yield GitHubAPI.searchUsersAsyncAwaitCallBack(keyword, result => {
    // do something
  });
}

export function* searchUsers(action) {
  const keyword = action.payload;
  const { response, error } = yield call(GitHubAPI.searchUsers, keyword);

  if (response) {
    // console.log(response);
    const normalizedResponse = {
      users: response.data.users,
      totalResults: response.data.total_count,
      pagination: response.pagination
    };

    yield put(searchActions.searchSuccess(normalizedResponse));
  } else {
    // console.log(error);
    yield put(searchActions.searchFailure(error));
  }
}

export function* watchSearchUsers() {
  yield takeLatest(searchTypes.SEARCH_REQUEST, searchUsers);
}

const searchSaga = [watchSearchUsers()];
export default searchSaga;
