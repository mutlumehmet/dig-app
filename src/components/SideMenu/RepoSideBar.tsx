// import SidePanelCard from "../UI/SidePanelCard"

// const RepoSideBar = () => {

//     return (
//         <SidePanelCard>RepoSideBar</SidePanelCard>
//     )
// }

// export default RepoSideBar
import SidePanelCard from "../UI/SidePanelCard";
import * as React from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";

import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";



 const RepoSideBar = ()=> {

  return (
    <SidePanelCard>
      <div style={{ padding: "40px" }}>
        <List>
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar>
                <FolderIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Single-line item"
            />
          </ListItem>
        </List>
      </div>
    </SidePanelCard>
  );
}

export default RepoSideBar
