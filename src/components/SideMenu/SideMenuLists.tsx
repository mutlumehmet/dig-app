import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { Link} from "react-router-dom";
import { useContext } from 'react';
import RepoResultsCountContext from '../../store/repo-results-count-context';
import UserResultsCountContext from '../../store/user-results-count-context';
import SidePanelCard from '../UI/SidePanelCard';

export default function SideMenuLists() {
  const ctxRepo = useContext(RepoResultsCountContext);
  const ctxUser = useContext(UserResultsCountContext);


  return (
    <SidePanelCard>
    <Paper >
      <MenuList>
      <Link to="/repolist" style = {{textDecoration: 'none', color: "inherit"}}>
        <MenuItem>
          <ListItemIcon>
            <InsertDriveFileIcon fontSize="medium" />
          </ListItemIcon>
          <ListItemText>Repositories</ListItemText>
          <Typography variant="body2" color="text.secondary">
            {ctxRepo.repoResultsCount}
          </Typography>
        </MenuItem>
        </Link>
        
        <Link to="/userlist" style = {{textDecoration: 'none', color: "inherit"}}>
        <MenuItem>
          <ListItemIcon>
            <InsertEmoticonIcon fontSize="medium" />
          </ListItemIcon>
          <ListItemText>Users</ListItemText>
          <Typography variant="body2" color="text.secondary">
          {ctxUser.userResultsCount}
          </Typography>
        </MenuItem>
        </Link>
        
        <Link to="/bookmarked" style = {{textDecoration: 'none', color: "inherit"}}>
        <MenuItem>
          <ListItemIcon>
            <BookmarkBorderIcon fontSize="medium" />
          </ListItemIcon>
          <ListItemText>Bookmarked</ListItemText>
          <Typography variant="body2" color="text.secondary">
            12
          </Typography>
        </MenuItem>
        </Link>
        {/* <Divider /> */}
      </MenuList>
      
    </Paper>
    </SidePanelCard>
  );
}