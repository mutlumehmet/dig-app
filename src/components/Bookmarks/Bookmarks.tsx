import { useContext, useState } from "react";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import ListCard from "../UI/ListCard";
import ListResultCard from "../UI/ListResultCard";
import RepoResultsCountContext from "../../store/repo-results-count-context";
import MainPanelHalfCard from "../UI/MainPanelHalfCard";
import { Link} from "react-router-dom";


const Bookmarks = (props: any) => {
// const [isBookmarksData, setBookmarksData] = useState()
  

//       //onClickBuraya gelecek buradan App
//       const addBookmarks = () => {
        
//         props.liftBookmarks(dummyBookData)
//       }

//       const dummyBookData:object = [
//     {
//       repoId: 0,
//       repoTitle: "First Repository",
//       repoText: "This is the first Repository",
//     },
//     {
//       repoId: 1,
//       repoTitle: "Second Repository",
//       repoText: "This is the second Repository",
//     },
//     {
//       repoId: 2,
//       repoTitle: "Third Repository",
//       repoText: "This is the third Repository",
//     },
//     {
//       repoId: 3,
//       repoTitle: "Forth Repository",
//       repoText: "This is the fourth Repository",
//     },
//     {
//       repoId: 4,
//       repoTitle: "Fifth Repository",
//       repoText: "This is the fifth Repository",
//     },
//   ];

  
  //Context for 
  
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

export default Bookmarks;
