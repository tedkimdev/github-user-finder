import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const getSearchQuery = url => url.split("?")[1];

const createPagePath = query => {
  return `/search?${query}`;
};

const Pagination = ({ pagination, page }) => {
  if (!pagination) return null;

  return (
    <div>
      {pagination.first && (
        <Link to={createPagePath(getSearchQuery(pagination.first.url))}>
          first
        </Link>
      )}
      {pagination.prev && (
        <Link to={createPagePath(getSearchQuery(pagination.prev.url))}>
          prev
        </Link>
      )}
      <div>Page {page}</div>
      {pagination.next && (
        <Link to={createPagePath(getSearchQuery(pagination.next.url))}>
          next
        </Link>
      )}
      {pagination.last && (
        <Link to={createPagePath(getSearchQuery(pagination.last.url))}>
          last
        </Link>
      )}
    </div>
  );
};

export default Pagination;
