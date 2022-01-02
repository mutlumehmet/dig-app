import { useContext } from "react";
import ListCard from "../UI/ListCard";
import ListResultCard from "../UI/ListResultCard";
import UserResultsCountContext from "../../store/user-results-count-context";
import Avatar from '@mui/material/Avatar';
import MainPanelHalfCard from "../UI/MainPanelHalfCard";
import { Link} from "react-router-dom";

const UserListScreen = (props: any) => {
    const ctx = useContext(UserResultsCountContext);
    const getUserName = (title: string) => {
      
      const userReposListURL = `https://api.github.com/users/${title}/repos`
      props.repoUserUrlLiftUp(userReposListURL)

      const userProfileURL = `https://api.github.com/users/${title}`
      props.userURLLiftUp(userProfileURL)
    
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
          onRepoFullName={getUserName}
        />
      )
    );
  
    const resultsCountText = (
      <ListResultCard text={`${ctx.userResultsCount} User Results`} />
    );
  
    return (
      <MainPanelHalfCard>
        <div>{resultsCountText}</div>
        <Link to="/user" style = {{textDecoration: 'none', color: "inherit"}}>
        <div>{userItems}</div>
        </Link>
      </MainPanelHalfCard>
    );
  };
  
  export default UserListScreen;