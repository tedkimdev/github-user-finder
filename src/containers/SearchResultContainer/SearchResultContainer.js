import React from "react";
import UserList from "../../components/UserList";
import { connect } from "react-redux";

import styled from "styled-components";
import rem from "../../utils/rem";

const SearchResultCount = styled.div`
  margin: 0 auto;
  margin-top: 8px;
  text-align: center;
  font-size: ${rem(24)};
  font-weight: 600;
`;

// profile actions

const SearchResultContainer = ({ users, totalResults, pagination }) => {
  return (
    <React.Fragment>
      {users.length > 0 && (
        <SearchResultCount>Found {totalResults} users</SearchResultCount>
      )}
      <UserList users={users} />
      {users.length > 0 && (
        <div>
          {pagination.next.url && <div>next {pagination.next.url}</div>}
          {pagination.last.url && <div>last {pagination.last.url}</div>}
        </div>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return { ...state.search };
};

export default connect(
  mapStateToProps,
  null
)(SearchResultContainer);
