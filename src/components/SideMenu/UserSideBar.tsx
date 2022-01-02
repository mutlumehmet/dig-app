import SidePanelCard from "../UI/SidePanelCard";
import styles from "./UserSideBar.module.css";

const UserSideBar = () => {
  return (
    <SidePanelCard>
      <div className={styles.box}>
      <img src="https://avatars.githubusercontent.com/u/90329858?v=4" alt="User"/>
      <div className={styles.title}>Mehmet Mutlu</div>
      <div className={styles["sub-title"]}>mutlumehmet</div>
      <div className={styles["url-text"]}>React Developer @digieggs</div>
      </div>
    </SidePanelCard>
  );
};

export default UserSideBar;
