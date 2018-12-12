import React from "react";

import PageTemplate from "../components/PageTemplate";
import ProfileContainer from "../containers/ProfileContainer/ProfileContainer";

const ProfilePage = ({ match }) => {
  return (
    <PageTemplate>
      <ProfileContainer {...match.params} />
    </PageTemplate>
  );
};

export default ProfilePage;
