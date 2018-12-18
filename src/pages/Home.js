import React from "react";

import PageTemplate from "../components/PageTemplate";
import SearchResultContainer from "../containers/SearchResultContainer";

const Home = props => {
  const { location } = props;
  return (
    <PageTemplate {...props}>
      <SearchResultContainer location={location} />
    </PageTemplate>
  );
};

export default Home;
