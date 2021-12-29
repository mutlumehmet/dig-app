import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { FC } from "react";

import Header from "./components/Header";
import ScreenEmpty from "./components/ScreenEmpty";
import SidePanel from "./components/SideMenu/SidePanel";
import RepoListScreen from "./components/Repositories/RepoListScreen";
import BookmarksListScreen from "./components/Bookmarks/BookmarksListScreen";
import UsersListScreen from "./components/Users/UsersListScreen";

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
            <Route element={<RepoListScreen />} path="/repolist" />
            <Route element={<UsersListScreen />} path="/userlist" />
            <Route element={<BookmarksListScreen />} path="/bookmarked" />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
