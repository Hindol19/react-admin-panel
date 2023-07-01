import React from "react";
import { Typography, Box, useTheme, useMediaQuery } from "@mui/material";

const Header = ({ title, subtitle }) => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const theme = useTheme();
  return (
    <Box>
      <Typography
        variant={isNonMobile ? "h2" : "h3"}
        color={theme.palette.secondary[100]}
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={theme.palette.secondary[300]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
