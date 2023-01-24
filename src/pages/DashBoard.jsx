import React, { useEffect, useState } from "react";
import DashboardCard from "../components/DashboardCard";
import Footer from "../components/Footer";
import portfolioValue from "../assets/portfolioValue.svg";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { Box, Button, Card, Grid, Typography, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { styled } from "@mui/system";
import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();
  let [dashboardCardData, setDashboardCardData] = useState([]);
  let [totalPortfolioValue, setTotalPortfolioValue] = useState(0);

  useEffect(() => {
    axios
      .get("https://mocki.io/v1/61a36370-212d-4ac7-baf6-355a14262cb7")
      .then((response) => {
        if (response.status === 200) {
          setDashboardCardData(response.data.portfolio);
          response.data.portfolio.forEach((data) => {
            setTotalPortfolioValue(totalPortfolioValue + data.current_value);
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const MyStyledComponent = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    rowGap: "6px",
    color: "#898989",
    fontWeight: "400",
    fontSize: "12px",
    "&:hover": { cursor: "pointer", color: "#5516AA;" },
  });
  const H1Styled = styled("h1")({
    marginTop: "22px",
    fontWeight: "700",
    fontSize: "14px",
    lineHeight: "16px",
  });
  return (
    <Box sx={{ minHeight: "100vh", position: "relative" }}>
      <div className="main_container" sx={{ minHeight: "100vh" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <H1Styled>
            <span style={{ color: "#8181A5" }}>Welcome</span> Sukriti
          </H1Styled>
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
            backgroundImage: `url(${portfolioValue})`,
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
            $ {totalPortfolioValue.toFixed(2)}
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
            onClick={() => navigate("/unmarkFunds")}
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
              "&:hover ": {
                background: "#E7F7F9",
              },
            }}
          >
            Learn more
          </Button>
        </Box>
        <Button
          onClick={() => navigate("/portfolio")}
          sx={{
            width: "100%",
            height: "48px",
            background: "#5516AA",
            borderRadius: "150px",
            color: "#fff",
            textTransform: "none ",
            marginTop: "16px",
            "&:hover ": {
              background: "#5516AA",
            },
          }}
        >
          Increase credit limit
        </Button>
        <DashboardCard dashboardCardData={dashboardCardData} />
      </div>
      <Footer>
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          sx={{ padding: "0px 30px", height: "76px", marginTop: "1rem" }}
        >
          <MyStyledComponent>
            <HomeOutlinedIcon />
            Home
          </MyStyledComponent>
          <MyStyledComponent>
            <PieChartOutlineOutlinedIcon />
            Portfolio
          </MyStyledComponent>
          <MyStyledComponent>
            <AccountCircleOutlinedIcon />
            Profile
          </MyStyledComponent>
        </Stack>
      </Footer>
    </Box>
  );
};

export default Dashboard;
