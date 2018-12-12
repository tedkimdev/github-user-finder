import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

const Name = styled.h1`
  margin-right: 6px;
  font-size: 30px;
  font-weight: 600;
`;

const UserLink = styled.a`
  color: gray;
  text-decoration: none;
`;

const ProfileTitle = ({ name, userLink, username }) => {
  return (
    <Wrapper>
      {name && <Name>{name}</Name>}
      <p>
        <UserLink href={userLink}>@{username}</UserLink>
      </p>
    </Wrapper>
  );
};

export default ProfileTitle;
