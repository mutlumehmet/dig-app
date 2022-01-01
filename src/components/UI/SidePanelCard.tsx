import { FC } from "react";
import styles from "./SidePanelCard.module.css";

const SidePanelCard: FC = (props) => {
  return <div className={styles["side-panel"]}>{props.children}</div>;
};

export default SidePanelCard;
