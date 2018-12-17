import React from "react";
import styled, { css } from "styled-components";
import qs from "query-string";
import { PER_PAGE } from "../../api/GitHubAPIService";

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

export const pushURLWith = push => keyword => {
  push({
    pathname: "/search",
    search: `per_page=${PER_PAGE}&page=1&q=${keyword}`
  });
};

const PageTemplate = ({ children, history, location }) => {
  const { push } = history;
  const search = qs.parse(location.search);
  const searchKeyword = search.q;
  return (
    <div>
      <HeaderContainer
        onSubmit={pushURLWith(push)}
        searchKeyword={searchKeyword}
        searchQuery={qs.stringify(search)}
      />
      <MainWrapper>{children}</MainWrapper>
      <FooterContainer />
    </div>
  );
};

export default PageTemplate;
