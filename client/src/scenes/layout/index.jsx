import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { useGetUserQuery } from "../../state/api";

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const userId = useSelector((state) => {
    // console.log(state.global.userId);
    return state.global.userId;
  });
  const { data } = useGetUserQuery(userId);
  console.log("data:", data);

  return (
    <Box
      display={isNonMobile ? "flex" : "block"}
      // display="flex"
      width="100%"
      height="100%"
      // border="2px solid red"
    >
      <Sidebar
        user={data || {}}
        isNonMobile={isNonMobile}
        drawerWidth="300px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box flexGrow={1}>
        {/* flexGrow={1} will let the navbar items take as much space they can */}
        {/* Navbar is present on every page */}
        <Navbar
          user={data || {}}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        {/* Outlet is all other components underneath */}
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
