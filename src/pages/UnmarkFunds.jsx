import React from "react";
import UnmarkFundsCards from "../components/UnmarkFundsCard.jsx";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import { Box, Typography } from "@mui/material";
const UnmarkFunds = () => {
  return (
    <Box className="umarkFunds" sx={{ padding: "24px 16px" }}>
      <Box>
        <ArrowBackIosNewOutlinedIcon sx={{ height: "12px" }} />
        Back
      </Box>
      <Typography
        sx={{ fontWeight: "600", fontSize: "24px", marginTop: "20px" }}
      >
        Unmark funds as collateral
      </Typography>
      <Typography sx={{ color: "#8181A5", marginTop: "8px", fontSize: "14px" }}>
        Select the funds you wish to unmark as collateral
      </Typography>
      <Typography
        sx={{
          color: "#8181A5",
          fontSize: "16px",
          fontWeight: "600",
          marginTop: "16px",
        }}
      >
        List of mututal funds-
      </Typography>
      <UnmarkFundsCards />
      <UnmarkFundsCards />
      <UnmarkFundsCards />
      <UnmarkFundsCards />
      <UnmarkFundsCards />
      <UnmarkFundsCards />
      <UnmarkFundsCards />
    </Box>
  );
};

export default UnmarkFunds;
