import { all } from "redux-saga/effects";

import { default as logSaga } from "./logSaga";
import { default as searchSaga } from "./searchSaga";

export default function* rootSaga() {
  yield all([...logSaga, ...searchSaga]);
}
