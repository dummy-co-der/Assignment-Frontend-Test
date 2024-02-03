import React from "react";
import CustomDropdown from "@/utils/customDropdown";
import { category, status } from "@/data/dropdownOptions";
import { Button } from "@mui/material";
import SearchInput from "@/utils/searchInput";

const TopBar = () => {
  return (
    <div className="lg:gap-8 md:gap-2 flex flex-wrap items-center justify-center flex-col md:flex-row bg-white p-5 px-0 md:px-2 rounded-3xl shadow-lg">
      <div className="lg:w-2/5">
        <SearchInput
          placeholder="Search for category, name, company, etc."
          label="What are you looking for?"
          labelClassName="font-bold"
        />
      </div>
      <div className="lg:w-1/5 md:w-1/5 w-2/3">
        <CustomDropdown
          label="Category"
          labelClassName="font-bold"
          id="category"
          placeholder="category"
          size="small"
          getOptionLabel={(option) => option?.category}
          isOptionEqualToValue={(option, value) =>
            option?.category === value?.category
          }
          options={category}
          onChange={undefined}
        />
      </div>
      <div className="lg:w-1/5 md:w-1/5 w-2/3">
        <CustomDropdown
          label="Status"
          labelClassName="font-bold"
          id="status"
          placeholder="status"
          size="small"
          getOptionLabel={(option) => option?.status}
          isOptionEqualToValue={(option, value) =>
            option?.status === value?.status
          }
          options={status}
          onChange={undefined}
        />
      </div>
      <div className="lg:w-1/10">
        <Button
          variant="contained"
          size="large"
          className="bg-blue-500 text-white mt-6 rounded-md"
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default TopBar;
