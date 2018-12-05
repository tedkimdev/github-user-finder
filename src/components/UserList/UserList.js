import React from "react";
import UserItem from "./UserItem";

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
