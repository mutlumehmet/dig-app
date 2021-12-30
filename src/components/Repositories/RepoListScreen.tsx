import RepoListResult from "./RepoListResult";
import RepoListCard from "./RepoListCard";
import styles from "./RepoListScreen.module.css";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import ListCard from "../UI/ListCard";
import repos from "../../App"



const RepoListScreen = (props: any) => {
  const repoItems = props.repos.map(({ repoId, repoTitle, repoText } : {repoId:number, repoTitle:string, repoText:string}) => (
    <ListCard
      key={repoId}
      icon={<BookOutlinedIcon />}
      title={repoTitle}
      description={repoText}
    />
  ));

  return (
    <div className={styles["repo-list"]}>
      <div>
        <RepoListResult />
      </div>
      <div>
        {repoItems}
      </div>
    </div>
  );
};

export default RepoListScreen;
