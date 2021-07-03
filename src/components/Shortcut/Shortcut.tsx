import React, { useState, useEffect } from "react";
import {
  useFetchRepo,
  useLocalStorage,
  useRepoLocalStorage,
} from "../../hooks";
import popularRepos from "../../sample/popularRepos";
import { RepoItem, ScrollableDiv } from "./styles";
import { BsBookmark, BsInfoCircle } from "react-icons/bs";
import { RiVipDiamondLine } from "react-icons/ri";
import Accordion from "../Accordion/Accordion";

interface Props {}

const Shortcut = (props: Props) => {
  // const [storedValue] = useLocalStorage("REPOS", []);
  const { repoLocalStorage } = useRepoLocalStorage();

  return (
    <ScrollableDiv>
      <Accordion title={"Saved Search"} defaultOpen={true} Icon={BsBookmark}>
        <>
          {repoLocalStorage.map((repo: any) => (
            <ShortcutItem key={repo.repoName + repo.repoOwner} repo={repo} />
          ))}
        </>
      </Accordion>
      <Accordion
        title="Popular Repos"
        defaultOpen={true}
        Icon={RiVipDiamondLine}
      >
        <>
          {popularRepos.map((repo: any) => (
            <ShortcutItem key={repo.repoName + repo.repoOwner} repo={repo} />
          ))}
        </>
      </Accordion>
      <Accordion title="About" defaultOpen={false} Icon={BsInfoCircle}>
        <>
          <p>
            Open source project to compare github's repositories & packages.
            Many improvements can be made & the scoring method may need a second
            opinion.
          </p>
          <p>
            Created by
            <a href="https://github.com/ibrahimyaacob92"> Ibrahim Yaacob</a>
          </p>
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
