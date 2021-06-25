import React from "react";
import { RepoData } from "../../types";

interface Props {
  repo: RepoData;
}

const StackCard = ({ repo }: Props) => {
  return (
    <div key={repo.createdAt}>
      <a href={repo.url}>
        <img src={repo.avatar} alt={repo.name} />
      </a>
      <p>{repo.name}</p>
      <p>{repo.owner}</p>
      <p>{repo.language}</p>
      <p>{`Created On ${new Date(repo.createdAt).toString()}`}</p>
      <p>{`Last Updated On ${new Date(repo.lastUpdate).toString()}`}</p>
      <p>{`${repo.watch} watches`}</p>
      <p>{`${repo.stars} stars`}</p>
      <p>{`${repo.openIssues} issues opened`}</p>
      <p>{`${repo.totalIssues - repo.openIssues} issues closed`}</p>
      <p>{`${repo.lastMonthDonwloads} has been downloaded last monht`}</p>
      <p>{repo.url}</p>
    </div>
  );
};

export default StackCard;
