import Button from "@mui/material/Button";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";

const BookmarksButton = () => {
  return (
    <div>
      <Button
        size="large"
        color="primary"
        variant="outlined"
        fullWidth={true}
        sx={{ height: "40px" }}
        startIcon={<BookmarkBorderOutlinedIcon />}
      >
        <div style={{ textTransform: "capitalize" }}>Add To Bookmarks</div>
      </Button>
    </div>
  );
};

export default BookmarksButton;
