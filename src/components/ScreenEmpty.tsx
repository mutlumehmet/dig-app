import { FC } from "react";
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";
import styles from "./ScreenEmpty.module.css";

const ScreenEmpty: FC = () => {
  return (
    <div className={styles.container}>
      <ScreenSearchDesktopIcon className={styles.icons} />
      <p className={styles.text}>Search Results Will Appear Here</p>
    </div>
  );
};

export default ScreenEmpty;
