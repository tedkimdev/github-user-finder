import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const getSearchQuery = url => url.split("?")[1];

const createPagePath = query => {
  return `/search?${query}`;
};

const Wrapper = styled.div`
  width: 400px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;

  box-sizing: border-box;

  div {
    font-size: 0.85rem;
    text-align: center;
    font-weight: 600;
    color: black;
    flex: 1;
  }
`;

const StyledLink = styled(Link)`
  flex: 1;

  font-weight: 600;
  font-size: 0.9rem;
  color: rgb(117, 117, 117);
  user-select: none;
  text-align: center;

  &:hover {
    color: rgb(150, 150, 150);
  }
`;

const Pagination = ({ pagination, page }) => {
  if (!pagination) return null;

  return (
    <Wrapper>
      {pagination.first ? (
        <StyledLink to={createPagePath(getSearchQuery(pagination.first.url))}>
          first
        </StyledLink>
      ) : (
        <div />
      )}
      {pagination.prev ? (
        <StyledLink to={createPagePath(getSearchQuery(pagination.prev.url))}>
          prev
        </StyledLink>
      ) : (
        <div />
      )}
      <div>Page {page}</div>
      {pagination.next ? (
        <StyledLink to={createPagePath(getSearchQuery(pagination.next.url))}>
          next
        </StyledLink>
      ) : (
        <div />
      )}
      {pagination.last ? (
        <StyledLink to={createPagePath(getSearchQuery(pagination.last.url))}>
          last
        </StyledLink>
      ) : (
        <div />
      )}
    </Wrapper>
  );
};

export default Pagination;
