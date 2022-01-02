import { Component, FC } from "react";
import styles from "./ListCard.module.css";

interface Props {
  icon: string | any;
  title: string;
  description: any;
  onRepoFullName: (title: string) => any

}

const ListCard: FC<Props> = (props) => {
  
  const handleClick = ()=> {props.onRepoFullName(props.title)}
  

  return (
    
    <div onClick={handleClick} className={styles.card}>
      <div className={styles.icon}>{props.icon}</div>
      <div className={styles["card-text"]}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
    
  );
};

export default ListCard;
