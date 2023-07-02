import React from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import { useGetAdminsQuery } from "../../state/api";
import Header from "../../components/Header";
import { DataGrid } from "@mui/x-data-grid";

const Admin = () => {
  const isNonMobile = useMediaQuery("(min-width: 768px)");
  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 0.5,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      flex: 0.5,
      //   renderCell changes the visual format of the ph number
      renderCell: (params) => {
        return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
      },
    },
    {
      field: "country",
      headerName: "Country",
      flex: 0.4,
    },
    {
      field: "occupation",
      headerName: "Occupation",
      flex: 1,
    },
  ];
  const { data, isLoading } = useGetAdminsQuery();
  const theme = useTheme();
  return (
    <Box m={isNonMobile ? "1.5rem 2.5rem" : "1.5rem 1rem"}>
      <Header title="ADMINS" subtitle="Managing Admins and List of Admins" />
      {!isLoading ? (
        <Box
          mt="40px"
          height="70vh"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: theme.palette.background.alt,
              color: theme.palette.secondary[100],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: theme.palette.background.main,
              border: "none",
            },
            "& .MuiDataGrid-footerContainer": {
              backgroundColor: theme.palette.background.alt,
              color: theme.palette.secondary[100],
              borderTop: "none",
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${theme.palette.secondary[200]} !important`,
            },
          }}
        >
          <DataGrid
            loading={isLoading || !data}
            getRowId={(row) => row._id}
            rows={data || []}
            //   columns should have an array of objects
            columns={columns}
          />
        </Box>
      ) : (
        <Box
          width="100%"
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize={isNonMobile ? "1.3rem" : "0.8rem"}
          textAlign="center"
        >
          Loading may take time. Please have patience :)
        </Box>
      )}
    </Box>
  );
};

export default Admin;
