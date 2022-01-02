
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import ListCard from "../UI/ListCard";
import ListResultCard from "../UI/ListResultCard";

import MainPanelHalfCard from "../UI/MainPanelHalfCard";
import { Link} from "react-router-dom";


const Bookmarks = (props: any) => {

  
  

  const getBookData = (title: string) => {
    let repoProfileURL:string = `https://api.github.com/repos/${title}`
    props.bookUrlLiftUp(repoProfileURL)
    
  }




  const repoItems = props.bookmarksData.map(
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
        onRepoFullName={getBookData}
      />
    )
  );

  const resultsCountText = (
    <ListResultCard text={`${props.bookmarksData.length} Bookmarked Repository`} />
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
