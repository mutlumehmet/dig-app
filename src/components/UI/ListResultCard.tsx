import styles from "./ListResultCard.module.css";
import { FC } from "react";

interface Props {
  text: string | number;
}

const ListResultCard: FC<Props> = (props) => {
  return <div className={styles["rep-result"]}>{props.text}</div>;
};

export default ListResultCard;
