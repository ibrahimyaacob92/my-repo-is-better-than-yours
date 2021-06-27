export interface something {
  hello: string;
}

export type RepoData = {
  owner: string;
  name: string;
  url: string;
  language: string;
  languages: string[];
  stars: number;
  watch: number;
  createdAt: string;
  lastUpdate: string;
  forks: number;
  repoSize: number;
  totalIssues: number;
  openIssues: number;
  minimize: boolean;
  contributors?: number;
  avatar?: string;
  lastMonthDonwloads?: number;
  latestVersion?: number;
  releaseHistories?: string[];
};
