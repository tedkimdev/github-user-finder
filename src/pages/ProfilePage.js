import React from "react";

import PageTemplate from "../components/PageTemplate";
import ProfileContainer from "../containers/ProfileContainer/ProfileContainer";

const ProfilePage = ({ match, history, location }) => {
  return (
    <PageTemplate history={history} location={location}>
      <ProfileContainer {...match.params} />
    </PageTemplate>
  );
};

export default ProfilePage;
