import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import UserImage from "./UserImage";

import { mobile, phone } from "../../utils/media";
import rem from "../../utils/rem";

const StyledLink = styled(Link)`
  flex: 1 1 calc(100% / 4 - 40px);
  max-width: calc(100% / 4 - 40px);
  ${mobile(
    css`
      flex: 1 1 calc(100% / 3 - 32px);
      max-width: calc(100% / 3 - 32px);
    `
  )};
  ${phone(
    css`
      flex-basis: calc(100% - 16px);
      max-width: calc(100% - 16px);
    `
  )};

  display: flex;
  background: lightGrey;
  border-radius: 8px;
  align-items: center;
  text-decoration: none;
  margin: 4px;
  padding: 4px;
`;

const UserImageContainer = styled.div`
  width: 128px;
  height: 128px;
  margin-right: 1rem;
  flex-shrink: 0;
`;

const StyledDiv = styled.div`
  overflow: hidden;
`;

const UserItem = ({ user }) => {
  return (
    <StyledLink to={user.login}>
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
