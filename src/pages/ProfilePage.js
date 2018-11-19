import React from "react";

import PageTemplate from "../components/PageTemplate";
import ProfileContainer from "../containers/ProfileContainer/ProfileContainer";

const ProfilePage = () => {
  return (
    <PageTemplate>
      <div>ProfilePage</div>
      <ProfileContainer />
    </PageTemplate>
  );
};

export default ProfilePage;
