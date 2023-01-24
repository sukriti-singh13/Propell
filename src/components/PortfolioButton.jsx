import React from "react";
import { Box, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const PortfolioButton = ({ content }) => {
  return (
    <Box
      sx={{
        height: "56px",
        background: "#F6F0FE",
        borderRadius: "150px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        marginTop: "20px",
      }}
    >
      <Typography
        sx={{
          fontWeight: "700",
          fontSize: "16px",
          lineHeight: "16px",
          color: "#5516AA",
        }}
      >
        {content}
      </Typography>
      <Box
        sx={{
          background: "#FFFFFF",
          width: "24px",
          height: "24px",
          borderRadius: "100px",
          display: "grid",
          placeContent: "ceneter",
        }}
      >
        <NavigateNextIcon sx={{ height: "25px", color: "#BC91F6" }} />
      </Box>
    </Box>
  );
};

export default PortfolioButton;
