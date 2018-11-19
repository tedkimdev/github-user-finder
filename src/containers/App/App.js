import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";

import Home from "../../pages/Home";
import ProfilePage from "../../pages/ProfilePage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/search" component={Home} />
          <Route exact path="/user/:username" component={ProfilePage} />
          <Redirect to="/search" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
