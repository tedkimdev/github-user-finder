import React from "react";

import PageTemplate from "../components/PageTemplate";
import SearchResultContainer from "../containers/SearchResultContainer";

const Home = props => {
  return (
    <PageTemplate {...props}>
      <SearchResultContainer />
    </PageTemplate>
  );
};

export default Home;
