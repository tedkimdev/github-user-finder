import React from "react";
import UserList from "../../components/UserList";
import { connect } from "react-redux";

// profile actions

const SearchResultContainer = ({ users, totalResults, pagination }) => {
  return (
    <>
      {users.length > 0 && <div>Found {totalResults} users</div>}
      <UserList users={users} />
      {users.length > 0 && (
        <div>
          <div>next {pagination.next.url}</div>
          <div>last {pagination.last.url}</div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return { ...state.search };
};

export default connect(
  mapStateToProps,
  null
)(SearchResultContainer);
