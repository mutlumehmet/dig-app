import RepoListResult from "./RepoListResult"
import RepoListCard from "./RepoListCard"
import styles from "./RepoListScreen.module.css"
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import ListCard from "../UI/ListCard";

const RepoListScreen = () => {
  return <div className = {styles["repo-list"]}>
  <div><RepoListResult/></div>
  <div><RepoListCard/></div>
  
</div>
}

export default RepoListScreen;