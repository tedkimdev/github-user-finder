import React from "react";

import styled from "styled-components";

import UserImage from "../UserList/UserImage";

const Wrapper = styled.div`
  width: 960px;
  margin: 10px auto;
  overflow: hidden;
`;

const LeftWrapper = styled.div`
  width: 220px;
  height: 220px;
  float: left;
`;

const RightWrapper = styled.div`
  width: 730px;
  float: right;
`;

const ProfileHeader = ({ userProfile }) => {
  console.log(userProfile);
  return (
    <Wrapper>
      <LeftWrapper>
        <UserImage url={userProfile.avatar_url} name={userProfile.login} />
      </LeftWrapper>
      <RightWrapper>
        <div>
          <h1>{userProfile.name}</h1>
          <p>{userProfile.login}</p>
        </div>
        <div>
          <p>{userProfile.bio}</p>
        </div>
        <div>
          <ul>
            <li>{userProfile.location}</li>
            <li>{userProfile.company}</li>
            <li>{userProfile.blog}</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              {userProfile.public_repos} <p>repositories</p>
            </li>
            <li>
              {userProfile.followers} <p>followers</p>
            </li>
            <li>
              {userProfile.following} <p>following</p>
            </li>
            <li>
              {userProfile.public_gists} <p>gists</p>
            </li>
          </ul>
        </div>
      </RightWrapper>
    </Wrapper>
  );
};

export default ProfileHeader;
