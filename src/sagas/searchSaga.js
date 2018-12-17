import { takeLatest, call, put } from "redux-saga/effects";
import { searchActions, searchTypes } from "../store/modules/search";
import { requestLimitActions } from "../store/modules/requestLimit";
import qs from "query-string";

import GitHubAPI from "../api/GitHubAPIService";

export function* searchUsersCallBack(action) {
  console.log(action);
  const { searchQuery } = action;

  yield GitHubAPI.searchUsersAsyncAwaitCallBack(searchQuery, result => {
    // do something
  });
}

export function* searchUsers(action) {
  const searchQuery = action.payload;
  const { response, error } = yield call(
    GitHubAPI.searchUsers,
    qs.parse(searchQuery)
  );

  if (response) {
    // console.log(response);
    const normalizedResponse = {
      users: response.data.users,
      totalResults: response.data.total_count,
      pagination: response.data.pagination
    };
    // console.log("@", normalizedResponse);
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
