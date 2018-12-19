import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";

import { profileActions } from "../../store/modules/profile";
import ProfileHeader from "../../components/ProfileHeader";

import styled, { css } from "styled-components";
import { medium, large } from "../../utils/media";

import CardUser from "../../components/CardUser";
import RepositoryList from "../../components/RepositoryList";
import Link from "../../components/Link";

const StyledCardUser = styled(CardUser)`
  height: 80px;
`;

const RepositoriesWrapper = styled.div`
  & > h2 {
    font-size: 24px;
    font-weight: 600;
  }
`;

const FollowersWrapper = styled.div`
  & > h2 {
    font-size: 24px;
    font-weight: 600;
  }
`;

const ProfileContent = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  ${RepositoriesWrapper} {
    padding: 12px;
    flex: 1 100%;
    box-sizing: border-box;
  }
  ${FollowersWrapper} {
    padding: 12px;
    flex: 1 100%;
    box-sizing: border-box;
  }

  ${medium(css`
    ${RepositoriesWrapper} {
      flex: 0 50%;
    }
    ${FollowersWrapper} {
      flex: 0 50%;
    }
  `)};

  ${large(css`
    ${RepositoriesWrapper} {
      flex: 0 40%;
    }
    ${FollowersWrapper} {
      flex: 0 40%;
    }
  `)};
`;

const Wrapper = styled.div``;

class ProfileContainer extends Component {
  componentDidMount() {
    const { username } = this.props;
    this.props.getProfile(username);
  }

  componentDidUpdate(prevProps, prevState) {
    //TODO: need to check whether call api twice?
    if (this.props.isLoading) return;
    if (this.props.error) return;
    const { username } = this.props;
    if (username !== this.props.userProfile.login) {
      this.props.getProfile(username);
      window.scrollTo(0, 0);
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
            <div>
              <RepositoryList repositories={repositories} />
            </div>
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

const mapStateToProps = state => {
  return {
    userProfile: state.profile.userProfile,
    isLoading: state.profile.isLoading,
    followers: state.follower.followers,
    repositories: state.repository.repositories,
    error: state.profile.error
  };
};

const mapDispatchToProps = dispatch => ({
  getProfile: username => {
    dispatch(profileActions.profileRequest(username));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileContainer);
