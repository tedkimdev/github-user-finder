import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";

import { profileActions } from "../../store/modules/profile";
import ProfileHeader from "../../components/ProfileHeader";

import styled, { css } from "styled-components";
import { medium, large } from "../../utils/media";

import CardUser from "../../components/CardUser";

const StyledCardUser = styled(CardUser)`
  height: 80px;
`;
const RepositoriesWrapper = styled.div`
  & > h2 {
  }
  ${medium(css``)};
`;

const FollowersWrapper = styled.div`
  & > h2 {
  }
  & > div {
    background: blue;
  }
`;

const ProfileContent = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  ${RepositoriesWrapper} {
    padding: 12px;
    flex: 1 100%;
    background: gold;
  }
  ${FollowersWrapper} {
    padding: 12px;
    flex: 1 100%;
    background: green;
  }

  ${medium(css`
    ${RepositoriesWrapper} {
      flex: 1 40%;
    }
    ${FollowersWrapper} {
      flex: 1 40%;
    }
  `)};
`;
const Wrapper = styled.div``;

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
      <Wrapper>
        <ProfileHeader userProfile={userProfile} />
        <ProfileContent>
          <RepositoriesWrapper>
            <h2>Repositories</h2>
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
          </RepositoriesWrapper>
          <FollowersWrapper>
            <h2>Followers</h2>
            <div>
              {followers.map(follower => (
                <StyledCardUser
                  key={follower.node_id}
                  bgPhoto={follower.avatar_url}
                  title={follower.login}
                  url={follower.html_url}
                />
              ))}
            </div>
          </FollowersWrapper>
        </ProfileContent>
      </Wrapper>
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
