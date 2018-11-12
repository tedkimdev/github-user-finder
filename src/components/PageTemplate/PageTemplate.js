import React from "react";
import styled from "styled-components";

import HeaderContainer from "../../containers/common/HeaderContainer";

import { navbarHeight } from "../../constants/sizes";
import rem from "../../utils/rem";

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
