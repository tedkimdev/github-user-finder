import React from "react";

import PageTemplate from "../components/PageTemplate";
import UserListContainer from "../containers/UserListContainer";

const Home = () => {
  return (
    <PageTemplate>
      <div>Home~!</div>
      <UserListContainer />
    </PageTemplate>
  );
};

export default Home;
