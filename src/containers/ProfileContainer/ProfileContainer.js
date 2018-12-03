import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";

import { profileActions } from "../../store/modules/profile";
import ProfileHeader from "../../components/ProfileHeader";

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { match } = this.props;
    const { username } = match.params;

    // console.log("componentDidMount", this.props.isLoading);
    this.props.getProfile(username);
  }

  render() {
    const { userProfile } = this.props;
    if (!userProfile) {
      //TODO:
      return <div>Error</div>;
    }
    return (
      <>
        <ProfileHeader userProfile={userProfile} />
        <div>
          <div>Repositories</div>
          <div>Followers</div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  userProfile: state.profile.userProfile,
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
