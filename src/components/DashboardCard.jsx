import { Box, Chip, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const DashboardCard = () => {
  const navigate = useNavigate();
  return (
    <div className="dashboard_card">
      <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"20px 0px"}}>
        <Typography sx={{color:"#8181A5",fontWeight:"600",fontSize:"12px"}}>Marked mutual funds</Typography>
        <Box  sx={{color:"#EF4F53",
backgroundColor: "#FDE9EA",
opacity: "0.8",
borderRadius: "150px",fontSize:"12px",padding:"8px 12px"}}>Unmark funds</Box>
      </Box>
      <Box>
        <Box sx={{background: "#FFFFFF",
border: "1.5px solid #E9DCFA",
borderRadius: "8px",padding:"12px 9px"}}>
          <h5>ICICI Small Cap- Direct Plan</h5>
          <Box className="ICICI_card_content">
            <p>Current Value</p>
            <p style={{color: "#41C0D2",fontSize:"12px"}}>$450</p>
            <p>Units</p>
            <p>54</p>
          </Box>
          <Box className="ICICI_card_content">
            <p>Folio Number</p>
            <p style={{color: "#5516AA",fontSize:"12px"}}>1818</p>
            <p>Nav</p>
            <p style={{color: "#5516AA"}}>xxx</p>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default DashboardCard;
