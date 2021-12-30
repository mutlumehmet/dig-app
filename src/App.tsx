import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { FC } from "react";

import Header from "./components/Header";
import ScreenEmpty from "./components/ScreenEmpty";
import SidePanel from "./components/SideMenu/SidePanel";
import RepoListScreen from "./components/Repositories/RepoListScreen";
import BookmarksListScreen from "./components/Bookmarks/BookmarksListScreen";
import UsersListScreen from "./components/Users/UsersListScreen";

const App: FC = () => {
  //111. The http request logic //
  const [validInput, setValidInput] = useState("")
  const [repos, setRepos] = useState([]);

  const handleValidInput = (valid:string) => {
    setValidInput(valid)
  }
  

  async function handleFetchRepos() {
    const URLPar = validInput;
    const RepoURL = `https://api.github.com/search/repositories?q=${URLPar}`;

    const response = await fetch(RepoURL);
    const data = await response.json();

    const transRepos = data.items.map((repoData: any[] | any) => {
      return {
        repoId: repoData.id,
        repoTitle: repoData.full_name,
        repoText: repoData.description,
      };
    });

    setRepos(transRepos);
  }

  useEffect(()=>{
    handleFetchRepos();
  },[validInput])
  

  //11111111111111111111111111111111

  return (
    <BrowserRouter>
      <div>
        <Header onValidInput={handleValidInput} />
      </div>
      <div>
        <div>
          <SidePanel />
        </div>
        <div>
          <Routes>
            <Route element={<ScreenEmpty />} path="/" />
            <Route
              element={<RepoListScreen repos={repos} />}
              path="/repolist"
            />
            <Route element={<UsersListScreen />} path="/userlist" />
            <Route element={<BookmarksListScreen />} path="/bookmarked" />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
