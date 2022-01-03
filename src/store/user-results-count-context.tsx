import React from "react";

interface UserResultsCountContextInterface {
  userResultsCount: number;
}

const UserResultsCountContext =
  React.createContext<UserResultsCountContextInterface>({
    userResultsCount: 0,
  });

export default UserResultsCountContext;
