import ProductSummary from "@/components/productSummary";
import TopBar from "@/components/topBar";
import React from "react";

const index = () => {
  return (
    <div className="m-5">
      <TopBar />
      <ProductSummary/>
    </div>
  );
};

export default index;
