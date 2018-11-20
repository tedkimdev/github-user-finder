import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";

import { profileActions } from "../../store/ducks/profile";

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { match } = this.props;
    const { username } = match.params;

    console.log("componentDidMount", this.props.isLoading);
    this.props.getProfile(username);
  }

  render() {
    return <div>ProfileContainer</div>;
  }
}

const mapStateToProps = state => ({
  userProfile: state.profile.profile,
  isLoading: state.profile.isLoading
});

const mapDispatchToProps = dispatch => ({
  getProfile: username => {
    dispatch(profileActions.profileRequest(username));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProfileContainer));
