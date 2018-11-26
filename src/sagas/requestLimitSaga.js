import { put, take, takeLatest, select, call } from "redux-saga/effects";

import { repositoryActions } from "../store/modules/requestLimit";

import GitHubAPI from "../api/GitHubAPIService";

import { repositoryTypes } from "../store/modules/repository";
// import { searchTypes } from "../store/modules/search";
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
    //TODO: rate > 0 success
    if (true) {
      yield put(requestLimitActions.requestCountLimitNotExceed(normalizedData));
    } else {
      yield put(requestLimitActions.requestCountLimitExceed(normalizedData));
    }
    //TODO: rate == 0 failure
  } catch (err) {
    console.log(err);
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

const requestLimitSaga = [watchGetRequestLimit()];
export default requestLimitSaga;
