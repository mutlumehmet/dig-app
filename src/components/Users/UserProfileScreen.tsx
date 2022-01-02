import MainPanelHalfCard from "../UI/MainPanelHalfCard";
import styles from "./UserProfileScreen.module.css";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import ListCard from "../UI/ListCard";
import ListResultCard from "../UI/ListResultCard";
import { Link } from "react-router-dom";

const UserProfileScreen = (props:any) => {

    // Burdan bir geri gönderme daha yapacağız App İçin//
    
    const getFullName = (title: string) => {
        let repoProfileURL:string = `https://api.github.com/users/${title}/repos`
        props.repoUrlLiftUp(repoProfileURL)
      }

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
            onRepoFullName={getFullName}
          />
        )
      );
    
      const resultsCountText = (
        <ListResultCard text={`${props.userProfileData.public_repos} Repositories`} />
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

    export  {UserProfileScreen}
