import React from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import classNames from "./classNames";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "5%",
  backgroundColor: "#F5F8FF",
  width: "100%",
  height: 40,
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1),
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

function SearchInput({ placeholder, label, labelClassName }) {
  return (
    <div>
      <label className={classNames(labelClassName)}>{label}</label>
      <Search className="mt-2">
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder={placeholder}
          inputProps={{ "aria-label": label }}
        />
      </Search>
    </div>
  );
}

export default SearchInput;
