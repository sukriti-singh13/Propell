import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UnmarkFundsCards from "../components/UnmarkFundsCard.jsx";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import { Box, Typography, Button } from "@mui/material";
import Popup from "../components/Popup.jsx";
import Footer from "../components/Footer.jsx";
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
    <Box sx={{ padding: "24px 16px",position:"relative", minHeight:"100vh"}}>
      <Popup
        open={open}
        handleClose={handleClose}
        title="Are you sure you want to unmark these funds as collateral?"
        subtitle1="Your Credit line value will decrease"
        subtitle2="New Credit Line Value ₹ 23000"
      />
      <Box
        sx={{ "&:hover": { cursor: "pointer" } }}
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
      
      
      <Footer>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "1rem",
          }}
        >
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "14px",
              lineHeight: "16px",
              color: "#36383F",
            }}
          >
            New Credit Line Value
          </Typography>
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "14px",
              lineHeight: "16px",
              color: "#1C1D21",
            }}
          >
            ₹ 23000
          </Typography>
        </Box>
        <Button
          sx={{
            width: "310px",
            height: "48px",
            background: "#EF4F53",
            borderRadius: "150px",
            fontWeight: "700",
            fontSize: "16px",
            color: "#FFFFFF",
            margin:"1rem",
            textTransform:"none",
            "&:hover ":{
              background: "#EF4F53",
            }
          }}
          onClick={handleClickOpen}
        >
          Unmark funds
        </Button>
      </Footer>
    </Box>
  );
};

export default UnmarkFunds;
