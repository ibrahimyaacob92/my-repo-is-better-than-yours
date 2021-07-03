import axios from "axios";
import { useEffect, useState } from "react";
import { useRepoContext } from "../context/RepoContext";
import { RepoData } from "../types";
import { sample } from "../sample/repoData";
import { dateDiff, scoring } from "../utils";

// const dummyUrl = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
type NPMDownloadPeriod = "last-month" | "last-week" | "last-day";
type FetchError = {
  first: string | null;
  second: string | null;
  third: string | null;
  fourth: string | null;
};
export type PackageManager = "npm" | "pypi" | "rubyGems" | "composer";

/** This hook fetch data from API, restructure it and & push it to global context */
const useFetchRepo = (
  repoOwner: string,
  repoName: string,
  packageMgr: PackageManager,
  packageName: string,
  fetchNow: boolean
) => {
  const [repoData, setRepoData] = useState<RepoData | null>(null);
  const [errors, setErrors] = useState<FetchError>({
    first: null,
    second: null,
    third: null,
    fourth: null,
  });
  const [isLoading, setIsLoading] = useState(true);
  const { dispatchRepo, repoData: repoList } = useRepoContext();

  const fetchGitRepo = async () => {
    let _repoData: { [key: string]: any } | null = null;
    let _errors = {} as FetchError;
    try {
      // First request to get the main
      console.log("#1 Requesting to Github API..");
      const { data } = await axios.get(gitRepoURL(repoOwner, repoName));
      console.log(data);
      const toAppend = {
        name: data.name,
        owner: data.owner.login,
        avatar: data.owner.avatar_url,
        url: data.html_url,
        forks: data.forks,
        language: data.language,
        stars: data.stargazers_count,
        openIssues: data.open_issues_count,
        watch: data.subscribers_count,
        createdAt: data.created_at,
        lastUpdate: data.updated_at,
        repoSize: data.size,
        minimize: false,
      };
      _repoData = { ...toAppend };
    } catch (error) {
      console.log("error at fetching github api");
      _errors.first = `Fetching Github API Error: ${error.message}`;
    }

    // Second Request to get issues
    try {
      console.log("#2 Attempting to fetch Total Issues");
      const { data } = await axios.get(gitIssuesURL(repoOwner, repoName));
      _repoData = { ..._repoData, totalIssues: data?.total_count };
    } catch (error) {
      const errorText = `Fetching the Git Total Issues Error: ${error.message}`;
      _errors.second = errorText;
    }

    // Third Get Repo Download Rate - Depending on the package manager
    try {
      switch (packageMgr) {
        case "npm":
          console.log("#3 Requesting to NPM..");
          const { data: npmData } = await axios.get(
            npmDownloads(packageName, "last-month")
          );
          _repoData = { ..._repoData, lastMonthDownloads: npmData.downloads };
          break;

        case "pypi":
          console.log("# Requesting to Pypi Stats");
          const { data: pypiData } = await axios.get(
            pipyDownloads(packageName),
            { headers: { "Access-Control-Allow-Origin": "*" } }
          );
          _repoData = { ..._repoData, lastMonthDownloads: pypiData.last_month };
          break;
        default:
          _errors.third = "Unknown Package Manager";
          break;
      }
    } catch (error) {
      const errorText = `Fetching Package Manager API ${packageMgr} Error ${error.message}`;
      _errors.third = errorText;
    }

    // TODO: Fourth Get the version releases

    // Fourth Calculate the scoring & additional calculation
    try {
      console.log("#4 Attempting to calculate the final scoring");
      if (_repoData) {
        const {
          forks,
          createdAt,
          stars,
          watch,
          openIssues,
          totalIssues,
          lastMonthDownloads: totalDownloads,
          repoSize: size,
        } = _repoData;

        const {
          yearDiff,
          monthDiff,
          dayDiff,
          totalDays: age,
        } = dateDiff(createdAt);
        const solvedIssues = totalIssues - openIssues;
        _repoData.score = scoring({
          age,
          forks,
          stars,
          watch,
          solvedIssues,
          openIssues,
          size,
          totalDownloads,
        });
      }
    } catch (error) {
      const errorText = error.message;
      _errors.fourth = errorText;
      console.log("Error Calculating");
    }

    // set the values after collected
    console.log("setting Repo Data");
    setRepoData(_repoData as RepoData);
    setErrors({ ..._errors });
  };

  // console.log(repoData);
  useEffect(() => {
    if (fetchNow) {
      console.log("triggering fetch git repo function");
      fetchGitRepo();
    }
  }, [fetchNow]);

  useEffect(() => {
    if (repoData && errors.first === null) {
      console.log(repoData, errors.first);
      dispatchRepo({ type: "ADD", data: repoData });
    }
    // console.log("triggered");
  }, [repoData]);

  return { repoData, errors, isLoading };
};

export default useFetchRepo;

const gitRepoURL = (repoOwner: string, repoName: string): string => {
  return `https://api.github.com/repos/${repoOwner}/${repoName}`;
};

const gitIssuesURL = (repoOwner: string, repoName: string): string => {
  return `https://api.github.com/search/issues?q=repo:${repoOwner}/${repoName}+type:issue+state:closed`;
};

const npmRegistryURL = (packageName: string): string => {
  return `https://registry.npmjs.org/${packageName}`;
};

const pipyURL = (packageName: string): string => {
  return `https://pypi.org/pypi/${packageName}/json`;
};

const pipyDownloads = (packageName: string): string => {
  return `https://pypistats.org/api/packages/${packageName}/recent`;
};

const gitReleasesURL = (repoOwner: string, repoName: string): string => {
  return `https://api.github.com/repos/${repoOwner}/${repoName}/releases `;
};

const npmDownloads = (
  packageName: string,
  period: NPMDownloadPeriod
): string => {
  return `https://api.npmjs.org/downloads/point/${period}/${packageName}`;
};
