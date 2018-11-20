import React from "react";

import PageTemplate from "../components/PageTemplate";
import UserListContainer from "../containers/UserListContainer";

const Home = () => {
  return (
    <PageTemplate>
      <UserListContainer />
    </PageTemplate>
  );
};

export default Home;
