import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const DashboardCard = ({ dashboardCardData }) => {
  const StyledPara = styled("p")({
    marginBottom: "0",
    color: "#8181a5",
    fontWeight: "500",
    fontSize: "10px",
    lineHeight: "24px",
  });
  return (
    <div className="dashboard_card">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "20px 0px",
        }}
      >
        <Typography
          sx={{ color: "#8181A5", fontWeight: "600", fontSize: "12px" }}
        >
          Marked mutual funds
        </Typography>
        <Box
          sx={{
            color: "#EF4F53",
            backgroundColor: "#FDE9EA",
            opacity: "0.8",
            borderRadius: "150px",
            fontSize: "12px",
            padding: "8px 12px",
          }}
        >
          Unmark funds
        </Box>
      </Box>
      <Box
        sx={{
          marginBottom: "100px",
          overflowY: "scroll",
          maxHeight: "calc(100vh - 500px); ",
        }}
      >
        {dashboardCardData &&
          dashboardCardData.length > 0 &&
          dashboardCardData.map((element) => (
            <Box
              key={element.folio_number}
              sx={{
                background: "#FFFFFF",
                border: "1.5px solid #E9DCFA",
                borderRadius: "8px",
                padding: "12px 9px",
                marginTop: "12px",
              }}
            >
              <h5>{element.scheme_name}</h5>
              <Box
                sx={{
                  marginTop: ".5rem",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <StyledPara>Current Value</StyledPara>
                <StyledPara
                  style={{ color: "#41C0D2", fontSize: "12StyledParax" }}
                >
                  ${Math.round(element.current_value)}
                </StyledPara>
                <StyledPara>Units</StyledPara>
                <StyledPara>{element.units}</StyledPara>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <StyledPara>Folio Number</StyledPara>
                <StyledPara style={{ color: "#5516AA", fontSize: "12px" }}>
                  {element.folio_number}
                </StyledPara>
                <StyledPara>Nav</StyledPara>
                <StyledPara style={{ color: "#5516AA" }}>xxx</StyledPara>
              </Box>
            </Box>
          ))}
      </Box>
    </div>
  );
};

export default DashboardCard;
