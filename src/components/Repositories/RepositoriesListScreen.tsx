import RepositoriesListResult from "./RepositoriesListResult"
import RepositoriesListCard from "./RepositoriesListCard"
import styles from "./RepositoriesListScreen.module.css"

const RepositoriesListScreen = () => {
  return <div className = {styles["repo-list"]}>
  <div><RepositoriesListResult/></div>
  <div><RepositoriesListCard/></div>
  
</div>
}

export default RepositoriesListScreen;