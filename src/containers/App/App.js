import React, { Component } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import Home from "../../pages/Home";
import ProfilePage from "../../pages/ProfilePage";

import GlobalStyles from "../../styles/GlobalStyles";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/search" component={Home} />
          <Route path="/user/:username" component={ProfilePage} />
          <Redirect to="/search" />
          <GlobalStyles />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
