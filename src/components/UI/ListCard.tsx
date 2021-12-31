import { Component, FC } from "react";
import styles from "./ListCard.module.css";

interface Props {
  icon: string | any;
  title: string;
  description: any;
}

const ListCard: FC<Props> = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{props.icon}</div>
      <div className={styles["card-text"]}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default ListCard;
