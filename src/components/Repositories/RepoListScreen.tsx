import { useContext } from "react";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import ListCard from "../UI/ListCard";
import ListResultCard from "../UI/ListResultCard";
import RepoResultsCountContext from "../../store/repo-results-count-context";
import MainPanelHalfCard from "../UI/MainPanelHalfCard";
import { Link} from "react-router-dom";
const RepoListScreen = (props: any) => {
  const ctx = useContext(RepoResultsCountContext);

  const getFullName = (title: string) => {
    let repoProfileURL:string = `https://api.github.com/repos/${title}`
    props.repoUrlLiftUp(repoProfileURL)
    
  }




  const repoItems = props.repos.map(
    ({
      repoId,
      repoTitle,
      repoText,
      
    }: {
      repoId: number;
      repoTitle: string;
      repoText: string;
      onRepoFullName: (title: string) => any;
    }) => (
      

      <ListCard
        key={repoId}
        icon={<BookOutlinedIcon />}
        title={repoTitle}
        description={repoText}
        onRepoFullName={getFullName}
      />
    )
  );

  const resultsCountText = (
    <ListResultCard text={`${ctx.repoResultsCount} Repository Results`} />
  );

  

  

  return (
    <MainPanelHalfCard >
      <div>{resultsCountText}</div>
      <Link to="/repo" style = {{textDecoration: 'none', color: "inherit"}}>
      <div>{repoItems}</div>
      </Link>
    </MainPanelHalfCard>
  );
};

export default RepoListScreen;
