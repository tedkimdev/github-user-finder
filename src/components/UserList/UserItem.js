import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import UserImage from "./UserImage";

import { medium, large } from "../../utils/media";
import rem from "../../utils/rem";

const StyledLink = styled(Link)`
  flex: 1 1 calc(100% - 40px);

  box-sizing: border-box;

  ${medium(
    css`
      flex: 1 1 360px;
    `
  )};
  ${large(
    css`
      flex: 0 0 360px;
    `
  )};

  display: flex;
  border-radius: 8px;
  align-items: center;
  text-decoration: none;
  overflow: hidden;
  background: white;
  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.07);
  margin: 4px;
`;

const UserImageContainer = styled.div`
  width: 128px;
  height: 128px;
  margin-right: 1rem;
  flex-shrink: 0;
`;

const StyledDiv = styled.div`
  overflow: hidden;
  color: black;
  font-size: ${rem(24)};
`;

const UserItem = ({ user }) => {
  return (
    <StyledLink to={`/user/${user.login}`}>
      <UserImageContainer>
        <UserImage url={user.avatar_url} name={user.login} />
      </UserImageContainer>
      <StyledDiv>
        <p>{user.login}</p>
      </StyledDiv>
    </StyledLink>
  );
};

export default UserItem;
