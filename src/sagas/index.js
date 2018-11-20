import { all } from "redux-saga/effects";

import { default as logSaga } from "./logSaga";
import { default as searchSaga } from "./searchSaga";
import { default as profileSaga } from "./profileSaga";

export default function* rootSaga() {
  yield all([...logSaga, ...searchSaga, ...profileSaga]);
}
