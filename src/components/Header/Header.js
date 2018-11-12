import React from "react";
import styled, { css } from "styled-components";
import { Github } from "styled-icons/fa-brands/Github";

import { mobile, phone } from '../../utils/media';
import rem from '../../utils/rem';

import { navbarHeight } from '../../constants/sizes';

import SearchForm from './SearchForm';

const GreyGithub = styled(Github)`
  color: grey;
  height: 2rem;
  width: 2rem;
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${rem(navbarHeight)};

  font-size: ${rem(18)};
  font-weight: 600;
  background: ${props => (props.transparent ? "transparent" : "black")};
  transition: background 300ms ease-out;
  color: white;
  padding: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-flow: row wrap;
`;
const StyledDiv = styled.div`

  padding: 0 0.5rem;
`;

const Header = ({onSearchRequest}) => {
  return (
    <Wrapper>
      <GreyGithub/>
      <StyledDiv>Search User via the GitHub API</StyledDiv>
      <SearchForm onSearchRequest={onSearchRequest}/>
    </Wrapper>
  );
};

export default Header;