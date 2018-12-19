import React from "react";
import styled from "styled-components";

import { Eye } from "styled-icons/feather/Eye";
import { RepoForked } from "styled-icons/octicons/RepoForked";
import { Star } from "styled-icons/octicons/Star";

const Wrapper = styled.div``;

const RepoFooter = styled.div`
  display: flex;
`;

const RepoFooterItem = styled.div`
  display: flex;
  margin-right: 20px;
  line-height: 20px;
  & > p {
    margin-left: 4px;
  }
`;

const Repo = styled.div`
  display: block;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 10px 0;
  font-size: 16px;
  padding: 8px;
  background: white;
  a {
    text-decoration: none;
    font-size: 20px;
    h3 {
      font-weight: 800;

      color: #4078c0;

      display: inline-block;
      margin-bottom: 20px;
    }
    span {
      font-size: 16px;
      color: gray;
    }
  }
  & > p {
    margin-bottom: 20px;
  }
`;

const renderRepoFooterItem = (Icon, text) => (
  <RepoFooterItem>
    <Icon size="18" />
    <p>{text}</p>
  </RepoFooterItem>
);

const RepositoryList = ({ repositories }) => {
  return (
    <Wrapper>
      {repositories.map(repository => (
        <Repo key={repository.node_id}>
          <a href={repository.html_url}>
            <h3>{repository.name}</h3>
            {repository.fork && <span> (fork)</span>}
          </a>

          {repository.description && <p>{repository.description}</p>}

          <RepoFooter>
            {repository.language && (
              <RepoFooterItem>
                <span>●</span>
                <p>{repository.language}</p>
              </RepoFooterItem>
            )}
            {renderRepoFooterItem(Eye, repository.watchers_count)}
            {renderRepoFooterItem(Star, repository.stargazers_count)}
            {renderRepoFooterItem(RepoForked, repository.forks_count)}
          </RepoFooter>
        </Repo>
      ))}
    </Wrapper>
  );
};

export default RepositoryList;
