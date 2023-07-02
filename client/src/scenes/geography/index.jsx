import React from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import { useGetGeographyQuery } from "../../state/api";
import Header from "../../components/Header";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geoData } from "../../state/geoData.js";
const Geography = () => {
  const isNonMobile = useMediaQuery("(min-width: 768px)");
  const { data, isLoading } = useGetGeographyQuery();
  const theme = useTheme();
  console.log("GeoData =>", data);
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="GEOGRAPHY" subtitle="Find where your users are located." />
      <Box
        mt="40px"
        height={isNonMobile ? "75vh" : "50vh"}
        border={`1px solid ${theme.palette.secondary[200]}`}
        borderRadius="4px"
      >
        {data && !isLoading ? (
          <ResponsiveChoropleth
            data={data}
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
            features={geoData.features}
            margin={{ top: 0, right: 0, bottom: 0, left: -50 }}
            colors="nivo"
            domain={[0, 60]}
            unknownColor="#666666"
            label="properties.name"
            valueFormat=".2s"
            projectionScale={isNonMobile ? 150 : 55}
            projectionTranslation={isNonMobile ? [0.45, 0.6] : [0.65, 0.5]}
            projectionRotation={[0, 0, 0]}
            borderWidth={1.3}
            borderColor="white"
            legends={[
              {
                anchor: "bottom-right",
                direction: isNonMobile ? "column" : "row",
                justify: true,
                translateX: isNonMobile ? 0 : 40,
                translateY: isNonMobile ? -125 : -5,
                itemsSpacing: 0,
                itemWidth: isNonMobile ? 94 : 45,
                itemHeight: isNonMobile ? 18 : 26,
                itemDirection: isNonMobile ? "left-to-right" : "bottom-to-top",
                itemTextColor: theme.palette.secondary[200],
                itemOpacity: 1,
                symbolSize: isNonMobile ? 18 : 10,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: theme.palette.background.alt,
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
          />
        ) : (
          <Box
            width="100%"
            height="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="1.3rem"
            textAlign="center"
          >
            Loading may take time. Please have patience :)
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Geography;
