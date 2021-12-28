import React from "react";
import { FC } from "react";
import logo from "./logo.svg";
import "./App.css";
import HelloWorld from "./components/HelloWorld";

import Header from "./components/Header";
import ScreenEmpty from "./components/ScreenEmpty";
import SidePanel from "./components/SideMenu/SidePanel";

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
    <div className="App" style={{display:"flex", flexDirection: "column" }}>
    <div><Header/></div>
    <div >      
      <SidePanel/>
      <ScreenEmpty />
    </div>
    </div>
  );
};

export default App;
