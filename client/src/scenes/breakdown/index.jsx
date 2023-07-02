import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import Header from "../../components/Header";
import BreakdownChart from "../../components/BreakdownChart";
const Breakdown = () => {
  const isNonMobile = useMediaQuery("(min-width: 768px)");
  return (
    <Box m={isNonMobile ? "1.5rem 2.5rem" : "1.5rem 1rem"}>
      <Header title="BREAKDOWN" subtitle="Breakdown Sales by Category" />
      <Box mt="40px" height="75vh">
        <BreakdownChart />
      </Box>
    </Box>
  );
};

export default Breakdown;
