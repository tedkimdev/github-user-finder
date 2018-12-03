import React from "react";

import PageTemplate from "../components/PageTemplate";
import SearchResultContainer from "../containers/SearchResultContainer";

const Home = () => {
  return (
    <PageTemplate>
      <SearchResultContainer />
    </PageTemplate>
  );
};

export default Home;
