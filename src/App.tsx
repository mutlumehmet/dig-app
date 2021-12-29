import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { FC } from "react";
import logo from "./logo.svg";
import HelloWorld from "./components/HelloWorld";

import styles from "./App.module.css";

import Header from "./components/Header";
import ScreenEmpty from "./components/ScreenEmpty";
import SidePanel from "./components/SideMenu/SidePanel";
import RepositoriesListScreen from "./components/Repositories/RepositoriesListScreen";
import BookmarksSidePanel from "./components/Bookmarks/BookmarksSidePanel";
import BookmarksListScreen from "./components/Bookmarks/BookmarksListScreen";
import UsersListScreen from "./components/Users/UsersListScreen";

const avengers = [
  "Captain America",
  "Iron Man",
  "Black Widow",
  "Thor",
  "Hawkeye",
  "Vision",
  "Hulk",
];

const App: FC = () => {
  
  return (
    <BrowserRouter>
        <div>
          <Header />
        </div>
        <div>
          <div>
            <SidePanel />
          </div>
          <div>
            <Routes>
                <Route element={<ScreenEmpty />} path="/" />
                <Route element={<RepositoriesListScreen />} path="/repolist" />
                <Route element={<UsersListScreen />} path="/userlist" />
                <Route element={<BookmarksListScreen />} path="/bookmarked" />
            </Routes>
          </div>
        </div>
    </BrowserRouter>
  );
};

export default App;
