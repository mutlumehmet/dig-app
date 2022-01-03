import React from "react";

interface RepoResultsCountContextInterface {
  repoResultsCount: number;
}

const RepoResultsCountContext =
  React.createContext<RepoResultsCountContextInterface>({
    repoResultsCount: 0,
  });

export default RepoResultsCountContext;
