import React from "react";
import styled, { css } from "styled-components";
import { Github } from "styled-icons/fa-brands/Github";
import { Link } from "react-router-dom";

import { medium } from "../../utils/media";
import rem from "../../utils/rem";

import { navbarHeight } from "../../constants/sizes";

import SearchForm from "./SearchForm";

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
  height: ${rem(navbarHeight + 30)};

  ${medium(css`
    height: ${rem(navbarHeight)};
  `)}

  font-size: ${rem(18)};
  font-weight: 600;
  background: ${props => (props.transparent ? "transparent" : "black")};
  transition: background 300ms ease-out;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-flow: row wrap;
`;
const StyledDiv = styled.div`
  padding: 0 0.5rem;
`;

const Header = ({ onSubmit }) => {
  return (
    <Wrapper>
      <Link to="/">
        <GreyGithub />
      </Link>
      <StyledDiv>Search User via the GitHub API</StyledDiv>
      <SearchForm onSubmit={onSubmit} />
    </Wrapper>
  );
};

export default Header;
