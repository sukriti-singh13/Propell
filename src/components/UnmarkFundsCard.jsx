import { Box, Card, Typography } from "@mui/material";
import React from "react";

const UnmarkFundsCard = () => {
  return (
    <Box sx={{ marginTop: "12px" }}>
      <Card
        sx={{
          display: "flex",
          columnGap: ".5rem",
          padding: "20px",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            background: "#F6F0FE",
            width: "24px",
            height: "24px",
            border: " 1px solid #C3D0FB",
            borderRadius: "4px",
          }}
        ></Box>
        <Box>
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "12px",
              lineHeight: "16px",

              color: "#1C1D21",
            }}
          >
            SBI Mutual Fund
          </Typography>
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "12px",
              lineHeight: "16px",
              color: "#8181A5",
            }}
          >
            Marked value ₹ 50000
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default UnmarkFundsCard;
