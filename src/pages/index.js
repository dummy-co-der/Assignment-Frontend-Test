import ProductSummary from "@/components/productSummary";
import TopBar from "@/components/topBar";
import { Button } from "@mui/material";
import React from "react";

const index = () => {
  return (
    <div className="m-5">
      <div className="flex justify-between items-center mb-5">
        <h1 className="font-bold text-2xl">Orders</h1>
        <Button
          variant="contained"
          size="small"
          className="bg-blue-500 text-white rounded-md text-xs"
        >
          CREATE NEW
        </Button>
      </div>
      <TopBar />
      <ProductSummary />
    </div>
  );
};

export default index;
