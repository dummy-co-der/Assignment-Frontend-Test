import ProductSummary from "@/components/productSummary";
import TopBar from "@/components/topBar";
import { Button, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";

const index = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center h-screen items-center">
          <CircularProgress />
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default index;
