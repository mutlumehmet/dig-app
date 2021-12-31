import { useContext } from "react";
import styles from "./RepoListScreen.module.css";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import ListCard from "../UI/ListCard";
import ListResultCard from "../UI/ListResultCard";
import RepoResultsCountContext from "../../store/repo-results-count-context";

const RepoListScreen = (props: any) => {
  const ctx = useContext(RepoResultsCountContext);

  const repoItems = props.repos.map(
    ({
      repoId,
      repoTitle,
      repoText,
    }: {
      repoId: number;
      repoTitle: string;
      repoText: string;
    }) => (
      <ListCard
        key={repoId}
        icon={<BookOutlinedIcon />}
        title={repoTitle}
        description={repoText}
      />
    )
  );

  const resultsCountText = (
    <ListResultCard text={`${ctx.repoResultsCount} Repository Results`} />
  );

  return (
    <div className={styles["repo-list"]}>
      <div>{resultsCountText}</div>
      <div>{repoItems}</div>
    </div>
  );
};

export default RepoListScreen;
