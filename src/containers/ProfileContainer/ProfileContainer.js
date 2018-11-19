import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class ProfileContainer extends Component {
  render() {
    const { match } = this.props;
    console.log(match);
    return <div>ProfileContainer</div>;
  }
}

export default withRouter(ProfileContainer);
