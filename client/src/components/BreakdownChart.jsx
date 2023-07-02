import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { useGetSalesQuery } from "../state/api";

const BreakdownChart = ({ isDashboard = false }) => {
  const isNonMobile = useMediaQuery("(min-width: 768px)");

  const { data, isLoading } = useGetSalesQuery();
  const theme = useTheme();

  if (!data || isLoading) return "...Loading";

  const colors = [
    theme.palette.secondary[500],
    theme.palette.secondary[300],
    theme.palette.secondary[300],
    theme.palette.secondary[500],
  ];

  const formattedData = Object.entries(data.salesByCategory).map(
    ([category, sales], i) => ({
      id: category,
      label: category,
      value: sales,
      color: colors[i],
    })
  );
  return (
    <Box
      height={isDashboard ? "400px" : "100%"}
      // width={undefined}
      width={isNonMobile ? "100%" : "120%"}
      minHeight={isDashboard ? "325px" : undefined}
      position="relative"
    >
      <ResponsivePie
        data={formattedData}
        theme={{
          axis: {
            domain: {
              line: {
                stroke: theme.palette.secondary[200],
              },
            },
            legend: {
              text: {
                fill: theme.palette.secondary[200],
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.secondary[200],
                strokeWidth: 1,
              },
              text: {
                fill: theme.palette.secondary[200],
              },
            },
          },
          legends: {
            text: {
              fill: theme.palette.secondary[200],
            },
          },
          tooltip: {
            container: {
              color: theme.palette.primary.main,
            },
          },
        }}
        colors={{ datum: "data.color" }}
        margin={
          isDashboard
            ? { top: 40, right: 80, bottom: 100, left: 50 }
            : { top: 40, right: 80, bottom: 80, left: 80 }
        }
        sortByValue="true"
        innerRadius={0.45}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        enableArcLinkLabels={!isDashboard}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={theme.palette.secondary[200]}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        legends={[
          {
            anchor: "bottom",
            direction: isNonMobile ? "row" : "column",
            justify: false,
            translateX: isNonMobile ? (isDashboard ? 20 : 0) : -30,
            translateY: isNonMobile ? (isDashboard ? 50 : 56) : 65,
            itemsSpacing: 0,
            itemWidth: isNonMobile ? 85 : 187,
            itemHeight: isNonMobile ? 18 : 35,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: theme.palette.primary[500],
                },
              },
            ],
          },
        ]}
      />
      <Box>
        <Typography
          variant="h6"
          fontSize="1.3rem"
          color={theme.palette.secondary[200]}
        >
          {!isDashboard && `Total : $${data.yearlySalesTotal}`}
        </Typography>
      </Box>
    </Box>
  );
};

export default BreakdownChart;
