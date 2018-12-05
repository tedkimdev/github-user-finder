import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";

import { profileActions } from "../../store/modules/profile";
import ProfileHeader from "../../components/ProfileHeader";

import styled, { css } from "styled-components";
import { medium, large } from "../../utils/media";

import CardUser from "../../components/CardUser";
import Link from "../../components/Link";

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
      flex: 0 40%;
    }
    ${FollowersWrapper} {
      flex: 0 40%;
    }
  `)};

  ${large(css`
    ${RepositoriesWrapper} {
      flex: 0 30%;
    }
    ${FollowersWrapper} {
      flex: 0 30%;
    }
  `)};
`;
const Wrapper = styled.div``;

class ProfileContainer extends Component {
  componentDidMount() {
    const { match } = this.props;
    const { username } = match.params;

    //TODO: click
    console.log("componentDidMount", this.props.isLoading);
    console.log("componentDidMount", username);
    this.props.getProfile(username);
  }

  componentDidUpdate(prevProps, prevState) {
    const prevUsername = prevProps.match.params.username;
    const { username } = this.props.match.params;
    console.log(prevUsername, username);
    if (prevUsername !== username) {
      this.props.getProfile(username);
    }
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
                <Link key={follower.node_id} url={follower.login}>
                  <StyledCardUser
                    bgPhoto={follower.avatar_url}
                    title={follower.login}
                    url={follower.html_url}
                  />
                </Link>
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
