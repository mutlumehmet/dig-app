import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FC } from "react";

import Header from "./components/Header";
import ScreenEmpty from "./components/ScreenEmpty";
import RepoListScreen from "./components/Repositories/RepoListScreen";
import BookmarksListScreen from "./components/Bookmarks/BookmarksListScreen";
import UserListScreen from "./components/Users/UserListScreen";
import InputContext from "./store/input-context";
import RepoResultsCountContext from "./store/repo-results-count-context";
import UserResultsCountContext from "./store/user-results-count-context";
import SideMenuLists from "./components/SideMenu/SideMenuLists";
import RepoSideBar from "./components/SideMenu/RepoSideBar";
import RepoProfileScreen from "./components/Repositories/RepoProfileScreen";
import UserSideBar from "./components/SideMenu/UserSideBar";
import { UserProfileScreen } from "./components/Users/UserProfileScreen";

const App: FC = () => {
  const [validInput, setValidInput] = useState("");
  const [repos, setRepos] = useState([]);
  const [userRepos, setUserRepos] = useState([]);
  const [userReposURL, setUserReposURL] = useState("");
  const [userProfileURL, setUserProfileURL] = useState("");
  const [userProfData, setUserProfData] = useState([])
  const [repoProfileURL, setRepoProfileURL] = useState("");
  const [repoProfData, setRepoProfData] = useState([]);
  const [repoResultsCount, setRepoResultsCount] = useState(0);
  const [users, setUsers] = useState([]);
  const [userResultsCount, setUserResultsCount] = useState(0);
  const [isInputEntered, setIsInputEntered] = useState(false);

  const handleValidInput = (valid: string) => {
    setValidInput(valid);
  };

  const handleClearInput = () => {
    setIsInputEntered(false);
  };

  const handleInputEntered = () => {
    setTimeout(() => {
      setIsInputEntered(true);
    }, 200);
  };

  //FetchSingleRepoProfile

  const handleGetSingleRepo = (repoProfURL: string) => {
    setRepoProfileURL(repoProfURL);
  };

  async function handleFetchRepoProfile() {
    const response = await fetch(repoProfileURL);
    const repoProfileData = await response.json();
    setRepoProfData(repoProfileData);
  }

  useEffect(() => {
    handleFetchRepoProfile();
  }, [repoProfileURL]);

  //

  //FetchSingle USER Profile

  const getUserProfile = (userProfURL: string) => {
    console.log(userProfURL)
    setUserProfileURL(userProfURL);
  };

  async function handleFetchUserProfile() {
    const response = await fetch(userProfileURL);
    const userProfileData = await response.json();
    setUserProfData(userProfileData);
  }


  useEffect(() => {
    handleFetchUserProfile();
  }, [userProfileURL]);

  //

  //Fetch Repos
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

    setRepoResultsCount(repodata.total_count);
  }
  ////////

  //Fetch User Repos
  const handleGetUserRepos = (URL: string) => {
    setUserReposURL(URL);
    
  };

  useEffect(() => {
    handleFetchUserRepos();
  }, [userReposURL]);

  async function handleFetchUserRepos() {
    const response = await fetch(userReposURL);
    const repodata = await response.json();

    const transUserRepos = repodata.map((repoData: any[] | any) => {
      return {
        repoId: repoData.id,
        repoTitle: repoData.full_name,
        repoText: repoData.description,
      };
    });

    setUserRepos(transUserRepos);
  }

  ////////

  //Fetch User

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

    setUserResultsCount(userdata.total_count);
  }

  useEffect(() => {
    handleFetchRepos();
    handleFetchUsers();
  }, [validInput]);

  const defaultSideBar = (
    <div style={{ display: !isInputEntered ? "none" : "" }}>
      <SideMenuLists />
    </div>
  );

  return (
    <UserResultsCountContext.Provider
      value={{
        userResultsCount: userResultsCount,
      }}
    >
      <RepoResultsCountContext.Provider
        value={{
          repoResultsCount: repoResultsCount,
        }}
      >
        <InputContext.Provider
          value={{
            isInputEntered: isInputEntered,
          }}
        >
          <BrowserRouter>
            <div>
              <Header
                onValidInput={handleValidInput}
                onInputEntered={handleInputEntered}
                onClearInput={handleClearInput}
              />
            </div>
            <div>
              {/* <div style= {{display: !isInputEntered ? "none" : ""}}>
          <SidePanel />
        </div> */}
              <div>
                {/* Sidebar */}
                <Routes>
                  <Route element={defaultSideBar} path="/repolist" />
                  <Route
                    element={<RepoSideBar repoData={repoProfData} />}
                    path="/repo"
                  />
                  <Route element={defaultSideBar} path="/userlist" />
                  <Route element={<UserSideBar userProfileData={userProfData} />} path="/user" />
                </Routes>

                {/* MainScreen */}
                <Routes>
                  <Route element={<ScreenEmpty />} path="/" />
                  <Route
                    element={
                      <RepoListScreen
                        repos={repos}
                        repoUrlLiftUp={handleGetSingleRepo}
                      />
                    }
                    path="/repolist"
                  />
                  <Route
                    element={<RepoProfileScreen repoData={repoProfData} />}
                    path="/repo"
                  />
                  <Route
                    element={
                      <UserListScreen
                        users={users}
                        repoUserUrlLiftUp={handleGetUserRepos}
                        userURLLiftUp={getUserProfile}
                      />
                    }
                    path="/userlist"
                  />
                  <Route
                    element={<UserProfileScreen userRepos={userRepos} userProfileData={userProfData} />}
                    path="/user"
                  />
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
