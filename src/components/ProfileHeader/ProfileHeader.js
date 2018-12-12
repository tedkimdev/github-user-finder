import React from "react";

import styled, { css } from "styled-components";
import { medium, large } from "../../utils/media";

import UserImage from "../UserList/UserImage";
import ProfileTitle from "./ProfileTitle";
import ProfileInfo from "./ProfileInfo";
import ProfileBottom from "./ProfileBottom";

const Wrapper = styled.div`
  margin: 10px auto;
  overflow: hidden;

  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  ${RightWrapper} {
    flex: 1 100%;
  }

  ${medium(css``)};

  ${large(css``)};
`;

const LeftWrapper = styled.div`
  width: 220px;
  height: 220px;
  flex: 0 0 220px;
  border-radius: 8px;
  overflow: hidden;
`;

const RightWrapper = styled.div`
  padding: 16px;

  box-sizing: border-box;
  width: auto;

  ${large(css`
    height: 220px;
    position: relative;
  `)};
`;

const ProfileBottomWrapper = styled(ProfileBottom)`
  ${large(css`
    position: absolute;
    bottom: 0;
  `)};
`;

const ProfileHeader = ({ userProfile }) => {
  return (
    <Wrapper>
      <LeftWrapper>
        <UserImage url={userProfile.avatar_url} name={userProfile.login} />
      </LeftWrapper>
      <RightWrapper>
        <ProfileTitle
          name={userProfile.name}
          userLink={userProfile.html_url}
          username={userProfile.login}
        />
        <ProfileInfo
          bio={userProfile.bio}
          company={userProfile.company}
          location={userProfile.location}
          blog={userProfile.blog}
        />
        <ProfileBottomWrapper
          repos={userProfile.public_repos}
          followers={userProfile.followers}
          following={userProfile.following}
          gists={userProfile.public_gists}
        />
      </RightWrapper>
    </Wrapper>
  );
};

export default ProfileHeader;
