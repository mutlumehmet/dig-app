import { FC, useContext } from "react";
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import styles from "./ScreenEmpty.module.css";
import {Navigate} from "react-router-dom";
import InputContext from "../store/input-context";
import MainPanelFullCard from "./UI/MainPanelFullCard";

const ScreenEmpty: FC = () => {
  const ctx = useContext(InputContext);

  if (ctx.isInputEntered === true) {
    return <Navigate to="/repolist"/>
  }

  return (
    <MainPanelFullCard>
      <div>
      <ScreenSearchDesktopIcon style={{width: "86px",height: "86px",  fill: "#85b0f2"}}  />
      </div>
      <p className={styles.text}>Search Results Will Appear Here</p>
    </MainPanelFullCard>
  );
};

export default ScreenEmpty;
