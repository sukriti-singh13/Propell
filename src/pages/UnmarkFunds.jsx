import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import UnmarkFundsCards from "../components/UnmarkFundsCard.jsx";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import { Box, Typography,Button } from "@mui/material";
import Popup from "../components/Popup.jsx";
const UnmarkFunds = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box className="umarkFunds" sx={{ padding: "24px 16px" }}>
      <Popup open={open} handleClose={handleClose} title="Are you sure you want to unmark these funds as collateral?" subtitle1="Your Credit line value will decrease" 
subtitle2="New Credit Line Value ₹ 23000"/>
      <Box sx={{  "&:hover":{cursor:"pointer"}}} onClick={()=>{navigate("/")}}>
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
      <Button onClick={handleClickOpen}>Unmark funds</Button>
    </Box>
  );
};

export default UnmarkFunds;
