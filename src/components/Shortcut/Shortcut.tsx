import React, { useState, useEffect } from "react";
import { useFetchRepo, useLocalStorage } from "../../hooks";
import popularRepos from "../../sample/popularRepos";
import { RepoItem, ScrollableDiv } from "./styles";
import { BsBookmark } from "react-icons/bs";
import { RiVipDiamondLine } from "react-icons/ri";
import Accordion from "../Accordion/Accordion";

interface Props {}

// TODOS: Need to fetch useFetch Repo
const Shortcut = (props: Props) => {
  const [storedValue] = useLocalStorage("REPOS", []);

  return (
    <ScrollableDiv>
      <Accordion title={"Saved Search"} defaultOpen={true}>
        <>
          {storedValue.map((repo: any) => (
            <ShortcutItem key={repo.repoName + repo.repoOwner} repo={repo} />
          ))}
        </>
      </Accordion>
      <Accordion title="Popular Repos" defaultOpen={true}>
        <>
          {popularRepos.map((repo: any) => (
            <ShortcutItem key={repo.repoName + repo.repoOwner} repo={repo} />
          ))}
        </>
      </Accordion>
      <Accordion title="About" defaultOpen={false}>
        <>
          <p>
            Opensource project to compare github's repositories & packages. Many
            improvements can be made & the scoring method may need a second
            opinion.
          </p>
          <p>Created by Ibrahim Yaacob.</p>
        </>
      </Accordion>
    </ScrollableDiv>
  );
};

export default Shortcut;

type ShortcutItemProp = {
  repo: any;
};

const ShortcutItem = (props: ShortcutItemProp) => {
  const [fetch, setFetch] = useState(false);
  const { repoOwner, repoName, packageMgr, packageName } = props.repo;
  useFetchRepo(repoOwner, repoName, packageMgr, packageName, fetch);
  useEffect(() => {
    if (fetch) {
      setFetch(false);
    }
  }, [fetch]);

  return (
    <RepoItem onClick={() => setFetch(true)}>
      {`# ${repoOwner}/${repoName}`}
    </RepoItem>
  );
};
