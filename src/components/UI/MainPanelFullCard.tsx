import { FC } from "react";

import styles from "./MainPanelFullCard.module.css";

const MainPanelFullCard: FC = (props) => {
  
  return (
    <div className={styles.container}>
      {props.children}
    </div>
  );
};

export default MainPanelFullCard;
