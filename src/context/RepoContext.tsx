import React, { RefObject, useContext, useReducer } from "react";
import { RepoData } from "../types";

type Props = {
  children: JSX.Element;
};

type Context = {
  repoData: RepoData[];
  dispatchRepo: any;
};
const RepoContext = React.createContext({} as Context);
const Provider = RepoContext.Provider;
const initialState: RepoData[] = [];

// Provider wrapper
export const RepoProvider = ({ children }: Props) => {
  const [repoData, dispatchRepo] = useReducer(reducer, initialState);
  const value = { repoData, dispatchRepo };
  return <Provider value={value}>{children}</Provider>;
};

// Custom Hooks to get the context
export const useRepoContext = () => {
  const { dispatchRepo, repoData } = useContext(RepoContext);
  return { repoData, dispatchRepo };
};

const reducer = (state: RepoData[], action: { type: string; data: any }) => {
  const { type, data } = action;
  // console.log(state);
  switch (type) {
    case "ADD": {
      if (!state.some((repo) => repo.url === data.url)) {
        return [...state, data];
      }
      return [...state];
    }
    case "REMOVE": {
      const tempList = JSON.parse(JSON.stringify(state));
      tempList.splice(data, 1);
      return [...tempList];
    }
    case "SET_AS_MAIN": {
      const tempList = JSON.parse(JSON.stringify(state));
      const tempItem = tempList.splice(data, 1);
      return [...tempItem, ...tempList];
    }
    case "CLEAR":
      return [];
    default:
      return initialState;
  }
};
