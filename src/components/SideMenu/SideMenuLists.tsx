import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Cloud from '@mui/icons-material/Cloud';

export default function SideMenuLists() {
  return (
    <Paper sx={{ width: 360, maxWidth: '100%' }}>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <InsertDriveFileIcon fontSize="medium" />
          </ListItemIcon>
          <ListItemText>Repositories</ListItemText>
          <Typography variant="body2" color="text.secondary">
            2,555
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <InsertEmoticonIcon fontSize="medium" />
          </ListItemIcon>
          <ListItemText>Users</ListItemText>
          <Typography variant="body2" color="text.secondary">
            3
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <BookmarkBorderIcon fontSize="medium" />
          </ListItemIcon>
          <ListItemText>Bookmarked</ListItemText>
          <Typography variant="body2" color="text.secondary">
            12
          </Typography>
        </MenuItem>
        {/* <Divider /> */}
      </MenuList>
    </Paper>
  );
}