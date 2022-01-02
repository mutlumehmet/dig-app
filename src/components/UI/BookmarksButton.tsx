import * as React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

const BookmarksButton = () => {
  // function 1
  //state kullanılacak buttonunun durumu ile ilgili

  //function 2
  //tıklandığına dair onClick koyulacak

  return (
    
      <Button variant="outlined"//
       startIcon={<BookmarkBorderOutlinedIcon />}>
        Add To Bookmarks
      </Button>

    //   <Button variant="contained"
    //    startIcon={<SendIcon />}>
    //     Send
    //   </Button>
    
  )};

export default BookmarksButton;
