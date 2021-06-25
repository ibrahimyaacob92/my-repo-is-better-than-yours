import React from "react";
import { useRepoContext } from "../../context/RepoContext";
import { StackCard } from "../../components";

interface Props {}

const StackList = (props: Props) => {
  const { repoData } = useRepoContext();
  console.log(repoData);
  return (
    <div>
      {repoData.map((repo) => (
        <StackCard repo={repo} key={repo.name + repo.owner} />
      ))}
    </div>
  );
};

export default StackList;
