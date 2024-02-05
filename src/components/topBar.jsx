import React, { useMemo, useState } from "react";
import CustomDropdown from "@/utils/customDropdown";
import { category, status } from "@/data/dropdownOptions";
import { Button } from "@mui/material";
import SearchInput from "@/utils/searchInput";
import classNames from "@/utils/classNames";

const TopBar = () => {
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleStatusChange = (event, value) => {
    setSelectedStatus(value);
  };
  const handleCategoryChange = (event, value) => {
    setSelectedCategory(value);
  };

  const filteredCategoryOptions = useMemo(() => {
    return selectedCategory
      ? category.filter(
          (option) => option.category !== selectedCategory.category
        )
      : category;
  }, [selectedCategory]);

  const filteredStatusOptions = useMemo(() => {
    return selectedStatus
      ? status.filter((option) => option.status !== selectedStatus.status)
      : status;
  }, [selectedStatus]);

  return (
    <div className="lg:gap-8 md:gap-2 flex flex-wrap items-center justify-center flex-col md:flex-row bg-white p-5 px-0 md:px-2 rounded-3xl shadow-lg">
      <div className="lg:w-2/5">
        <SearchInput
          placeholder="Search for category, name, company, etc."
          label="What are you looking for?"
          labelClassName="font-bold"
          className={classNames("mt-1")}
        />
      </div>
      <div className="lg:w-1/5 md:w-1/5 w-2/3">
        <CustomDropdown
          position="top"
          label="Category"
          labelClassName="font-bold"
          id="category"
          placeholder={
            selectedCategory ? selectedCategory.category : "Select category"
          }
          size="small"
          getOptionLabel={(option) => option?.category}
          isOptionEqualToValue={(option, value) =>
            option?.category === value?.category
          }
          options={filteredCategoryOptions}
          onChange={handleCategoryChange}
        />
      </div>
      <div className="lg:w-1/5 md:w-1/5 w-2/3">
        <CustomDropdown
          position="top"
          label="Status"
          labelClassName="font-bold"
          id="status"
          placeholder={selectedStatus ? selectedStatus.status : "Select status"}
          size="small"
          getOptionLabel={(option) => option?.status}
          isOptionEqualToValue={(option, value) =>
            option?.status === value?.status
          }
          options={filteredStatusOptions}
          onChange={handleStatusChange}
        />
      </div>
      <div className="lg:w-1/10 mt-7">
        <Button
          variant="contained"
          size="small"
          className="bg-blue-500 text-white rounded-md text-xs"
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default TopBar;
