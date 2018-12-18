import React from "react";

const RepositoryList = ({ repositories }) => {
  return (
    <ul>
      {repositories.map(repository => (
        <li key={repository.node_id}>
          <p>{repository.name}</p>
          <p>{repository.forks_count}</p>
          <p>{repository.startgazers_count}</p>
          <p>{repository.watchers_count}</p>
          <p>{repository.language}</p>
          <p>{repository.html_url}</p>
        </li>
      ))}
    </ul>
  );
};

export default RepositoryList;
