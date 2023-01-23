import React from "react";
import PortfolioImg from "../assets/portfolioImg.svg";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Typography } from "@mui/material";

const Popup = ({ open, handleClose, title, subtitle1, subtitle2 }) => {
  return (
    <Box className="popup">
      <Dialog open={open} onClose={handleClose} sx={{ padding: "16px" }}>
        <DialogTitle
          sx={{
            fontWeight: "600",
            fontSize: "24px",
            lineHeight: "24px",
            textAlign: "center",
            color: "#1C1D21",
          }}
        >
          {title}
        </DialogTitle>
        <Box sx={{ display: "grid", placeContent: "center" }}>
          <img
            src={PortfolioImg}
            alt="poertfolio icon"
            width="187px"
            height="254.88px"
          />
        </Box>
        <DialogContent sx={{ display: "grid", placeContent: "center" }}>
          <DialogContentText>
            <Typography
              sx={{
                color: "#8181A5",
                fontWeight: "400",
                fontSize: "14px",
                textAlign: "center",
              }}
            >
              {subtitle1}
            </Typography>
            <Typography
              sx={{
                color: "#040919",
                fontWeight: "400",
                fontSize: "14px",
                textAlign: "center",
              }}
            >
              {subtitle2}
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{ display: "flex", justifyContent: "center", columnGap: "16px" }}
        >
          <Button
            sx={{
              width: "155px",
              height: "48px",
              fontWeight: "700",
              fontSize: "16px",
              lineHeight: "16px",
              color: "#5516AA",
              backgroundColor: "#E9DCFA",
              borderRadius: "150px",
            }}
            onClick={handleClose}
          >
            Go back
          </Button>
          <Button
            sx={{
              width: "155px",
              height: "48px",
              fontWeight: "700",
              fontSize: "16px",
              lineHeight: "16px",
              color: "#ffffff",
              backgroundColor: "#EF4F53",
              borderRadius: "150px",
            }}
            onClick={handleClose}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Popup;
