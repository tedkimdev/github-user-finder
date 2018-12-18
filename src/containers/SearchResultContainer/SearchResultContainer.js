import React from "react";
import UserList from "../../components/UserList";
import { connect } from "react-redux";
import qs from "query-string";

import styled from "styled-components";
import rem from "../../utils/rem";
import { navbarHeight } from "../../constants/sizes";

import Pagination from "../../components/Pagination";

const SearchResultCount = styled.div`
  margin: 0 auto;
  margin-top: 8px;
  text-align: center;
  font-size: ${rem(24)};
  font-weight: 600;
`;

const NoContent = styled.div`
  height: calc(100vh - ${rem(navbarHeight)} - 20px);
`;

// profile actions

const SearchResultContainer = ({
  users,
  totalResults,
  pagination,
  location
}) => {
  const search = qs.parse(location.search);
  return (
    <React.Fragment>
      {search.q ? (
        <React.Fragment>
          <SearchResultCount>{`'${
            search.q
          }' Found ${totalResults} users`}</SearchResultCount>
          <UserList users={users} />
          <Pagination pagination={pagination} page={search.page} />
        </React.Fragment>
      ) : (
        <NoContent />
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
