import React from "react";
import UserItem from "./UserItem";

import { medium, large } from "../../utils/media";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  ${medium()};

  ${large(css`
    padding: 0 10%;
  `)};
`;

const UserList = ({ users }) => {
  return (
    <Wrapper>
      {users.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </Wrapper>
  );
};

export default UserList;
