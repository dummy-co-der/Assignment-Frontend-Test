import React from "react";
import { styled, alpha } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Popper } from "@mui/material";
import classNames from "./classNames";

export const StyledTextField = styled(TextField)(({ error, small }) => ({
  "&.MuiTextField-root": {
    marginTop: "0.5rem",
    borderRadius: "0.5rem",
    backgroundColor: "#F5F8FF",
    width: "100%",
    "& .MuiOutlinedInput-root": {
      "&, &.Mui-focused": {
        "& fieldset": {
          borderColor: error ? "#EB5757" : "#C6D7FF",
          borderWidth: "1px",
          borderRadius: "0.5rem",
        },
      },
      "&:hover, &.Mui-focused:hover": {
        "& fieldset": {
          borderColor: error ? "#EB5757" : "#6F97FF",
        },
      },
      "&.Mui-disabled": {
        "& fieldset": {
          borderColor: error ? "#EB5757" : "#DEE8FF",
        },
      },
      "& .MuiOutlinedInput-input": {
        color: "#686868",
        "&::placeholder": {
          color: "#ADB9CA",
          opacity: 100,
        },
        "&.Mui-disabled": {
          WebkitTextFillColor: "#CAD3DF",
          "&::placeholder": {
            color: "#CAD3DF",
            opacity: 100,
          },
        },
      },
    },
  },
}));

export const StyledPopper = styled(Popper)(() => ({
  paddingTop: "0.25rem",
  "& .MuiAutocomplete-paper": {
    color: "#ADB9CA",
    "& .MuiAutocomplete-option": {
      "&.Mui-focused, &.Mui-focused[aria-selected=true]": {
        backgroundColor: "#DEE8FF",
        color: "#8493A8",
      },
      '&[aria-selected="true"]': {
        backgroundColor: "#EEEEEE",
        color: "#8493A8",
      },
    },
  },
}));

function CustomDropdown({
  labelClassName = "",
  inputClassName = "",
  label,
  info = "",
  placeholder,
  options,
  noOptionsText = "",
  value = "",
  onChange,
  onInputChange,
  error,
  getOptionLabel,
  isOptionEqualToValue,
  onClick,
  hideTags = false,
  position,
  ...props
}) {
  const sx = hideTags
    ? { ["& .MuiAutocomplete-tag"]: { display: "none" } }
    : {};
  return (
    <div
      className={`flex ${
        position === "left" ? "flex-row items-center" : "flex-col"
      }`}
    >
      <div>
        <label className={classNames(labelClassName)}>{label}</label>
      </div>
      <div>
        <Autocomplete
          noOptionsText={noOptionsText ? noOptionsText : "No options"}
          options={options}
          value={value === "" ? null : value}
          onChange={onChange}
          onInputChange={onInputChange}
          getOptionLabel={(option) => {
            if (typeof option === "string") {
              return option;
            } else {
              return getOptionLabel ? getOptionLabel(option) : option.label;
            }
          }}
          isOptionEqualToValue={(option, value) => {
            return isOptionEqualToValue
              ? isOptionEqualToValue(option, value)
              : option === value;
          }}
          renderInput={(params) => (
            <StyledTextField
              {...params}
              className={classNames(inputClassName)}
              sx={sx}
              onClick={onClick}
              placeholder={placeholder}
              error={error ? true : false}
            />
          )}
          PopperComponent={StyledPopper}
          {...props}
        />
      </div>
    </div>
  );
}

export default CustomDropdown;
