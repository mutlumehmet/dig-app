

import MainPanelHalfCard from "../UI/MainPanelHalfCard";
import styles from "./RepoProfileScreen.module.css"


const RepoProfileScreen = (props:any) => {
    
    const repoProfileText = <div className={styles.text}>{props.repoData.description}</div>

    return <MainPanelHalfCard>
        {repoProfileText}
    </MainPanelHalfCard>

}

export default RepoProfileScreen;