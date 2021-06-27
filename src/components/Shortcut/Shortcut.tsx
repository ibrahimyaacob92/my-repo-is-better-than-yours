import React, { useState, useEffect } from "react";
import { useFetchRepo, useLocalStorage } from "../../hooks";
import popularRepos from "../../sample/popularRepos";

interface Props {}

// TODOS: Need to fetch useFetch Repo
const Shortcut = (props: Props) => {
  const [storedValue] = useLocalStorage("REPOS", []);

  return (
    <>
      <div>
        <h3>Saved Searches</h3>
        {storedValue.map((repo: any) => (
          <ShortcutItem repo={repo} />
        ))}
      </div>
      <div>
        <h3>Popular Repos</h3>
        {popularRepos.map((repo: any) => (
          <ShortcutItem repo={repo} />
        ))}
      </div>
    </>
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

  return <p onClick={() => setFetch(true)}> {`${repoOwner}/${repoName}`} </p>;
};
