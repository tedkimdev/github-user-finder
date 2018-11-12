import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./containers/App";
import configure from "./store/configure";
import rootSaga from "./sagas";

import * as serviceWorker from "./serviceWorker";

const store = configure();
store.runSaga(rootSaga);

store.subscribe(() => {
  console.log(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
