import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import styles from "./RepositoriesListCard.module.css"

const RepositoriesListCard = () => {
  return (
    <div className={styles.card}>
        <div className={styles.icon}><BookOutlinedIcon/></div>
      <div className={styles["card-text"]}>
        <h2>airbnb/lottie-android</h2>
        <p>Render AfterEffects Animations natively on your computer</p>
        
      </div>
      
    </div>
  );
};

export default RepositoriesListCard;
