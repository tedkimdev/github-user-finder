import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import UserImage from "./UserImage";

const StyledLink = styled(Link)`
  display: flex;
  background: lightGrey;
  border-radius: 8px;
  align-items: center;
  text-decoration: none;
  flex-basis: calc(100% / 4 - 32px);
  margin: 4px;
  padding: 4px;
`;

const UserImageContainer = styled.div`
  width: 128px;
  height: 128px;
  margin-right: 1rem;
`;

const UserItem = ({ user }) => {
  return (
    <StyledLink to={user.login}>
      <UserImageContainer>
        <UserImage url={user.avatar_url} name={user.login} />
      </UserImageContainer>
      <div>
        <p>{user.login}</p>
      </div>
    </StyledLink>
  );
};

export default UserItem;
