import { FC } from "react";
import MainPanelHalfCard from "../UI/MainPanelHalfCard";
import styles from "./RepoProfileScreen.module.css"

const RepoProfileScreen: FC = () => {

    const repoProfileText = <p className={styles.text}>Lottie is a mobile library for Android and iOS that parses Adobe After Effects animations exported as json with Bodymovin and renders them natively on mobile!

    For the first time, designers can create and ship beautiful animations without an engineer painstakingly recreating it by hand. They say a picture is worth 1,000 words so here are 13,000</p>

    return <MainPanelHalfCard>
        {repoProfileText}
    </MainPanelHalfCard>

}

export default RepoProfileScreen;