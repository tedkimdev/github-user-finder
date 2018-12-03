import { put, take, takeLatest, select, call } from "redux-saga/effects";

import { repositoryActions } from "../store/modules/requestLimit";

import GitHubAPI from "../api/GitHubAPIService";

import { repositoryTypes } from "../store/modules/repository";
import { searchTypes } from "../store/modules/search";
import { profileTypes } from "../store/modules/profile";
import { followerTypes } from "../store/modules/follower";
import {
  requestLimitActions,
  requestLimitTypes
} from "../store/modules/requestLimit";

function* combineLatest(actionTypes, saga) {
  let actions = {};

  while (true) {
    const action = yield take(actionTypes);
    actions[action.type] = action;
    // console.log(
    //   "combineLatest",
    //   actionTypes.length,
    //   Object.keys(actions).length
    // );
    if (Object.keys(actions).length === actionTypes.length) {
      yield saga(actionTypes.map(type => actions[type]));
      actions = {};
    }
  }
}

export function* getRateLimit(actions) {
  console.log("getRateLimit", actions);
  try {
    const response = yield call(GitHubAPI.getRateLimit);
    console.log("getRateLimit", response.response.data);
    const data = response.response.data;

    const normalizedData = {
      remaining: data.rate.remaining,
      core: data.resources.core.remaining,
      search: data.resources.search.remaining
    };
    if (normalizedData.remaining > 0) {
      yield put(requestLimitActions.requestCountLimitNotExceed(normalizedData));
    } else {
      yield put(requestLimitActions.requestCountLimitExceed(normalizedData));
    }
  } catch (err) {
    console.log(err);
    yield put(requestLimitActions.requestCountLimitExceed(err));
  }
}

export function* watchGetRequestLimit() {
  const actionsTypes = [
    repositoryTypes.REPOSITORY_SUCCESS,
    profileTypes.PROFILE_SUCCESS,
    followerTypes.FOLLOWER_SUCCESS
  ];

  yield [
    combineLatest(actionsTypes, getRateLimit),
    // ...? here or in searchSaga..?
    // takeLatest(searchTypes.SEARCH_SUCCESS, getRateLimit),
    takeLatest(requestLimitTypes.REQUEST_LIMIT_REQUEST, getRateLimit)
  ];
}

export function* watchRequests() {
  const actionsTypes = [
    repositoryTypes.REPOSITORY_SUCCESS,
    profileTypes.PROFILE_SUCCESS,
    followerTypes.FOLLOWER_SUCCESS
  ];

  yield [
    combineLatest(actionsTypes, getRateLimit),
    // ...? here or in searchSaga..?
    // takeLatest(searchTypes.SEARCH_SUCCESS, getRateLimit),
    takeLatest(requestLimitTypes.REQUEST_LIMIT_REQUEST, getRateLimit)
  ];
}

export function* watchErrors() {
  yield [
    takeLatest(repositoryTypes.REPOSITORY_FAILURE, getRateLimit),
    takeLatest(profileTypes.PROFILE_FAILURE, getRateLimit),
    takeLatest(followerTypes.FOLLOWER_FAILURE, getRateLimit),
    takeLatest(searchTypes.SEARCH_FAILURE, getRateLimit)
  ];
}

const requestLimitSaga = [watchRequests(), watchErrors()];
export default requestLimitSaga;
