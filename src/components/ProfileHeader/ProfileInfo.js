import React from "react";
import styled from "styled-components";
import { LocationOn } from "styled-icons/material/LocationOn";
import { Link } from "styled-icons/fa-solid/Link";
import { Work } from "styled-icons/material/Work";
import { UserCircle } from "styled-icons/fa-solid/UserCircle";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 6px 0;
`;

const StyeldLi = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 6px;

  &:last-child {
    margin-bottom: 0px;
  }
`;

const StyeldA = styled.a`
  color: gray;
  text-decoration-line: none;
`;

const renderIcon = Icon => <Icon style={{ marginRight: 6 }} size="18" />;

const renderBio = text => (
  <div style={{ marginBottom: 6 }}>
    {renderIcon(UserCircle)}
    {text}
  </div>
);

const renderLocation = text => (
  <StyeldLi>
    {renderIcon(LocationOn)}
    <p>{text}</p>
  </StyeldLi>
);

const renderLink = link => (
  <StyeldLi>
    <p>
      {renderIcon(Link)}
      <StyeldA href={link}>{link}</StyeldA>
    </p>
  </StyeldLi>
);

const renderCompany = text => (
  <StyeldLi>
    {renderIcon(Work)}
    <p>{text}</p>
  </StyeldLi>
);

const ProfileInfo = ({ bio, company, location, blog }) => {
  return (
    <Wrapper>
      {bio && renderBio(bio)}
      <ul>
        {company && renderCompany(company)}
        {location && renderLocation(location)}
        {blog && renderLink(blog)}
      </ul>
    </Wrapper>
  );
};

export default ProfileInfo;
