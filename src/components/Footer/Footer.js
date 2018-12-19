import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  border-top: 1px solid black;
  position: relative;
  height: 20px;
  line-height: 20px;
  ul {
    float: right;
    list-style: none;
    padding: 0;
    font-size: 12px;
    text-transform: uppercase;
  }
  li {
    display: inline-block;
    margin-right: 20px;
  }
`;

const Footer = ({ requestLimit }) => {
  return (
    <StyledFooter>
      <ul>
        <li>API REQUEST</li>
        <li>total: {requestLimit.remaining}</li>
        <li>core: {requestLimit.core}</li>
        <li>search: {requestLimit.search}</li>
      </ul>
    </StyledFooter>
  );
};

export default Footer;
