import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const _Link = ({ url, children }) => {
  return <StyledLink to={url}>{children}</StyledLink>;
};

export default _Link;
