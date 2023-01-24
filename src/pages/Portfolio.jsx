import React from "react";
import { Box, Typography } from "@mui/material";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import PortfolioButton from "../components/PortfolioButton";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        padding: "24px 16px",
        minHeight: "100vh",
        "&:hover": { cursor: "pointer" },
      }}
    >
      <Box
        onClick={() => {
          navigate("/");
        }}
      >
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
      <PortfolioButton content="Fetch my Kfin portfolio" />
      <PortfolioButton content="Fetch my CAMS portfolio" />
    </Box>
  );
};

export default Portfolio;
