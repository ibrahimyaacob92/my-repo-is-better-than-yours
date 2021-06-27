import React, { useEffect, useState } from "react";
import useFetchRepo, { PackageManager } from "../../hooks/useFetchRepo";

const DELIM = "/";
const packageManagers = ["npm", "pypi"];

interface Props {}

const StackInput = (props: Props) => {
  const [repo, setRepo] = useState("");
  const [packageMgr, setPackageMgr] = useState("");
  const [repoErr, setRepoErr] = useState(false);
  const [packageMgrErr, setPackageMgrErr] = useState(false);
  const [fetch, setFetch] = useState(false);

  // TODO : concatenate the
  const buttonEnable: boolean =
    packageMgrErr && repoErr && !!(packageMgr && repo);
  const [repoOwner, repoName] = repo.split(DELIM);
  const [packageManager, packageName] = packageMgr.split(DELIM);
  const { errors } = useFetchRepo(
    repoOwner,
    repoName,
    packageManager as PackageManager,
    packageName,
    fetch
  );

  const handleOnClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setFetch(true);
  };

  useEffect(() => {
    if (!errors.first) {
      setRepo("");
      setPackageMgr("");
    }
  }, [errors]);

  useEffect(() => {
    if (fetch) {
      setFetch(false);
    }
  }, [fetch]);

  useEffect(() => {
    const evalString = (str: string): boolean => {
      if (!str.includes(DELIM)) return false;
      const [left, right] = str.split(DELIM);
      if (left && right) return true;
      return false;
    };
    const setStateIfNeeded = (current: any, previous: any, setState: any) => {
      if (current !== previous) {
        setState(current);
      }
    };
    setStateIfNeeded(evalString(repo), repoErr, setRepoErr);
    setStateIfNeeded(evalString(packageMgr), packageMgrErr, setPackageMgrErr);
  }, [repo, packageMgr]);

  // TODO: Add autosuggest to the field
  // TODO: Implement Error Color Stuff
  return (
    <form>
      <div>
        <label>Repo Owner & Name</label>
        <input
          value={repo}
          onChange={(e) => setRepo(e.target.value)}
          placeholder="facebook/react"
        />
      </div>
      <div>
        <label>Package Manager & Name</label>
        <input
          value={packageMgr}
          onChange={(e) => setPackageMgr(e.target.value)}
          placeholder="npm/react"
          list="packageSuggestion"
        />
        <datalist id="packageSuggestion">
          {packageManagers.map((pkgName) => (
            <option value={`${pkgName}/${repoName || ""}`} />
          ))}
        </datalist>
      </div>
      <button
        type="submit"
        disabled={!buttonEnable}
        onClick={(e) => handleOnClick(e)}
      >
        Open
      </button>
      <p>
        {Object.entries(errors).map(([errorKey, errorMsg], idx) => (
          <p key={idx}>{errorMsg}</p>
        ))}
      </p>
    </form>
  );
};

export default StackInput;
