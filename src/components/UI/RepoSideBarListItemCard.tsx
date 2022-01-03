import { FC } from "react";
import styles from "./RepoSideBarListItemCard.module.css";
interface Props {
  lineSymbol: Element | any;
  lineTitle: string;
  counterNumber: number;
  showDivider: boolean;
}

const RepoSideBarListItemCard: FC<Props> = (props) => {
  return (
    <div>
      <div className={styles["horizon-box"]}>
        {props.lineSymbol}
        <div className={styles["line-title"]}>{props.lineTitle}</div>
        <div className={styles.counter}>{props.counterNumber}</div>
      </div>

      <div style={{ display: !props.showDivider ? "none" : "" }}>
        <hr style={{ borderBottomColor: "#dcdcdc", borderBottomWidth:"1px" }}></hr>
      </div>
    </div>
  );
};

export default RepoSideBarListItemCard;
