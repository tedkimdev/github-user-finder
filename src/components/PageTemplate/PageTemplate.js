import React from "react";
import styled, { css } from "styled-components";

import { navbarHeight } from "../../constants/sizes";
import rem from "../../utils/rem";
import { medium } from "../../utils/media";

import HeaderContainer from "../../containers/common/HeaderContainer";
import FooterContainer from "../../containers/common/FooterContainer";

const MainWrapper = styled.main`
  background: rgba(240, 240, 240);

  padding-top: ${rem(navbarHeight + 30)};

  ${medium(css`
    padding-top: ${rem(navbarHeight)};
  `)}
`;

const PageTemplate = ({ children }) => {
  return (
    <div>
      <HeaderContainer />
      <MainWrapper>{children}</MainWrapper>
      <FooterContainer />
    </div>
  );
};

export default PageTemplate;
