import { takeLatest, call, put } from "redux-saga/effects";
import { profileActions, profileTypes } from "../store/ducks/profile";
import { followerActions } from "../store/ducks/follower";
import { repositoryActions } from "../store/ducks/repository";

import GitHubAPI from "../api/GitHubAPIService";

function* requestAdditionalInfomation(data) {
  yield put(repositoryActions.repositoryRequest(data.repos_url));
  yield put(followerActions.followerRequest(data.followers_url));
}

export function* getProfile(action) {
  const username = action.payload;

  const { response, error } = yield call(GitHubAPI.getProfile, username);

  if (response) {
    // console.log(response);
    yield put(profileActions.profileSuccess(response.data));
    yield* requestAdditionalInfomation(response.data);
  } else {
    // console.log(error);
    yield put(profileActions.profileFailure(error));
  }
}

export function* watchProfile() {
  yield takeLatest(profileTypes.PROFILE_REQUEST, getProfile);
}

const profileSaga = [watchProfile()];
export default profileSaga;
