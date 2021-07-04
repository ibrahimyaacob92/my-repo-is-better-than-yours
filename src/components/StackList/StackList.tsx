import React from "react";
import { useRepoContext } from "../../context/RepoContext";
import { StackCard } from "../../components";
import { CardList } from "./styles";

interface Props {}

const StackList = (props: Props) => {
  const { repoData } = useRepoContext();
  // console.log(repoData);
  return (
    <CardList>
      {repoData.map((repo, index, repos) => (
        <StackCard
          repo={repo}
          index={index}
          key={repo.name + repo.owner}
          benchmark={repos[0]}
        />
      ))}
    </CardList>
  );
};

export default StackList;
