import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { FC } from "react";

import Header from "./components/Header";
import ScreenEmpty from "./components/ScreenEmpty";
import SidePanel from "./components/SideMenu/SidePanel";
import RepoListScreen from "./components/Repositories/RepoListScreen";
import BookmarksListScreen from "./components/Bookmarks/BookmarksListScreen";
import UserListScreen from "./components/Users/UserListScreen";
import InputContext from "./store/input-context";
import RepoResultsCountContext from "./store/repo-results-count-context";
import UserResultsCountContext from "./store/user-results-count-context";


const App: FC = () => {
  //111. The http request logic //
  const [validInput, setValidInput] = useState("")
  const [isInputChanged, setIsInputChanged] = useState(false)
  const [repos, setRepos] = useState([]);
  const [repoResultsCount, setRepoResultsCount] = useState(0)
  const [users, setUsers] = useState([]);
  const [userResultsCount, setUserResultsCount] = useState(0)

  const ctx = useContext(InputContext);


  const handleValidInput = (valid:string) => {
    setValidInput(valid)
  }
  
  //RepoFetch

  async function handleFetchRepos() {
    const URLPar = validInput;
    const RepoURL = `https://api.github.com/search/repositories?q=${URLPar}`;

    const response = await fetch(RepoURL);
    const repodata = await response.json();

    const transRepos = repodata.items.map((repoData: any[] | any) => {
      return {
        repoId: repoData.id,
        repoTitle: repoData.full_name,
        repoText: repoData.description,
      };
    });

    setRepos(transRepos);

    setRepoResultsCount(repodata.total_count)
  }
////////

//UserFetch

async function handleFetchUsers() {
  const URLPar = validInput;
  const UserURL = `https://api.github.com/search/users?q=${URLPar}`;

  const response = await fetch(UserURL);
  const userdata = await response.json();

  const transUsers = userdata.items.map((userData: any[] | any) => {
    return {
      userId: userData.id,
      userTitle: userData.login,
      userText: userData.html_url,
      userImgUrl: userData.avatar_url,
    };
  });

  setUsers(transUsers);

  setUserResultsCount(userdata.total_count)
}
////////

  useEffect(()=>{
    setIsInputChanged(true)
  },[ctx.isInputChanged])

  useEffect(()=>{
    handleFetchRepos();
    handleFetchUsers()
  },[validInput])
  

  
  
  


  //11111111111111111111111111111111


  

  return (
   <UserResultsCountContext.Provider value={{
      userResultsCount: userResultsCount
    }}>

    <RepoResultsCountContext.Provider value={{
      repoResultsCount: repoResultsCount
    }}>
    
    <InputContext.Provider
    value={{
      isInputChanged: isInputChanged,
    }}
    >
    

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
            <Route element={<UserListScreen users={users} />} path="/userlist" />
            <Route element={<BookmarksListScreen />} path="/bookmarked" />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    </InputContext.Provider>
    </RepoResultsCountContext.Provider>
    </UserResultsCountContext.Provider>
  );
};

export default App;
