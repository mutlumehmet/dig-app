import { FC } from "react";
import styles from "./MainPanelHalfCard.module.css";


const MainPanelHalfCard :FC = (props) => {
  

  return (
    <div className={styles["repo-list"]}>
      {props.children}
    </div>
  );
};

export default MainPanelHalfCard;
