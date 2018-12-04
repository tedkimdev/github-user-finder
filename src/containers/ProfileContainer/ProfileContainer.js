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
    const { userProfile, followers, repositories } = this.props;
    if (!userProfile) {
      //TODO:
      return <div>Error</div>;
    }
    return (
      <>
        <ProfileHeader userProfile={userProfile} />
        <div>
          <div>Repositories</div>
          <ul>
            {repositories.map(repository => (
              <li key={repository.node_id}>
                <p>{repository.name}</p>
                <p>{repository.forks_count}</p>
                <p>{repository.startgazers_count}</p>
                <p>{repository.watchers_count}</p>
                <p>{repository.language}</p>
                <p>{repository.html_url}</p>
              </li>
            ))}
          </ul>
          <div>Followers</div>
          <ul>
            {followers.map(follower => (
              <li key={follower.node_id}>
                <p>{follower.login}</p>
                <p>{follower.avatar_url}</p>
                <p>{follower.html_url}</p>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  userProfile: state.profile.userProfile,
  isLoading: state.profile.isLoading,
  followers: state.follower.followers,
  repositories: state.repository.repositories
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
