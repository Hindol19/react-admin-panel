import React, { useState } from "react";
import {
  Box,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  useMediaQuery,
} from "@mui/material";
import Header from "../../components/Header";
import OverviewChart from "../../components/OverviewChart";

const Overview = () => {
  const [view, setView] = useState("units");
  const isNonMobile = useMediaQuery("(min-width: 768px)");
  return (
    <Box m={isNonMobile ? "1.5rem 2.5rem" : "1.5rem 1rem"}>
      <Header
        title="OVERVIEW"
        subtitle="Overview of general revenue and profit"
      />
      <Box height="75vh">
        {/* Drop down menu to select view */}
        <FormControl sx={{ mt: "1rem" }}>
          <InputLabel>View</InputLabel>
          <Select
            value={view}
            label="view"
            onChange={(event) => setView(event.target.value)}
          >
            <MenuItem value="sales"> Sales</MenuItem>
            <MenuItem value="units"> Units</MenuItem>
          </Select>
        </FormControl>

        <OverviewChart view={view} />
      </Box>
    </Box>
  );
};

export default Overview;
