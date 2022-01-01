import { FC } from "react";
import SideMenuLists from "./SideMenuLists";
import styles from "./SidePanel.module.css"

const SidePanel: FC = () => {
  return (
    <div
      className= {styles["side-panel"]}
    >
      <SideMenuLists />
    </div>
  );
};

export default SidePanel;
