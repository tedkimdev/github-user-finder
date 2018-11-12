import React from "react";
import styled from "styled-components";

import { navbarHeight } from "../../constants/sizes";
import rem from "../../utils/rem";

import HeaderContainer from "../../containers/common/HeaderContainer";

const MainWrapper = styled.main`
  padding-top: ${rem(navbarHeight)};
`;

const PageTemplate = ({ children }) => {
  return (
    <div>
      <HeaderContainer />
      <MainWrapper>{children}</MainWrapper>
    </div>
  );
};

export default PageTemplate;
