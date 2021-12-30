import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import digieggs_logo from "../assets/digieggs_logo.png";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function PrimarySearchAppBar(props:any) {
  const [input, setInput] = useState("");
  

  

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }

  useEffect(()=> {
    console.log(input)
  }, [input])

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      props.onValidInput(input)
      setInput("")
    }
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <div>
          <Link to="/">
            <img src={digieggs_logo} alt="digieggs-logo" />
          </Link>
        </div>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            type="text"
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            value={input}
            
          />
        </Search>
        <Link
          to="/bookmarked"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div style={{ display: "flex", paddingLeft: "24px" }}>
            <BookmarkBorderIcon display="block" />
            <Typography
              paddingLeft={"8px"}
              variant="body1"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Bookmarks
            </Typography>
          </div>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
