import React, { useState, useEffect } from "react";
import {
  useFetchRepo,
  useLocalStorage,
  useRepoLocalStorage,
} from "../../hooks";
import popularRepos from "../../sample/popularRepos";
import { RepoItem, ScrollableDiv, ContactsIcon } from "./styles";
import { BsBookmark, BsInfoCircle } from "react-icons/bs";
import { RiVipDiamondLine } from "react-icons/ri";
import { AiOutlineGithub } from "react-icons/ai";
import { BiCoffeeTogo } from "react-icons/bi";
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
            opinion. Created by
            <a href="https://github.com/ibrahimyaacob92"> Ibrahim Yaacob</a>
            <ContactsIcon>
              <a href="https://github.com/ibrahimyaacob92/my-repo-is-better-than-yours">
                <AiOutlineGithub />
              </a>
              <a href="https://www.buymeacoffee.com/myrepoisbetter">
                <BiCoffeeTogo />
              </a>
            </ContactsIcon>
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
  const { repoOwner, repoName, packageManager, packageName } = props.repo;
  useFetchRepo(repoOwner, repoName, packageManager, packageName, fetch);
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
