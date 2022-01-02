import SidePanelCard from "../UI/SidePanelCard";
import styles from "./UserSideBar.module.css";

const UserSideBar = (props: any) => {
  return (
    <SidePanelCard>
      <div className={styles.box}>
      <img src={props.userProfileData.avatar_url} alt={props.userProfileData.login}/>
      <div className={styles.title}>{props.userProfileData.name}</div>
      <div className={styles["sub-title"]}>{props.userProfileData.login}</div>
      <div className={styles["url-text"]}>{props.userProfileData.bio}</div>
      </div>
    </SidePanelCard>
  );
};

export default UserSideBar;
