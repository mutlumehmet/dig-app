import { useContext } from "react";
import ListCard from "../UI/ListCard";
import ListResultCard from "../UI/ListResultCard";
import UserResultsCountContext from "../../store/user-results-count-context";
import Avatar from '@mui/material/Avatar';
import MainPanelHalfCard from "../UI/MainPanelHalfCard";

const UserListScreen = (props: any) => {
    const ctx = useContext(UserResultsCountContext);
    const getFullName = (title: string) => {
      const repoUserURL = `https://api.github.com/users/${title}`
    console.log(repoUserURL)
    }
  

    
    const userItems = props.users.map(
      ({
        userId,
        userTitle,
        userText,
        userImgUrl,
      }: {
        userId: number;
        userTitle: string;
        userText: any;
        userImgUrl: string;
      }) => (
        <ListCard
          key={userId}
          icon={<Avatar alt={userTitle} src={userImgUrl} sx = {{width: 48, height:48, marginRight:3} } />}
          title={userTitle}
          // description={<a href={userText} style = {{textDecoration: 'none', color: "inherit"}}>{userText}</a>}
          description={userText}
          onRepoFullName={getFullName}
        />
      )
    );
  
    const resultsCountText = (
      <ListResultCard text={`${ctx.userResultsCount} User Results`} />
    );
  
    return (
      <MainPanelHalfCard>
        <div>{resultsCountText}</div>
        <div>{userItems}</div>
      </MainPanelHalfCard>
    );
  };
  
  export default UserListScreen;