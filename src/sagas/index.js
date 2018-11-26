import { all } from "redux-saga/effects";

import { default as logSaga } from "./logSaga";
import { default as searchSaga } from "./searchSaga";
import { default as profileSaga } from "./profileSaga";
import { default as followerSaga } from "./followerSaga";
import { default as repositorySaga } from "./repositorySaga";
import { default as requestLimitSaga } from "./requestLimitSaga";

export default function* rootSaga() {
  yield all([
    ...logSaga,
    ...searchSaga,
    ...profileSaga,
    ...followerSaga,
    ...repositorySaga,
    ...requestLimitSaga
  ]);
}
