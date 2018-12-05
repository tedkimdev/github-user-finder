import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Home from "../../pages/Home";
import ProfilePage from "../../pages/ProfilePage";

import GlobalStyles from "../../styles/GlobalStyles";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/search" component={Home} />
          <Route exact path="/user/:username" component={ProfilePage} />
          <Redirect to="/search" />
          <GlobalStyles />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
