import { FC } from "react";
import ScreenSearchDesktopRoundedIcon from '@mui/icons-material/ScreenSearchDesktopRounded';
import styles from "./ScreenEmpty.module.css";

const ScreenEmpty: FC = () => {
  return (
    <div className={styles.container}>
      <div>
      <ScreenSearchDesktopRoundedIcon className={styles.icon} />
      </div>
      <p className={styles.text}>Search Results Will Appear Here</p>
    </div>
  );
};

export default ScreenEmpty;
