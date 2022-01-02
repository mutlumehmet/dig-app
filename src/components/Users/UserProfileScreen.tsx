import MainPanelHalfCard from "../UI/MainPanelHalfCard";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import ListCard from "../UI/ListCard";
import { Link } from "react-router-dom";
import ListResultCard from "../UI/ListResultCard";

const UserProfileScreen = (props: any) => {
  

  const getRepoData = (title: string) => {
    let repoProfileURL:string = `https://api.github.com/repos/${title}`
    props.repoUrlLiftUp(repoProfileURL);
  };

  /////
  const repoItems = props.userRepos.map(
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
        onRepoFullName={getRepoData}
      />
    )
  );

  const resultsCountText = (
    <ListResultCard text={`${props.userProfileData.public_repos} Repositories`} />
  );

  return (
    <MainPanelHalfCard>
      <div>{resultsCountText}</div>

      <Link to="/repo" style={{ textDecoration: "none", color: "inherit" }}>
        <div>{repoItems}</div>
      </Link>
      
    </MainPanelHalfCard>
  );
};

export { UserProfileScreen };
