import React from "react";
import { Box, Card, Checkbox, Typography } from "@mui/material";

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
        <Box>
          <Checkbox
            sx={{
              width: "24px",
              height: "24px",
              color: "#C3D0FB",
              "&.Mui-checked": {
                color: "#5516AA",
              },
            }}
          />
        </Box>

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
