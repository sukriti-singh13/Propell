import React from "react";
import DashboardCard from "../components/DashboardCard";
import Footer from "../components/Footer";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { Box, Button, Card, Grid, Typography } from "@mui/material";
import { textTransform } from "@mui/system";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();
  return (
    
    <Box sx={{ minHeight: "100vh", position: "relative" }}>
      <div className="main_container dashboard_layout">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1>
            <span style={{ color: "#8181A5" }}>Welcome</span> Sukriti
          </h1>
          <NotificationsNoneOutlinedIcon
            sx={{ color: "#5516AA", width: "16px" }}
          />
        </Box>
        <Card
          sx={{
            margin: "18px 0px",
            height: "80px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            rowGap: "12px",
            padding: "13px",
          }}
        >
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "12px",
              lineHeight: "16px",

              color: "#696D7C",
            }}
          >
            Total portfolio value
          </Typography>
          <Typography
            sx={{ fontWeight: "600", fontSize: "24px", color: "#41C0D2" }}
          >
            ₹ 1500000.00
          </Typography>
        </Card>
        <Box
          sx={{
            height: "80px",
            background: "#FFFFFF",
            border: "1.5px solid #E9DCFA",
            borderRadius: "8px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "15px",
          }}
        >
          <Grid
            container
            rowGap={0.5}
            direction="column"
            sx={{ width: "max-content" }}
          >
            <Typography sx={{ color: "#696D7C", fontSize: "12px" }}>
              Loan to Value
            </Typography>
            <Typography
              sx={{
                color: "#5516AA",
                fontWeight: "600",
                fontSize: "24px",
              }}
            >
              Healthy!!
            </Typography>
          </Grid>
          <Button
          onClick={()=>navigate("/unmarkFunds")}
            sx={{
              padding: "8px 12px",
              background: "#E7F7F9",
              opacity: "0.8",
              borderRadius: "150px",
              fontWeight: "600",
              fontSize: "12px",
              color: "#41C0D2",
              textTransform: "none",
              marginLeft: "1rem",
            }}
          >
            Learn more
          </Button>
        </Box>
        <Button
         onClick={()=>navigate("/portfolio")}
          sx={{
            width: "100%",
            height: "48px",
            background: "#5516AA",
            borderRadius: "150px",
            color: "#fff",
            textTransform: "none ",
            marginTop: "16px",
          }}
        >
          Increase credit limit
        </Button>
        <DashboardCard />
      </div>
      <Footer />
    </Box>
  );
};

export default Dashboard;
